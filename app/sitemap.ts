import { MetadataRoute } from 'next'
import { belgianCities } from '@/lib/data/cities'
import { services } from '@/lib/data/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://debproservices.be';

  const defaultPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/zones-de-services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Mentions-Legales`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    }
  ];

  const servicePages: MetadataRoute.Sitemap = [];
  const subServicePages: MetadataRoute.Sitemap = [];
  const zonePages: MetadataRoute.Sitemap = [];

  services.forEach(service => {
    servicePages.push({
      url: `${baseUrl}/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // SubServices
    service.subServices.forEach(sub => {
       subServicePages.push({
         url: `${baseUrl}/${service.slug}/${sub.slug}`,
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 0.8,
       });
    });

    // Cities and SubService + City combinations
    belgianCities.forEach(city => {
       // 2-level: service + city
       zonePages.push({
         url: `${baseUrl}/zones-de-services/${service.slug}/${city.slug}`,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.7,
       });

       // 3-level: service + subservice + city
       service.subServices.forEach(sub => {
         zonePages.push({
           url: `${baseUrl}/zones-de-services/${service.slug}/${sub.slug}/${city.slug}`,
           lastModified: new Date(),
           changeFrequency: 'monthly',
           priority: 0.6,
         });
       });
    });
  });

  return [...defaultPages, ...servicePages, ...subServicePages, ...zonePages];
}
