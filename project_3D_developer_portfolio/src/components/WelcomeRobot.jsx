import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeRobot = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showRobot, setShowRobot] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  // Messages en dur pour commencer (on pourra ajouter la traduction plus tard)
  const messages = [
    "Bienvenue sur mon portfolio ! 👋",
    "Enchanté, moi c'est Sparky ! 🤖",
    "Matthieu a réalisé plusieurs projets complexes dans l'embarqué.",
    "Il adore innover et participer à des projets ambitieux ! 🚀",
    "N'hésitez pas à explorer ses réalisations ! ✨"
  ];

  useEffect(() => {
    if (currentMessageIndex < messages.length - 1) {
      const timer = setTimeout(() => {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1);
          setIsTyping(true);
        }, 500);
      }, 3500); // Durée d'affichage de chaque message

      return () => clearTimeout(timer);
    } else {
      // Fermer le robot après le dernier message
      const closeTimer = setTimeout(() => {
        setShowRobot(false);
      }, 4000);

      return () => clearTimeout(closeTimer);
    }
  }, [currentMessageIndex, messages.length]);

  if (!showRobot) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -200, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed bottom-8 left-8 z-50 flex items-end gap-4"
      >
        {/* Robot */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Image du robot */}
          <div className="w-32 h-32 relative">
            {/* Corps du robot */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl shadow-2xl"
            >
              {/* Tête */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-2xl shadow-lg">
                {/* Yeux */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute top-4 left-3 w-3 h-3 bg-blue-600 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
                  className="absolute top-4 right-3 w-3 h-3 bg-blue-600 rounded-full"
                />
                {/* Sourire */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-2 border-b-2 border-blue-600 rounded-full" />
              </div>

              {/* Antenne */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 left-1/2 transform -translate-x-1/2"
              >
                <div className="w-1 h-4 bg-blue-400 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full mx-auto -mt-1 animate-pulse" />
              </motion.div>

              {/* Bras */}
              <motion.div
                animate={{ rotate: [0, -20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute left-0 top-20 w-6 h-12 bg-blue-500 rounded-lg"
              />
              <motion.div
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute right-0 top-20 w-6 h-12 bg-blue-500 rounded-lg"
              />
            </motion.div>
          </div>

          {/* Bouton de fermeture */}
          <button
            onClick={() => setShowRobot(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full text-white text-xs font-bold shadow-lg transition-colors"
          >
            ×
          </button>
        </motion.div>

        {/* Bulle de dialogue */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessageIndex}
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-xs"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-4 relative">
              {/* Triangle de la bulle */}
              <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2">
                <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white" />
              </div>

              {/* Texte avec effet de frappe */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-800 text-sm leading-relaxed"
              >
                {isTyping ? (
                  <TypewriterText text={messages[currentMessageIndex]} />
                ) : (
                  messages[currentMessageIndex]
                )}
              </motion.p>

              {/* Indicateur de progression */}
              <div className="flex gap-1 mt-3 justify-center">
                {messages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentMessageIndex
                        ? 'bg-blue-500'
                        : index < currentMessageIndex
                        ? 'bg-blue-300'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

// Composant pour l'effet machine à écrire
const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30); // Vitesse de frappe

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-1 h-4 bg-blue-500 ml-1"
        />
      )}
    </span>
  );
};

export default WelcomeRobot;