import React from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-600/20 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] opacity-20" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-amber-500 mr-2 animate-pulse"></span>
          <span className="text-sm font-semibold text-amber-300 uppercase tracking-wide">Version 1.0 Available</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          <span className="block">Running Chihuahua</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
            AI Powered
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed">
          3Dランナー × トークン
          <br className="hidden md:block" />
          Farcaster Frames上で動作する、次世代の「追いかけっこ」
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://runningchihuahuaai.k0j1.v2002.coreserver.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-slate-900 bg-amber-500 hover:bg-amber-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.5)]"
          >
            Play Game Now
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#abstract"
            className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-lg font-medium rounded-lg text-white hover:bg-slate-800 transition-all"
          >
            Read Litepaper
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};