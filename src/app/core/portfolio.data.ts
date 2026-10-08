import {
  Association,
  ContactDetail,
  Localized,
  NavItem,
  Project,
  SkillCategory,
  SocialLink,
  Stat,
  TagGroup,
  TimelineEntry,
} from './models';
import { THEMES } from './themes';

/** Raccourci pour un texte identique dans les deux langues. */
const same = (text: string): Localized => ({ fr: text, en: text });

const FIRST_NAME = 'Navaloniaina';
const LAST_NAME = 'RANDRIAMAHAZO';

export const BRAND = {
  initials: 'RN',
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  fullName: `${FIRST_NAME} ${LAST_NAME}`,
};

/** CV servi depuis `public/`, consultable en ligne ou téléchargeable. */
export const RESUME = {
  file: 'CV_Randriamahazo_Navaloniaina_ATS_4.pdf',
  downloadName: 'CV-Navaloniaina-Randriamahazo.pdf',
  view: { fr: 'Voir le CV', en: 'View my resume' },
  download: { fr: 'Télécharger le CV', en: 'Download resume' },
};

/** Libellés d'accessibilité, sans équivalent visible à l'écran. */
export const UI_LABELS = {
  menu: same('Menu'),
  previousImage: { fr: 'Image précédente', en: 'Previous image' },
  nextImage: { fr: 'Image suivante', en: 'Next image' },
  goToImage: { fr: 'Aller à l’image', en: 'Go to image' },
  viewProject: { fr: 'Voir le projet', en: 'View the project' },
} satisfies Record<string, Localized>;

/** Sections de la page, dans l'ordre du document (nav, menu mobile, footer, scroll-spy). */
export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: { fr: 'Accueil', en: 'Home' } },
  { id: 'about', label: { fr: 'À propos', en: 'About' } },
  { id: 'experience', label: { fr: 'Parcours', en: 'Experience' } },
  { id: 'skills', label: { fr: 'Compétences', en: 'Skills' } },
  { id: 'projects', label: { fr: 'Projets', en: 'Projects' } },
  { id: 'contact', label: same('Contact') },
];

export const HERO = {
  status: {
    fr: 'Développeur Java Full-Stack · Disponible',
    en: 'Java Full-Stack Developer · Available',
  },
  greeting: { fr: 'Bonjour,', en: 'Hello,' },
  intro: { fr: 'je suis', en: "I'm" },
  pitch: {
    fr: "Développeur Java Full-Stack spécialisé dans la conception d'API REST performantes et sécurisées avec Java et Spring Boot, complétées par Angular côté front-end. À l'aise de la conception au déploiement, en autonomie comme en équipe.",
    en: 'Java Full-Stack developer specialized in designing fast, secure REST APIs with Java and Spring Boot, paired with Angular on the front end. Comfortable from design to deployment, solo or in a team.',
  },
  /** Stack mise en avant sous les boutons du hero. */
  stack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'API REST'],
  primaryCta: { fr: 'Voir mes projets →', en: 'View my projects →' },
  secondaryCta: { fr: 'Me contacter', en: 'Get in touch' },
  photo: 'profile.jpg',
  place: same('Antananarivo, MG'),
  role: { fr: 'Java · Spring Boot · Angular', en: 'Java · Spring Boot · Angular' },
  /** Trois repères affichés sous l'accroche. */
  facts: [
    { label: { fr: 'Spécialité', en: 'Focus' }, value: same('API REST · Spring Boot') },
    { label: { fr: 'Front-end', en: 'Front end' }, value: same('Angular · TypeScript') },
    { label: { fr: 'Expérience', en: 'Experience' }, value: { fr: '2 ans', en: '2 years' } },
  ],
  badge: {
    title: { fr: "2 ans d'expérience", en: '2 years of experience' },
    subtitle: 'Full-Stack',
  },
};

