import { Wrench } from "lucide-react";

export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center glass-card border border-white/5 p-12">
      <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6 text-purple-500 shadow-[inset_0_0_20px_rgba(168,85,247,0.2)]">
        <Wrench size={40} />
      </div>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-400 max-w-md mx-auto">
        This module is currently under development. It will provide comprehensive management tools for this section soon.
      </p>
    </div>
  );
}
