import { site } from "@/lib/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              title="Get in touch"
              description="Looking for a software engineer? I'm open to full-time opportunities — let's talk."
              className="mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Or email me directly at{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-accent hover:underline"
              >
                {site.email}
              </a>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
