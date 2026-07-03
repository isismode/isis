import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle2, AlertCircle, BarChart3, Clock, Users, MapPin, TrendingUp, Check } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'geral' | 'pendencias' | 'performance'>('geral');

  // Live feed simulation data for the mockup
  const mockActivityLog = [
    { id: 1, time: '14:32', store: 'Carrefour Pampulha', desc: 'Ocorrência de Gôndola Registrada', supervisor: 'Ana S. (Supervisor)', status: 'success' },
    { id: 2, time: '14:15', store: 'Pão de Açúcar Recreio', desc: 'Registro Diário de Supervisão Enviado', supervisor: 'Carlos M. (Supervisor)', status: 'info' },
    { id: 3, time: '13:58', store: 'Supermercado Zona Sul', desc: 'Evidência de Degustação Registrada', supervisor: 'Felipe T. (Supervisor)', status: 'warning' },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pb-28 flex items-center justify-center overflow-hidden grid-bg">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-[450px] h-[450px] rounded-full ambient-glow-1 -z-10 blur-3xl opacity-60"></div>
      <div className="absolute bottom-1/5 right-1/10 w-[550px] h-[550px] rounded-full ambient-glow-2 -z-10 blur-3xl opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full ambient-glow-3 -z-10 blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Copy */}
          <div className="lg:col-span-5 text-left space-y-8 z-10">
            {/* Tag / Micro Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.2)] animate-pulse">
              <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-cyan">
                Lançamento Oficial v3.2
              </span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                ISIS
              </h1>
              <p className="text-xl md:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                Inteligência de Supervisão e Indicadores de Sell Out
              </p>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-lg font-light">
                Centralize visitas, pendências, indicadores e toda a operação de campo em uma única plataforma. Conecte sua gestão e promotores em tempo real.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onScrollToSection('#como-funciona')}
                id="btn-hero-como-funciona"
                className="group px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo hover:from-brand-indigo hover:to-brand-purple transition-all duration-300 shadow-[0_8px_25px_rgba(0,82,255,0.3)] hover:shadow-[0_8px_30px_rgba(157,78,221,0.4)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Conhecer Plataforma
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onScrollToSection('#beneficios')}
                id="btn-hero-beneficios"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Ver Recursos
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/5 space-y-3">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Gestão de Trade Marketing Orientada por Dados
              </span>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-400 text-xs font-light">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-brand-cyan" />
                  <span>Sem Planilhas Perdidas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-brand-cyan" />
                  <span>Decisões em Tempo Real</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-brand-cyan" />
                  <span>SLA Monitorado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Premium Dashboard Mockup */}
          <div className="lg:col-span-7 z-10 w-full">
            <div className="relative glass-panel rounded-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden glowing-border">
              
              {/* Mockup Header Controls */}
              <div className="bg-[#0f162a]/90 px-6 py-4 border-b border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 ml-4 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    console.isis.com.br/dashboard
                  </span>
                </div>

                {/* Simulated Tab Buttons */}
                <div className="flex items-center bg-black/35 rounded-lg p-1 border border-white/5">
                  <button
                    onClick={() => setActiveTab('geral')}
                    className={`px-3 py-1 rounded text-[11px] font-medium transition-all ${
                      activeTab === 'geral' ? 'bg-brand-blue text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                    id="mockup-tab-geral"
                  >
                    Painel Geral
                  </button>
                  <button
                    onClick={() => setActiveTab('pendencias')}
                    className={`px-3 py-1 rounded text-[11px] font-medium transition-all ${
                      activeTab === 'pendencias' ? 'bg-brand-blue text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                    id="mockup-tab-pendencias"
                  >
                    Pendências
                  </button>
                  <button
                    onClick={() => setActiveTab('performance')}
                    className={`px-3 py-1 rounded text-[11px] font-medium transition-all ${
                      activeTab === 'performance' ? 'bg-brand-blue text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                    id="mockup-tab-performance"
                  >
                    Desempenho
                  </button>
                </div>
              </div>

              {/* Mockup Workspace Area */}
              <div className="p-6 bg-[#090e1c]/40 min-h-[360px] flex flex-col justify-between">
                
                {activeTab === 'geral' && (
                  <div className="space-y-6 animate-fadeIn">
                    {/* Top Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-[#111933]/50 p-4 rounded-xl border border-white/5">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium mb-1">
                          <span>Cobertura de Lojas</span>
                          <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                        </div>
                        <div className="text-xl font-bold text-white">98.4%</div>
                        <div className="text-[10px] text-emerald-400 font-medium mt-1">▲ 1.2% vs ontem</div>
                      </div>
                      
                      <div className="bg-[#111933]/50 p-4 rounded-xl border border-white/5">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium mb-1">
                          <span>Resolução SLA</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple" />
                        </div>
                        <div className="text-xl font-bold text-white">92.1%</div>
                        <div className="text-[10px] text-emerald-400 font-medium mt-1">▲ 3.5% vs sem. ant.</div>
                      </div>

                      <div className="bg-[#111933]/50 p-4 rounded-xl border border-white/5">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium mb-1">
                          <span>Pendências Resolvidas</span>
                          <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                        </div>
                        <div className="text-xl font-bold text-white">124</div>
                        <div className="text-[10px] text-brand-cyan font-medium mt-1">Meta: 100% resolvida</div>
                      </div>
                    </div>

                    {/* Indicators & Follow-ups Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                      {/* Left Block - Real Indicators of Platform */}
                      <div className="md:col-span-7 bg-[#111933]/40 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-slate-200">Indicadores Operacionais Reais</span>
                          <span className="text-[10px] bg-brand-cyan/10 text-brand-cyan px-1.5 py-0.5 rounded border border-brand-cyan/10">Metodologia ISIS</span>
                        </div>
                        
                        {/* Real platform indicators with clean layout */}
                        <div className="space-y-2.5 flex-1 flex flex-col justify-center">
                          <div className="space-y-1">
                            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                              <span>Lojas Visitadas</span>
                              <span className="text-white font-semibold">34 de 35 visitadas</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full bg-brand-cyan rounded-full" style={{ width: '97%' }}></div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[10px] border-b border-white/5 pb-1.5">
                            <span className="text-slate-400">Degustações Programadas</span>
                            <span className="text-white font-bold font-mono">14</span>
                          </div>

                          <div className="flex items-center justify-between text-[10px] border-b border-white/5 pb-1.5">
                            <span className="text-slate-400">Degustações Realizadas</span>
                            <span className="text-white font-bold font-mono">12</span>
                          </div>

                          <div className="flex items-center justify-between text-[10px] border-b border-white/5 pb-1.5">
                            <span className="text-slate-400">Pendências Abertas</span>
                            <span className="text-brand-purple font-bold font-mono">7</span>
                          </div>

                          <div className="flex items-center justify-between text-[10px]">
                            <span className="text-slate-400">Pendências Resolvidas</span>
                            <span className="text-emerald-400 font-bold font-mono">28</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Block - Follow-ups em Andamento */}
                      <div className="md:col-span-5 bg-[#111933]/40 p-4 rounded-xl border border-white/5 flex flex-col">
                        <span className="text-xs font-semibold text-slate-200 mb-3 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></span>
                          Follow-ups em Andamento
                        </span>
                        <div className="space-y-3.5 flex-1 overflow-y-auto max-h-28 pr-1">
                          <div className="text-[10px] border-l-2 border-brand-purple pl-2 py-0.5">
                            <div className="flex justify-between text-slate-400">
                              <span className="font-semibold text-white">Ocorrência #3412</span>
                              <span className="font-mono text-[9px] text-brand-purple font-semibold">Aguardando Gestão</span>
                            </div>
                            <p className="text-slate-300 truncate mt-0.5">Sinalização de gôndola amassada ou fora do padrão</p>
                            <p className="text-slate-500 text-[9px]">Carrefour Pampulha</p>
                          </div>

                          <div className="text-[10px] border-l-2 border-amber-500 pl-2 py-0.5">
                            <div className="flex justify-between text-slate-400">
                              <span className="font-semibold text-white">Escala de Degustação</span>
                              <span className="font-mono text-[9px] text-amber-400 font-semibold">Ajuste Pendente</span>
                            </div>
                            <p className="text-slate-300 truncate mt-0.5">Promotor de degustação necessita confirmação de escala</p>
                            <p className="text-slate-500 text-[9px]">Pão de Açúcar Recreio</p>
                          </div>

                          <div className="text-[10px] border-l-2 border-brand-purple pl-2 py-0.5">
                            <div className="flex justify-between text-slate-400">
                              <span className="font-semibold text-white">Ocorrência #3409</span>
                              <span className="font-mono text-[9px] text-brand-purple font-semibold">Aguardando Gestão</span>
                            </div>
                            <p className="text-slate-300 truncate mt-0.5">Foto de evidência incompleta de material promocional</p>
                            <p className="text-slate-500 text-[9px]">Supermercado Zona Sul</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'pendencias' && (
                  <div className="space-y-5 animate-fadeIn">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-slate-200">Painel de Follow-up Ativo</span>
                      <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/15">SLA Crítico: 2 Lojas</span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="bg-[#121c38]/80 p-3.5 rounded-xl border border-rose-500/25 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 font-bold text-xs">
                            !
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white leading-tight">Ocorrência Crítica Registrada</p>
                            <p className="text-[10px] text-slate-400">Pão de Açúcar - Loja 24 • Supervisor: Rodrigo C.</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded border border-rose-500/20 font-medium">SLA Vencendo</span>
                          <p className="text-[9px] text-slate-500 font-mono mt-1">Faltam 45 min</p>
                        </div>
                      </div>

                      <div className="bg-[#111933]/60 p-3.5 rounded-xl border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                            !
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-white leading-tight">Solicitação de Ação de Degustação</p>
                            <p className="text-[10px] text-slate-400">Carrefour Tamboré • Supervisor: Marina G.</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20 font-medium">Aguardando Envio</span>
                          <p className="text-[9px] text-slate-500 font-mono mt-1">Criada há 2h</p>
                        </div>
                      </div>

                      <div className="bg-[#111933]/30 p-3.5 rounded-xl border border-white/5 flex items-center justify-between opacity-60">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
                            ✓
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-slate-300 leading-tight">Ajuste Operacional no PDV</p>
                            <p className="text-[10px] text-slate-500">Supermercado Guanabara • Supervisor: Carlos D.</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">Concluído</span>
                          <p className="text-[9px] text-slate-500 font-mono mt-1">Resolvido às 11:20</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'performance' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-slate-200">Evolução de Atendimento</span>
                      <div className="flex gap-2 text-[9px] font-mono">
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>Realizado</span>
                        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>Previsto</span>
                      </div>
                    </div>

                    {/* Chart rendering */}
                    <div className="bg-[#111933]/50 p-4 rounded-xl border border-white/5">
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-[10px] mb-1">
                            <span className="text-slate-300 font-medium">Visitas Concluídas (Meta Semanal)</span>
                            <span className="text-white font-bold">94% / 100%</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full" style={{ width: '94%' }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[10px] mb-1">
                            <span className="text-slate-300 font-medium">Ações de Trade Efetuadas</span>
                            <span className="text-white font-bold">87% / 100%</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-brand-indigo to-brand-purple rounded-full" style={{ width: '87%' }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[10px] mb-1">
                            <span className="text-slate-300 font-medium">Fotos de Evidências Enviadas</span>
                            <span className="text-white font-bold">91% / 100%</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-brand-cyan to-emerald-400 rounded-full" style={{ width: '91%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mini card indicator */}
                    <div className="flex items-center gap-3 bg-[#111933]/30 p-2.5 rounded-lg border border-white/5 text-[11px] text-slate-300">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span>Transparência total e acompanhamento da operação de Trade alimentados em tempo real pela supervisão.</span>
                    </div>
                  </div>
                )}

                {/* Simulated Console Footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-indicator"></span>
                    <span>Conexão Segura SSL</span>
                  </div>
                  <span>Atualizado há poucos segundos</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
