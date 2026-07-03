import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problema from './components/Problema';
import Solucao from './components/Solucao';
import ComoFunciona from './components/ComoFunciona';
import Beneficios from './components/Beneficios';
import Indicadores from './components/Indicadores';
import ModulosPlataforma from './components/ModulosPlataforma';
import Footer from './components/Footer';

export default function App() {
  // Helper to scroll to any section with appropriate header offset
  const scrollToSection = (sectionId: string) => {
    const target = document.querySelector(sectionId);
    if (target) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-bg-dark text-slate-100 antialiased overflow-hidden selection:bg-brand-cyan/20 selection:text-brand-cyan">
      
      {/* Sticky Header */}
      <Header onScrollToDemo={() => scrollToSection('#footer')} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section with Interactive Mockup */}
        <Hero onScrollToSection={scrollToSection} />

        {/* Problema Section: Standard Pain Points */}
        <Problema />

        {/* Solucao Section: Centralized Platform Value */}
        <Solucao />

        {/* Como Funciona: Glassmorphic Real-Image Placeholders */}
        <ComoFunciona />

        {/* Beneficios: 10 High-Impact Value Props */}
        <Beneficios />

        {/* Indicadores: Live Metric Range Evaluator */}
        <Indicadores />

        {/* Módulos da Plataforma Section */}
        <ModulosPlataforma />
      </main>

      {/* Footer with Tagline, links & GDPR Compliance banner */}
      <Footer />

    </div>
  );
}
