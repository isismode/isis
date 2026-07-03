import React from 'react';
import { ShieldCheck, Database, Sliders, LineChart, Network, ArrowRight, ClipboardCheck, Zap } from 'lucide-react';

export default function Solucao() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-cyan" />,
      title: 'Ambiente Unificado',
      desc: 'Centralização definitiva de visitas, registros, atividades de merchandising e relatórios em um painel gerencial único e auditável.'
    },
    {
      icon: <Database className="w-5 h-5 text-brand-purple" />,
      title: 'Histórico Operacional Permanente',
      desc: 'Dossiê completo e imutável por PDV, rede e loja. Preserve o histórico operacional e resoluções mesmo em caso de troca de equipes.'
    },
    {
      icon: <Sliders className="w-5 h-5 text-brand-cyan" />,
      title: 'Follow-up de SLA Rígido',
      desc: 'Controle sistemático de prazos, responsáveis e criticidade para cada pendência aberta. Resolução de rupturas com velocidade.'
    },
    {
      icon: <LineChart className="w-5 h-5 text-brand-purple" />,
      title: 'Análise de Indicadores em Tempo Real',
      desc: 'Leitura instantânea de gráficos de produtividade, rupturas registradas e corrigidas e evolução semanal do sell out operacional.'
    }
  ];

  return (
    <section id="solucao" className="py-24 bg-[#0a0f1d] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-brand-blue/5 -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-purple/5 -z-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Core Concept & Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20">
                <Zap className="w-3.5 h-3.5 text-brand-cyan" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan">Soberania Operacional</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Supervisão Inteligente de Ponta a Ponta
              </h2>
              <p className="text-slate-400 font-light leading-relaxed text-sm md:text-base">
                O ISIS substitui o improviso pela previsibilidade. A plataforma conecta o promotor em gôndola, o supervisor de rota e os executivos de Trade em uma estrutura transparente de acompanhamento operacional.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((pillar, index) => (
                <div key={index} className="space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <h3 className="text-sm font-bold text-slate-100">{pillar.title}</h3>
                  </div>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Beautiful Live Flow Chart Interface */}
          <div className="lg:col-span-6 w-full">
            <div className="glass-panel p-6.5 rounded-2xl border-white/5 bg-[#0f152a]/55 relative glowing-border">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-6 block font-mono text-center">
                Fluxo de Inteligência ISIS
              </span>

              {/* Graphical flow scheme */}
              <div className="relative space-y-12 py-4">
                
                {/* Flow lines (absolute elements behind) */}
                <div className="absolute top-12 bottom-12 left-[28px] w-[2px] bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-blue -z-10">
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-white/20 animate-pulse"></div>
                </div>

                {/* Node 1: Promoters in field */}
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#111933] border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shadow-[0_0_15px_rgba(0,240,255,0.15)] group-hover:scale-105 transition-all duration-300">
                    <ClipboardCheck className="w-6 h-6" />
                  </div>
                  <div className="flex-1 bg-black/25 p-3.5 rounded-xl border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-xs font-bold text-white">Equipes de Campo</h4>
                      <span className="text-[8px] bg-brand-cyan/10 text-brand-cyan px-1.5 py-0.5 rounded font-mono font-bold">App / Mobile</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-light leading-snug">
                      Registro instantâneo de visitas, pesquisas de preço, estoque virtual e alertas rápidos de gôndola.
                    </p>
                  </div>
                </div>

                {/* Node 2: Real-time Cloud API Router */}
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#111933] border border-brand-purple/30 flex items-center justify-center text-brand-purple shadow-[0_0_15px_rgba(157,78,221,0.15)] group-hover:scale-105 transition-all duration-300">
                    <Network className="w-6 h-6 animate-spin-slow" />
                  </div>
                  <div className="flex-1 bg-black/25 p-3.5 rounded-xl border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-xs font-bold text-white">Processamento Central ISIS</h4>
                      <span className="text-[8px] bg-brand-purple/10 text-brand-purple px-1.5 py-0.5 rounded font-mono font-bold">Tempo Real</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-light leading-snug">
                      Cruzamento de SLAs operacionais, consolidação de indicadores e geração automática de follow-ups de lojas.
                    </p>
                  </div>
                </div>

                {/* Node 3: Real-time Executive Dashboard Hub */}
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#111933] border border-brand-blue/30 flex items-center justify-center text-brand-blue shadow-[0_0_15px_rgba(0,82,255,0.15)] group-hover:scale-105 transition-all duration-300">
                    <LineChart className="w-6 h-6" />
                  </div>
                  <div className="flex-1 bg-black/25 p-3.5 rounded-xl border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-xs font-bold text-white">Painel Executivo de Indicadores</h4>
                      <span className="text-[8px] bg-brand-blue/10 text-brand-blue px-1.5 py-0.5 rounded font-mono font-bold">Web Console</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-light leading-snug">
                      Monitoramento unificado das lojas, análises semanais de sell out e tomada de decisões comerciais céleres.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
