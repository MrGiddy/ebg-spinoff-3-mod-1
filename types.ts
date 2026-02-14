import { LucideIcon } from 'lucide-react';

export interface ServiceOffering {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  features: string[];
  imageUrl: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
  offerings: ServiceOffering[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  location?: string;
  date?: string;
  client?: string;
  challenge?: string;
  solution?: string;
  result?: string;
}

export interface NavItem {
  label: string;
  href: string;
}