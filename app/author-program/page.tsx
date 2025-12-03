import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function AuthorProgram() {
  return (
    <>
      <Nav />
      <main className="max-w-6xl mx-auto p-6 space-y-8">
        <h1 className="text-4xl font-bold">Author Program</h1>
        <p className="text-gray-300 max-w-2xl">
          Apply to PrathamOne Author Program. Manuscript help, editing, cover design, metadata and publishing support.
        </p>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
