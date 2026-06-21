import { motion } from "motion/react";
import { SectionHeading } from "./ui/SectionHeading";
import { Instagram, Mail, Phone, SendHorizontal } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: Instagram,
      title: "Instagram",
      value: "@aarav_edits_001",
      color: "text-red-500",
      bg: "bg-red-500/10"
    },
    {
      icon: Mail,
      title: "Email",
      value: "aaravedits001@gmail.com",
      color: "text-red-600",
      bg: "bg-red-600/10"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+91 12345 67890",
      color: "text-red-500",
      bg: "bg-red-500/10"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Contact" highlight="Me" />

        <div className="grid lg:grid-cols-12 gap-12 mt-12">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {contactMethods.map((method, idx) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx} 
                className="glass p-6 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-colors"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${method.bg} ${method.color}`}>
                  <method.icon size={32} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-1">{method.title}</h4>
                  <p className="text-white font-medium text-lg">{method.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form className="glass-card p-8 md:p-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <textarea 
                rows={5}
                placeholder="Your Message" 
                className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
              />
              <button 
                type="submit"
                className="w-full shadow-lg bg-gradient-brand text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all mt-2"
              >
                <SendHorizontal size={20} /> Send Message
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
