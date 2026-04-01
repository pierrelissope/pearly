import Image from "next/image";
import Button from "./Button";
import { locale } from "@/lib/locale";

export default function SimpleGesture() {
  return (
    <section className="w-full px-6 md:px-12 py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center leading-tight">
          <span className="text-coral">{locale.simpleGesture.titleHighlight}</span>
          <br />
          <span className="text-brown">{locale.simpleGesture.titleRest}</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 order-2 md:order-1">
            <Image
              src="/img/img-chien.svg"
              alt="Person hugging their dog"
              width={300}
              height={290}
              className="w-48 md:w-64 lg:w-72"
            />
          </div>
          <div className="space-y-6 text-center md:text-left order-1 md:order-2">
            <p className="text-sm md:text-base text-body-light">
              {locale.simpleGesture.description}
            </p>
            <div className="space-y-3">
              <Button>{locale.simpleGesture.cta}</Button>
              <p className="text-xs md:text-sm font-bold text-brown">
                {locale.simpleGesture.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
