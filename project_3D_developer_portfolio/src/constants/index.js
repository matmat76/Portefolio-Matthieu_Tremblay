import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fortil,
  seio,
  uec,
  cpge,
  voiture,
  parking,
  carrent,
  jobit,
  takuyaNojima,
  tripguide,
  threejs,
  hitachi,
  logo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos de moi",
  },
  {
    id: "work",
    title: "Mes travaux",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur embarqué",
    icon: web,
  },
  {
    title: "Développeur Tests d'intégration",
    icon: mobile,
  },
  {
    title: "Gestion de projet",
    icon: backend,
  },
  {
    title: "Développeur web",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS", 
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Détection de Fraude via Deep Learning ",
    company_name: "Développeur Python - Hitachi, Hong Kong",
    icon: hitachi,
    iconBg: "#E6DEDD",
    date: "Juillet 2025 - Present",
    points: [
      "Développement d'un système complet de détection de fraudes utilisant des réseaux neuronaux graphiques (GNN).",
      "Transformation de données tabulaires, entraînement de modèles non supervisés et optimisation des performances.",
      "Déploiement du système de détection en temps réel sur infrastructure de production.",
    ],
  },
  {
    title: "Développeur IT",
    company_name: "Développeur Freelance - ConciseHealthCare, Los Angeles",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Juillet 2025 - Present",
    points: [
      "Développement d'une application Android de vérification de certificats médicaux pour client américain (Java Android).",
      "Résolution de problématiques de certificats SSL et déploiement d'un VPN sur infrastructure Proxmox.",
      "Conception de prototypes UX/UI sur Figma et implémentation en Java Android."
    ],
  },
  {
    title: "Projet Système Embarqué",
    company_name: "Développeur C - Fortil",
    icon: fortil,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Conception de l'architecture logicielle complète : réalisation des cas d'utilisation, diagrammes UML et spécifications systèmes",
      "Développement en C d'un module de requêtes HTTP sécurisées vers serveur distant avec gestion des certificats SSL",
      "Implémentation et exécution de tests d'intégration sous Robot Framework pour valider la communication entre application Android et logiciel embarqué"
    ],
  },
  {
    title: "Brevetage d'un Moteur Électrique",
    company_name: "Intervenant Junior Entreprise - ESEO, Angers",
    icon: seio,
    iconBg: "#383E56",
    date: "Septembre 2023 - Present",
    points: [
      "Étude comparative de plusieurs moteurs à circuit secondaire magnétique combinant modélisation théorique et validation expérimentale.",
      "Analyse des performances (rendement, flux magnétique) entre différentes architectures (tambour, disques)",
      "Rédaction d'un document technique complet en LaTeX pour le dépôt de brevet.",
    ],
  },
  {
    title: "Filtrage Analogique d'un Jeu en RA",
    company_name: "Chercheur - UEC, Tokyo, Japon",
    icon: uec,
    iconBg: "#E6DEDD",
    date: "Juillet 2024 - Novembre 2024",
    points: [
      "Conception d'un système complet de filtrage actif pour deux bandes de fréquences incluant validation sur LTSpice et analyse spectrale.",
      "Seul membre français d'une équipe japonaise, développement de l'autonomie professionnelle et apprentissage du japonais (niveau B1).",
      "Analyse technique et documentation des performances du système de filtrage.",
    ],
  },
  {
    title: "Projet Arduino Voiture RC Caméra",
    company_name: "Développeur C++ -Projet personnel",
    icon: voiture,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "Modélisation 3D de la tourelle et implémentation du système de contrôle bidirectionnel (gauche/droite, haut/bas).",
      "Conception et développement d'une voiture télécommandée équipée d'une tourelle caméra motorisée 2D pilotée par RF (ESP32-CAM, Arduino).",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Intégration d'un streaming vidéo local via ESP32-CAM avec analyse des limitations de bande passante et portée RF.",
    ],
  },
  {
    title: "TIPE : Parking Connecté",
    company_name: "ESEO, Projet d'équipe (4 personnes)",
    icon: parking,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Conception et réalisation d'une maquette physique de parking connecté (4 places, structure 100x100x100 cm en bois)",
      "Développement Arduino (C++) avec capteurs ultrason HC-SR04 pour détection automatique de véhicules (mesure de distance avec seuil)",
      "Système de monitoring en temps réel : affichage du nombre de places disponibles sur écran et indicateurs LED par place",
    ],
  },
  {
    title: "CPGE Intégrée (Classe Préparatoire)",
    company_name: "ESEO",
    icon: cpge,
    iconBg: "#383E56",
    date: "2021 - 2023",
    points: [
      "Intégration en CPGE avec un retard initial en mathématiques, rattrapé par un travail rigoureux et une détermination constante.",
      "Développement de compétences en sciences, électronique et bases de la programmation en Python",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "His research and development methods have provided a solid foundation for further advancement of this technology in our laboratory. His work has offered us valuable insights for future improvements.",
    name: "Takuya Nojima",
    designation: "Enseignant-chercheur à l'University of Electro-Communication à Chofu, Tokyo",
    company: "UEC",
    image : takuyaNojima,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
