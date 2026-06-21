import { MessageCircle } from "lucide-react";

export function LiveChat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="#contact"
        className="w-14 h-14 bg-gradient-brand rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-110 transition-transform cursor-pointer"
        title="Live Chat Support"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
