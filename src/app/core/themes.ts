import { Theme } from './models';

/**
 * Accents de section et de catégorie. Teintes profondes et désaturées,
 * accordées au fond papier : aucune ne prend le dessus sur les autres.
 */
export const THEMES = {
  clay: { color: '#2563eb' },
  forest: { color: '#0369a1' },
  indigo: { color: '#1e4080' },
  ochre: { color: '#0ea5e9' },
} satisfies Record<string, Theme>;
