import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "../contexts/LanguageContext";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = ({ viewMode, setViewMode }) => {
  const { t } = useTranslation();
  
  // Services traduits basés sur la langue actuelle
  const translatedServices = [
    {
      title: t.services.embedded,
      icon: services[0].icon,
    },
    {
      title: t.services.testing,
      icon: services[1].icon,
    },
    {
      title: t.services.project,
      icon: services[2].icon,
    },
    {
      title: t.services.web,
      icon: services[3].icon,
    },
  ];
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>{t.about.title}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {t.about.description}
      </motion.p>

      <div className='mt-10 flex gap-5'>
        <button
          onClick={() => setViewMode('professionnel')}
          className={`py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary ${viewMode === 'professionnel' ? 'bg-tertiary border-2 border-white' : 'bg-tertiary'}`}
        >
          Professionnel
        </button>
        <button
          onClick={() => setViewMode('personnel')}
          className={`py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary ${viewMode === 'personnel' ? 'bg-tertiary border-2 border-white' : 'bg-tertiary'}`}
        >
          Personnel
        </button>
      </div>

      {viewMode === 'professionnel' && (
        <div className='mt-20 flex flex-wrap gap-10'>
          {translatedServices.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(About, "about");
