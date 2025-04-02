// Types for skills data

export type SkillType = 'top' | 'normal' | 'soft';

export interface Skill {
  name: string;
  image: string;
  altText: string;
  percentage: string;
  type: SkillType;
  experiences?: number[];  // Array of indices referencing workExperience array
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}
