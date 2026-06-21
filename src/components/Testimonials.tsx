import { motion } from "motion/react";
import { SectionHeading } from "./ui/SectionHeading";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "David Chen",
      role: "Tech YouTuber",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
      text: "Aarav has transformed the quality of my videos. The editing is crisp, and the retention rate on my channel has skyrocketed since we started working together. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
      text: "The Android app developed by Aarav Edits exceeded our expectations. The UI is gorgeous, the performance is flawless, and his communication throughout the project was top-notch.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Fitness Coach",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
      text: "I needed a professional website for my coaching business, and Aarav delivered perfectly. The site is fast, modern, and really helped me convert more visitors into clients.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Client" highlight="Testimonials" />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="absolute top-6 right-6 text-white/5 w-16 h-16 group-hover:text-blue-500/10 transition-colors" />
              
              <div className="flex gap-1 mb-6 text-orange-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 relative z-10 italic">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white/10" />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
