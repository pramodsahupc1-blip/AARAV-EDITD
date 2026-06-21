import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Instagram, Youtube, Send, Info } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-900/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass text-sm font-bold tracking-widest text-red-500 mb-6 border border-red-500/30 uppercase">
            AI EDITOR & SOFTWARE DEVELOPER
          </div>
          
          <h1 className="text-5xl md:text-7xl font-sans font-black italic tracking-tighter leading-none text-white mb-4 uppercase">
            Welcome To <br />
            <span className="text-gradient">My Profile</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg">
            Professional Video Editing & <br className="hidden md:block" /> App Development Services
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a 
              href="#portfolio" 
              className="bg-gradient-brand text-white px-8 py-3.5 rounded-full font-medium flex items-center gap-2 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all"
            >
              View Portfolio <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-full font-medium flex items-center gap-2 border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all text-white"
            >
              <MessageCircle size={18} /> Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Instagram, href: "#" },
              { icon: Youtube, href: "#" },
              { icon: Send, href: "#" }, // Telegram icon placeholder
              { icon: Info, href: "#" }, // Whatspp placeholder
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-purple/50 hover:bg-brand-purple/10 transition-all"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 relative"
        >
          {/* Glowing Ring */}
          <div className="absolute inset-0 bg-gradient-brand rounded-full blur-[60px] opacity-30 animate-pulse" />
          <div className="relative aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-4 rounded-full border-[4px] border-transparent bg-gradient-brand" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
            
            <img 
              src="/logo.jpg"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1543610892-0b1f7e6d8c1c?w=800&h=800&fit=crop&q=80"; }} 
              alt="Aarav" 
              className="w-full h-full object-cover rounded-full p-4 relative z-10 filter drop-shadow-2xl"
            />
            
            {/* Floating Text Element */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[120%] text-center z-20 transform -rotate-6">
              <span className="font-sans font-black text-6xl md:text-8xl text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] tracking-tighter italic">
                AARAV <span className="text-orange-500">EDITS</span>
              </span>
              <div className="font-sans font-black text-4xl md:text-6xl text-orange-500 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] tracking-widest italic mt-[-10px]">
                001
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
