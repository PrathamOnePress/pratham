import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  const services = [
    { title: "Writing & Editing", desc: "Full manuscript creation, editing, and proofreading", icon: "✍️" },
    { title: "Formatting & Typeset", desc: "KDP-ready and print-safe PDFs", icon: "📐" },
    { title: "Cover Design & Print", desc: "Professional covers, spines, and back pages", icon: "🎨" }
  ];

  return (
    <>
      <Nav />
      <main className="bg-bg-primary text-text-primary min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}