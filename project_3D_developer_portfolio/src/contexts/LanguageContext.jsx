import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // Français par défaut
  
  // Traductions intégrées temporairement pour le test
  const translations = {
    fr: {
      nav: {
        about: "À propos",
        work: "Projets",
        contact: "Contact",
        profession: "Développeur Embarqué"
      },
      hero: {
        greeting: "Bonjour, je m'appelle",
        description: {
          line1: "Je suis un développeur embarqué qui relève des",
          line2: "défis techniques avec rigueur et curiosité"
        }
      },
      about: {
        introduction: "Introduction",
        title: "À propos de moi",
        description: "Développeur embarqué en fin d'études, je me spécialise dans la conception d'architectures logicielles pour systèmes critiques. Je valorise la rigueur technique, l'entraide au sein d'une équipe, et l'autonomie dans mes prises de décision. Mon expérience au Japon m'a appris à trouver mon propre équilibre de travail et à progresser continuellement malgré les obstacles."
      },
      services: {
        embedded: "Développeur embarqué",
        testing: "Développeur tests",
        project: "Gestion de projet",
        web: "Développeur web"
      },
      experience: {
        subtitle: "Ce que j'ai fait jusqu'à présent",
        title: "Mes travaux.",
        experiences: {
          fraud: "Détection de Fraude via Deep Learning",
          it: "Développeur IT",
          embedded: "Projet Système Embarqué",
          motor: "Brevetage d'un Moteur Électrique",
          filtering: "Filtrage Analogique d'un Jeu en RA",
          arduino: "Projet Arduino Voiture RC Caméra",
          parking: "TIPE : Parking Connecté",
          cpge: "CPGE Intégrée (Classe Préparatoire)"
        },
        companies: {
          hitachi: "Développeur Python - Hitachi, Hong Kong",
          concise: "Développeur Freelance - ConciseHealthCare, Los Angeles",
          fortil: "Développeur C - Fortil",
          eseo: "Intervenant Junior Entreprise - ESEO, Angers",
          uec: "Chercheur - UEC, Tokyo, Japon",
          personal: "Développeur C++ - Projet personnel",
          team: "ESEO, Projet d'équipe (4 personnes)"
        },
        points: {
          fraud: [
            "Développement d'un système complet de détection de fraudes utilisant des réseaux neuronaux graphiques (GNN).",
            "Transformation de données tabulaires, entraînement de modèles non supervisés et optimisation des performances.",
            "Déploiement du système de détection en temps réel sur infrastructure de production."
          ],
          it: [
            "Développement d'une application Android de vérification de certificats médicaux pour client américain (Java Android).",
            "Résolution de problématiques de certificats SSL et déploiement d'un VPN sur infrastructure Proxmox.",
            "Conception de prototypes UX/UI sur Figma et implémentation en Java Android."
          ],
          embedded: [
            "Conception de l'architecture logicielle complète : réalisation des cas d'utilisation, diagrammes UML et spécifications systèmes",
            "Développement en C d'un module de requêtes HTTP sécurisées vers serveur distant avec gestion des certificats SSL",
            "Implémentation et exécution de tests d'intégration sous Robot Framework pour valider la communication entre application Android et logiciel embarqué"
          ],
          motorPoints: [
            "Étude comparative de plusieurs moteurs à circuit secondaire magnétique combinant modélisation théorique et validation expérimentale.",
            "Analyse des performances (rendement, flux magnétique) entre différentes architectures (tambour, disques)",
            "Rédaction d'un document technique complet en LaTeX pour le dépôt de brevet."
          ],
          filtering: [
            "Conception d'un système complet de filtrage actif pour deux bandes de fréquences incluant validation sur LTSpice et analyse spectrale.",
            "Seul membre français d'une équipe japonaise, développement de l'autonomie professionnelle et apprentissage du japonais (niveau B1).",
            "Analyse technique et documentation des performances du système de filtrage."
          ],
          arduinoPoints: [
            "Conception et développement d'une voiture télécommandée équipée d'une tourelle caméra motorisée 2D pilotée par RF (ESP32-CAM, Arduino).",
            "Intégration d'un streaming vidéo local via ESP32-CAM avec analyse des limitations de bande passante et portée RF."
          ],
          parking: [
            "Conception et réalisation d'une maquette physique de parking connecté (4 places, structure 100x100x100 cm en bois)",
            "Développement Arduino (C++) avec capteurs ultrason HC-SR04 pour détection automatique de véhicules (mesure de distance avec seuil)",
            "Système de monitoring en temps réel : affichage du nombre de places disponibles sur écran et indicateurs LED par place"
          ],
          cpge: [
            "Intégration en CPGE avec un retard initial en mathématiques, rattrapé par un travail rigoureux et une détermination constante.",
            "Développement de compétences en sciences, électronique et bases de la programmation en Python"
          ]
        },
        dates: {
          "Juillet 2025 - Present": "Juillet 2025 - Présent",
          "Jan 2023 - Present": "Jan 2023 - Présent", 
          "Septembre 2023 - Present": "Septembre 2023 - Présent",
          "Juillet 2024 - Novembre 2024": "Juillet 2024 - Novembre 2024",
          "2023": "2023",
          "2022 - 2023": "2022 - 2023",
          "2021 - 2023": "2021 - 2023"
        }
      },
      works: {
        subtitle: "Mes réalisations",
        title: "Mes Projets.",
        description: "Ces projets démontrent mon savoir-faire à travers des exemples concrets de mon travail."
      },
      contact: {
        subtitle: "Restons en contact",
        title: "Contact.",
        nameLabel: "Votre nom",
        namePlaceholder: "Quel est votre nom ?",
        emailLabel: "Votre email",
        emailPlaceholder: "Quelle est votre adresse email ?",
        messageLabel: "Votre message",
        messagePlaceholder: "Que souhaitez-vous dire ?",
        sendButton: "Envoyer",
        sendingButton: "Envoi en cours...",
        successMessage: "Merci pour votre message ! Je vous répondrai dans les plus brefs délais.",
        errorMessage: "Une erreur s'est produite. Veuillez réessayer ou me contacter directement."
      },
      testimonials: {
        subtitle: "Ce que les autres disent",
        title: "Témoignages",
        testimonial: "Ses méthodes de recherche et développement ont fourni une base solide pour l'avancement futur de cette technologie dans notre laboratoire. Son travail nous a offert des perspectives précieuses pour les améliorations futures.",
        designation: "Enseignant-chercheur à l'University of Electro-Communication à Chofu, Tokyo"
      },
      projects: {
        motor: {
          name: "Etude du moteur à circuit secondaire magnétique",
          description: "Etude du moteur à circuit secondaire magnétique combinant modélisation théorique et validation expérimentale.",
          tags: ["Circuit résonant", "Latex", "Electronique"]
        },
        car: {
          name: "Véhicule télécommandé avec tourelle caméra",
          description: "Projet embarqué fait en Arduino (C++) avec un ami consistant à créer une voiture télécommandée équipée d'une tourelle caméra motorisée 2D pilotée par RF (ESP32-CAM, Arduino). Le projet a été repris en 2025 pour réaliser une voiture autonome électrique.",
          tags: ["C++", "Arduino", "Inventor : modélisation 3D"]
        }
      }
    },
    en: {
      nav: {
        about: "About",
        work: "Projects",
        contact: "Contact",
        profession: "Embedded Developer"
      },
      hero: {
        greeting: "Hello, my name is",
        description: {
          line1: "I am an embedded developer who tackles",
          line2: "technical challenges with rigor and curiosity"
        }
      },
      about: {
        introduction: "Introduction",
        title: "About me",
        description: "Embedded developer in final year of studies, I specialize in designing software architectures for critical systems. I value technical rigor, teamwork, and autonomy in my decision-making. My experience in Japan taught me to find my own work-life balance and to continuously progress despite obstacles."
      },
      services: {
        embedded: "Embedded Developer",
        testing: "Test Developer",
        project: "Project Management",
        web: "Web Developer"
      },
      services: {
        embedded: "Embedded Developer",
        testing: "Test Developer",
        project: "Project Management",
        web: "Web Developer"
      },
      experience: {
        subtitle: "What I have done so far",
        title: "My work.",
        experiences: {
          fraud: "Fraud Detection via Deep Learning",
          it: "IT Developer",
          embedded: "Embedded System Project",
          motor: "Electric Motor Patent",
          filtering: "Analog Filtering for AR Game",
          arduino: "Arduino RC Car Camera Project",
          parking: "TIPE: Connected Parking",
          cpge: "Integrated CPGE (Preparatory Class)"
        },
        companies: {
          hitachi: "Python Developer - Hitachi, Hong Kong",
          concise: "Freelance Developer - ConciseHealthCare, Los Angeles",
          fortil: "C Developer - Fortil",
          eseo: "Junior Enterprise Consultant - ESEO, Angers",
          uec: "Researcher - UEC, Tokyo, Japan",
          personal: "C++ Developer - Personal Project",
          team: "ESEO, Team Project (4 people)"
        },
        points: {
          fraud: [
            "Development of a complete fraud detection system using Graph Neural Networks (GNN).",
            "Transformation of tabular data, training of unsupervised models and performance optimization.",
            "Deployment of real-time detection system on production infrastructure."
          ],
          it: [
            "Development of an Android application for medical certificate verification for American client (Java Android).",
            "Resolution of SSL certificate issues and VPN deployment on Proxmox infrastructure.",
            "Design of UX/UI prototypes on Figma and implementation in Java Android."
          ],
          embedded: [
            "Complete software architecture design: use case realization, UML diagrams and system specifications",
            "Development in C of a secure HTTP request module to remote server with SSL certificate management",
            "Implementation and execution of integration tests under Robot Framework to validate communication between Android application and embedded software"
          ],
          motorPoints: [
            "Comparative study of several magnetic secondary circuit motors combining theoretical modeling and experimental validation.",
            "Performance analysis (efficiency, magnetic flux) between different architectures (drum, discs)",
            "Writing of a complete technical document in LaTeX for patent filing."
          ],
          filtering: [
            "Design of a complete active filtering system for two frequency bands including validation on LTSpice and spectral analysis.",
            "Only French member of a Japanese team, development of professional autonomy and Japanese language learning (B1 level).",
            "Technical analysis and documentation of filtering system performance."
          ],
          arduinoPoints: [
            "Design and development of a remote-controlled car equipped with a 2D motorized camera turret controlled by RF (ESP32-CAM, Arduino).",
            "Integration of local video streaming via ESP32-CAM with analysis of bandwidth and RF range limitations."
          ],
          parking: [
            "Design and realization of a connected parking physical model (4 spaces, 100x100x100 cm wooden structure)",
            "Arduino development (C++) with HC-SR04 ultrasonic sensors for automatic vehicle detection (distance measurement with threshold)",
            "Real-time monitoring system: display of available spaces on screen and LED indicators per space"
          ],
          cpge: [
            "Integration into CPGE with initial delay in mathematics, caught up through rigorous work and constant determination.",
            "Development of skills in science, electronics and basics of Python programming"
          ]
        },
        dates: {
          "Juillet 2025 - Present": "July 2025 - Present",
          "Jan 2023 - Present": "Jan 2023 - Present",
          "Septembre 2023 - Present": "September 2023 - Present", 
          "Juillet 2024 - Novembre 2024": "July 2024 - November 2024",
          "2023": "2023",
          "2022 - 2023": "2022 - 2023",
          "2021 - 2023": "2021 - 2023"
        }
      },
      works: {
        subtitle: "My work",
        title: "Projects.",
        description: "Following projects showcase my skills and experience through real-world examples of my work."
      },
      contact: {
        subtitle: "Get in touch",
        title: "Contact.",
        nameLabel: "Your Name",
        namePlaceholder: "What's your name?",
        emailLabel: "Your Email",
        emailPlaceholder: "What's your email address?",
        messageLabel: "Your Message",
        messagePlaceholder: "What do you want to say?",
        sendButton: "Send",
        sendingButton: "Sending...",
        successMessage: "Thank you for your message! I will get back to you as soon as possible.",
        errorMessage: "An error occurred. Please try again or contact me directly."
      },
      testimonials: {
        subtitle: "What others say",
        title: "Testimonials",
        testimonial: "His research and development methods have provided a solid foundation for further advancement of this technology in our laboratory. His work has offered us valuable insights for future improvements.",
        designation: "Professor-Researcher at University of Electro-Communication in Chofu, Tokyo"
      },
      projects: {
        motor: {
          name: "Study of Magnetic Secondary Circuit Motor",
          description: "Study of magnetic secondary circuit motor combining theoretical modeling and experimental validation.",
          tags: ["Resonant Circuit", "Latex", "Electronics"]
        },
        car: {
          name: "Remote-Controlled Vehicle with Camera Turret",
          description: "Embedded project made in Arduino (C++) with a friend to create a remote-controlled car equipped with a 2D motorized camera turret controlled by RF (ESP32-CAM, Arduino). The project was resumed in 2025 to create an autonomous electric car.",
          tags: ["C++", "Arduino", "Inventor: 3D Modeling"]
        }
      }
    }
  };
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };
  
  const t = translations[language];
  
  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      toggleLanguage, 
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return { t: context.t };
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};