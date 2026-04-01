"use client";

import { useState } from "react";
import Button from "./Button";
import { locale } from "@/lib/locale";
import { useSubscribe } from "@/lib/use-subscribe";

interface EmailSignupProps {
  onCtaClick: () => void;
  onSubmitSuccess: () => void;
}

export default function EmailSignup({ onCtaClick, onSubmitSuccess }: EmailSignupProps) {
  const [email, setEmail] = useState("");
  const { status, errorMessage, submit } = useSubscribe();

  const handleClick = async () => {
    if (!email.trim()) {
      onCtaClick();
      return;
    }

    await submit(email);
    setEmail("");
    onSubmitSuccess();
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4 px-6 py-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={locale.emailSignup.placeholder}
        className="w-full px-6 py-4 rounded-full border border-gray-200 bg-white text-body placeholder:text-gray-300 text-sm md:text-base focus:outline-none focus:border-coral transition-colors"
      />
      {status === "error" && <p className="text-red-500 text-xs text-center">{errorMessage}</p>}
      <div className="flex flex-col items-center gap-3">
        <Button
          onClick={handleClick}
          className={status === "loading" ? "opacity-60 pointer-events-none" : ""}
        >
          {status === "loading" ? locale.modal.loading : locale.emailSignup.cta}
        </Button>
        <p className="text-xs md:text-sm font-bold text-brown text-center">
          {locale.emailSignup.disclaimer}
        </p>
      </div>
    </div>
  );
}