export const ABOUT = {
  title: { fr: 'À propos', en: 'About' },
  paragraphs: [
    {
      fr: "Je conçois des API REST performantes et sécurisées avec Java et Spring Boot (JWT, OAuth2, RBAC), sur PostgreSQL et Flyway, et je les complète par des interfaces Angular modernes. Mon environnement de travail : PostgreSQL, Redis, Docker et OpenAPI.",
      en: 'I design fast, secure REST APIs with Java and Spring Boot (JWT, OAuth2, RBAC) on PostgreSQL and Flyway, and pair them with modern Angular interfaces. My day-to-day environment: PostgreSQL, Redis, Docker and OpenAPI.',
    },
    {
      fr: "À l'aise de la conception au déploiement, en autonomie comme en équipe. Actuellement disponible pour des projets freelance ou des opportunités à temps plein.",
      en: 'Comfortable from design to deployment, solo or in a team. Currently available for freelance projects or full-time opportunities.',
    },
  ] satisfies Localized[],
  stats: [
    { value: '2+', label: { fr: 'Années exp.', en: 'Years exp.' } },
    { value: '4', label: { fr: 'Projets livrés', en: 'Projects shipped' } },
    { value: '25+', label: { fr: 'Endpoints API', en: 'API endpoints' } },
  ] satisfies Stat[],
  tagCards: [
    {
      title: { fr: 'Langages', en: 'Languages' },
      items: ['Java', 'TypeScript', 'JavaScript', 'SQL'],
    },
    {
      title: { fr: 'Langues parlées', en: 'Spoken languages' },
      items: ['Malagasy', 'Français', 'Anglais'],
    },
  ] satisfies TagGroup[],
  interests: {
    title: { fr: "Centres d'intérêt", en: 'Interests' },
    text: {
      fr: 'Leo Club Antananarivo · Taramasoandro · Lecture · Randonnée',
      en: 'Leo Club Antananarivo · Taramasoandro · Reading · Hiking',
    },
  },
  availability: {
    title: { fr: 'Disponibilité', en: 'Availability' },
    text: {
      fr: '✓ Ouvert aux nouvelles opportunités',
      en: '✓ Open to new opportunities',
    },
  },
};

export const EXPERIENCE = {
  title: { fr: 'Parcours', en: 'Background' },
  educationTitle: { fr: 'Formation', en: 'Education' },
  associationsTitle: { fr: 'Associations', en: 'Associations' },
  education: [
    {
      id: 'mbds',
      title: { fr: 'Master MIAGE — MBDS', en: "MIAGE Master's — MBDS" },
      org: same("Université Côte d'Azur"),
      period: { fr: 'En cours', en: 'In progress' },
      detail: {
        fr: 'Méthodes Informatiques Appliquées à la Gestion des Entreprises. Parcours « Mobiquité, Big Data et Intégration de Systèmes ».',
        en: 'Computer Methods Applied to Business Management, "Mobiquity, Big Data and Systems Integration" track.',
      },
    },
    {
      id: 'licence',
      title: { fr: 'Licence en Informatique', en: "Bachelor's in Computer Science" },
      org: same('IT-University, Andoharanofotsy'),
      period: same('2021 — 2024'),
      detail: {
        fr: 'Algorithmique, bases de données et développement web.',
        en: 'Algorithms, databases and web development.',
      },
    },
  ] satisfies TimelineEntry[],
  associations: [
    {
      id: 'leo-club',
      icon: '🦁',
      name: same('Leo Club Antananarivo Taramasoandro'),
      detail: {
        fr: 'Membre actif · Engagement associatif & solidarité',
        en: 'Active member · Community engagement & solidarity',
      },
    },
  ] satisfies Association[],
};

export const SKILLS = {
  title: { fr: 'Compétences', en: 'Skills' },
  categories: [
    {
      id: 'backend',
      name: same('Back-end'),
      subtitle: { fr: 'Langage principal : Java', en: 'Primary language: Java' },
      theme: THEMES.forest,
      items: [
        'Java',
        'Spring Boot',
        'API REST',
        'JWT',
        'OAuth2',
        'RBAC',
        'Node.js',
        'Express',
        'NestJS',
      ],
    },
    {
      id: 'frontend',
      name: same('Front-end'),
      subtitle: { fr: 'Interfaces utilisateur', en: 'User interfaces' },
      theme: THEMES.indigo,
      items: ['Angular', 'React', 'TypeScript', 'Ionic', 'Tailwind CSS'],
    },
    {
      id: 'databases',
      name: { fr: 'Bases de données', en: 'Databases' },
      subtitle: { fr: 'Stockage & requêtes', en: 'Storage & queries' },
      theme: THEMES.clay,
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Redis', 'Flyway'],
    },
    {
      id: 'devops',
      name: { fr: 'Outils & DevOps', en: 'Tools & DevOps' },
      subtitle: { fr: 'Workflow & déploiement', en: 'Workflow & deployment' },
      theme: THEMES.ochre,
      items: [
        'Git',
        'GitHub',
        'Docker',
        'GitHub Actions',
        'Vercel',
        'Firebase',
        'OpenAPI',
        'JUnit',
        'Claude Code',
      ],
    },
  ] satisfies SkillCategory[],
};

