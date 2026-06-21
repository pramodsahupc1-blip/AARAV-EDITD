import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Image, 
  Briefcase, 
  Users, 
  MessageSquare, 
  Globe, 
  Share2, 
  LineChart, 
  Settings, 
  ShieldCheck,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { path: "/admin", icon: LayoutDashboard, label: "Overview" },
  { path: "/admin/portfolio", icon: Image, label: "Portfolio" },
  { path: "/admin/services", icon: Briefcase, label: "Services" },
  { path: "/admin/users", icon: Users, label: "Users" },
  { path: "/admin/messages", icon: MessageSquare, label: "Messages" },
  { path: "/admin/content", icon: Globe, label: "Content" },
  { path: "/admin/social", icon: Share2, label: "Social Media" },
  { path: "/admin/analytics", icon: LineChart, label: "Analytics" },
  { path: "/admin/settings", icon: Settings, label: "Settings" },
  { path: "/admin/security", icon: ShieldCheck, label: "Security" },
];

export function AdminLayout({ children, onLogout }: { children: React.ReactNode, onLogout: () => void }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-dark text-white flex overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static top-0 left-0 h-full w-64 glass border-r border-white/10 flex flex-col transition-transform duration-300 z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Header */}
        <div className="h-20 border-b border-white/10 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-brand p-[2px]">
              <div className="w-full h-full rounded-full bg-[var(--color-brand-dark)] flex items-center justify-center font-bold text-[10px]">
                AE
              </div>
            </div>
            <span className="font-bold text-sm tracking-widest uppercase">Admin</span>
          </div>
          <button className="lg:hidden text-gray-400" onClick={() => setIsSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                  isActive 
                    ? "bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-[inset_0_0_20px_rgba(168,85,247,0.1)]" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`
              }
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Footer Area */}
        <div className="p-4 border-t border-white/10 shrink-0">
          <button 
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm w-full text-red-400 hover:bg-red-500/10"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 max-h-screen overflow-hidden relative">
        {/* Subdued background blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-900/20 to-orange-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        {/* Topbar */}
        <header className="h-20 border-b border-white/10 glass flex items-center justify-between px-6 shrink-0 sticky top-0 z-30">
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={20} />
          </button>
          
          <div className="ml-auto flex items-center gap-4">
             <div className="text-right hidden sm:block">
               <div className="text-sm font-bold">Aarav Sahu</div>
               <div className="text-xs text-purple-400">Super Admin</div>
             </div>
             <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-purple-500 overflow-hidden">
                <img src="/logo.jpg" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1543610892-0b1f7e6d8c1c?w=100&h=100&fit=crop&q=80"; }} alt="Admin" className="w-full h-full object-cover" />
             </div>
          </div>
        </header>

        {/* Scrollable Main Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto h-full">
             {children}
          </div>
        </main>
      </div>

    </div>
  );
}
