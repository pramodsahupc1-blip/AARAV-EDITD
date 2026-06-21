import { motion } from "motion/react";
import { SectionHeading } from "./ui/SectionHeading";
import { Download } from "lucide-react";

export function About() {
  const skills = [
    { name: "Video Editing", progress: 95 },
    { name: "Photo Editing", progress: 90 },
    { name: "App Development", progress: 85 },
    { name: "Web Development", progress: 80 },
  ];

  const stats = [
    { value: "2+", label: "Years\nExperience" },
    { value: "50+", label: "Happy\nClients" },
    { value: "100+", label: "Projects\nCompleted" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="About" highlight="Me" />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile & Bio area - 5 cols */}
          <div className="lg:col-span-5 flex flex-col md:flex-row lg:flex-col gap-8 items-center lg:items-start text-center lg:text-left">
            <div className="relative shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-2 bg-gradient-brand">
                <img 
                  src="/logo.jpg" 
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80"; }}
                  alt="Aarav Sahu" 
                  className="w-full h-full object-cover rounded-full border-4 border-brand-dark"
                />
              </div>
              <div className="absolute bottom-2 right-2 w-12 h-12 rounded-full glass flex items-center justify-center text-red-500 shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="w-6 h-6 grayscale hover:grayscale-0 transition-all"/>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-sans font-bold text-white mb-2">
                I'm <span className="text-red-500">Aarav</span> Sahu
              </h3>
              <p className="text-xl text-gray-300 font-medium mb-4">AI Editor & Software Developer</p>
              <p className="text-gray-400 mb-8 max-w-md">
                I create professional content and digital solutions that help brands grow and stand out. Passionate about editing, coding, and exploring new AI technologies.
              </p>
              
              <button className="bg-gradient-brand text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all mx-auto lg:mx-0">
                <Download size={18} /> Download CV
              </button>
            </div>
          </div>

          {/* Progress Skills & Circular Stats - 7 cols */}
          <div className="lg:col-span-7 flex flex-col lg:flex-row gap-12">
            
            {/* Bars */}
            <div className="flex-1 space-y-6">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="bg-gradient-brand h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Circular Stats */}
            <div className="flex flex-row flex-wrap lg:flex-col justify-center gap-6 border-l-0 lg:border-l border-white/10 pl-0 lg:pl-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="w-28 h-28 rounded-full border border-white/10 flex items-center justify-center flex-col text-center hover:border-red-500/50 transition-colors bg-white/5 backdrop-blur-sm">
                  <span className="text-3xl font-sans font-bold text-white mb-1">{stat.value}</span>
                  <span className="text-xs text-red-500 uppercase tracking-wider whitespace-pre-line">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
