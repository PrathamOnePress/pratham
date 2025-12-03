import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/PortfolioCard";

export default function PortfolioPage() {
  const books = [
    { title: "GanitSūtram", category: "Math", year: 2025 },
    { title: "Coder who fears before Ai", category: "Autobiography", year: 2024 },
  ];

  return (
    <>
      <Nav />
      <main className="max-w-6xl mx-auto p-6 space-y-8">
        <h1 className="text-4xl font-bold mb-6">Books</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {books.map((b) => (
            <PortfolioCard key={b.title} {...b} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
