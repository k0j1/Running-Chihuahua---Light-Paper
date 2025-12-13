import React from 'react';
import { Box, Code2, Database, Share2 } from 'lucide-react';

export const TechStack: React.FC = () => {
  const techs = [
    {
      title: 'Frontend Engine',
      tech: 'React 19 + Three.js',
      desc: '@react-three/fiber を使用し、軽量かつ高品質な3Dグラフィックスをブラウザ上で実現。',
      icon: Box
    },
    {
      title: 'Social Layer',
      tech: 'Farcaster Frame SDK (v2)',
      desc: 'クライアント内でシームレスに動作。FID、PFPの自動取得とソーシャルグラフ連携。',
      icon: Share2
    },
    {
      title: 'Backend / Database',
      tech: 'Supabase',
      desc: 'グローバルランキング、プレイヤー統計（累計スコア、累計走行距離）の永続化とリアルタイム更新。',
      icon: Database
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {techs.map((item, index) => (
        <div key={index} className="flex p-6 bg-slate-800 rounded-xl border border-slate-700 hover:shadow-lg hover:shadow-amber-500/10 transition-all">
          <div className="flex-shrink-0 mr-6">
            <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center border border-slate-600">
              <item.icon className="h-7 w-7 text-amber-500" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <div className="text-amber-400 font-mono text-sm mb-2">{item.tech}</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
      <div className="md:col-span-2 mt-4 p-6 bg-slate-900/50 rounded-xl border border-dashed border-slate-700">
        <h4 className="text-white font-bold mb-2">Web3 Integration</h4>
        <p className="text-slate-400 text-sm">
          Ethereum Wallet Connectに対応。ウォレットアドレスによる本人確認と、将来的なオンチェーンリワードへの基盤を提供。
        </p>
      </div>
    </div>
  );
};