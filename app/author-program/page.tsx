import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function AuthorProgram() {
  return (
    <>
      <Nav />
      <main className="bg-bg-primary text-text-primary min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-4">Author Program</h2>
          <p className="text-text-muted mb-6">Join PrathamOne Author Program — editorial guidance, cover design, ISBN, metadata and launch kit.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">What you get</h4>
              <ul className="text-text-secondary list-disc ml-5">
                <li>Manuscript editing</li>
                <li>Formatting + KDP upload</li>
                <li>Launch kit & marketing assets</li>
              </ul>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}