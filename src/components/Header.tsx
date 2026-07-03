import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onScrollToDemo: () => void;
}

export default function Header({ onScrollToDemo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'O Problema', href: '#problema' },
    { label: 'A Solução', href: '#solucao' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Indicadores', href: '#indicadores' },
    { label: 'Módulos', href: '#modulos' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0f1d]/85 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue via-brand-indigo to-brand-cyan shadow-[0_4px_15px_rgba(0,82,255,0.35)] transition-transform duration-300 group-hover:scale-105">
            <ShieldCheck className="w-5.5 h-5.5 text-white" />
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-tr from-brand-cyan via-brand-purple to-brand-blue opacity-30 blur-sm group-hover:opacity-60 transition-opacity"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider text-white flex items-center gap-1 leading-none">
              ISIS
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
            </span>
            <span className="text-[9px] font-medium text-slate-400 mt-0.5 leading-tight max-w-[200px]">
              Inteligência de Supervisão e Indicadores de Sell Out
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-4 py-1.5 rounded-full text-[13px] font-medium text-slate-300 hover:text-white transition-all duration-250 hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center relative group/btn">
          <div className="relative overflow-hidden px-5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 active:scale-98 cursor-default">
            <span className="relative z-10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
              Escalável para Novas Operações
            </span>
          </div>
          {/* Tooltip */}
          <div className="absolute top-full right-0 mt-2 w-72 p-3 bg-[#0e1428] border border-white/10 rounded-xl shadow-2xl text-[11px] text-slate-300 font-light leading-relaxed opacity-0 scale-95 pointer-events-none group-hover/btn:opacity-100 group-hover/btn:scale-100 transition-all duration-300 z-50">
            A plataforma pode ser adaptada para novas unidades, regiões ou estruturas operacionais mantendo a mesma metodologia de gestão.
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
          id="btn-mobile-toggle"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0c1224]/95 border-b border-white/5 backdrop-blur-lg py-6 px-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="py-2.5 px-4 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.label}
              </a>
            ))}
            <hr className="border-white/5 my-2" />
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
              <p className="text-xs font-semibold text-white mb-1.5 flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
                Escalável para Novas Operações
              </p>
              <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                A plataforma pode ser adaptada para novas unidades, regiões ou estruturas operacionais mantendo a mesma metodologia de gestão.
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
