import { RoadmapItem, NavItem } from '../types';

export const content = {
  ja: {
    warning: "このゲームはファーカスター上でのプレイを推奨しています。メタマスクなどその他のウォレットをつないでのプレイは推奨しません。トークンのクレームやランキングへの記載など、システム面の動作を保証しません。",
    nav: [
      { label: '概要', href: '#abstract' },
      { label: 'ゲームプレイ', href: '#gameplay' },
      { label: '報酬・Web3', href: '#rewards' },
      { label: 'スタミナ・アイテム', href: '#stamina' },
      { label: 'ソーシャル', href: '#social' },
      { label: 'ロードマップ', href: '#roadmap' },
    ],
    hero: {
      version: "Version 1.0 Available",
      title: "Running Chihuahua",
      subtitle: "3Dランナー × トークン\nFarcaster Frames上で動作する、次世代の「追いかけっこ」",
      playButton: "Play Game Now",
      readButton: "Read Litepaper"
    },
    sections: {
      abstract: {
        title: "1. 概要 (Abstract)",
        subtitle: "Web3時代の新しいランナーゲーム体験",
        p1_strong: "Running Chihuahua",
        p1_text: " は、Farcaster Frames および Webブラウザ上で動作する、3Dランナーゲームです。",
        p2: "プレイヤーは勇敢なチワワとなり、背後から迫りくる巨大なボス（ゴリラ、チーター、ドラゴン）から逃げ続けなければなりません。前方から現れる障害物を「ドッジ（回避）」し、後方からの攻撃を「ダック（しゃがみ）」で避けながら、生存距離とスコアを競います。",
        p2_note: "※Phase１～スコアによってチワワトークンが発行されます。"
      },
      gameplay: {
        title: "2. ゲームプレイ (Gameplay)"
      },
      web3Rewards: {
        title: "3. Web3 & 報酬システム ($CHH)",
        subtitle: "Baseネットワークと完全に統合された報酬エコシステム",
        tokenName: "$CHH (Running Chihuahua Token)",
        tokenDesc: "Baseチェーン上でClankerによって展開された独自トークンです。",
        rewardRate: "5% 報酬還元",
        rewardDesc: "1回のランで獲得したスコアの 5% が $CHHトークンとして計算され、付与されます。",
        claimTitle: "即時Claim (請求)",
        claimDesc: "ラン終了後、Baseネットワーク上のスマートコントラクトを通じて即座にウォレットへ請求が可能です。",
        rouletteTitle: "24h ログインボーナス",
        rouletteDesc: "24時間ごとに1回、ルーレットを回して強力なアイテムを獲得できます（オンチェーンでの権利確認を含む）。",
        clankerBtn: "Clankerで詳細を見る"
      },
      staminaItems: {
        title: "4. スタミナ & アイテム",
        subtitle: "戦略的なプレイを可能にするリソース管理",
        staminaTitle: "スタミナシステム",
        staminaMax: "最大 5 スタミナ",
        staminaUsage: "1回のプレイで 1スタミナを消費",
        staminaRegen: "2時間ごとに 1スタミナが自然回復",
        inventoryTitle: "インベントリ (アイテム)",
        itemVitality: { name: "Vitality (活力)", desc: "初期ライフが3から4に増加。" },
        itemRecovery: { name: "Recovery (回復)", desc: "障害物を回避するたびにHPが0.2回復。" },
        itemShield: { name: "Shield (シールド)", desc: "プレイ中に任意のタイミングで使用でき、ダメージを1回完全に無効化。" }
      },
      social: {
        title: "5. ソーシャル機能 (Social)",
        playNow: { title: "Play Now", desc: "ウォレット接続ですぐに簡単にプレイ可能。" },
        ranking: { title: "Global Ranking", desc: "「High Score (最高得点)」ランキングを提供。トップランナーを目指そう。" },
        share: { title: "Share to Farcaster", desc: "ゲームオーバー時、リザルトをワンタップで投稿。" }
      },
      roadmap: {
        title: "6. ロードマップ (Roadmap)"
      }
    },
    gameplay: {
      core: {
        title: "2.1 コアメカニクス",
        dodge: { title: "前方への注意 (DODGE)", desc: "岩、車、動物などの障害物が流れてきます。これらをタイミングよく回避する必要があります。" },
        duck: { title: "後方への注意 (DUCK)", desc: "背後のボスがタル、バナナ、火の玉などを投げて攻撃してきます。これらをしゃがんで回避します。" },
        boss: { title: "ボスを倒すには", desc: "障害物を回避すると、その障害物が後方へ弾き飛ばされ、ボスにダメージを与えます。" }
      },
      bosses: {
        title: "2.2 ボス戦と進化",
        g: { name: "GORILLA", desc: "タルやバナナを投げてくる初期の脅威。" },
        c: { name: "CHEETAH", desc: "骨や岩を高速で投げ、猛スピードで追いかける。" },
        d: { name: "DRAGON", desc: "空を飛び、火の玉（Fireball）を吐く最強の敵。" },
        note: "10回ヒットさせるとボスを撃退し、次のステージへ進みます。"
      },
      scoring: {
        title: "2.3 スコアリング",
        distance: { title: "Distance", desc: "どれだけ遠くまで逃げられたかの走行距離。" },
        combo: { title: "Combo", desc: "連続回避成功でスコア倍率が上昇。" },
        survival: { title: "Survival", desc: "ハートは3つ。0になるとゲームオーバー。回避するとハートが少し回復します。" }
      },
      controls: {
        title: "2.4 操作・UIシステム",
        hud: {
          title: "HUD / UI表示",
          hearts: { title: "ライフ (Hearts)", desc: "最大3つ。被弾で減少。" },
          score: { title: "スコア & 距離", desc: "リアルタイム更新。" },
          combo: { title: "コンボ", desc: "連続回避で増加。" },
          speed: { title: "スピード", desc: "現在の走行速度を表示。" }
        },
        actions: {
          title: "アクションボタン",
          dodge: { text: "障害物が近づくと出現。\nタップで回避。" },
          duck: { text: "飛び道具が近づくと出現。\nタップで回避。" }
        },
        effects: {
          title: "コミック演出 (Cut-In)",
          desc: "回避成功時に\"WHOOSH!\" \"ZOOM!\"などのアメコミ風文字エフェクトが表示され、爽快感を演出します。"
        }
      }
    },
    footer: {
      slogan: "Run for your life, run for the glory."
    },
    roadmapItems: [
      {
        phase: 'Phase 0',
        title: 'ローンチ',
        status: 'completed',
        items: ['ランニングチワワアプリ ローンチ', '3種類のボス (Gorilla, Cheetah, Dragon) 実装', 'ランキング実装']
      },
      {
        phase: 'Phase 1',
        title: 'チワワトークン配布開始',
        status: 'completed',
        items: ['12/下旬からチワワトークン配布開始']
      },
      {
        phase: 'Phase 2',
        title: 'トークン用途追加 (Current)',
        status: 'current',
        items: ['1月 ランニングチワワ チワワトークン仕様用途追加']
      },
      {
        phase: 'Phase 3',
        title: 'ゲーム第2弾開発開始',
        status: 'future',
        items: ['2月 チワワトークン ゲーム第2弾開発開始']
      },
      {
        phase: 'Phase 4',
        title: 'ゲーム第2弾ローンチ',
        status: 'future',
        items: ['3月 チワワトークン ゲーム第2弾ローンチ']
      },
      {
        phase: 'Phase 5',
        title: '価値向上プロジェクト',
        status: 'future',
        items: ['未定 チワワトークン価値向上プロジェクト開始']
      }
    ] as RoadmapItem[]
  },
  en: {
    warning: "This game is recommended for play on Farcaster. We do not recommend connecting other wallets such as MetaMask. We cannot guarantee system functionality, including token claims or ranking entries.",
    nav: [
      { label: 'Abstract', href: '#abstract' },
      { label: 'Gameplay', href: '#gameplay' },
      { label: 'Rewards/Web3', href: '#rewards' },
      { label: 'Stamina/Items', href: '#stamina' },
      { label: 'Social', href: '#social' },
      { label: 'Roadmap', href: '#roadmap' },
    ],
    hero: {
      version: "Version 1.0 Available",
      title: "Running Chihuahua",
      subtitle: "3D Runner × Token\nNext-gen chase game running on Farcaster Frames",
      playButton: "Play Game Now",
      readButton: "Read Litepaper"
    },
    sections: {
      abstract: {
        title: "1. Abstract",
        subtitle: "A New Runner Game Experience for the Web3 Era",
        p1_strong: "Running Chihuahua",
        p1_text: " is a 3D runner game that runs on Farcaster Frames and web browsers.",
        p2: "Players become a brave Chihuahua and must keep running from giant bosses (Gorilla, Cheetah, Dragon) approaching from behind. Dodge obstacles appearing from the front and 'Duck' under attacks from behind to compete for survival distance and score.",
        p2_note: "*From Phase 1, Chihuahua Tokens will be issued based on score."
      },
      gameplay: {
        title: "2. Gameplay"
      },
      web3Rewards: {
        title: "3. Web3 & Rewards ($CHH)",
        subtitle: "A Reward Ecosystem Fully Integrated with the Base Network",
        tokenName: "$CHH (Running Chihuahua Token)",
        tokenDesc: "A unique token deployed via Clanker on the Base chain.",
        rewardRate: "5% Reward Rate",
        rewardDesc: "5% of your score from a single run is calculated and awarded as $CHH tokens.",
        claimTitle: "Instant Claim",
        claimDesc: "Claim tokens instantly to your wallet via smart contracts on the Base network after each run.",
        rouletteTitle: "24h Login Bonus",
        rouletteDesc: "Spin the roulette once every 24 hours to win powerful items (includes on-chain entitlement checks).",
        clankerBtn: "View on Clanker"
      },
      staminaItems: {
        title: "4. Stamina & Items",
        subtitle: "Resource Management for Strategic Gameplay",
        staminaTitle: "Stamina System",
        staminaMax: "Max 5 Stamina",
        staminaUsage: "Consumes 1 stamina per play",
        staminaRegen: "Regenerates 1 stamina every 2 hours",
        inventoryTitle: "Inventory (Items)",
        itemVitality: { name: "Vitality", desc: "Increases initial hearts from 3 to 4." },
        itemRecovery: { name: "Recovery", desc: "Recovers 0.2 HP for every obstacle successfully dodged." },
        itemShield: { name: "Shield", desc: "Can be used at any time to completely nullify damage once." }
      },
      social: {
        title: "5. Social Features",
        playNow: { title: "Play Now", desc: "Easy to play immediately with wallet connection." },
        ranking: { title: "Global Ranking", desc: "Provides 'High Score' ranking. Aim to be the top runner." },
        share: { title: "Share to Farcaster", desc: "Post results with one tap when game over." }
      },
      roadmap: {
        title: "6. Roadmap"
      }
    },
    gameplay: {
      core: {
        title: "2.1 Core Mechanics",
        dodge: { title: "Forward Attention (DODGE)", desc: "Obstacles like rocks, cars, and animals will flow towards you. You must dodge these at the right timing." },
        duck: { title: "Rear Attention (DUCK)", desc: "The boss behind you will attack by throwing barrels, bananas, fireballs, etc. You must duck to avoid these." },
        boss: { title: "Defeating Bosses", desc: "When you dodge an obstacle, it is knocked backward, dealing damage to the boss." }
      },
      bosses: {
        title: "2.2 Boss Battles & Evolution",
        g: { name: "GORILLA", desc: "The initial threat throwing barrels and bananas." },
        c: { name: "CHEETAH", desc: "Throws bones and rocks at high speed, chasing with immense velocity." },
        d: { name: "DRAGON", desc: "The strongest enemy that flies and breathes Fireballs." },
        note: "Hit the boss 10 times to repel them and advance to the next stage."
      },
      scoring: {
        title: "2.3 Scoring",
        distance: { title: "Distance", desc: "The running distance of how far you escaped." },
        combo: { title: "Combo", desc: "Score multiplier increases with consecutive successful dodges." },
        survival: { title: "Survival", desc: "You have 3 hearts. Game over when they reach 0. Dodging slightly recovers hearts." }
      },
      controls: {
        title: "2.4 Controls & UI System",
        hud: {
          title: "HUD / UI Display",
          hearts: { title: "Hearts", desc: "Max 3. Decreases on hit." },
          score: { title: "Score & Distance", desc: "Real-time updates." },
          combo: { title: "Combo", desc: "Increases with consecutive dodges." },
          speed: { title: "Speed", desc: "Displays current running speed." }
        },
        actions: {
          title: "Action Buttons",
          dodge: { text: "Appears when obstacles approach.\nTap to dodge." },
          duck: { text: "Appears when projectiles approach.\nTap to dodge." }
        },
        effects: {
          title: "Comic Effects (Cut-In)",
          desc: "American comic style text effects like \"WHOOSH!\" and \"ZOOM!\" appear on successful evasion."
        }
      }
    },
    footer: {
      slogan: "Run for your life, run for the glory."
    },
    roadmapItems: [
      {
        phase: 'Phase 0',
        title: 'Launch',
        status: 'completed',
        items: ['Running Chihuahua App Launch', '3 Bosses (Gorilla, Cheetah, Dragon) Implemented', 'Ranking Implemented']
      },
      {
        phase: 'Phase 1',
        title: 'Token Distribution Starts',
        status: 'completed',
        items: ['Late Dec: Chihuahua Token distribution begins']
      },
      {
        phase: 'Phase 2',
        title: 'Token Utility Added (Current)',
        status: 'current',
        items: ['Jan: Running Chihuahua Token utility added']
      },
      {
        phase: 'Phase 3',
        title: '2nd Game Dev Starts',
        status: 'future',
        items: ['Feb: Chihuahua Token Game #2 development starts']
      },
      {
        phase: 'Phase 4',
        title: '2nd Game Launch',
        status: 'future',
        items: ['Mar: Chihuahua Token Game #2 Launch']
      },
      {
        phase: 'Phase 5',
        title: 'Value Increase Project',
        status: 'future',
        items: ['TBD: Chihuahua Token value increase project starts']
      }
    ] as RoadmapItem[]
  }
};