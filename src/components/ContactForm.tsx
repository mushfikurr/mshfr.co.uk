"use client";

import { sendMailAction } from "@/lib/email";
import { MailCheck, MailWarning } from "lucide-react";
import { useActionState } from "react";
import { cn } from "../utils/utils";
import { cardClassnames } from "./ui/Card";
import { PrimaryButton } from "./ui/PrimaryButton";

const initialState = {
  status: "",
  message: "",
};

export const ContactForm: React.FC = () => {
  const [state, formAction, pending] = useActionState(
    sendMailAction,
    initialState
  );

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
    <form className="w-full space-y-6" action={formAction}>
      {renderStatus()}
      <fieldset className="flex flex-col gap-3 group">
        <label
          className="text-text-400
         group-hover:text-text-100 ease-in-out transition-colours duration-300"
          htmlFor="name"
        >
          Name
        </label>
        <input
          name="name"
          required
          className={cn(
            cardClassnames,
            "focus:border-text-100/10 group-hover:bg-card/50 focus:bg-card/50 focus-visible:outline-none p-4 transition-colors duration-300 ease-in-out shadow-md"
          )}
        />
      </fieldset>

      <fieldset className="flex flex-col gap-3 group">
        <label
          className="text-text-400 group-hover:text-text-100 ease-in-out transition-colours duration-300"
          htmlFor="name"
        >
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          className={cn(
            cardClassnames,
            "focus:border-text-100/10 group-hover:bg-card/50 focus:bg-card/50 focus-visible:outline-none p-4 transition-colors duration-300 ease-in-out shadow-md"
          )}
        />
      </fieldset>

      <fieldset className="flex flex-col gap-3 group">
        <label
          className="text-text-400 group-hover:text-text-100 ease-in-out transition-colours duration-300"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          name="message"
          required
          rows={4}
          className={cn(
            cardClassnames,
            "focus:border-text-100/10 group-hover:bg-card/50 focus:bg-card/50 focus-visible:outline-none p-4 transition-colors duration-300 ease-in-out shadow-md"
          )}
        />
      </fieldset>

      <fieldset className="w-full flex justify-end">
        <PrimaryButton loading={pending} type="submit">
          Submit
        </PrimaryButton>
      </fieldset>
    </form>
  );
};
