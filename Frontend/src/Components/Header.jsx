import React, { useState, useRef, useEffect } from 'react';
import { GiWheat } from 'react-icons/gi';
import { FaLanguage, FaChevronDown, FaCheck, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Header({ lang, setLang, t, theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const languages = [
    { code: 'EN', name: 'English', native: 'English' },
    { code: 'HI', name: 'Hindi', native: 'हिन्दी' },
    { code: 'BHO', name: 'Bhojpuri', native: 'भोजपुरी' },
    { code: 'BN', name: 'Bengali', native: 'বাংলা' },
  ];

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAnchorClick = (e, targetId) => {
    if (location.pathname !== '/') {
      navigate('/' + targetId);
    } else {
      const el = document.querySelector(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-header backdrop-blur-md border-b border-theme transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo & Identity */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 cursor-pointer">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#22c55e] flex items-center justify-center text-black shadow-md shrink-0 border border-green-400/30">
            <GiWheat className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-xl font-black text-primary tracking-tight">{t.brand}</span>
            </div>
            <p className="text-[10px] sm:text-xs text-muted font-medium line-clamp-1">{t.subBrand}</p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-main">
          <a 
            href="#how-it-works"
            onClick={(e) => handleAnchorClick(e, '#how-it-works')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t.nav.howItWorks}
          </a>
          <a 
            href="#solution" 
            onClick={(e) => handleAnchorClick(e, '#solution')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t.nav.solution || "AI Solution"}
          </a>
          <a 
            href="#features" 
            onClick={(e) => handleAnchorClick(e, '#features')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t.nav.features}
          </a>
          <a 
            href="#hardware" 
            onClick={(e) => handleAnchorClick(e, '#hardware')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t.nav.hardware || "Hardware & IoT"}
          </a>
          <a 
            href="#impact" 
            onClick={(e) => handleAnchorClick(e, '#impact')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {t.nav.impact}
          </a> 
        </nav>

        {/* Controls & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Theme Toggle Switch */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md border border-theme bg-card text-main hover:bg-alt transition-all cursor-pointer shadow-sm"
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <FaSun className="w-3.5 h-3.5 text-[#EAB308]" /> : <FaMoon className="w-3.5 h-3.5 text-[#166534]" />}
          </button>

          {/* Language Dropdown Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-md border border-theme bg-card text-main hover:bg-alt transition-all cursor-pointer font-medium shadow-sm"
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              <FaLanguage className="w-4 h-4 text-primary" />
              <span className="font-bold text-[11px] sm:text-xs uppercase">{currentLangObj.code}</span>
              <FaChevronDown className={`w-2.5 h-2.5 text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-card border border-theme rounded-lg shadow-lg py-1 z-50">
                <div className="px-3 py-1 border-b border-theme text-[10px] font-bold text-muted uppercase">
                  Select Language
                </div>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-1.5 text-left text-xs font-semibold hover:bg-alt transition-colors cursor-pointer ${
                      lang === l.code ? 'text-primary bg-primary/10' : 'text-main'
                    }`}
                  >
                    <span>{l.native}</span>
                    {lang === l.code && <FaCheck className="w-3 h-3 text-primary" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Primary CTA -> React Router Link to /login */}
          <Link
            to="/login"
            className="hidden sm:flex items-center gap-2 bg-primary hover:opacity-95 text-white dark:text-[#0D140E] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-extrabold shadow-sm transition-all cursor-pointer"
          >
            <span>{t.nav.getStarted}</span>
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md border border-theme bg-card text-main hover:bg-alt transition-all cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-theme bg-card px-4 py-4 space-y-3 transition-all">
          <nav className="flex flex-col space-y-2 text-sm font-bold text-main">
            <a 
              href="#how-it-works" 
              onClick={(e) => { setMobileMenuOpen(false); handleAnchorClick(e, '#how-it-works'); }}
              className="py-2 px-3 rounded-md hover:bg-alt transition-colors"
            >
              {t.nav.howItWorks}
            </a>
            <a 
              href="#solution" 
              onClick={(e) => { setMobileMenuOpen(false); handleAnchorClick(e, '#solution'); }}
              className="py-2 px-3 rounded-md hover:bg-alt transition-colors"
            >
              {t.nav.solution || "AI Solution"}
            </a>
            <a 
              href="#features" 
              onClick={(e) => { setMobileMenuOpen(false); handleAnchorClick(e, '#features'); }}
              className="py-2 px-3 rounded-md hover:bg-alt transition-colors"
            >
              {t.nav.features}
            </a>
            <a 
              href="#hardware" 
              onClick={(e) => { setMobileMenuOpen(false); handleAnchorClick(e, '#hardware'); }}
              className="py-2 px-3 rounded-md hover:bg-alt transition-colors"
            >
              {t.nav.hardware || "Hardware & IoT"}
            </a>
            <a 
              href="#impact" 
              onClick={(e) => { setMobileMenuOpen(false); handleAnchorClick(e, '#impact'); }}
              className="py-2 px-3 rounded-md hover:bg-alt transition-colors"
            >
              {t.nav.impact}
            </a> 
          </nav>
          
          <div className="pt-2 border-t border-theme">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center bg-primary text-white dark:text-[#0D140E] py-2.5 rounded-md text-xs font-black uppercase tracking-wider shadow-sm"
            >
              {t.nav.getStarted}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
