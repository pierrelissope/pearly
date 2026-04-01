"use client";

import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import DiseaseSection from "./DiseaseSection";
import EmailSignup from "./EmailSignup";
import SimpleGesture from "./SimpleGesture";
import EmailModal from "./EmailModal";

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const openModal = () => {
    setShowSuccess(false);
    setModalOpen(true);
  };

  const handleInlineSuccess = () => {
    setShowSuccess(true);
    setModalOpen(true);
  };

  return (
    <>
      <Header />
      <main className="relative z-1">
        <Hero onCtaClick={openModal} />
        <DiseaseSection />
        <EmailSignup onCtaClick={openModal} onSubmitSuccess={handleInlineSuccess} />
        <SimpleGesture onCtaClick={openModal} />
      </main>
      <EmailModal open={modalOpen} onClose={() => setModalOpen(false)} showSuccess={showSuccess} />
    </>
  );
}
