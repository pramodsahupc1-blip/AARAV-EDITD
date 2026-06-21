import { Save, Image as ImageIcon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

export function ContentManager() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold">Content Management</h1>
          <p className="text-gray-400 text-sm mt-1">Update your website text and settings.</p>
        </div>
        <button className="bg-gradient-brand text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all">
          <Save size={18} /> Save All Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6 border-white/5 space-y-6">
            <h2 className="text-lg font-bold border-b border-white/5 pb-4">Home Section</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Main Heading</label>
                <input 
                  type="text" 
                  defaultValue="WELCOME TO MY PROFILE"
                  className="w-full bg-[var(--color-brand-dark)] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Subheadline</label>
                <input 
                  type="text" 
                  defaultValue="Modern visual storytelling through code and pixels."
                  className="w-full bg-[var(--color-brand-dark)] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          <div className="glass-card p-6 border-white/5 space-y-6">
            <h2 className="text-lg font-bold border-b border-white/5 pb-4">About Me</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Biography Paragraph</label>
                <textarea 
                  rows={4}
                  defaultValue="I am a passionate creator focused on visual design, software development, and everything in between. I specialize in crafting high-end content..."
                  className="w-full bg-[var(--color-brand-dark)] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Global Settings & Imagery */}
        <div className="space-y-6">
          <div className="glass-card p-6 border-white/5">
            <h2 className="text-lg font-bold border-b border-white/5 pb-4 mb-6">Website Logo</h2>
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-white/10 rounded-xl bg-[var(--color-brand-dark)] hover:border-purple-500/50 transition-colors cursor-pointer group">
               <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-purple-500 group-hover:scale-105 transition-transform">
                  <img src="/logo.jpg" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1543610892-0b1f7e6d8c1c?w=100&h=100&fit=crop&q=80"; }} alt="Logo" className="w-full h-full object-cover" />
               </div>
               <span className="text-sm font-medium text-white mb-1">Click to upload new logo</span>
               <span className="text-xs text-gray-500">JPG, PNG, WEBP (Max 2MB)</span>
            </div>
          </div>
          
          <div className="glass-card p-6 border-white/5 space-y-6">
            <h2 className="text-lg font-bold border-b border-white/5 pb-4">Theme Settings</h2>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white mb-1">High Contrast Mode</div>
                <div className="text-xs text-gray-500">Enhance visibility and borders</div>
              </div>
              <div 
                onClick={toggleTheme}
                className={`w-10 h-6 rounded-full relative cursor-pointer transition-colors ${
                  theme === 'high-contrast' ? 'bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.4)]' : 'bg-gray-600'
                }`}
              >
                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${
                  theme === 'high-contrast' ? 'right-1' : 'left-1'
                }`}></div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white mb-1">Show Particles</div>
                <div className="text-xs text-gray-500">Enable background animations</div>
              </div>
              <div className="w-10 h-6 bg-purple-500 rounded-full relative cursor-pointer shadow-[0_0_10px_rgba(168,85,247,0.4)]">
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
