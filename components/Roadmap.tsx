import React from 'react';
import { RoadmapItem } from '../types';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const roadmapData: RoadmapItem[] = [
  {
    phase: 'Phase 0',
    title: 'ローンチ (Current)',
    status: 'completed',
    items: [
      'ランニングチワワアプリ ローンチ',
      '3種類のボス (Gorilla, Cheetah, Dragon) 実装',
      'ランキング実装'
    ]
  },
  {
    phase: 'Phase 1',
    title: 'チワワトークン配布開始',
    status: 'future',
    items: [
      '12/下旬からチワワトークン配布開始'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'トークン用途追加',
    status: 'future',
    items: [
      '1月 ランニングチワワ チワワトークン仕様用途追加'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'ゲーム第2弾開発開始',
    status: 'future',
    items: [
      '2月 チワワトークン ゲーム第2弾開発開始'
    ]
  },
  {
    phase: 'Phase 4',
    title: 'ゲーム第2弾ローンチ',
    status: 'future',
    items: [
      '3月 チワワトークン ゲーム第2弾ローンチ'
    ]
  },
  {
    phase: 'Phase 5',
    title: '価値向上プロジェクト',
    status: 'future',
    items: [
      '未定 チワワトークン価値向上プロジェクト開始'
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
          
          <div className="flex flex-col sm:flex-row sm:items-center mb-2">
            <span className={`inline-block w-fit text-xs font-bold uppercase tracking-wider px-2 py-1 rounded mb-2 sm:mb-0 sm:mr-3 ${
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
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> : 
                  item.status === 'current' ?
                  <Clock className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" /> :
                  <Circle className="h-5 w-5 text-slate-600 mr-2 flex-shrink-0 mt-0.5" />
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