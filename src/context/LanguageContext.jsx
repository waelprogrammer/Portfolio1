import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../config/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const toggleLang = () => setLang(l => l === 'en' ? 'ar' : 'en');
  const t = translations[lang];
  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.title = isRTL
      ? 'رنيم تعتنجي — استوديو إبداعي'
      : 'Ranim Toutanji — Creative Digital Studio';
  }, [lang, isRTL]);

  return (
    <LanguageContext.Provider value={{ lang, isRTL, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
