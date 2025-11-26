export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
  status: 'In Development' | 'Completed' | 'Prototype' | 'On Hold';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  type: 'Work' | 'Volunteering' | 'Academic';
}

export interface Skill {
  name: string;
  category: 'Language' | 'Engine' | 'Tool' | 'Soft Skill';
  level: number; // 0-100
}