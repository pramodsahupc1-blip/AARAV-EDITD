import { useState } from "react";
import { Lock, Mail } from "lucide-react";

export function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "demo@aarav.com" && password === "demo123") {
      onLogin();
    } else {
      setError("Invalid credentials. Use demo@aarav.com / demo123");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-brand-dark)] flex items-center justify-center p-6 select-none relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="glass-card w-full max-w-md p-8 relative z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-brand p-[2px] mx-auto mb-4">
            <div className="w-full h-full rounded-full bg-[var(--color-brand-dark)] flex items-center justify-center font-bold text-xl">
              AE
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">Admin Portal</h1>
          <p className="text-gray-400 text-sm">Sign in to manage your portfolio</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm px-4 py-3 rounded-lg text-center">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                className="w-full bg-[#050505]/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 focus:bg-[#050505] transition-all"
                placeholder="Enter admin email"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#050505]/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 focus:bg-[#050505] transition-all"
                placeholder="Enter password"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-brand text-white font-bold py-3.5 rounded-xl uppercase tracking-wider shadow-lg hover:shadow-purple-500/25 transition-all text-sm"
          >
            Authenticate
          </button>
        </form>
        
        <div className="mt-8 text-center text-xs text-gray-500 border-t border-white/10 pt-6">
          <p>Restricted Access - Aarav Edits 001</p>
        </div>
      </div>
    </div>
  );
}
