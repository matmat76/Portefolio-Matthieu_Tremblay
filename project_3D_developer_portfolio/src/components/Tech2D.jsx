import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const TechIcon = ({ technology, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        ease: "easeOut" 
      }}
      whileHover={{ 
        scale: 1.1, 
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="flex flex-col items-center group cursor-pointer"
    >
      <div className="w-20 h-20 rounded-xl bg-tertiary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/10 group-hover:border-white/30">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-12 h-12 object-contain"
          loading="lazy"
        />
      </div>
      <p className="text-white text-[14px] mt-3 text-center font-medium opacity-80 group-hover:opacity-100 transition-opacity">
        {technology.name}
      </p>
    </motion.div>
  );
};

const Tech2D = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mes compétences techniques</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mt-20 max-w-7xl mx-auto">
        {technologies.map((technology, index) => (
          <TechIcon key={technology.name} technology={technology} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech2D, "tech");