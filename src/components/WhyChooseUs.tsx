import { motion } from "motion/react";
import { SectionHeading } from "./ui/SectionHeading";
import { Zap, Shield, HeartHandshake, Clock } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "We understand that time is money. Get your projects delivered ahead of schedule without compromising quality.",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Every frame, pixel, and line of code is carefully crafted to ensure the highest industry standards.",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      icon: HeartHandshake,
      title: "Client-Centric",
      description: "Your vision is our priority. We maintain transparent communication throughout the entire creative process.",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Need an urgent revision or technical help? Our dedicated team is available around the clock.",
      color: "text-indigo-400",
      bg: "bg-indigo-400/10"
    }
  ];

  return (
    <section id="why-us" className="py-20 relative bg-transparent">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading title="Why" highlight="Choose Us" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${reason.bg} group-hover:bg-opacity-20`}>
                <reason.icon size={26} className={reason.color} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
