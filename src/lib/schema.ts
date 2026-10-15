import { STORE_LOCATION } from "@/data/locations";
import { SOCIAL_LINKS } from "@/data/socials";
import { SITE_CONFIG } from "./constants";
import { Product } from "@/types";

/**
 * LocalBusiness / HealthFoodStore Schema
 * Focused on verified local information:
 * Pembroke Pines, Pines Boulevard corridor, local nutrition, protein shakes,
 * energy teas, healthy snacks, açaí, and wellness.
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HealthFoodStore", "LocalBusiness"],
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    image: `${SITE_CONFIG.url}/assets/images/hero_shakes_teas.jpg`,
    logo: `${SITE_CONFIG.url}/icon`,
    description:
      "Premier local nutrition club and wellness bar on the Pines Boulevard corridor in Pembroke Pines, Florida. Specializing in 24g+ protein shakes, clean energy mega teas, fresh açaí superfood bowls, and healthy snacks.",
    url: SITE_CONFIG.url,
    telephone: STORE_LOCATION.phone,
    email: STORE_LOCATION.email,
    priceRange: "$$",
    servesCuisine: [
      "Local Nutrition",
      "Protein Shakes",
      "Energy Teas",
      "Healthy Snacks",
      "Açaí Bowls",
      "Wellness Nutrition",
    ],
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Apple Pay, Google Pay",
    keywords: [
      "Pembroke Pines",
      "Pines Boulevard",
      "local nutrition",
      "protein shakes",
      "energy teas",
      "healthy snacks",
      "açaí",
      "wellness",
      "nutrition club Pembroke Pines",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Pembroke Pines",
      },
      {
        "@type": "Place",
        name: "Pines Boulevard Corridor",
      },
      {
        "@type": "City",
        name: "Miramar",
      },
      {
        "@type": "City",
        name: "Weston",
      },
      {
        "@type": "City",
        name: "Cooper City",
      },
      {
        "@type": "AdministrativeArea",
        name: "Broward County, FL",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: STORE_LOCATION.streetAddress,
      addressLocality: STORE_LOCATION.city,
      addressRegion: STORE_LOCATION.state,
      postalCode: STORE_LOCATION.postalCode,
      addressCountry: STORE_LOCATION.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.0123,
      longitude: -80.3421,
    },
    hasMap: STORE_LOCATION.googleMapsDirectionsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "07:30",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:30",
        closes: "13:30",
      },
    ],
    sameAs: SOCIAL_LINKS.map((s) => s.url).filter((url) => !url.includes("[placeholder")),
    parentOrganization: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
  };
}

/**
 * Organization Schema
 * Represents the brand entity, mission, and social authority.
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/icon`,
    image: `${SITE_CONFIG.url}/assets/images/hero_shakes_teas.jpg`,
    description:
      "Smart Snack Nutrition is a community-driven local nutrition and wellness brand based in Pembroke Pines, FL, committed to clean energy teas, 24g+ protein shakes, açaí bowls, and healthy snacks.",
    email: STORE_LOCATION.email,
    sameAs: SOCIAL_LINKS.map((s) => s.url).filter((url) => !url.includes("[placeholder")),
    knowsAbout: [
      "Local Nutrition",
      "Protein Shakes",
      "Clean Energy Teas",
      "Healthy Snacks",
      "Açaí Bowls",
      "Everyday Wellness",
      "Pines Boulevard Community Health",
    ],
    areaServed: {
      "@type": "City",
      name: "Pembroke Pines, FL",
    },
  };
}

/**
 * WebSite Schema
 * Represents the digital property, site name, and navigation action.
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    name: "Smart Snack Nutrition",
    url: SITE_CONFIG.url,
    description:
      "Official website of Smart Snack Nutrition in Pembroke Pines, Florida. Explore local nutrition, protein shakes, mega energy teas, açaí bowls, and healthy snacks near Pines Boulevard.",
    inLanguage: "en-US",
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    about: {
      "@id": `${SITE_CONFIG.url}/#localbusiness`,
    },
  };
}

/**
 * BreadcrumbList Schema
 * Used for Google rich snippet breadcrumb trails.
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

/**
 * Menu Schema
 * Used on the full menu page.
 */
export function generateMenuSchema(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${SITE_CONFIG.url}/menu#menu`,
    name: "Smart Snack Nutrition Menu — Pembroke Pines, FL",
    description:
      "Complete local nutrition menu featuring 24g+ protein shakes, clean energy mega teas, fresh açaí bowls, and healthy snacks near Pines Boulevard.",
    inLanguage: "en-US",
    hasMenuItem: products.map((product) => ({
      "@type": "MenuItem",
      name: product.name,
      description: product.shortDescription,
      nutrition: {
        "@type": "NutritionInformation",
        proteinContent: product.proteinAmount || "24g",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "10.00",
        priceValidUntil: "2027-12-31",
      },
    })),
  };
}

/**
 * Product Collection Schema
 * Injected on category landing pages.
 */
export function generateProductCollectionSchema(
  categoryName: string,
  description: string,
  products: Product[],
  path: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_CONFIG.url}${path}#collection`,
    name: `${categoryName} in Pembroke Pines, FL | Smart Snack Nutrition`,
    description,
    url: `${SITE_CONFIG.url}${path}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: product.image
            ? `${SITE_CONFIG.url}${product.image}`
            : `${SITE_CONFIG.url}/assets/images/hero_shakes_teas.jpg`,
          category: product.categoryLabel,
          brand: {
            "@type": "Brand",
            name: SITE_CONFIG.name,
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: "10.00",
            availability: "https://schema.org/InStock",
            priceValidUntil: "2027-12-31",
            seller: {
              "@type": "HealthFoodStore",
              name: SITE_CONFIG.name,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pembroke Pines",
                addressRegion: "FL",
              },
            },
          },
        },
      })),
    },
  };
}

/**
 * FAQ Schema
 * Injected on pages with frequently asked questions.
 */
export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
