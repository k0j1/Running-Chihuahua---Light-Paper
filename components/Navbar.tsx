import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, Globe } from 'lucide-react';
import { Language } from '../types';
import { content } from '../data/content';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'ja' ? 'en' : 'ja');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-amber-500 p-1.5 rounded-lg">
              <Gamepad2 className="h-6 w-6 text-slate-900" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">{t.hero.title}</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-4">
              {t.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-amber-400 hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 text-slate-300 hover:text-white border border-slate-700 bg-slate-800 px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>{lang === 'ja' ? 'EN' : 'JP'}</span>
            </button>
          </div>
          
          <div className="-mr-2 flex md:hidden items-center space-x-4">
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 text-slate-300 hover:text-white border border-slate-700 bg-slate-800 px-2 py-1.5 rounded-md text-xs font-medium"
            >
              <Globe className="h-3 w-3" />
              <span>{lang === 'ja' ? 'EN' : 'JP'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {t.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-amber-400 hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};