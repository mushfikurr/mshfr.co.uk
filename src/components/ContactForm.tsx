import { cn } from "../utils/utils";
import { cardClassnames } from "./ui/Card";
import { PrimaryButton } from "./ui/PrimaryButton";

export const ContactForm: React.FC = () => (
  <form
    className="w-full space-y-6"
    action="ttps://api.web3forms.com/submit"
    method="POST"
  >
    <input
      type="hidden"
      name="access_key"
      value={import.meta.env.VITE_FORM_ACCESS_KEY}
    />
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
          "focus:border-text-100/10 group-hover:bg-card/50 focus-visible:outline-none p-4 transition-colors duration-300 ease-in-out shadow-md"
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
          "focus:border-text-100/10 group-hover:bg-card/50 focus-visible:outline-none p-4 transition-colors duration-300 ease-in-out shadow-md"
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
          "focus:border-text-100/10 group-hover:bg-card/50 focus-visible:outline-none p-4 transition-colors duration-300 ease-in-out shadow-md"
        )}
      />
    </fieldset>

    <fieldset className="w-full flex justify-end">
      <PrimaryButton type="submit">Submit</PrimaryButton>
    </fieldset>
  </form>
);
