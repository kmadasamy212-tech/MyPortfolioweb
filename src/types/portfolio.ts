export interface SkillItem {
  name: string;
  category: 'languages' | 'web' | 'frameworks' | 'version_control' | 'data_analytics' | 'databases' | 'core_cs';
  categoryLabel: string;
  tag: string;
  description: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  metrics?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  hasInteractiveDemo: boolean;
  demoType: 'ml_predictor' | 'expense_tracker';
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  expectedGraduation: string;
  description: string;
  coursework: string[];
  highlights: string[];
}

export interface CapabilityItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  technologies: string[];
  deliverables: string[];
}
