import React from 'react';

export type Language = 'ja' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  items: string[];
  status: 'completed' | 'current' | 'future';
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: React.ElementType;
}