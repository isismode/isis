import React from 'react';
import { ShieldCheck, ArrowUp, Mail, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#050812] border-t border-white/5 py-12 md:py-16 relative overflow-hidden">
      {/* Absolute ambient background overlay */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-blue/5 -z-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Column 1: Brand & Slogans (Requested Content) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-cyan shadow-[0_0_10px_rgba(0,82,255,0.3)]">
                <ShieldCheck className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-widest text-white uppercase flex items-center gap-1.5 leading-none">
                ISIS
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
              </span>
            </div>
            
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-100">
                ISIS — Inteligência de Supervisão e Indicadores de Sell Out
              </h4>
              <p className="text-slate-400 text-xs font-light max-w-md">
                Plataforma de gestão de Trade Marketing alimentada de forma transparente pela supervisão de campo.
              </p>
            </div>
          </div>

          {/* Column 2: Developer Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider">Desenvolvido por</h4>
            <div className="space-y-3.5">
              <div>
                <p className="text-sm font-bold text-white">Patrícia Gonçalves</p>
                <p className="text-xs text-slate-300 mt-0.5">Blue Bay Alimentos</p>
                <p className="text-[11px] text-slate-500 font-light mt-0.5">Filial Salvador</p>
              </div>
              
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Trade Marketing • Inteligência Operacional • Automação de Processos
              </p>
              
              <div className="space-y-1.5 pt-2">
                <p className="text-xs text-slate-300 flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>📧</span>
                  <a href="mailto:patriciagoncallves@gmail.com">patriciagoncallves@gmail.com</a>
                </p>
                <p className="text-xs text-slate-300 flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>📱</span>
                  <a href="https://wa.me/5571992917848" target="_blank" rel="noopener noreferrer">WhatsApp: (71) 99291-7848</a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Actions */}
          <div className="md:col-span-2 flex flex-col items-start md:items-end justify-end self-stretch">
            {/* Scroll back to top widget */}
            <button
              onClick={handleScrollTop}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer mt-4 md:mt-0"
              id="btn-scroll-top"
            >
              Voltar ao Topo
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Deep Footer and Compliance (Required) */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500">
          <p>© {new Date().getFullYear()} ISIS. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-brand-cyan" />
            <span>PLATAFORMA CORPORATIVA EM CONFORMIDADE COM LGPD</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
