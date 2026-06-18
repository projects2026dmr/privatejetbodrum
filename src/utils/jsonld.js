import { routeMap } from "./routeMap";

export function generateJsonLd(path) {
  const r = routeMap[path];
  if (!r) return null;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${r.fromCity} to ${r.toCity} Private Jet Route`,
    "url": `https://privatejetbodrum.com${path}`,
    "description": `Private jet flight from ${r.fromCity} to ${r.toCity}. Flight time ${r.flightTime}, distance ${r.distance}.`,

    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://privatejetbodrum.com/" },
        { "@type": "ListItem", "position": 2, "name": "Routes", "item": "https://privatejetbodrum.com/routes" },
        { "@type": "ListItem", "position": 3, "name": `${r.fromCity} to ${r.toCity}` }
      ]
    },

    "mainEntity": {
      "@type": "Flight",
      "name": `Private Jet Flight from ${r.fromCity} to ${r.toCity}`,
      "flightNumber": `PJB-${r.fromAirport.iata}-${r.toAirport.iata}`,
      "flightDistance": r.distance,
      "flightDuration": r.flightDurationISO,

      "departureAirport": {
        "@type": "Airport",
        "name": r.fromAirport.name,
        "iataCode": r.fromAirport.iata,
        "address": r.fromAirport.country
      },

      "arrivalAirport": {
        "@type": "Airport",
        "name": r.toAirport.name,
        "iataCode": r.toAirport.iata,
        "address": r.toAirport.country
      },

      "provider": {
        "@type": "Organization",
        "name": "Private Jet Bodrum",
        "url": "https://privatejetbodrum.com"
      }
    }
  };
}
