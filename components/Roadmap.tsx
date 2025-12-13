import React from 'react';
import { RoadmapItem } from '../types';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const roadmapData: RoadmapItem[] = [
  {
    phase: 'Phase 1',
    title: 'ローンチ (Current)',
    status: 'completed',
    items: [
      '基本ゲームループの実装',
      '3種類のボス (Gorilla, Cheetah, Dragon) 実装',
      'Farcaster Frame v2 対応',
      'Supabaseによるランキング実装'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'AI機能の拡張',
    status: 'current',
    items: [
      'Gemini APIを用いた「チワワの心の声」多様化',
      'レース展開に応じたリアルタイム実況機能の強化',
      'AIによる動的な難易度調整（調査中）'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'エコシステム拡大',
    status: 'future',
    items: [
      'NFT保有者限定のキャラクタースキン機能',
      'ランキング上位者へのトークン/NFTエアドロップ',
      'シーズン制ランキングの導入'
    ]
  }
];

export const Roadmap: React.FC = () => {
  return (
    <div className="relative border-l-4 border-slate-700 ml-4 md:ml-8 space-y-12 py-4">
      {roadmapData.map((item, index) => (
        <div key={index} className="relative pl-8 md:pl-12">
          {/* Node Icon */}
          <div className={`absolute -left-[14px] top-1 h-6 w-6 rounded-full border-4 ${
            item.status === 'completed' ? 'bg-green-500 border-slate-900' :
            item.status === 'current' ? 'bg-amber-500 border-slate-900 animate-pulse' :
            'bg-slate-700 border-slate-900'
          }`} />
          
          <div className="flex items-center mb-2">
            <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded mr-3 ${
              item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
              item.status === 'current' ? 'bg-amber-500/20 text-amber-400' :
              'bg-slate-700 text-slate-400'
            }`}>
              {item.phase}
            </span>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
          </div>
          
          <ul className="space-y-2 mt-4">
            {item.items.map((subItem, idx) => (
              <li key={idx} className="flex items-start text-slate-300">
                {item.status === 'completed' ? 
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" /> : 
                  item.status === 'current' ?
                  <Clock className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" /> :
                  <Circle className="h-5 w-5 text-slate-600 mr-2 flex-shrink-0" />
                }
                <span className="text-sm md:text-base">{subItem}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};