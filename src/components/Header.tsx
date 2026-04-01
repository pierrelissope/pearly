import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <Image
          src="/img/logo.png"
          alt="Pearly"
          width={60}
          height={60}
          priority
        />
      </div>
    </header>
  );
}
