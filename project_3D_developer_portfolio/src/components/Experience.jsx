import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTranslation } from "../contexts/LanguageContext";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  
  // Fonction pour traduire le titre d'une expérience
  const getTranslatedTitle = (originalTitle) => {
    const titleMap = {
      "Détection de Fraude via Deep Learning ": t.experience.experiences.fraud,
      "Développeur IT": t.experience.experiences.it,
      "Projet Système Embarqué": t.experience.experiences.embedded,
      "Brevetage d'un Moteur Électrique": t.experience.experiences.motor,
      "Filtrage Analogique d'un Jeu en RA": t.experience.experiences.filtering,
      "Projet Arduino Voiture RC Caméra": t.experience.experiences.arduino,
      "TIPE : Parking Connecté": t.experience.experiences.parking,
      "CPGE Intégrée (Classe Préparatoire)": t.experience.experiences.cpge
    };
    return titleMap[originalTitle] || originalTitle;
  };

  // Fonction pour traduire le nom de l'entreprise
  const getTranslatedCompany = (originalCompany) => {
    const companyMap = {
      "Développeur Python - Hitachi, Hong Kong": t.experience.companies.hitachi,
      "Développeur Freelance - ConciseHealthCare, Los Angeles": t.experience.companies.concise,
      "Développeur C - Fortil": t.experience.companies.fortil,
      "Intervenant Junior Entreprise - ESEO, Angers": t.experience.companies.eseo,
      "Chercheur - UEC, Tokyo, Japon": t.experience.companies.uec,
      "Développeur C++ -Projet personnel": t.experience.companies.personal,
      "ESEO, Projet d'équipe (4 personnes)": t.experience.companies.team,
      "ESEO": "ESEO"
    };
    return companyMap[originalCompany] || originalCompany;
  };

  // Fonction pour traduire les points d'une expérience
  const getTranslatedPoints = (originalTitle, originalPoints) => {
    const pointsMap = {
      "Détection de Fraude via Deep Learning ": t.experience.points.fraud,
      "Développeur IT": t.experience.points.it,
      "Projet Système Embarqué": t.experience.points.embedded,
      "Brevetage d'un Moteur Électrique": t.experience.points.motorPoints,
      "Filtrage Analogique d'un Jeu en RA": t.experience.points.filtering,
      "Projet Arduino Voiture RC Caméra": t.experience.points.arduinoPoints,
      "TIPE : Parking Connecté": t.experience.points.parking,
      "CPGE Intégrée (Classe Préparatoire)": t.experience.points.cpge
    };
    return pointsMap[originalTitle] || originalPoints;
  };

  // Fonction pour traduire les dates
  const getTranslatedDate = (originalDate) => {
    return t.experience.dates[originalDate] || originalDate;
  };

  // Créer les expériences avec traductions complètes
  const translatedExperiences = experiences.map(exp => ({
    ...exp,
    title: getTranslatedTitle(exp.title),
    company_name: getTranslatedCompany(exp.company_name),
    points: getTranslatedPoints(exp.title, exp.points),
    date: getTranslatedDate(exp.date)
  }));
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {t.experience.subtitle}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t.experience.title}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {translatedExperiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
