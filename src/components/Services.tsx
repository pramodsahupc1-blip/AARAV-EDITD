import { motion } from "motion/react";
import { SectionHeading } from "./ui/SectionHeading";
import { Film, Image as ImageIcon, Smartphone, Globe, Sparkles } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Film,
      title: "Video Editing",
      description: "Professional video editing for YouTube, Reels, Shorts & more.",
      color: "bg-blue-600 text-white",
      shadow: "group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
    },
    {
      icon: ImageIcon,
      title: "Thumbnail Design",
      description: "Eye-catching thumbnails that increase CTR and engagement.",
      color: "bg-purple-500 text-white",
      shadow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
    },
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Custom Android apps with modern UI & optimal performance.",
      color: "bg-blue-700 text-white",
      shadow: "group-hover:shadow-[0_0_30px_rgba(29,78,216,0.3)]"
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Responsive, fast & SEO-friendly websites for your brand.",
      color: "bg-indigo-500 text-white",
      shadow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
    }
  ];

  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="My" highlight="Services" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-8 group transition-all duration-300 hover:-translate-y-2 ${service.shadow}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-sans tracking-tight">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
