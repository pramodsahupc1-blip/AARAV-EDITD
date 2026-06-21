import { motion } from "motion/react";
import { Users, FolderGit2, Trophy, Code2 } from "lucide-react";

export function Stats() {
  const stats = [
    { icon: Users, value: "50k+", label: "Followers", color: "text-red-500", bg: "bg-red-500/10" },
    { icon: FolderGit2, value: "1.2k+", label: "Projects", color: "text-red-400", bg: "bg-red-400/10" },
    { icon: Trophy, value: "5yr+", label: "Years Experience", color: "text-red-500", bg: "bg-red-500/10" },
    { icon: Code2, value: "10+", label: "Technologies", color: "text-red-600", bg: "bg-red-600/10" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 relative z-10 -mt-10 md:-mt-20 lg:-mt-10 mb-20">
      <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center gap-4 w-full md:w-auto">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <stat.icon size={28} />
            </div>
            <div>
              <div className="text-2xl font-bold font-sans tracking-tight text-white">{stat.value}</div>
              <div className="text-sm tracking-wide text-gray-400">{stat.label}</div>
            </div>
            {/* Divider */}
            {idx !== stats.length - 1 && (
              <div className="hidden md:block w-px h-12 bg-white/10 ml-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
