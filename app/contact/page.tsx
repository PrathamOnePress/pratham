import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
