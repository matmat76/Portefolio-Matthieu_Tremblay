import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "../contexts/LanguageContext";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useTranslation();
  
  // Projets traduits
  const translatedProjects = [
    {
      name: t.projects.motor.name,
      description: t.projects.motor.description,
      tags: t.projects.motor.tags.map((tag, index) => ({
        name: tag,
        color: projects[0].tags[index].color
      })),
      image: projects[0].image,
      source_code_link: projects[0].source_code_link,
    },
    {
      name: t.projects.car.name,
      description: t.projects.car.description,
      tags: t.projects.car.tags.map((tag, index) => ({
        name: tag,
        color: projects[1].tags[index].color
      })),
      image: projects[1].image,
      source_code_link: projects[1].source_code_link,
    },
    {
      name: t.projects.humanRecognition.name,
      description: t.projects.humanRecognition.description,
      tags: t.projects.humanRecognition.tags.map((tag, index) => ({
        name: tag,
        color: projects[2].tags[index].color
      })),
      image: projects[2].image,
      source_code_link: projects[2].source_code_link,
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t.works.subtitle}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t.works.title}</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {t.works.description}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {translatedProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};export default SectionWrapper(Works, "");
