import { services } from './lib/data/services';
import { belgianCities } from './lib/data/cities';
let subs = 0;
services.forEach(s => subs += s.subServices.length);
console.log("Services:", services.length);
console.log("Subservices:", subs);
console.log("Cities:", belgianCities.length);
