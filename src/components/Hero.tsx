import Image from "next/image";
import Button from "./Button";
import { locale } from "@/lib/locale";

export default function Hero() {
  return (
    <section className="w-full px-6 md:px-12 py-8 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:basis-1/2 md:min-w-0 space-y-[clamp(0.75rem,1.5vw,1.5rem)]">
          <h1 className="font-extrabold leading-tight text-[clamp(1.25rem,3.5vw,3rem)] whitespace-nowrap">
            <span className="text-coral">{locale.hero.titleLine1}</span>
            <br />
            <span className="text-brown">{locale.hero.titleLine2}</span>
            <br />
            <span className="text-coral">{locale.hero.titleLine3}</span>
          </h1>
          <p className="font-bold text-brown text-[clamp(0.75rem,1.2vw,1rem)]">
            {locale.hero.subtitle}
          </p>
          <p className="text-body-light text-[clamp(0.75rem,1.2vw,1rem)]">
            {locale.hero.description}
          </p>
          <div className="space-y-3">
            <Button>{locale.hero.cta}</Button>
            <p className="text-xs md:text-sm font-bold text-brown">
              {locale.hero.disclaimer}
            </p>
          </div>
        </div>
        <div className="md:basis-1/2 md:min-w-0 flex justify-center md:justify-end">
          <Image
            src="/img/img-hero-chat.svg"
            alt="Person with their pet"
            width={500}
            height={350}
            priority
            className="w-full max-w-xs md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