/** Dégradés de fond des captures, visibles le temps du chargement de l'image. */
const SLIDE_GRADIENTS = {
  light: 'linear-gradient(135deg,#eff6ff 0%,#93c5fd 50%,#3b82f6 100%)',
  deep: 'linear-gradient(135deg,#3b82f6 0%,#6366f1 50%,#4338ca 100%)',
  indigo: 'linear-gradient(135deg,#bfdbfe 0%,#818cf8 50%,#3730a3 100%)',
};

export const PROJECTS = {
  title: { fr: 'Projets', en: 'Projects' },
  items: [
    {
      id: 'facturio',
      number: '01',
      title: same('Facturio'),
      subtitle: {
        fr: 'SaaS de facturation multi-tenant · Projet personnel',
        en: 'Multi-tenant invoicing SaaS · Personal project',
      },
      highlights: [
        {
          fr: 'API REST Spring Boot sécurisée (JWT, OAuth2, RBAC) sur PostgreSQL et Flyway, architecture modulaire et isolation multi-tenant.',
          en: 'Secure Spring Boot REST API (JWT, OAuth2, RBAC) on PostgreSQL and Flyway, with a modular architecture and multi-tenant isolation.',
        },
        {
          fr: 'Front-end Angular (standalone, Signals, SSR, Tailwind CSS) : plus de 20 écrans métier et internationalisation FR/EN.',
          en: 'Angular front end (standalone, Signals, SSR, Tailwind CSS): 20+ business screens and FR/EN internationalization.',
        },
        {
          fr: 'Moteur Factur-X / EN 16931 (XML CII et PDF/A-3), documenté sous OpenAPI et testé avec JUnit et Vitest.',
          en: 'Factur-X / EN 16931 engine (CII XML and PDF/A-3), documented with OpenAPI and tested with JUnit and Vitest.',
        },
      ],
      tags: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Flyway'],
      theme: THEMES.forest,
    },
    {
      id: 'misaina',
      number: '02',
      title: { fr: 'Plateforme de gestion académique', en: 'Academic management platform' },
      subtitle: {
        fr: 'Développeur Full-Stack Java · Misaina Incorporation',
        en: 'Java Full-Stack Developer · Misaina Incorporation',
      },
      highlights: [
        {
          fr: 'Back-end Spring Boot (API REST) et front-end React pour le suivi académique.',
          en: 'Spring Boot back end (REST API) and React front end for academic tracking.',
        },
        {
          fr: 'Notifications en temps réel via Firebase Cloud Messaging et WebSockets.',
          en: 'Real-time notifications through Firebase Cloud Messaging and WebSockets.',
        },
        {
          fr: 'Livraison en version web (React) et mobile (Ionic), synchronisées via Firebase.',
          en: 'Delivered as a web (React) and mobile (Ionic) app, kept in sync through Firebase.',
        },
      ],
      tags: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Firebase', 'Ionic'],
      theme: THEMES.indigo,
      link: '#',
      slides: [
        {
          src: 'p0.png',
          alt: { fr: 'Capture du projet 1', en: 'Project screenshot 1' },
          background: SLIDE_GRADIENTS.light,
        },
        {
          src: 'p1.png',
          alt: { fr: 'Capture du projet 2', en: 'Project screenshot 2' },
          background: SLIDE_GRADIENTS.deep,
        },
        {
          src: 'p2.png',
          alt: { fr: 'Capture du projet 3', en: 'Project screenshot 3' },
          background: SLIDE_GRADIENTS.indigo,
        },
        {
          src: 'p3.png',
          alt: { fr: 'Capture du projet 4', en: 'Project screenshot 4' },
          background: SLIDE_GRADIENTS.indigo,
        },
        {
          src: 'p4.png',
          alt: { fr: 'Capture du projet 5', en: 'Project screenshot 5' },
          background: SLIDE_GRADIENTS.indigo,
        },
      ],
    },
    {
      id: 'stock',
      number: '03',
      title: { fr: 'Gestion des stocks et des ventes', en: 'Inventory and sales management' },
      subtitle: { fr: 'Développeur Backend Node.js', en: 'Node.js Backend Developer' },
      highlights: [
        {
          fr: 'API REST de plus de 25 endpoints couvrant les produits, les commandes et le stock en temps réel.',
          en: 'REST API with 25+ endpoints covering products, orders and real-time stock.',
        },
        {
          fr: 'Accès sécurisé par authentification JWT et autorisation par rôles (Admin, Vendeur, Client), hachage bcrypt.',
          en: 'Access secured with JWT authentication and role-based authorization (Admin, Seller, Customer), bcrypt hashing.',
        },
        {
          fr: 'Requêtes MySQL accélérées par une indexation ciblée et une mise en cache Redis.',
          en: 'MySQL queries sped up through targeted indexing and Redis caching.',
        },
      ],
      tags: ['Node.js', 'Express', 'MySQL', 'Redis', 'React', 'Docker'],
      theme: THEMES.ochre,
    },
    {
      id: 'b2b',
      number: '04',
      title: { fr: 'Pièces auto & réservation de véhicules', en: 'Auto parts & vehicle booking' },
      subtitle: { fr: 'Développeur Full-Stack', en: 'Full-Stack Developer' },
      highlights: [
        {
          fr: 'Architecture du back-end REST : catalogue produits, réservations et paiements.',
          en: 'REST back-end architecture: product catalog, bookings and payments.',
        },
        {
          fr: "Authentification OAuth2 et JWT sur l'ensemble des parcours utilisateurs.",
          en: 'OAuth2 and JWT authentication across every user journey.',
        },
        {
          fr: 'Déploiement automatisé via GitHub Actions et Vercel, avec tests unitaires à chaque livraison.',
          en: 'Deployment automated with GitHub Actions and Vercel, unit tests on every release.',
        },
        {
          fr: 'Intégrité des données garantie par un schéma relationnel PostgreSQL et des triggers dédiés.',
          en: 'Data integrity guaranteed by a relational PostgreSQL schema and dedicated triggers.',
        },
      ],
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Angular', 'Docker'],
      theme: THEMES.clay,
    },
  ] satisfies Project[],
};

