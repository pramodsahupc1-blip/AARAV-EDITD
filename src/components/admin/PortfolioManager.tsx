import { useState } from "react";
import { Plus, Search, Edit2, Trash2, MoreVertical, Image as ImageIcon } from "lucide-react";

export function PortfolioManager() {
  const [activeTab, setActiveTab] = useState("All");
  
  const projects = [
    { id: 1, title: 'Cinematic Reel 2026', category: 'Video Editing', date: 'Oct 12, 2026', views: '2.4k', status: 'Published' },
    { id: 2, title: 'Finance App UI', category: 'App Development', date: 'Oct 08, 2026', views: '1.2k', status: 'Published' },
    { id: 3, title: 'AI Portrait Series', category: 'AI Projects', date: 'Oct 05, 2026', views: '8.9k', status: 'Published' },
    { id: 4, title: 'Brand Motion Graphics', category: 'Video Editing', date: 'Sep 28, 2026', views: '3.1k', status: 'Draft' },
    { id: 5, title: 'Web 3.0 Platform', category: 'App Development', date: 'Sep 21, 2026', views: '4.5k', status: 'Published' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold">Portfolio Management</h1>
          <p className="text-gray-400 text-sm mt-1">Manage, add or edit your showcase projects.</p>
        </div>
        <button className="bg-gradient-brand text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all">
          <Plus size={18} /> Add New Project
        </button>
      </div>

      <div className="glass-card border-white/5 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/[0.02]">
          <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
            {["All", "Photo Editing", "Video Editing", "App Dev", "AI Projects"].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab 
                    ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="w-full bg-[var(--color-brand-dark)] border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-xs uppercase tracking-wider text-gray-500">
                <th className="p-4 font-bold">Project Info</th>
                <th className="p-4 font-bold">Category</th>
                <th className="p-4 font-bold">Date Added</th>
                <th className="p-4 font-bold">Views</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, idx) => (
                <tr key={project.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gray-800 border border-white/10 flex items-center justify-center shrink-0 text-gray-500 group-hover:text-purple-400 transition-colors">
                        <ImageIcon size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white">{project.title}</div>
                        <div className="text-xs text-gray-500 mt-0.5">ID: PROJ-{project.id.toString().padStart(4, '0')}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-300">
                    <span className="bg-white/5 px-2.5 py-1 rounded-md text-xs">{project.category}</span>
                  </td>
                  <td className="p-4 text-sm text-gray-400">{project.date}</td>
                  <td className="p-4 text-sm text-gray-400">{project.views}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      project.status === 'Published' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Published' ? 'bg-green-400' : 'bg-orange-400'}`}></span>
                      {project.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex flex-col items-center justify-center hover:bg-blue-500/20 transition-colors">
                        <Edit2 size={14} />
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex flex-col items-center justify-center hover:bg-red-500/20 transition-colors">
                        <Trash2 size={14} />
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-white/5 text-gray-400 flex flex-col items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-white/5 flex items-center justify-between text-sm text-gray-400">
          <div>Showing 1 to 5 of 24 entries</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 bg-[var(--color-brand-dark)] border border-white/10 rounded hover:bg-white/5 transition-colors disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded font-medium">1</button>
            <button className="px-3 py-1 bg-[var(--color-brand-dark)] border border-white/10 rounded hover:bg-white/5 transition-colors">2</button>
            <button className="px-3 py-1 bg-[var(--color-brand-dark)] border border-white/10 rounded hover:bg-white/5 transition-colors">3</button>
            <button className="px-3 py-1 bg-[var(--color-brand-dark)] border border-white/10 rounded hover:bg-white/5 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
