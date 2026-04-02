/* ============================================================
   NEWSLETTER SIGNUP COMPONENT
   Pop-Art Design: Electric Yellow + Deep Navy + Vivid Red
   Features: Email input, validation, success state, error handling
   ============================================================ */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trpc } from "@/lib/trpc";

interface NewsletterSignupProps {
  variant?: "inline" | "card";
}

export default function NewsletterSignup({ variant = "inline" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const subscribeMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: (data) => {
      setStatus("success");
      setMessage(data.message);
      setEmail("");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    },
    onError: (error) => {
      setStatus("error");
      setMessage(error.message || "Failed to subscribe. Please try again.");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    subscribeMutation.mutate({ email });
  };

  if (variant === "card") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white comic-border rounded-sm p-8 max-w-md mx-auto"
      >
        <h3 className="font-bangers text-[oklch(0.18_0.06_255)] text-3xl mb-2 leading-none">
          JOIN THE CLUB
        </h3>
        <p className="text-[oklch(0.18_0.06_255)] text-sm mb-6">
          Get weekly teacher parodies and tips for reclaiming your life outside the classroom.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="w-full px-4 py-3 border-2 border-[oklch(0.12_0.03_255)] rounded-sm font-['DM_Sans'] text-[oklch(0.18_0.06_255)] placeholder-[oklch(0.6_0.04_255)] focus:outline-none focus:border-[oklch(0.92_0.18_95)] disabled:bg-[oklch(0.94_0.02_90)]"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full pop-btn bg-[oklch(0.92_0.18_95)] text-[oklch(0.12_0.03_255)] px-6 py-3 rounded-sm font-bangers text-lg disabled:opacity-60"
          >
            {status === "loading" && "Signing up..."}
            {status === "success" && "Welcome!"}
            {status === "idle" && "Sign Me Up"}
            {status === "error" && "Try Again"}
          </button>
        </form>

        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mt-4 p-3 rounded-sm text-sm font-['DM_Sans'] ${
                status === "success"
                  ? "bg-[oklch(0.92_0.18_95)] text-[oklch(0.12_0.03_255)] border-2 border-[oklch(0.12_0.03_255)]"
                  : "bg-[oklch(0.55_0.22_25)] text-white border-2 border-[oklch(0.55_0.22_25)]"
              }`}
            >
              {message}
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-[oklch(0.6_0.04_255)] text-xs mt-4 text-center">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </motion.div>
    );
  }

  // Inline variant (for integration into existing sections)
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
    >
      <div className="flex-1 relative">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="w-full px-4 py-3 border-2 border-[oklch(0.12_0.03_255)] rounded-sm font-['DM_Sans'] text-[oklch(0.18_0.06_255)] placeholder-[oklch(0.6_0.04_255)] focus:outline-none focus:border-[oklch(0.92_0.18_95)] disabled:bg-[oklch(0.94_0.02_90)]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="pop-btn bg-[oklch(0.92_0.18_95)] text-[oklch(0.12_0.03_255)] px-6 py-3 rounded-sm font-bangers text-lg whitespace-nowrap disabled:opacity-60"
      >
        {status === "loading" && "Signing up..."}
        {status === "success" && "Welcome!"}
        {status === "idle" && "Sign Up"}
        {status === "error" && "Try Again"}
      </button>

      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute -bottom-12 left-0 right-0 p-2 rounded-sm text-xs font-['DM_Sans'] ${
              status === "success"
                ? "bg-[oklch(0.92_0.18_95)] text-[oklch(0.12_0.03_255)] border border-[oklch(0.12_0.03_255)]"
                : "bg-[oklch(0.55_0.22_25)] text-white border border-[oklch(0.55_0.22_25)]"
            }`}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
