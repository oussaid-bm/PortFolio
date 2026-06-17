/**
 * Contenu centralisé du portfolio.
 * Modifie ces valeurs pour personnaliser le site — tout le reste s'adapte.
 */

export const profile = {
  name: "Oussaid Ben Mansour",
  role: "Étudiant en Systèmes Informatiques · Dev Web & Réseaux",
  location: "Tizi-Ouzou, Algérie",
  available: true,
  // L'accroche du hero, découpée en lignes pour l'animation
  headline: ["Je construis des", "applications web", "qui tiennent la route."],
  tagline:
    "Étudiant en Licence Informatique, spécialité Systèmes. Entre développement web temps réel, réseaux et sécurité — je conçois des applications pensées pour des conditions réelles.",
  email: "benmansouroussaid361@gmail.com",
  phone: "+213 796 26 84 47",
  cvUrl: "/cv.pdf",
  socials: {
    github: "https://github.com/oussaid-bm",
    linkedin: "https://www.linkedin.com/in/oussaid-ben-mansour-7b7842394/",
  },
} as const;

export const stats = [
  { value: "WebRTC", label: "Temps réel peer-to-peer" },
  { value: "Réseaux", label: "TCP/IP, sécurité, supervision" },
  { value: "L3 Info", label: "UMMTO — Systèmes Informatiques" },
] as const;

export type SkillGroup = {
  title: string;
  items: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Développement Web",
    items: [
      { name: "JavaScript", level: 88 },
      { name: "React", level: 85 },
      { name: "Node.js / Express", level: 84 },
      { name: "WebRTC", level: 82 },
      { name: "Socket.io (temps réel)", level: 85 },
    ],
  },
  {
    title: "Systèmes & Réseaux",
    items: [
      { name: "Administration Linux & Windows", level: 84 },
      { name: "TCP/IP, DHCP, DNS", level: 82 },
      { name: "Sécurité réseaux & systèmes", level: 78 },
      { name: "Virtualisation (VMware/VirtualBox)", level: 80 },
      { name: "Supervision (Wireshark, Nmap)", level: 76 },
    ],
  },
  {
    title: "Langages & Outils",
    items: [
      { name: "Python", level: 80 },
      { name: "Langage C", level: 78 },
      { name: "Shell Script", level: 75 },
      { name: "Bases de données (SQL)", level: 80 },
      { name: "Docker, Git / GitHub", level: 82 },
    ],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  repo: string;
  /** Stack affichée en pastilles */
  stack: string[];
  /** Le contexte / problème à résoudre */
  context: string;
  /** Les blocs de l'étude de cas */
  sections: { heading: string; body: string }[];
  /** Métriques / résultats marquants */
  highlights: { value: string; label: string }[];
};

export const caseStudy: CaseStudy = {
  slug: "uniplatform",
  title: "UniPlatform",
  subtitle:
    "Plateforme web universitaire d'appels audio/vidéo et de messagerie en direct, en peer-to-peer grâce à WebRTC.",
  year: "2025 – 2026",
  role: "Projet de fin de licence — équipe de 4 (UMMTO)",
  repo: "https://github.com/oussaid-bm/UniPlatform",
  stack: [
    "React",
    "Node.js",
    "Express",
    "Socket.io",
    "WebRTC",
    "ICE / STUN",
    "MySQL",
    "Docker",
  ],
  context:
    "Offrir aux étudiants un espace de communication en direct — audio, vidéo et messagerie — qui fonctionne vraiment, y compris quand le réseau est capricieux. Tout le défi est de faire tenir une connexion temps réel entre des participants derrière des NAT et des pare-feux.",
  sections: [
    {
      heading: "Le temps réel en peer-to-peer avec WebRTC",
      body: "Les flux audio/vidéo passent directement entre les navigateurs via WebRTC, sans transiter par le serveur. C'est ce qui donne une faible latence et préserve la bande passante du serveur — l'approche idéale pour des appels entre étudiants.",
    },
    {
      heading: "Le vrai défi : la connectivité réseau (ICE / STUN)",
      body: "En conditions réelles, les participants sont derrière des NAT et des pare-feux : une connexion directe échoue souvent. J'ai mis en place la négociation ICE avec des serveurs STUN pour découvrir les bons chemins réseau et établir la connexion de façon fiable — c'est là que ma formation réseaux a fait la différence.",
    },
    {
      heading: "La signalisation temps réel",
      body: "Un serveur Node.js / Express assure la signalisation via Socket.io : échange des offres/réponses SDP et des candidats ICE, gestion des salles, des arrivées et des départs. C'est le chef d'orchestre qui permet aux pairs de se trouver avant de se parler en direct.",
    },
    {
      heading: "Authentification, données et déploiement",
      body: "Gestion de l'authentification des utilisateurs, persistance des données en MySQL, et conteneurisation complète avec Docker pour un déploiement reproductible. Code versionné et hébergé sur GitHub, en équipe de 4.",
    },
  ],
  highlights: [
    { value: "P2P", label: "WebRTC — faible latence, direct" },
    { value: "ICE/STUN", label: "Connexion fiable derrière NAT" },
    { value: "Socket.io", label: "Signalisation temps réel" },
    { value: "Docker", label: "Déploiement conteneurisé" },
  ],
};

export type Education = {
  period: string;
  title: string;
  school: string;
  detail: string;
};

export const education: Education[] = [
  {
    period: "2023 – 2026",
    title: "Licence en Informatique — Spécialité Systèmes Informatiques",
    school: "Université Mouloud Mammeri de Tizi-Ouzou (UMMTO)",
    detail:
      "Troisième année en cours. Parcours axé sur les réseaux, la sécurité informatique, les systèmes et le développement logiciel.",
  },
  {
    period: "2023",
    title: "Baccalauréat — Sciences Expérimentales",
    school: "Lycée Mustapha Benboulaïd, Aïn El Hammam, Tizi-Ouzou",
    detail: "Obtenu avec une moyenne de 13,66/20.",
  },
];

export type Language = { name: string; level: string; dots: number };

export const languages: Language[] = [
  { name: "Kabyle", level: "Maternelle", dots: 5 },
  { name: "Arabe", level: "Courant", dots: 5 },
  { name: "Français", level: "Courant", dots: 4 },
  { name: "Anglais", level: "Intermédiaire", dots: 3 },
];

export const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#projet", label: "Projet" },
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
] as const;
