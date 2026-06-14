export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  live?: string;
  image?: string;
  featured: boolean;
  caseStudy: boolean;
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  highlights: string[];
  stack: string[];
};

export type Education = {
  school: string;
  program: string;
  start: string;
  end: string;
  details: string[];
};

export type SkillGroup = {
  label: string;
  skills: string[];
};
