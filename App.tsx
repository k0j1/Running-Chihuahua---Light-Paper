import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Gameplay } from './components/Gameplay';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';
import { 
  Users, 
  BarChart3, 
  Share2, 
  AlertTriangle, 
  Coins, 
  ExternalLink, 
  Wallet, 
  Zap, 
  RefreshCw, 
  ShieldCheck, 
  HeartPulse, 
  Package,
  Trophy
} from 'lucide-react';
import { Language } from './types';
import { content } from './data/content';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ja');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500 selection:text-white">
      <Navbar lang={lang} setLang={setLang} />
      
      <main>
        <Hero lang={lang} />

        {/* Warning Section - Before Abstract */}
        <div className="bg-slate-900 pt-10 pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 flex items-start space-x-3 shadow-lg shadow-amber-500/5">
              <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-amber-200 text-sm leading-relaxed font-medium">{t.warning}</p>
            </div>
          </div>
        </div>

        {/* 1. Abstract */}
        <Section id="abstract" title={t.sections.abstract.title} subtitle={t.sections.abstract.subtitle}>
          <div className="prose prose-invert prose-lg max-w-none text-slate-300">
            <p className="leading-relaxed">
              <strong className="text-amber-400">{t.sections.abstract.p1_strong}</strong>{t.sections.abstract.p1_text}
            </p>
            <p className="mt-4 leading-relaxed">
              {t.sections.abstract.p2}<br/>
              <span className="text-amber-500/80 font-semibold">{t.sections.abstract.p2_note}</span>
            </p>
          </div>
        </Section>

        {/* 2. Gameplay */}
        <Section id="gameplay" title={t.sections.gameplay.title} darker>
          <Gameplay lang={lang} />
        </Section>

        {/* 3. Web3 & Rewards */}
        <Section id="rewards" title={t.sections.web3Rewards.title} subtitle={t.sections.web3Rewards.subtitle}>
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-800 rounded-3xl p-8 border border-indigo-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                <div className="flex-shrink-0 bg-indigo-500/20 p-5 rounded-2xl shadow-inner">
                  <Coins className="h-14 w-14 text-indigo-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">{t.sections.web3Rewards.tokenName}</h3>
                  <p className="text-indigo-200 text-lg mb-6">{t.sections.web3Rewards.tokenDesc}</p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-slate-900/60 p-5 rounded-xl border border-indigo-500/10 hover:border-indigo-500/30 transition-all">
                      <div className="flex items-center text-amber-400 font-bold mb-2">
                        <Trophy className="h-5 w-5 mr-2" />
                        {t.sections.web3Rewards.rewardRate}
                      </div>
                      <p className="text-slate-400 text-sm">{t.sections.web3Rewards.rewardDesc}</p>
                    </div>
                    <div className="bg-slate-900/60 p-5 rounded-xl border border-indigo-500/10 hover:border-indigo-500/30 transition-all">
                      <div className="flex items-center text-blue-400 font-bold mb-2">
                        <Wallet className="h-5 w-5 mr-2" />
                        {t.sections.web3Rewards.claimTitle}
                      </div>
                      <p className="text-slate-400 text-sm">{t.sections.web3Rewards.claimDesc}</p>
                    </div>
                    <div className="bg-slate-900/60 p-5 rounded-xl border border-indigo-500/10 hover:border-indigo-500/30 transition-all">
                      <div className="flex items-center text-purple-400 font-bold mb-2">
                        <RefreshCw className="h-5 w-5 mr-2" />
                        {t.sections.web3Rewards.rouletteTitle}
                      </div>
                      <p className="text-slate-400 text-sm">{t.sections.web3Rewards.rouletteDesc}</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a 
                      href="https://www.clanker.world/clanker/0xb0525542e3d818460546332e76e511562dff9b07" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/30 transform hover:-translate-y-1"
                    >
                      {t.sections.web3Rewards.clankerBtn}
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 4. Stamina & Items */}
        <Section id="stamina" title={t.sections.staminaItems.title} subtitle={t.sections.staminaItems.subtitle} darker>
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Stamina Card */}
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-amber-500/20 rounded-xl">
                  <Zap className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t.sections.staminaItems.staminaTitle}</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-900 rounded-2xl border border-slate-700">
                  <span className="text-slate-300 font-medium">{t.sections.staminaItems.staminaMax}</span>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"></div>)}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Consumption</p>
                    <p className="text-slate-200 text-sm">{t.sections.staminaItems.staminaUsage}</p>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Recovery</p>
                    <p className="text-slate-200 text-sm">{t.sections.staminaItems.staminaRegen}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inventory Items */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Package className="h-6 w-6 text-emerald-500" />
                <h3 className="text-xl font-bold text-white">{t.sections.staminaItems.inventoryTitle}</h3>
              </div>
              
              <div className="group bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-emerald-500/40 transition-all cursor-default">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-500/20 transition-colors">
                    <HeartPulse className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.sections.staminaItems.itemVitality.name}</h4>
                    <p className="text-slate-400 text-sm">{t.sections.staminaItems.itemVitality.desc}</p>
                  </div>
                </div>
              </div>

              <div className="group bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-pink-500/40 transition-all cursor-default">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-pink-500/20 transition-colors">
                    <RefreshCw className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.sections.staminaItems.itemRecovery.name}</h4>
                    <p className="text-slate-400 text-sm">{t.sections.staminaItems.itemRecovery.desc}</p>
                  </div>
                </div>
              </div>

              <div className="group bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-cyan-500/40 transition-all cursor-default">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-cyan-500/20 transition-colors">
                    <ShieldCheck className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.sections.staminaItems.itemShield.name}</h4>
                    <p className="text-slate-400 text-sm">{t.sections.staminaItems.itemShield.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 5. Social & Leaderboard */}
        <Section id="social" title={t.sections.social.title}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl text-center border border-slate-700 hover:shadow-xl transition-shadow">
              <div className="mx-auto w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.sections.social.playNow.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.sections.social.playNow.desc}
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl text-center border border-slate-700 hover:shadow-xl transition-shadow">
              <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.sections.social.ranking.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.sections.social.ranking.desc}
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl text-center border border-slate-700 hover:shadow-xl transition-shadow">
              <div className="mx-auto w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-6">
                <Share2 className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.sections.social.share.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.sections.social.share.desc}
              </p>
            </div>
          </div>
        </Section>

        {/* 6. Roadmap */}
        <Section id="roadmap" title={t.sections.roadmap.title} darker>
          <Roadmap lang={lang} />
        </Section>
      </main>

      <Footer lang={lang} />
      
      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 w-full bg-slate-900 border-t border-slate-800 p-4 md:hidden z-40">
        <a 
          href="https://runningchihuahuaai.k0j1.v2002.coreserver.jp/" 
          className="block w-full text-center bg-amber-500 text-slate-900 font-bold py-3 rounded-lg hover:bg-amber-400 transition-colors shadow-lg"
        >
          {t.hero.playButton}
        </a>
      </div>
    </div>
  );
};

export default App;