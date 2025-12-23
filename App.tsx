import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Gameplay } from './components/Gameplay';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';
import { Users, BarChart3, Share2, AlertTriangle, Coins, ExternalLink } from 'lucide-react';
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

        {/* Warning Section */}
        <div className="bg-slate-900 pt-10 pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 flex items-start space-x-3">
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
              {t.sections.abstract.p2_note}
            </p>
          </div>
        </Section>

        {/* 2. Gameplay */}
        <Section id="gameplay" title={t.sections.gameplay.title} darker>
          <Gameplay lang={lang} />
        </Section>

        {/* 3. Token & Rewards */}
        <Section id="token" title={t.sections.token.title}>
          <div className="bg-gradient-to-br from-indigo-900/50 to-slate-800 rounded-2xl p-8 border border-indigo-500/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 bg-indigo-500/20 p-4 rounded-xl">
                  <Coins className="h-12 w-12 text-indigo-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">{t.sections.token.name}</h3>
                  <p className="text-indigo-200 text-lg mb-6">{t.sections.token.desc}</p>
                  
                  <div className="bg-slate-900/50 rounded-lg p-5 border border-slate-700 mb-6">
                    <p className="text-slate-300 leading-relaxed">
                      {t.sections.token.earn}
                    </p>
                  </div>

                  <a 
                    href="https://www.clanker.world/clanker/0xb0525542e3d818460546332e76e511562dff9b07" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-indigo-600/20"
                  >
                    {t.sections.token.clankerBtn}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 4. Social & Leaderboard */}
        <Section id="social" title={t.sections.social.title} darker>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700">
              <div className="mx-auto w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.sections.social.playNow.title}</h3>
              <p className="text-slate-400 text-sm">
                {t.sections.social.playNow.desc}
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700">
              <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.sections.social.ranking.title}</h3>
              <p className="text-slate-400 text-sm">
                {t.sections.social.ranking.desc}
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700">
              <div className="mx-auto w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-4">
                <Share2 className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.sections.social.share.title}</h3>
              <p className="text-slate-400 text-sm">
                {t.sections.social.share.desc}
              </p>
            </div>
          </div>
        </Section>

        {/* 5. Roadmap */}
        <Section id="roadmap" title={t.sections.roadmap.title}>
          <Roadmap lang={lang} />
        </Section>
      </main>

      <Footer lang={lang} />
      
      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 w-full bg-slate-900 border-t border-slate-800 p-4 md:hidden z-40">
        <a 
          href="https://runningchihuahuaai.k0j1.v2002.coreserver.jp/" 
          className="block w-full text-center bg-amber-500 text-slate-900 font-bold py-3 rounded-lg hover:bg-amber-400 transition-colors"
        >
          {t.hero.playButton}
        </a>
      </div>
    </div>
  );
};

export default App;