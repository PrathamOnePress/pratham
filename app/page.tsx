import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home(){
 return(
   <>
     <Nav/>
     <Hero/>
     <main className="max-w-7xl mx-auto px-6 py-12">
       <section className="mb-12">
         <h2 className="text-3xl font-bold text-text-primary mb-4">Our Services</h2>
         <p className="text-text-muted max-w-2xl">We offer editorial, design, printing and distribution services for authors and small publishers.</p>
       </section>
     </main>
     <Footer/>
   </>
 );
}