import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";

export default function PortfolioPage() {
  const list = [
    { title: "GanitSūtram", category: "Mathematics", year: 2025 },
    { title: "Coder who fears before Ai", category: "Autobiographical", year: 2024 },
  ];

  return (
    <>
      <Nav />
      <main className="bg-bg-primary text-text-primary min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Books & Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map(p => <PortfolioCard key={p.title} {...p} />)}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}