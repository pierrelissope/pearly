import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { locale } from "@/lib/locale";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pearly.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: locale.meta.title,
    template: "%s | Pearly",
  },
  description: locale.meta.description,
  keywords: [
    "assurance animaux",
    "assurance chien",
    "assurance chat",
    "maladies graves animaux",
    "assurance vétérinaire",
    "mutuelle animaux",
    "cancer chien",
    "maladie cardiaque chat",
    "insuffisance rénale animal",
  ],
  authors: [{ name: "Pearly" }],
  creator: "Pearly",
  publisher: "Pearly",
  icons: {
    icon: "/img/logo.png",
    apple: "/img/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Pearly",
    title: locale.meta.title,
    description: locale.meta.description,
    images: [
      {
        url: "/img/logo.png",
        width: 512,
        height: 512,
        alt: "Pearly - Assurance maladies graves chiens et chats",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: locale.meta.title,
    description: locale.meta.description,
    images: ["/img/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${nunito.variable} antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
