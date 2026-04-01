import Image from "next/image";
import LandingPage from "@/components/LandingPage";
import { locale } from "@/lib/locale";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pearly.fr";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Pearly",
      url: siteUrl,
      logo: `${siteUrl}/img/logo.png`,
      description: locale.meta.description,
      sameAs: [],
    },
    {
      "@type": "WebSite",
      name: "Pearly",
      url: siteUrl,
      description: locale.meta.description,
      inLanguage: "fr-FR",
    },
    {
      "@type": "WebPage",
      name: locale.meta.title,
      description: locale.meta.description,
      url: siteUrl,
      isPartOf: { "@type": "WebSite", url: siteUrl },
      about: {
        "@type": "InsuranceAgency",
        name: "Pearly",
        description: locale.hero.subtitle,
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Image
        src="/img/fleur1.png"
        alt=""
        width={300}
        height={600}
        className="absolute top-0 right-0 hidden md:block md:w-44 lg:w-72 pointer-events-none"
        aria-hidden="true"
      />
      <Image
        src="/img/fleur2.png"
        alt=""
        width={250}
        height={400}
        className="absolute bottom-[15%] left-0 hidden md:block md:w-36 lg:w-60 pointer-events-none"
        aria-hidden="true"
      />
      <Image
        src="/img/fleur3.png"
        alt=""
        width={250}
        height={400}
        className="absolute bottom-0 right-0 hidden md:block md:w-36 lg:w-60 pointer-events-none"
        aria-hidden="true"
      />
      <LandingPage />
    </div>
  );
}
