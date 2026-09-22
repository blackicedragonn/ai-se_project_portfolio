export interface Profile {
  firstName: string;
  lastName: string;
  title: string;
  bio: string[];
  email: string;
  locationText: string;
  locationUrl: string;
  resume: string;
  githubUrl: string;
  linkedinUrl: string;
  facebookUrl: string;
}

export interface Project {
  id: string;
  name: string;
  description: string[];
  image: string;
  codeUrl: string;
  liveUrl: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
