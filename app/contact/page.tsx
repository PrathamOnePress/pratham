import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <Nav />
      <main className="bg-bg-primary text-text-primary min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-text-muted mb-6">Tell us about your book or project — we’ll reply within 48 hours.</p>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}