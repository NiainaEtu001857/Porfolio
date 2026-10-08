import { THEMES } from './themes';

/**
 * Couleur de marque de chaque techno, assombrie quand il le faut pour rester
 * lisible sur fond clair (le badge réutilise la même teinte en fond et en bordure).
 */
const TECH_COLORS: Record<string, string> = {
  // Back-end
  Java: '#c2600c',
  'Spring Boot': '#3f7a19',
  'API REST': '#0369a1',
  JWT: '#7c3aed',
  OAuth2: '#1e5f8e',
  RBAC: '#475569',
  'Node.js': '#166534',
  Express: '#374151',
  NestJS: '#c4123f',

  // Front-end
  Angular: '#dd0031',
  React: '#0e7490',
  TypeScript: '#1d4ed8',
  JavaScript: '#a16207',
  Ionic: '#1a5fd0',
  'Tailwind CSS': '#0369a1',

  // Données
  PostgreSQL: '#1e5f8e',
  MySQL: '#0a5c7a',
  MongoDB: '#137a4e',
  SQLite: '#00506b',
  Redis: '#b3261e',
  Flyway: '#c01818',
  SQL: '#0a5c7a',

  // Outils & DevOps
  Git: '#c1341f',
  GitHub: '#30363d',
  'GitHub Actions': '#1a6fd4',
  Docker: '#1d63ed',
  Vercel: '#111827',
  Firebase: '#b45309',
  OpenAPI: '#4e7f2b',
  JUnit: '#1b7a4a',
  'Claude Code': '#c2572f',
};

export interface BadgeStyle {
  color: string;
  background: string;
  borderColor: string;
}

/**
 * Style d'un badge techno. `fallback` (la couleur de la catégorie) sert pour
 * les entrées absentes de la table.
 */
export function techStyle(tech: string, fallback: string = THEMES.indigo.color): BadgeStyle {
  const color = TECH_COLORS[tech] ?? fallback;
  return { color, background: `${color}14`, borderColor: `${color}3d` };
}
