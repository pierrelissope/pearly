import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DiseaseSection from "@/components/DiseaseSection";
import EmailSignup from "@/components/EmailSignup";
import SimpleGesture from "@/components/SimpleGesture";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
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
      <Header />
      <main className="relative z-1">
        <Hero />
        <DiseaseSection />
        <EmailSignup />
        <SimpleGesture />
      </main>
    </div>
  );
}
