import { ContactForm } from "@/components/ContactForm";
import { ContactLinks } from "@/components/LandingSection";
import { EmojiCallout } from "@/components/ui/EmojiCallout";

export default function Contact() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-lg font-medium text-text-100">Contact</h1>
          <EmojiCallout emoji={"👋"} heading="I'm currently looking for work.">
            If you are interested, or just want to say hello, fill out the form
            below, or connect with me using one of the links.
          </EmojiCallout>
        </div>

        <ContactLinks className="justify-start" />
      </div>

      <ContactForm />
    </div>
  );
}
