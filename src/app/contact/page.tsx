import { ContactForm } from "@/components/ContactForm";
import { ContactLinks } from "@/components/LandingSection";

export default function Contact() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="space-y-6">
        <div className="space-y-1.5">
          <h1 className="text-lg font-semibold tracking-tight drop-shadow-glow">
            Contact
          </h1>
          <p className="text-text-300">Got a question or idea? Get in touch!</p>
        </div>

        <ContactLinks className="justify-start" />
      </div>

      <ContactForm />
    </div>
  );
}
