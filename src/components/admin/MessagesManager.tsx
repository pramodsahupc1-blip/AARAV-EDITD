import { useState } from "react";
import { Mail, Search, Star, Trash2, Reply, Archive, MoreVertical } from "lucide-react";

export function MessagesManager() {
  const [activeMessage, setActiveMessage] = useState<number | null>(1);

  const messages = [
    { id: 1, sender: 'Alex Johnson', email: 'alex@startup.io', subject: 'Inquiry for UI/UX Design', date: '10:30 AM', isRead: false, isStarred: true, snippet: 'Hi Aarav, we are launching a new fintech app and loved your recent UI designs. Could we discuss...' },
    { id: 2, sender: 'Sarah Connor', email: 'sarah.c@media.com', subject: 'Video Editing for YouTube Channel', date: 'Yesterday', isRead: true, isStarred: false, snippet: 'I need an editor for my tech review channel. Let me know your rates for a 10 min 4K video.' },
    { id: 3, sender: 'Priya Sharma', email: 'priya55@gmail.com', subject: 'App Development Quote', date: 'Oct 15', isRead: true, isStarred: true, snippet: 'Hello! I have a startup idea for an AI-powered fitness app. Are you taking on new app dev projects?' },
    { id: 4, sender: 'Marcus Web', email: 'marcus@agency.net', subject: 'Freelance Collaboration', date: 'Oct 14', isRead: true, isStarred: false, snippet: 'We are looking for a reliable editor context creator to partner with our agency for overflow work.' },
    { id: 5, sender: 'Elena Rostova', email: 'elena@brand.co', subject: 'Logo and Branding Animation', date: 'Oct 10', isRead: true, isStarred: false, snippet: 'Could you animate our new logo? We want a slick 5-second intro for our company presentations.' },
  ];

  const selectedMsg = messages.find(m => m.id === activeMessage);

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col">
      <div className="flex justify-between items-center mb-6 shrink-0">
        <div>
          <h1 className="text-2xl font-bold">Contact Messages</h1>
          <p className="text-gray-400 text-sm mt-1">Manage inquiries from your website contact form.</p>
        </div>
      </div>

      <div className="flex-1 glass-card border-white/5 flex overflow-hidden">
        {/* Inbox List */}
        <div className="w-1/3 min-w-[300px] border-r border-white/5 flex flex-col bg-white/[0.01]">
          <div className="p-4 border-b border-white/5 shrink-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search messages..." 
                className="w-full bg-[var(--color-brand-dark)] border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div className="flex gap-4 mt-4 text-xs font-bold uppercase tracking-wider">
              <button className="text-purple-400 border-b-2 border-purple-500 pb-1">Inbox (2)</button>
              <button className="text-gray-500 hover:text-white pb-1">Starred</button>
              <button className="text-gray-500 hover:text-white pb-1">Archive</button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto hide-scrollbar">
            {messages.map(msg => (
              <div 
                key={msg.id}
                onClick={() => setActiveMessage(msg.id)}
                className={`p-4 border-b border-white/5 cursor-pointer transition-colors ${
                  activeMessage === msg.id 
                    ? 'bg-purple-500/10' 
                    : 'hover:bg-white/[0.02]'
                } ${!msg.isRead ? 'border-l-2 border-l-purple-500' : 'border-l-2 border-l-transparent'}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <div className={`text-sm ${!msg.isRead ? 'font-bold text-white' : 'font-medium text-gray-300'}`}>
                    {msg.sender}
                  </div>
                  <span className="text-[10px] text-gray-500">{msg.date}</span>
                </div>
                <div className={`text-xs mb-1 truncate ${!msg.isRead ? 'font-bold text-purple-400' : 'text-gray-400'}`}>
                  {msg.subject}
                </div>
                <div className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                  {msg.snippet}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Viewer */}
        <div className="flex-1 flex flex-col bg-[var(--color-brand-dark)]/40">
          {selectedMsg ? (
            <>
              {/* Toolbar */}
              <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 shrink-0">
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors" title="Reply">
                    <Reply size={18} />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors" title="Archive">
                    <Archive size={18} />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-colors" title="Delete">
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                    <Star size={18} className={selectedMsg.isStarred ? "fill-orange-500 text-orange-500" : ""} />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>

              {/* Email Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 hide-scrollbar">
                <div className="flex justify-between items-start mb-8">
                  <h2 className="text-xl md:text-2xl font-bold text-white">{selectedMsg.subject}</h2>
                </div>
                
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 p-[2px]">
                      <div className="w-full h-full rounded-full bg-[var(--color-brand-dark)] flex items-center justify-center font-bold text-lg">
                        {selectedMsg.sender.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{selectedMsg.sender}</div>
                      <div className="text-xs text-gray-400 mt-0.5">&lt;{selectedMsg.email}&gt;</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{selectedMsg.date}</div>
                </div>

                <div className="text-gray-300 leading-relaxed text-sm md:text-base space-y-4">
                  <p>{selectedMsg.snippet}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <p>Looking forward to hearing from you soon.</p>
                  <p className="mt-8 font-medium">Best regards,<br/>{selectedMsg.sender}</p>
                </div>
              </div>
              
              {/* Reply Box */}
              <div className="p-4 md:p-6 border-t border-white/5 shrink-0 bg-white/[0.02]">
                <div className="bg-[var(--color-brand-dark)] border border-white/10 rounded-xl overflow-hidden focus-within:border-purple-500 transition-colors">
                  <textarea 
                    rows={4}
                    placeholder={`Reply to ${selectedMsg.sender}...`}
                    className="w-full bg-transparent p-4 text-sm text-white focus:outline-none resize-none"
                  />
                  <div className="bg-white/5 px-4 py-3 flex justify-between items-center">
                    <div className="flex gap-2">
                       {/* Rich text formatting mock buttons */}
                       <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/10 text-gray-400 text-xs font-bold">B</button>
                       <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/10 text-gray-400 text-xs italic font-serif">I</button>
                    </div>
                    <button className="bg-gradient-brand text-white px-6 py-2 rounded-lg font-bold text-sm shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all">
                      Send Reply
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
              <Mail size={48} className="mb-4 opacity-50" />
              <p>Select a message to read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
