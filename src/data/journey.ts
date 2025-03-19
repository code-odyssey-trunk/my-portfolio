import {
  faCode,
  faLightbulb,
  faFaceSmile,
} from '@fortawesome/free-solid-svg-icons';
import { JourneyItem } from '@/types/journey';

export const journey: JourneyItem[] = [
  {
    title: 'The Path to Development',
    description:
      "From my first website to a developer in Germany, my journey blends curiosity, problem-solving, and learning. With over a decade of experience, I've worked on everything from frontend apps to scalable systems.",
    icon: faCode,
  },
  {
    title: 'My Work Philosophy & Values',
    description:
      "I write code that's functional, maintainable, and scalable. Rooted in simplicity and efficiency, I focus on lasting, user-centric solutions, whether for a startup MVP or a large-scale system.",
    icon: faLightbulb,
  },
  {
    title: 'What Shapes My Approach',
    description:
      'My approach is shaped by diverse experiences. I explore tech&apos;s potential to solve real-world problems through efficient apps and intuitive UI. I share insights on Instagram and YouTube.',
    icon: faFaceSmile,
  },
];
