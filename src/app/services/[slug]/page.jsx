import { servicesData } from "./services-data";
import ServiceDetailClient from "./ServiceDetailClient";

const SITE_URL = "https://brandingguide.in";

// Pre-render every known service slug at build time.
export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

// Dynamic SEO metadata per service — this is what a "use client" page can
// never give you, so this file stays a server component and only hands the
// interactive UI off to the client component below.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return { title: "Service Not Found | Branding Guide" };
  }

  const url = `${SITE_URL}/services/${slug}`;
  const title = `${service.metaTitle} | Branding Guide`;

  return {
    title,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: service.metaDescription,
      url,
      siteName: "Branding Guide",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  const jsonLd = service
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: service.title,
        name: service.metaTitle,
        description: service.metaDescription,
        provider: {
          "@type": "LocalBusiness",
          name: "Branding Guide",
          areaServed: "Ajmer, Rajasthan, India",
          url: SITE_URL,
        },
        areaServed: {
          "@type": "State",
          name: "Rajasthan",
        },
        mainEntityOfPage: `${SITE_URL}/services/${slug}`,
      }
    : null;

  const faqJsonLd = service
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <ServiceDetailClient slug={slug} />
    </>
  );
}