import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Portfolio as PortfolioSection } from "../components/Portfolio";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Pricing } from "../components/Pricing";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { LiveChat } from "../components/LiveChat";

export function Portfolio() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-blue-500/30 text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <PortfolioSection />
        <WhyChooseUs />
        <About />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <LiveChat />
    </div>
  );
}
