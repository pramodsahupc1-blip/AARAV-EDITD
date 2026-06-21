import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-purple-500/30 text-white font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Portfolio />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

