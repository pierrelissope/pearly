"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submit(email);
    setEmail("");
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={locale.modal.title}
            className="relative bg-white rounded-2xl p-8 w-full max-w-md shadow-xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 text-body-light hover:text-brown transition-colors cursor-pointer text-xl leading-none"
              aria-label="Fermer"
            >
              &times;
            </button>

            <AnimatePresence mode="wait">
              {displaySuccess ? (
                <motion.div
                  key="success"
                  className="text-center space-y-4 py-4"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-2xl font-bold text-coral">{locale.modal.successTitle}</p>
                  <p className="text-body-light text-sm">{locale.modal.successMessage}</p>
                  <Button onClick={handleClose}>{locale.modal.close}</Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="text-center space-y-2">
                    <p className="text-xl font-bold text-brown">{locale.modal.title}</p>
                    <p className="text-body-light text-sm">{locale.modal.subtitle}</p>
                  </div>
                  <label htmlFor="email-modal" className="sr-only">
                    {locale.emailSignup.placeholder}
                  </label>
                  <input
                    id="email-modal"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={locale.emailSignup.placeholder}
                    autoComplete="email"
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
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
