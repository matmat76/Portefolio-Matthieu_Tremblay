// Vocabulaire de traduction pour les dates
const monthMap = {
  "Janvier": "January",
  "Février": "February",
  "Mars": "March",
  "Avril": "April",
  "Mai": "May",
  "Juin": "June",
  "Juillet": "July",
  "Août": "August",
  "Septembre": "September",
  "Octobre": "October",
  "Novembre": "November",
  "Décembre": "December",
  "Jan": "Jan",
  "Fév": "Feb",
  "Mar": "Mar",
  "Avr": "Apr",
  "Mai": "May",
  "Juin": "Jun",
  "Juil": "Jul",
  "Août": "Aug",
  "Sep": "Sep",
  "Oct": "Oct",
  "Nov": "Nov",
  "Déc": "Dec",
};

const keywordMap = {
  "Présent": "Present",
};

/**
 * Traduit une date du français vers l'anglais (ou vice-versa)
 * @param {string} dateStr - La chaîne de date à traduire (ex: "Juillet 2025 - Présent")
 * @param {string} targetLanguage - Langue cible ('fr' ou 'en')
 * @returns {string} - La date traduite
 */
export const translateDate = (dateStr, targetLanguage) => {
  // Si français demandé, retourner tel quel
  if (targetLanguage === 'fr') return dateStr;

  let translated = dateStr;

  // Traduire les mois
  Object.entries(monthMap).forEach(([fr, en]) => {
    // Utiliser une regex pour éviter les remplacements partiels
    translated = translated.replace(new RegExp(`\\b${fr}\\b`, 'g'), en);
  });

  // Traduire les mots-clés
  Object.entries(keywordMap).forEach(([fr, en]) => {
    translated = translated.replace(new RegExp(`\\b${fr}\\b`, 'g'), en);
  });

  return translated;
};