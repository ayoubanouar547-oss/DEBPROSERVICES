import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { Resend } from 'resend';

const schema = z.object({
  nom: z.string().min(2).max(100).trim(),
  telephone: z.string().min(8).max(15), 
  email: z.string().email().optional().or(z.literal('')),
  service: z.string(),
  ville: z.string().min(2).max(100),
  message: z.string().min(10).max(1000).trim(),
  honeypot: z.string().max(0).optional()
});

let ratelimit: Ratelimit | null = null;
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, '1 m')
  });
}

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1';
    
    if (ratelimit) {
      const { success } = await ratelimit.limit(ip);
      if (!success) {
        return NextResponse.json({ error: 'Trop de requêtes' }, { status: 429 });
      }
    }

    const body = await req.json();
    const data = schema.parse(body);

    if (data.honeypot && data.honeypot.length > 0) {
      // It's a bot
      return NextResponse.json({ success: true }); // Fake success for bots
    }

    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Contact Site <onboarding@resend.dev>', // Should be a verified domain in prod
        to: 'contact@debproservices.be', // Replace with real company email
        subject: `Nouvelle demande - ${data.service.toUpperCase()} - ${data.ville}`,
        html: `
          <h3>Nouvelle demande d'intervention</h3>
          <p><strong>Nom:</strong> ${data.nom}</p>
          <p><strong>Téléphone:</strong> ${data.telephone}</p>
          <p><strong>Email:</strong> ${data.email || 'Non fourni'}</p>
          <p><strong>Service:</strong> ${data.service}</p>
          <p><strong>Ville:</strong> ${data.ville}</p>
          <p><strong>Message:</strong><br/>${data.message.replace(/\n/g, '<br/>')}</p>
        `
      });
    } else {
        // Fallback or demo mode logging
        console.log("No Resend API Key. Payload received:", data);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Données invalides', details: err.issues }, { status: 400 });
    }
    console.error(err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
