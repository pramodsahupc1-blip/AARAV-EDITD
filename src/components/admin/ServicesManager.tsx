import { Plus, Edit2, Trash2, Tag, Copy } from "lucide-react";

export function ServicesManager() {
  const services = [
    { id: 1, name: "Video Editing (Standard)", category: "Video", price: "$150", status: "Active" },
    { id: 2, name: "Full Branding Package", category: "Design", price: "$850", status: "Active" },
    { id: 3, name: "Mobile App Development", category: "Development", price: "$2,000+", status: "Active" },
    { id: 4, name: "Thumbnail Design", category: "Design", price: "$40", status: "Active" },
    { id: 5, name: "AI Avatar Generation", category: "AI Projects", price: "$100", status: "Draft" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold">Services & Pricing</h1>
          <p className="text-gray-400 text-sm mt-1">Manage what you offer to clients.</p>
        </div>
        <button className="bg-gradient-brand text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all">
          <Plus size={18} /> Add Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="glass-card p-6 border-white/5 hover:border-purple-500/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md ${
                service.status === 'Active' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
              }`}>
                {service.status}
              </span>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-gray-400 hover:text-white transition-colors" title="Duplicate"><Copy size={14} /></button>
                <button className="text-blue-400 hover:text-blue-300 transition-colors" title="Edit"><Edit2 size={14} /></button>
                <button className="text-red-400 hover:text-red-300 transition-colors" title="Delete"><Trash2 size={14} /></button>
              </div>
            </div>
            <h3 className="font-bold text-lg text-white mb-2">{service.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Tag size={14} />
              {service.category}
            </div>
            <div className="pt-4 border-t border-white/5 flex justify-between items-center">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Starting at</span>
              <span className="text-xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {service.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
