import { ReactNode } from 'react';
import BadgeStory from './Badge/Badge.stories';

export type Category = 'display' | 'input' | 'feedback' | 'layout';

export interface RegistryEntry {
  name: string;
  category: Category;
  render: () => ReactNode;
}

export const components: RegistryEntry[] = [
  { name: 'Badge', category: 'display', render: BadgeStory.render },
];