export const CONTACT = {
  title: { fr: 'Me contacter', en: 'Get in touch' },
  text: {
    fr: "Que ce soit pour un projet freelance, une collaboration ou simplement pour échanger, je suis toujours ouvert aux nouvelles opportunités.",
    en: "Whether it's for a freelance project, collaboration, or simply to chat, I'm always open to new opportunities.",
  },
  details: [
    {
      id: 'email',
      label: same('Email'),
      value: same('navaloniainaran@gmail.com'),
      href: 'mailto:navaloniainaran@gmail.com',
    },
    {
      id: 'phone',
      label: { fr: 'Téléphone', en: 'Phone' },
      value: same('+261 32 84 391 63'),
      href: 'tel:+261328439163',
    },
    {
      id: 'location',
      label: { fr: 'Localisation', en: 'Location' },
      value: same('Antananarivo, Madagascar'),
      note: {
        fr: 'Disponible en remote · Monde entier',
        en: 'Available remotely · Worldwide',
      },
    },
  ] satisfies ContactDetail[],
  socials: [
    {
      name: 'GitHub',
      href: 'https://github.com/randriamazo',
      path: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/navaloniaina-randriamahazo-82404128b',
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
  ] satisfies SocialLink[],
  form: {
    name: { label: { fr: 'Nom complet', en: 'Full name' }, placeholder: same('Jean Dupont') },
    email: { label: same('Email'), placeholder: { fr: 'vous@email.com', en: 'you@email.com' } },
    message: {
      label: { fr: 'Message', en: 'Message' },
      placeholder: { fr: 'Décrivez votre projet...', en: 'Describe your project...' },
    },
    submit: { fr: 'Envoyer le message →', en: 'Send message →' },
    sending: { fr: 'Envoi en cours…', en: 'Sending…' },
    success: {
      fr: '✓ Message envoyé, merci ! Je vous réponds au plus vite.',
      en: "✓ Message sent, thank you! I'll get back to you shortly.",
    },
    error: {
      fr: "L'envoi a échoué. Réessayez ou écrivez-moi directement par e-mail.",
      en: 'Sending failed. Please try again or email me directly.',
    },
    incomplete: {
      fr: 'Merci de renseigner votre nom, un e-mail valide et un message.',
      en: 'Please fill in your name, a valid email and a message.',
    },
  },
};

export const FOOTER = {
  copyright: `© 2024 ${BRAND.fullName}`,
};
