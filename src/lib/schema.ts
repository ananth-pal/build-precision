// Shared Schema.org structured data for search engines.
export const SITE_URL = "https://pentagonmachines.in";
export const ORG_ID = `${SITE_URL}/#organization`;

const address = {
  "@type": "PostalAddress",
  streetAddress: "Sidco Plot 12, Ambattur Industrial Estate",
  addressLocality: "Chennai",
  addressRegion: "Tamil Nadu",
  postalCode: "600098",
  addressCountry: "IN",
};

const contactPoint = {
  "@type": "ContactPoint",
  contactType: "sales",
  telephone: "+91-86374-81952",
  email: "enquiries@sellvindsgroup.com",
  areaServed: "Worldwide",
  availableLanguage: ["English", "Tamil"],
};

const provider = { "@id": ORG_ID };

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Pentagon Machines and Services Pvt. Ltd.",
  alternateName: ["Pentagon Machines", "Pentagon Machines & Services"],
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description:
    "Precision contract manufacturer in Chennai, India: CNC machining, gear cutting and cleanroom hydraulic assembly for global OEMs.",
  foundingDate: "1979",
  address,
  email: "enquiries@sellvindsgroup.com",
  telephone: "+91-86374-81952",
  contactPoint,
  parentOrganization: { "@type": "Organization", name: "Sellvinds Group" },
  knowsAbout: [
    "Precision CNC machining",
    "Gear cutting",
    "Gear grinding",
    "Hydraulic assembly",
    "Power take-off (PTO) gearboxes",
    "Hydraulic spool valves",
    "Gear pumps",
    "Contract manufacturing",
  ],
  naics: "332710",
  isicV4: "2592",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Pentagon Machines and Services Pvt. Ltd.",
  parentOrganization: provider,
  url: SITE_URL,
  image: `${SITE_URL}/favicon.png`,
  email: "enquiries@sellvindsgroup.com",
  telephone: "+91-86374-81952",
  priceRange: "$$$",
  address,
  areaServed: "Worldwide",
  contactPoint,
};

export const services = [
  {
    name: "Precision CNC Machining",
    serviceType: "Contract precision machining",
    path: "/capabilities/machining",
    description:
      "CNC machining of housings, shafts and valve bodies in steel, cast iron, ductile iron and non-ferrous alloys, with in-house fixtures, gauges and DFM support.",
  },
  {
    name: "Hydraulic & Electromechanical Assembly",
    serviceType: "Contract hydraulic assembly and testing",
    path: "/capabilities/assembly",
    description:
      "Cleanroom assembly of PTO gearboxes, hydraulic spool valves and gear pumps up to 30 kg, functionally tested and serialised for full traceability.",
  },
  {
    name: "Gear Cutting & Grinding",
    serviceType: "Precision gear manufacturing",
    path: "/capabilities/gear-cutting",
    description:
      "Spur and helical gears, splined shafts and transmission components produced by CNC hobbing, shaping, shaving, broaching and grinding, with in-house profile and lead testing.",
  },
];

export const serviceSchema = (s: (typeof services)[number]) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${s.path}#service`,
  name: s.name,
  serviceType: s.serviceType,
  description: s.description,
  url: `${SITE_URL}${s.path}`,
  provider,
  areaServed: "Worldwide",
  audience: { "@type": "BusinessAudience", audienceType: "OEM manufacturers" },
});

export const servicesCatalog = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Precision manufacturing services",
  itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: serviceSchema(s) })),
};
