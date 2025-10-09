import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RobotDialogue = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showDialogue, setShowDialogue] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  const messages = [
    "Bip boop ! 🤖",
    "Je suis BB-8, l'assistant de Matthieu !",
    "Il crée des systèmes embarqués innovants ⚡",
    "Explore son portfolio ! 🚀"
  ];

  useEffect(() => {
    if (currentMessageIndex < messages.length - 1) {
      const timer = setTimeout(() => {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1);
          setIsTyping(true);
        }, 500);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      const closeTimer = setTimeout(() => {
        setShowDialogue(false);
      }, 4000);

      return () => clearTimeout(closeTimer);
    }
  }, [currentMessageIndex, messages.length]);

  if (!showDialogue) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="absolute bottom-36 right-10 md:right-20 z-40 max-w-[280px] md:max-w-xs"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMessageIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-2xl p-4 relative border-2 border-orange-300"
        >
          <div className="absolute bottom-0 left-1/2 transform translate-y-full -translate-x-1/2">
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-orange-500" />
          </div>

          <TypewriterText text={messages[currentMessageIndex]} />

          <div className="flex gap-1 mt-3 justify-center">
            {messages.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentMessageIndex ? 'bg-white scale-125' : 
                  index < currentMessageIndex ? 'bg-orange-200' : 'bg-orange-800'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setShowDialogue(false)}
            className="absolute -top-2 -right-2 w-7 h-7 bg-red-600 hover:bg-red-700 rounded-full text-white text-sm font-bold shadow-lg transition-transform hover:scale-110 border-2 border-white"
          >
            ×
          </button>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

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
      }, 40);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <p className="text-white text-sm font-medium drop-shadow-lg">
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-1 h-4 bg-white ml-1"
        />
      )}
    </p>
  );
};

export default RobotDialogue;