"use client";

import { useEffect, useRef, useState } from "react";
import { StatusType, sendMailAction } from "@/lib/email";
import { MailCheck, MailWarning } from "lucide-react";
import { useActionState } from "react";
import { cn } from "../utils/utils";
import { cardClassnames } from "./ui/Card";
import { PrimaryButton } from "./ui/PrimaryButton";

const initialState: StatusType = {
  status: "",
  message: "",
};

declare global {
  interface Window {
    turnstile?: {
      render: (el: string | HTMLElement, options: any) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export const ContactForm: React.FC = () => {
  const [state, formAction, pending] = useActionState(
    sendMailAction,
    initialState
  );
  const turnstileRef = useRef<HTMLDivElement>(null);
  const [token, setToken] = useState<string | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Load Turnstile script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.turnstile && turnstileRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
          callback: (token: string) => {
            setToken(token);
          },
          "error-callback": () => setToken(null),
          "expired-callback": () => setToken(null),
        });
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      return {
        status: "error",
        message: "Captcha verification failed. Please try again.",
      };
    }

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("cf-turnstile-response", token);

    // Call formAction with only the formData (do not pass state manually)
    const result = await formAction(formData);

    // Reset token if needed
    if (window.turnstile && widgetIdRef.current) {
      window.turnstile.reset(widgetIdRef.current);
    }
    setToken(null);

    return result;
  };

  const renderStatus = () => {
    if (!state.message) return;

    if (state.status === "error") {
      return (
        <div className="flex gap-3 items-center w-full">
          <MailWarning className="h-5 w-5 text-red-200" strokeWidth={2} />
          <p className="text-red-300 text-sm grow">{state.message}</p>
        </div>
      );
    } else {
      return (
        <div className="flex gap-3 items-center w-full">
          <MailCheck className="h-5 w-5 text-green-200" strokeWidth={2} />
          <p className="text-green-300 text-sm grow mb-[1px]">
            {state.message}
          </p>
        </div>
      );
    }
  };

  return (
    <form className="w-full space-y-6" onSubmit={handleSubmit}>
      {renderStatus()}

      <fieldset className="flex flex-col gap-3 group">
        <label className="text-text-400 text-sm" htmlFor="name">
          Name
        </label>
        <input
          name="name"
          required
          className={cn(
            cardClassnames,
            "focus:border-text-100/10 group-hover:bg-card/50 focus:bg-card/50 py-2 px-3 shadow-md"
          )}
        />
      </fieldset>

      <fieldset className="flex flex-col gap-3 group">
        <label className="text-text-400 text-sm" htmlFor="email">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          className={cn(
            cardClassnames,
            "focus:border-text-100/10 group-hover:bg-card/50 focus:bg-card/50 py-2 px-3 shadow-md"
          )}
        />
      </fieldset>

      <fieldset className="flex flex-col gap-3 group">
        <label className="text-text-400 text-sm" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={4}
          className={cn(
            cardClassnames,
            "focus:border-text-100/10 group-hover:bg-card/50 focus:bg-card/50 py-2 px-3 shadow-md"
          )}
        />
      </fieldset>

      {/* Turnstile widget container */}
      <div ref={turnstileRef} className="cf-turnstile" />

      <fieldset className="w-full flex justify-end">
        <PrimaryButton
          loading={pending}
          type="submit"
          className="px-5 py-2"
          disabled={!token}
        >
          Submit
        </PrimaryButton>
      </fieldset>
    </form>
  );
};
