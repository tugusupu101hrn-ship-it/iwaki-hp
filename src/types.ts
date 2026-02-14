import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
  description?: string;
}

export interface StrategyResponse {
  concept: string;
  tone: string;
  storyline: string[];
  recommendedStyle: string;
}

export interface PlannerFormData {
  companyName: string;
  industry: string;
  coreValue: string;
  targetAudience: string;
}
