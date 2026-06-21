import { Users, LayoutGrid, Eye, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', views: 4000, interactions: 2400 },
  { name: 'Tue', views: 3000, interactions: 1398 },
  { name: 'Wed', views: 2000, interactions: 9800 },
  { name: 'Thu', views: 2780, interactions: 3908 },
  { name: 'Fri', views: 1890, interactions: 4800 },
  { name: 'Sat', views: 2390, interactions: 3800 },
  { name: 'Sun', views: 3490, interactions: 4300 },
];

export function DashboardOverview() {
  const stats = [
    { label: "Total Visitors", value: "124.5K", change: "+12.5%", isUp: true, icon: Eye, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Total Followers", value: "52.4K", change: "+5.2%", isUp: true, icon: Users, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "Total Projects", value: "1,248", change: "+2", isUp: true, icon: LayoutGrid, color: "text-orange-500", bg: "bg-orange-500/10" },
    { label: "Revenue", value: "$12,450", change: "-2.4%", isUp: false, icon: ArrowUpRight, color: "text-green-500", bg: "bg-green-500/10" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <p className="text-gray-400 text-sm mt-1">Welcome back, Aarav. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400 glass px-4 py-2 rounded-lg">
          <Clock size={16} />
          {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card p-6 border-white/5 hover:border-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${stat.isUp ? 'text-green-500' : 'text-red-500'}`}>
                {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </div>
            </div>
            <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
            <p className="text-3xl font-bold mt-1 text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts & Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 glass-card p-6 border-white/5">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">Traffic & Engagement</h3>
            <select className="bg-brand-dark border border-white/10 text-xs px-3 py-1.5 rounded-lg text-gray-300 outline-none">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorInt" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f0f12', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="views" stroke="#a855f7" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" />
                <Area type="monotone" dataKey="interactions" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorInt)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Timeline */}
        <div className="glass-card p-6 border-white/5">
          <h3 className="font-bold mb-6">Recent Activity</h3>
          <div className="space-y-6 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
            {[
              { title: "New Message", desc: "Client inquiry about branding", time: "2 hrs ago", color: "bg-blue-500" },
              { title: "Portfolio Updated", desc: "Added 'Neon City' project", time: "5 hrs ago", color: "bg-purple-500" },
              { title: "New Follower", desc: "Someone followed you on GitHub", time: "Yesterday", color: "bg-white" },
              { title: "Service Purchased", desc: "Video editing gig booked", time: "2 days ago", color: "bg-orange-500" },
            ].map((item, idx) => (
              <div key={idx} className="relative pl-8">
                <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full bg-brand-dark flex items-center justify-center`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${item.color} shadow-[0_0_10px_currentColor]`} />
                </div>
                <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                <p className="text-xs text-gray-400 mb-1">{item.desc}</p>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">{item.time}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-wider transition-colors">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
}
