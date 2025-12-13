import React from 'react';
import { Github, Twitter, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white mb-2">Running Chihuahua AI</h2>
          <p className="text-slate-500 text-sm">Run for your life, run for the glory.</p>
          <div className="mt-4 text-xs text-slate-600">
            Version 1.0 • Last Updated: 2024
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="https://runningchihuahuaai.k0j1.v2002.coreserver.jp/" target="_blank" rel="noreferrer" className="flex items-center text-amber-500 hover:text-amber-400">
              Play Game <ExternalLink className="ml-1 h-3 w-3" />
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-500">Powered by Farcaster, Gemini, Supabase</span>
          </div>
        </div>
      </div>
    </footer>
  );
};