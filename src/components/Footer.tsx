import { Instagram, Youtube, Send, Info, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-6 px-4 md:px-6 relative text-xs">
      <div className="max-w-7xl mx-auto glass-card py-4 px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400">
        
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p>© 2026 AARAV_EDITS_001. All rights reserved.</p>
        </div>

        {/* Text Details */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 uppercase tracking-widest text-center justify-center font-medium">
          <span className="text-white">Instagram: @aarav_edits_001</span>
          <span>Designed & Developed by <span className="text-gradient">Aarav</span></span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a href="#" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors"><Instagram size={14} /></a>
          <a href="#" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors"><Youtube size={14} /></a>
          <a href="#" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors"><Send size={14} /></a>
        </div>

      </div>

      {/* Scroll to Top */}
      <button 
        onClick={scrollToTop}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-brand text-white flex items-center justify-center hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all md:flex hidden z-10"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
