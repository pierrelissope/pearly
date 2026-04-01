import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function useSubscribe() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async (email: string) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Une erreur est survenue");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Une erreur est survenue");
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  return { status, errorMessage, submit, reset };
}
