import { motion } from "motion/react";
import { Menu, X, Instagram, Youtube, Github, Send } from "lucide-react";
import { useState, useEffect } from "react";
import logoImg from "../assets/images/regenerated_image_1782051637558.jpg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 md:pt-6 px-4 md:px-6`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${isScrolled ? "glass-card px-8 py-4" : "bg-transparent py-4 md:py-0 md:px-2"}`}>
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-brand p-[2px]">
            <div className="w-full h-full rounded-full bg-[var(--color-brand-dark)] flex items-center justify-center text-xs font-bold overflow-hidden">
               <img src={logoImg} onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1543610892-0b1f7e6d8c1c?w=100&h=100&fit=crop&q=80"; }} alt="Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <span className="font-black text-xl tracking-tighter text-white">
            AARAV_EDITS_001
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Social & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass flex flex-col p-6 gap-4 border-t border-white/10"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/10 text-gray-400">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><Github size={24} /></a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
