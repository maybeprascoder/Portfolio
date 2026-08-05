import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ContactCard from "@/components/ContactCard";
import { MapPin, Mail, Globe, Briefcase } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Prasoon Kumar for opportunities and collaboration.",
  openGraph: {
    title: "Contact | Prasoon Kumar",
    description: "Get in touch with Prasoon Kumar for opportunities and collaboration.",
  },
  twitter: {
    card: "summary",
    title: "Contact | Prasoon Kumar",
    description: "Get in touch with Prasoon Kumar for opportunities and collaboration.",
  },
};

const openTo = [
  "Software engineering roles",
  "AI and machine learning roles",
  "Frontend development opportunities",
  "Startup collaboration",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let's Connect"
        description="I am open to software engineering, AI/ML, frontend development, and collaboration opportunities."
      />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form column */}
          <div className="lg:col-span-3">
            <SectionHeading label="Message" title="Send a Message" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Info column */}
          <div className="lg:col-span-2">
            <SectionHeading label="Info" title="Contact Information" />
            <div className="mt-8 space-y-4">
              <ContactCard
                icon={MapPin}
                label="Location"
                value="San Jose, California"
              />
              <ContactCard
                icon={Mail}
                label="Email"
                value="prasoonkumar.23702@gmail.com"
                href="mailto:prasoonkumar.23702@gmail.com"
              />
              <ContactCard
                icon={Globe}
                label="LinkedIn"
                value="linkedin.com/in/prasoon-singh-ty"
                href="https://www.linkedin.com/in/prasoon-singh-ty/"
              />
              <ContactCard
                icon={Globe}
                label="GitHub"
                value="github.com/maybeprascoder"
                href="https://github.com/maybeprascoder"
              />
            </div>

            {/* Open to */}
            <div className="mt-10">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  <Briefcase size={18} />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Currently Open To
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {openTo.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-sm text-slate-300 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-cyan-400/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
