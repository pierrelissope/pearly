import Image from "next/image";
import { locale } from "@/lib/locale";

export default function DiseaseSection() {
  return (
    <section className="w-full px-6 md:px-12 py-12 md:py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
          <span className="text-coral">{locale.diseases.titleHighlight}</span>
          <br />
          <span className="text-brown">{locale.diseases.titleRest}</span>
        </h2>
        <p
          className="text-sm md:text-base text-body-light max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: locale.diseases.description }}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-4">
          {locale.diseases.cards.map((card) => (
            <div key={card.key} className="flex flex-col items-center gap-3">
              <Image
                src={card.icon}
                alt={card.label}
                width={78}
                height={78}
                className="w-16 h-16 md:w-20 md:h-20"
              />
              <span className="text-sm font-bold text-brown text-center">{card.label}</span>
            </div>
          ))}
        </div>
        <p
          className="text-sm md:text-base text-body-light"
          dangerouslySetInnerHTML={{ __html: locale.diseases.costWarning }}
        />
        <p
          className="text-sm md:text-base text-body"
          dangerouslySetInnerHTML={{ __html: locale.diseases.urgency }}
        />
      </div>
    </section>
  );
}
