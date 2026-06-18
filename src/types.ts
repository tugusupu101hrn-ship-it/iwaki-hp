/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AppView = 'home' | 'maternity' | 'bridal' | 'gallery' | 'estimator' | 'contact' | 'corporate';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'maternity' | 'bridal' | 'scenic' | 'drone' | 'video';
  imageUrl: string;
  description: string;
  location: string;
  isCustomGenerated?: boolean;
}

export interface PlanItem {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  description: string;
  recommended?: boolean;
  imageUrl?: string;
}

export interface QuoteInput {
  planType: 'maternity' | 'bridal' | 'drone' | 'comprehensive';
  hasDrone: boolean;
  hasVideoEdit: boolean;
  location: string;
  durationHours: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  category: 'maternity' | 'bridal' | 'corporate';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  preferredDate: string;
  location: string;
  message: string;
}

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
  youtubeId?: string;
  description?: string;
  subtitle?: string;
  challenge?: string;
  approach?: string;
  execution?: string;
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

export interface AiPlanContext {
  formData: PlannerFormData;
  strategy: StrategyResponse;
}
