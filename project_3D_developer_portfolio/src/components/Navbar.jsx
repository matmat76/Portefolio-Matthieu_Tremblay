import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logomatthieu, menu, close } from "../assets";
import { useTranslation, useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  const downloadCV = () => {
    const cvPath = language === 'fr' 
      ? '/cv/CV_Matthieu_Tremblay_FR.pdf' 
      : '/cv/CV_Matthieu_Tremblay_EN.pdf';
    
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = `CV-Matthieu-Tremblay-${language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logomatthieu} alt='logo' className='w-12 h-12 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Matthieu Tremblay &nbsp;
            <span className='sm:block hidden'> | {t.nav.profession}</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{t.nav[nav.id]}</a>
            </li>
          ))}
          
          {/* Section CV avec texte et bouton */}
          <li className='flex flex-col items-center gap-2'>
            <span className='text-secondary text-[14px] text-center max-w-[120px] leading-tight'>
              {t.nav.downloadCVText}
            </span>
            <button
              onClick={downloadCV}
              className='bg-tertiary hover:bg-secondary transition-colors duration-300 py-2 px-4 rounded-xl text-white font-medium text-[14px] shadow-md hover:shadow-lg transform hover:scale-105'
            >
              📄 {t.nav.downloadCV}
            </button>
          </li>
          
          <li>
            <LanguageToggle />
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{t.nav[nav.id]}</a>
                </li>
              ))}
              
              {/* CV pour mobile */}
              <li className='w-full'>
                <p className='text-secondary text-[12px] mb-2 text-center'>
                  {t.nav.downloadCVText}
                </p>
                <button
                  onClick={() => {
                    downloadCV();
                    setToggle(!toggle);
                  }}
                  className='w-full bg-tertiary hover:bg-secondary transition-colors py-2 px-3 rounded-lg text-white font-medium text-[14px]'
                >
                  📄 {t.nav.downloadCV}
                </button>
              </li>
              
              <li>
                <LanguageToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
