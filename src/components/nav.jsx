import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NAV_ROUTES = {
  // English
  "Home": "/",
  "About": "/about",
  "Projects": "/project",
  "Blogs": "/blog",
  "Contact": "/contact",
  // Igbo
  "Ụlọ": "/",
  "Gbasara": "/about",
  "Oru": "/project",
  "Kpọtụrụ": "/contact",
  // Yoruba
  "Ile": "/",
  "Nipa": "/about",
  "Iṣẹ": "/project",
  "Olubasọrọ": "/contact",
  // French
  "Accueil": "/",
  "À propos": "/about",
  "Projets": "/project",
};

const translations = {
  English: { nav: ["Home", "About", "Projects", "Blogs", "Contact"] },
  Igbo:    { nav: ["Ụlọ", "Gbasara", "Oru", "Blogs", "Kpọtụrụ"] },
  Yoruba:  { nav: ["Ile", "Nipa", "Iṣẹ", "Blogs", "Olubasọrọ"] },
  French:  { nav: ["Accueil", "À propos", "Projets", "Blogs", "Contact"] },
};

function Nav({ language, setLanguage, activeLink, setActiveLink }) {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRef = useRef(null);

  const navLinks = translations[language].nav;

  useEffect(() => {
  const updateUnderline = () => {
    if (!navRef.current) return;
    const activeLi = navRef.current.querySelector(`[data-link="${activeLink}"]`);
    if (!activeLi) return; // ✅ guard — stops crash if link not found
    const rect = activeLi.getBoundingClientRect();
    const newWidth = `${rect.width}px`;
    const newTransform = `translateX(${
      rect.left + rect.width / 2 - navRef.current.offsetLeft - rect.width / 10
    }px)`;

    setUnderlineStyle((prev) => {
      if (prev.width === newWidth && prev.transform === newTransform) return prev; // ✅ prevents re-render loop
      return { width: newWidth, transform: newTransform };
    });
  };

  const timer = setTimeout(updateUnderline, 0); // ✅ stored so it can be cleared
  window.addEventListener("resize", updateUnderline);

  return () => {
    clearTimeout(timer);  // ✅ cleans up timer on unmount
    window.removeEventListener("resize", updateUnderline);
  };
}, [activeLink, language]);
  return (
    <nav className="w-full bg-gray-800 px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img src="/assets/s-f-logo.png" alt="Logo" className="w-full h-full" />
          </div>
          <p className="text-white font-semibold text-sm md:text-base lg:text-lg">Speed Foundation</p>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center">
          <ul ref={navRef} className="flex space-x-6 xl:space-x-8 relative">
            {navLinks.map((link) => (
              <li key={link} data-link={link} className="relative">
                <Link
                  to={NAV_ROUTES[link] || "/"}
                  onClick={() => setActiveLink(link)}
                  className={`cursor-pointer pb-2 block transition-colors whitespace-nowrap ${
                    activeLink === link ? "text-white" : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {link}
                </Link>
              </li>
            ))}
            <span
              className="absolute bottom-0 left-[-50px] h-0.5 bg-green-500 transition-all duration-300 ease-out"
              style={underlineStyle}
            ></span>
          </ul>
        </div>

        {/* Language + Mobile Menu */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="flex items-center gap-1 md:gap-2 bg-gray-700 text-white px-2 md:px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="text-xs md:text-sm font-medium hidden sm:inline">{language}</span>
            </button>
            {showLanguageMenu && (
              <div className="absolute top-full right-0 mt-2 bg-gray-700 rounded-md shadow-lg overflow-hidden z-50 min-w-[120px]">
                {Object.keys(translations).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setShowLanguageMenu(false);
                      setActiveLink(translations[lang].nav[0]);
                    }}
                    className={`w-full text-left px-4 py-2 text-white hover:bg-gray-600 transition-colors text-sm ${language === lang ? "bg-gray-600" : ""}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4">
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  to={NAV_ROUTES[link] || "/"}
                  onClick={() => { setActiveLink(link); setMobileMenuOpen(false); }}
                  className={`block py-2 px-4 rounded transition-colors ${
                    activeLink === link ? "bg-green-600 text-white" : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;