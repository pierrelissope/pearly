"use client";

import { useState } from "react";
import Button from "./Button";
import { locale } from "@/lib/locale";

export default function EmailSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4 px-6">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={locale.emailSignup.placeholder}
          required
          className="w-full px-6 py-4 rounded-full border border-gray-200 bg-white text-body placeholder:text-gray-300 text-sm md:text-base focus:outline-none focus:border-coral transition-colors"
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        <Button type="submit">{locale.emailSignup.cta}</Button>
        <p className="text-xs md:text-sm font-bold text-brown text-center">
          {locale.emailSignup.disclaimer}
        </p>
      </div>
    </form>
  );
}
