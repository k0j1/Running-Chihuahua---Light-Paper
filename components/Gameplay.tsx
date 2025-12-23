import React from 'react';
import { ShieldAlert, ArrowLeftRight, Activity, Skull, Zap, Heart, MousePointerClick, Gauge, Layers, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface GameplayProps {
  lang: Language;
}

export const Gameplay: React.FC<GameplayProps> = ({ lang }) => {
  const t = content[lang].gameplay;

  return (
    <div className="space-y-16">
      {/* 2.1 Core Mechanics */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
          <Activity className="text-amber-500 mr-3 h-8 w-8" />
          {t.core.title}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <ArrowLeftRight className="text-blue-400 h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{t.core.dodge.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.core.dodge.desc}
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
              <ShieldAlert className="text-red-400 h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{t.core.duck.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.core.duck.desc}
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-amber-400 h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{t.core.boss.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.core.boss.desc}
            </p>
          </div>
        </div>
      </div>

      {/* 2.2 Boss Battles */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
          <Skull className="text-amber-500 mr-3 h-8 w-8" />
          {t.bosses.title}
        </h3>
        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-700">
            <div className="p-8 hover:bg-slate-800/50 transition-colors relative group">
              <span className="absolute top-4 right-4 text-xs font-bold text-slate-500">STAGE 1</span>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🦍</div>
              <h4 className="text-xl font-bold text-white mb-2">{t.bosses.g.name}</h4>
              <p className="text-slate-400 text-sm">{t.bosses.g.desc}</p>
            </div>
            <div className="p-8 hover:bg-slate-800/50 transition-colors relative group">
              <span className="absolute top-4 right-4 text-xs font-bold text-slate-500">STAGE 2</span>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🐆</div>
              <h4 className="text-xl font-bold text-white mb-2">{t.bosses.c.name}</h4>
              <p className="text-slate-400 text-sm">{t.bosses.c.desc}</p>
            </div>
            <div className="p-8 hover:bg-slate-800/50 transition-colors relative group">
              <span className="absolute top-4 right-4 text-xs font-bold text-slate-500">STAGE 3</span>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🐉</div>
              <h4 className="text-xl font-bold text-white mb-2">{t.bosses.d.name}</h4>
              <p className="text-slate-400 text-sm">{t.bosses.d.desc}</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-slate-500 text-sm italic">
          {t.bosses.note}
        </p>
      </div>

      {/* 2.3 Scoring */}
      <div>
         <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Heart className="text-amber-500 mr-3 h-8 w-8" />
          {t.scoring.title}
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mt-1">
              <span className="text-xs font-bold">1</span>
            </div>
            <div className="ml-4">
              <strong className="text-white block">{t.scoring.distance.title}</strong>
              <span className="text-slate-400 text-sm">{t.scoring.distance.desc}</span>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-amber-500/20 text-amber-400 mt-1">
              <span className="text-xs font-bold">2</span>
            </div>
            <div className="ml-4">
              <strong className="text-white block">{t.scoring.combo.title}</strong>
              <span className="text-slate-400 text-sm">{t.scoring.combo.desc}</span>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-red-500/20 text-red-400 mt-1">
              <span className="text-xs font-bold">3</span>
            </div>
            <div className="ml-4">
              <strong className="text-white block">{t.scoring.survival.title}</strong>
              <span className="text-slate-400 text-sm">{t.scoring.survival.desc}</span>
            </div>
          </li>
        </ul>
      </div>

      {/* 2.4 Controls & UI System */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
          <MousePointerClick className="text-amber-500 mr-3 h-8 w-8" />
          {t.controls.title}
        </h3>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* UI Elements */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <Layers className="mr-2 h-5 w-5 text-blue-400" />
              {t.controls.hud.title}
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                <div className="flex items-center text-slate-300">
                  <Heart className="h-5 w-5 text-red-500 mr-3" />
                  <span>{t.controls.hud.hearts.title}</span>
                </div>
                <span className="text-sm text-slate-500">{t.controls.hud.hearts.desc}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                <div className="flex items-center text-slate-300">
                  <Activity className="h-5 w-5 text-green-500 mr-3" />
                  <span>{t.controls.hud.score.title}</span>
                </div>
                <span className="text-sm text-slate-500">{t.controls.hud.score.desc}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                <div className="flex items-center text-slate-300">
                  <Zap className="h-5 w-5 text-yellow-500 mr-3" />
                  <span>{t.controls.hud.combo.title}</span>
                </div>
                <span className="text-sm text-slate-500">{t.controls.hud.combo.desc}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                <div className="flex items-center text-slate-300">
                  <Gauge className="h-5 w-5 text-cyan-500 mr-3" />
                  <span>{t.controls.hud.speed.title}</span>
                </div>
                <span className="text-sm text-slate-500">{t.controls.hud.speed.desc}</span>
              </div>
            </div>
          </div>

          {/* Actions & Effects */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
               <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                <MousePointerClick className="mr-2 h-5 w-5 text-amber-400" />
                {t.controls.actions.title}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-900 rounded-lg border border-slate-800 hover:border-amber-500/30 transition-colors">
                  <div className="inline-block px-3 py-1 bg-amber-600 text-white font-black italic rounded mb-2 transform -skew-x-12">
                    DODGE!
                  </div>
                  <p className="text-xs text-slate-400 mt-2 whitespace-pre-wrap">
                    {t.controls.actions.dodge.text}
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-900 rounded-lg border border-slate-800 hover:border-amber-500/30 transition-colors">
                  <div className="inline-block px-3 py-1 bg-red-600 text-white font-black italic rounded mb-2 transform -skew-x-12">
                    DUCK!
                  </div>
                  <p className="text-xs text-slate-400 mt-2 whitespace-pre-wrap">
                    {t.controls.actions.duck.text}
                  </p>
                </div>
              </div>
            </div>

            {/* Comic Effects */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
               <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                <Sparkles className="mr-2 h-5 w-5 text-purple-400" />
                {t.controls.effects.title}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                {t.controls.effects.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};