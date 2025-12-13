import React from 'react';
import { ShieldAlert, ArrowLeftRight, Activity, Skull, Zap, Heart, MousePointerClick, Gauge, Layers, Sparkles } from 'lucide-react';

export const Gameplay: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* 2.1 Core Mechanics */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
          <Activity className="text-amber-500 mr-3 h-8 w-8" />
          2.1 コアメカニクス
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <ArrowLeftRight className="text-blue-400 h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">前方への注意 (DODGE)</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              岩、車、動物などの障害物が流れてきます。これらをタイミングよく回避する必要があります。
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
              <ShieldAlert className="text-red-400 h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">後方への注意 (DUCK)</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              背後のボスがタル、バナナ、火の玉などを投げて攻撃してきます。これらをしゃがんで回避します。
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-amber-400 h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">ボスを倒すには</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              障害物を回避すると、その障害物が後方へ弾き飛ばされ、ボスにダメージを与えます。
            </p>
          </div>
        </div>
      </div>

      {/* 2.2 Boss Battles */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
          <Skull className="text-amber-500 mr-3 h-8 w-8" />
          2.2 ボス戦と進化
        </h3>
        <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-700">
            <div className="p-8 hover:bg-slate-800/50 transition-colors relative group">
              <span className="absolute top-4 right-4 text-xs font-bold text-slate-500">STAGE 1</span>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🦍</div>
              <h4 className="text-xl font-bold text-white mb-2">GORILLA</h4>
              <p className="text-slate-400 text-sm">タルやバナナを投げてくる初期の脅威。</p>
            </div>
            <div className="p-8 hover:bg-slate-800/50 transition-colors relative group">
              <span className="absolute top-4 right-4 text-xs font-bold text-slate-500">STAGE 2</span>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🐆</div>
              <h4 className="text-xl font-bold text-white mb-2">CHEETAH</h4>
              <p className="text-slate-400 text-sm">骨や岩を高速で投げ、猛スピードで追いかける。</p>
            </div>
            <div className="p-8 hover:bg-slate-800/50 transition-colors relative group">
              <span className="absolute top-4 right-4 text-xs font-bold text-slate-500">STAGE 3</span>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🐉</div>
              <h4 className="text-xl font-bold text-white mb-2">DRAGON</h4>
              <p className="text-slate-400 text-sm">空を飛び、火の玉（Fireball）を吐く最強の敵。</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-slate-500 text-sm italic">
          10回ヒットさせるとボスを撃退し、次のステージへ進みます。
        </p>
      </div>

      {/* 2.3 Scoring */}
      <div>
         <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Heart className="text-amber-500 mr-3 h-8 w-8" />
          2.3 スコアリング
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mt-1">
              <span className="text-xs font-bold">1</span>
            </div>
            <div className="ml-4">
              <strong className="text-white block">Distance</strong>
              <span className="text-slate-400 text-sm">どれだけ遠くまで逃げられたかの走行距離。</span>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-amber-500/20 text-amber-400 mt-1">
              <span className="text-xs font-bold">2</span>
            </div>
            <div className="ml-4">
              <strong className="text-white block">Combo</strong>
              <span className="text-slate-400 text-sm">連続回避成功でスコア倍率が上昇。</span>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-red-500/20 text-red-400 mt-1">
              <span className="text-xs font-bold">3</span>
            </div>
            <div className="ml-4">
              <strong className="text-white block">Survival</strong>
              <span className="text-slate-400 text-sm">ハートは3つ。0になるとゲームオーバー。回避するとハートが少し回復します。</span>
            </div>
          </li>
        </ul>
      </div>

      {/* 2.4 Controls & UI System */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
          <MousePointerClick className="text-amber-500 mr-3 h-8 w-8" />
          2.4 操作・UIシステム
        </h3>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* UI Elements */}
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <Layers className="mr-2 h-5 w-5 text-blue-400" />
              HUD / UI表示
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                <div className="flex items-center text-slate-300">
                  <Heart className="h-5 w-5 text-red-500 mr-3" />
                  <span>ライフ (Hearts)</span>
                </div>
                <span className="text-sm text-slate-500">最大3つ。被弾で減少。</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                <div className="flex items-center text-slate-300">
                  <Activity className="h-5 w-5 text-green-500 mr-3" />
                  <span>スコア & 距離</span>
                </div>
                <span className="text-sm text-slate-500">リアルタイム更新。</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                <div className="flex items-center text-slate-300">
                  <Zap className="h-5 w-5 text-yellow-500 mr-3" />
                  <span>コンボ</span>
                </div>
                <span className="text-sm text-slate-500">連続回避で増加。</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                <div className="flex items-center text-slate-300">
                  <Gauge className="h-5 w-5 text-cyan-500 mr-3" />
                  <span>スピード</span>
                </div>
                <span className="text-sm text-slate-500">現在の走行速度を表示。</span>
              </div>
            </div>
          </div>

          {/* Actions & Effects */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
               <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                <MousePointerClick className="mr-2 h-5 w-5 text-amber-400" />
                アクションボタン
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-900 rounded-lg border border-slate-800 hover:border-amber-500/30 transition-colors">
                  <div className="inline-block px-3 py-1 bg-amber-600 text-white font-black italic rounded mb-2 transform -skew-x-12">
                    DODGE!
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    障害物が近づくと出現。<br/>タップで回避。
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-900 rounded-lg border border-slate-800 hover:border-amber-500/30 transition-colors">
                  <div className="inline-block px-3 py-1 bg-red-600 text-white font-black italic rounded mb-2 transform -skew-x-12">
                    DUCK!
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    飛び道具が近づくと出現。<br/>タップで回避。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};