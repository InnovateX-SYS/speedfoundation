import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "../i18n/LanguageContext";
import { LANGUAGES } from "../i18n/dictionary";

// Canonical (English) labels drive the routes; the visible label is translated.
const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/project" },
  { label: "Blogs", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

function Nav() {
  const { t, language, setLanguage } = useI18n();
  const { pathname } = useLocation();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRef = useRef(null);

  // Active link comes from the URL, so it survives navigation and language changes.
  const activeLink =
    NAV_ITEMS.find((item) => item.to !== "/" && pathname.startsWith(item.to))?.label ||
    (pathname === "/" ? "Home" : "");

  useEffect(() => {
    const updateUnderline = () => {
      if (!navRef.current) return;
      const activeLi = navRef.current.querySelector(`[data-link="${activeLink}"]`);
      if (!activeLi) return;
      const rect = activeLi.getBoundingClientRect();
      const newWidth = `${rect.width}px`;
      const newTransform = `translateX(${
        rect.left + rect.width / 2 - navRef.current.offsetLeft - rect.width / 10
      }px)`;

      setUnderlineStyle((prev) => {
        if (prev.width === newWidth && prev.transform === newTransform) return prev;
        return { width: newWidth, transform: newTransform };
      });
    };

    const timer = setTimeout(updateUnderline, 0);
    window.addEventListener("resize", updateUnderline);

    return () => {
      clearTimeout(timer);
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
            {NAV_ITEMS.map((item) => (
              <li key={item.label} data-link={item.label} className="relative">
                <Link
                  to={item.to}
                  className={`cursor-pointer pb-2 block transition-colors whitespace-nowrap ${
                    activeLink === item.label ? "text-white" : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {t(item.label)}
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
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setShowLanguageMenu(false);
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
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 px-4 rounded transition-colors ${
                    activeLink === item.label ? "bg-green-600 text-white" : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {t(item.label)}
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
