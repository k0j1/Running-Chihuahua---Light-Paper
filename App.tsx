import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Gameplay } from './components/Gameplay';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';
import { Users, BarChart3, Share2 } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* 1. Abstract */}
        <Section id="abstract" title="1. 概要 (Abstract)" subtitle="Web3時代の新しいランナーゲーム体験">
          <div className="prose prose-invert prose-lg max-w-none text-slate-300">
            <p className="leading-relaxed">
              <strong className="text-amber-400">Running Chihuahua AI</strong> は、Farcaster Frames および Webブラウザ上で動作する、AI搭載型の3D無限ランナーゲームです。
            </p>
            <p className="mt-4 leading-relaxed">
              プレイヤーは勇敢なチワワとなり、背後から迫りくる巨大なボス（ゴリラ、チーター、ドラゴン）から逃げ続けなければなりません。前方から現れる障害物を「ドッジ（回避）」し、後方からの攻撃を「ダック（しゃがみ）」で避けながら、生存距離とスコアを競います。
            </p>
            <div className="mt-6 p-4 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-lg">
              <p className="italic text-amber-200">
                Google Gemini APIによるリアルタイムAI実況機能と、Farcasterエコシステムに統合されたソーシャルランキング機能を特徴としています。
              </p>
            </div>
          </div>
        </Section>

        {/* 2. Gameplay */}
        <Section id="gameplay" title="2. ゲームプレイ (Gameplay)" darker>
          <Gameplay />
        </Section>

        {/* 3. Social & Leaderboard (Renumbered from 4) */}
        <Section id="social" title="3. ソーシャル機能 (Social)">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700">
              <div className="mx-auto w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Play Now</h3>
              <p className="text-slate-400 text-sm">
                ウォレット接続ですぐに簡単にプレイ可能。
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700">
              <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Ranking</h3>
              <p className="text-slate-400 text-sm">
                「High Score (最高得点)」ランキングを提供。トップランナーを目指そう。
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700">
              <div className="mx-auto w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-4">
                <Share2 className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Share to Farcaster</h3>
              <p className="text-slate-400 text-sm">
                ゲームオーバー時、リザルトをワンタップで投稿。
              </p>
            </div>
          </div>
        </Section>

        {/* 4. Roadmap (Renumbered from 5) */}
        <Section id="roadmap" title="4. ロードマップ (Roadmap)" darker>
          <Roadmap />
        </Section>
      </main>

      <Footer />
      
      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 w-full bg-slate-900 border-t border-slate-800 p-4 md:hidden z-40">
        <a 
          href="https://runningchihuahuaai.k0j1.v2002.coreserver.jp/" 
          className="block w-full text-center bg-amber-500 text-slate-900 font-bold py-3 rounded-lg hover:bg-amber-400 transition-colors"
        >
          Play Game Now
        </a>
      </div>
    </div>
  );
};

export default App;