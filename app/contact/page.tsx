/**
 * Contact Page
 * Project: PrathamOne Website
 * Company: Prathamone
 * Author: Jawahar R. Mallah
 */
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact PrathamOne Press"
        subtitle="Share your project details — book, curriculum, or systems work — and the team will respond with clear next steps."
      />
      <section className="container-main py-10 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="text-sm text-pr_silver space-y-4">
          <p>
            Use the form to describe your book, curriculum requirement, or
            publishing system request. PrathamOne operates on a structure-first
            model — so the more clear your inputs, the more precise the proposed
            solution.
          </p>
          <p className="text-[11px] text-pr_silver/80">
            Response window: typically within 24–48 working hours. For urgent
            timelines, mention the deadline in your message.
          </p>
          <div className="rounded-2xl border border-pr_silver/20 bg-black/40 p-4 text-[11px]">
            <div className="font-semibold text-pr_gold mb-1">
              Direct channels
            </div>
            <div>Email: contact@prathamone.com</div>
            <div>Location: Mumbai, India</div>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
