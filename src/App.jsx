import "./App.css";
import "./i18n/i18n";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Hero from "./component/Hero";
import About from "./component/About";
import Tools from "./component/Tools";
import Services from "./component/Services";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import LanguageSwitcher from "./component/LanguageSwitcher";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial direction based on current language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n.language]);

  return (
    <div className={`min-h-screen ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <LanguageSwitcher />
      <Hero />
      <About />
      <Tools />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
