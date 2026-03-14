import {
  mobile,
  backend,
  creator,
  web,
  c,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  robotframework,
  python,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  java,
  fortil,
  seio,
  uec,
  cpge,
  voiture,
  parking,
  carrent,
  etudeMoteur,
  espcam,
  takuyaNojima,
  tripguide,
  threejs,
  cmake,
  hitachi,
  logo,
  cc,
  ltspice,
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
    title: "Développeur tests",
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
    name: "React",
    icon: reactjs,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cc,
  },

  {
    name: "LTSpice",
    icon: ltspice,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "CMake",
    icon: cmake,
  },
  {
    name: "RobotFramework",
    icon: robotframework,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    titleKey: "fraud",
    companyKey: "hitachi",
    pointsKey: "fraud",
    icon: hitachi,
    iconBg: "#E6DEDD",
    date: "Juillet 2025 - Present",
  },
  {
    titleKey: "fraud",
    companyKey: "hitachi",
    pointsKey: "fraud",
    icon: hitachi,
    iconBg: "#E6DEDD",
    date: "Juillet 2025 - Present",
  },
  {
    titleKey: "it",
    companyKey: "concise",
    pointsKey: "it",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Juillet 2025 - Present",
  },
  {
    titleKey: "embedded",
    companyKey: "fortil",
    pointsKey: "embedded",
    icon: fortil,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
  },
  {
    titleKey: "motor",
    companyKey: "eseo",
    pointsKey: "motorPoints",
    icon: seio,
    iconBg: "#383E56",
    date: "Septembre 2023 - Present",
  },
  {
    titleKey: "filtering",
    companyKey: "uec",
    pointsKey: "filtering",
    icon: uec,
    iconBg: "#E6DEDD",
    date: "Juillet 2024 - Novembre 2024",
  },
  {
    titleKey: "arduino",
    companyKey: "personal",
    pointsKey: "arduinoPoints",
    icon: voiture,
    iconBg: "#383E56",
    date: "2023",
  },
  {
    titleKey: "parking",
    companyKey: "team",
    pointsKey: "parking",
    icon: parking,
    iconBg: "#383E56",
    date: "2022 - 2023",
  },
  {
    titleKey: "cpge",
    companyKey: "eseo",
    pointsKey: "cpge",
    icon: cpge,
    iconBg: "#383E56",
    date: "2021 - 2023",
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
    name: "Etude du moteur à circuit secondaire magnétique",
    description:
      "Etude du moteur à circuit secondaire magnétique combinant modélisation théorique et validation expérimentale.",
    tags: [
      {
        name: "Circuit résonant",
        color: "blue-text-gradient",
      },
      {
        name: "Latex",
        color: "green-text-gradient",
      },
      {
        name: "Electronique",
        color: "pink-text-gradient",
      },
    ],
    image: etudeMoteur,
    source_code_link: "https://github.com/matmat76/Etude_Moteur.git",
  },
  {
    name: "Véhicule télécommandé avec tourelle caméra",
    description:
      "Projet embarqué fait en Arduino (C++) avec un ami consistant à créer une voiture télécommandée équipée d'une tourelle caméra motorisée 2D pilotée par RF (ESP32-CAM, Arduino). Le projet a été repris en 2025 pour réaliser une voiture autonome électrique.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Arduino",
        color: "green-text-gradient",
      },
      {
        name: "Inventor : modélisation 3D",
        color: "pink-text-gradient",
      },
    ],
    image: espcam,
    source_code_link: "https://github.com/matmat76/ProTerra.git",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
