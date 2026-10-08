/** Langues proposées par le sélecteur FR / EN. */
export type Lang = 'fr' | 'en';

/** Un texte disponible dans chaque langue. */
export type Localized = Record<Lang, string>;

/** Entête commun à toutes les sections. */
export interface SectionHeadingContent {
  title: Localized;
}


export interface NavItem {
  /** Id de la section ciblée (sert aussi d'ancre `#id`). */
  id: string;
  label: Localized;
}

export interface Stat {
  value: string;
  label: Localized;
}

export interface TagGroup {
  title: Localized;
  items: string[];
}

export interface TimelineEntry {
  id: string;
  title: Localized;
  org: Localized;
  /** Absent quand le CV ne donne pas de date. */
  period?: Localized;
  detail: Localized;
}

export interface Association {
  id: string;
  icon: string;
  name: Localized;
  detail: Localized;
}

/** Accent d'une section, d'une carte de compétences ou d'un projet. */
export interface Theme {
  color: string;
}

export interface SkillCategory {
  id: string;
  name: Localized;
  subtitle: Localized;
  theme: Theme;
  items: string[];
}

export interface Slide {
  src: string;
  alt: Localized;
  background: string;
}

export interface Project {
  id: string;
  title: Localized;
  subtitle: Localized;
  /** Faits marquants, repris des puces du CV. */
  highlights: Localized[];
  tags: string[];
  theme: Theme;
  /** Numéro affiché sur le carrousel ou sur le bandeau de couverture. */
  number: string;
  slides?: Slide[];
  link?: string;
}

/** Une ligne de coordonnées de la section contact. */
export interface ContactDetail {
  /** Sert d'id de suivi, de sélecteur d'icône et de modificateur CSS. */
  id: 'email' | 'phone' | 'location';
  label: Localized;
  value: Localized;
  /** Ligne secondaire optionnelle (sous la valeur). */
  note?: Localized;
  /** Absent = la ligne n'est pas cliquable. */
  href?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  /** Tracé SVG du logo (viewBox 0 0 24 24). */
  path: string;
}
