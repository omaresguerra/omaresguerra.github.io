export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  role: string;
  impact?: string[];
  keyFeatures?: string[];
  links?: {
    demo?: string;
    github?: string;
    thesis?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  credential: string;
  institution: string;
  period: string;
  details?: string[];
}

export interface ResearchItem {
  id: string;
  title: string;
  agency: string;
  type: string;
  year: string;
  contribution: string;
  tags: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
}
