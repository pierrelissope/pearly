"use client";

import { useState, useEffect, useCallback } from "react";
import Button from "./Button";
import { locale } from "@/lib/locale";
import { useSubscribe } from "@/lib/use-subscribe";

interface EmailModalProps {
  open: boolean;
  onClose: () => void;
  showSuccess?: boolean;
}

export default function EmailModal({ open, onClose, showSuccess }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const { status, errorMessage, submit, reset } = useSubscribe();

  const displaySuccess = showSuccess || status === "success";

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(email);
    setEmail("");
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={handleClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative bg-white rounded-2xl p-8 w-full max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-body-light hover:text-brown transition-colors cursor-pointer text-xl leading-none"
          aria-label="Fermer"
        >
          &times;
        </button>

        {displaySuccess ? (
          <div className="text-center space-y-4 py-4">
            <p className="text-2xl font-bold text-coral">{locale.modal.successTitle}</p>
            <p className="text-body-light text-sm">{locale.modal.successMessage}</p>
            <Button onClick={handleClose}>{locale.modal.close}</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center space-y-2">
              <p className="text-xl font-bold text-brown">{locale.modal.title}</p>
              <p className="text-body-light text-sm">{locale.modal.subtitle}</p>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={locale.emailSignup.placeholder}
              required
              className="w-full px-6 py-4 rounded-full border border-gray-200 bg-white text-body placeholder:text-gray-300 text-sm focus:outline-none focus:border-coral transition-colors"
            />
            {status === "error" && (
              <p className="text-red-500 text-xs text-center">{errorMessage}</p>
            )}
            <div className="flex flex-col items-center gap-3">
              <Button
                type="submit"
                className={status === "loading" ? "opacity-60 pointer-events-none" : ""}
              >
                {status === "loading" ? locale.modal.loading : locale.emailSignup.cta}
              </Button>
              <p className="text-xs font-bold text-brown text-center">
                {locale.emailSignup.disclaimer}
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
