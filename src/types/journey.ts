import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Types for journey section
export interface JourneyItem {
  title: string;
  description: string | React.ReactNode;
  icon: IconDefinition; // Use the specific type for FontAwesome icons
}
