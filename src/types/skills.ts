// Types for skills data

export type SkillType = 'top' | 'normal' | 'soft';

export interface Skill {
  name: string;
  type: SkillType;
  percentage: string;
  image: string;
  altText: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}
