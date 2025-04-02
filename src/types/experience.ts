// Types for work experience data

export interface WorkExperience {
  profession: string;
  company: string;
  place: string;
  date: string;
  logo: string;
  description?: string;
  skills?: string[]
}

export interface Education {
  degree: string;
  institution: string;
  place: string;
  date: string;
  logo?: string;
}
