import { motion } from "motion/react";
import { SectionHeading } from "./ui/SectionHeading";
import { useState } from "react";

const categories = ["All", "Photo Editing", "Video Editing", "App Development", "AI Projects"];

const projects = [
  { id: 1, category: "Photo Editing", image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&h=600&fit=crop&q=80" },
  { id: 2, category: "Video Editing", image: "https://images.unsplash.com/photo-1621570074981-ee6a0145c8b5?w=600&h=600&fit=crop&q=80" },
  { id: 3, category: "Photo Editing", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&h=600&fit=crop&q=80" },
  { id: 4, category: "App Development", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&q=80" },
  { id: 5, category: "AI Projects", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop&q=80" },
  { id: 6, category: "Video Editing", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=600&fit=crop&q=80" },
  { id: 7, category: "App Development", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop&q=80" },
  { id: 8, category: "Photo Editing", image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=600&fit=crop&q=80" }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <SectionHeading title="My" highlight="Portfolio" className="mb-0" />
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? "bg-white/10 text-white" 
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer bg-gray-800"
            >
              <img 
                src={project.image} 
                alt={project.category} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
