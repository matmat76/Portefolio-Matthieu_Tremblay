import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const Languages = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Mes compétences</p>
        <h2 className={`${styles.sectionHeadText}`}>Langues.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Section à venir : Détails sur les langues maîtrisées.
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Languages, "languages");
