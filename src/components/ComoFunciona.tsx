import React, { useState } from 'react';
import { Layers, CalendarCheck, HelpCircle, Users, BarChart3, HelpCircle as HelpIcon, Monitor, Smartphone, UploadCloud, Info, Copy, Check, Menu, Search, RotateCw, Pencil, Plus, CheckSquare } from 'lucide-react';
import { SystemModule } from '../types';

export default function ComoFunciona() {
  const [activeModule, setActiveModule] = useState<string>('registro');
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const modules: SystemModule[] = [
    {
      id: 'registro',
      title: 'Registro Diário',
      description: 'O supervisor registra a loja visitada, motivo da visita, ações executadas, ocorrências encontradas, fotografias e necessidades de acompanhamento.',
      features: [
        'Registro da loja visitada e motivo.',
        'Ações e atividades de Trade executadas.',
        'Identificação de ocorrências de campo.',
        'Fotografias das evidências e acompanhamentos.'
      ],
      placeholderTip: 'Sugestão: Insira uma captura de tela do aplicativo móvel de supervisão mostrando o envio de uma visita ou registro de ocorrência.',
      dimensions: 'Dimensão sugerida: 1080x2400px (Mobile)',
      mockSkeletal: {
        type: 'list',
        headerText: 'Registro de Visita • Loja Parceira'
      }
    },
    {
      id: 'followup',
      title: 'Follow-up',
      description: 'As ocorrências registradas podem ser direcionadas aos gestores responsáveis para acompanhamento até sua conclusão.',
      features: [
        'Encaminhamento automático de ocorrências de campo.',
        'Acompanhamento integrado de resoluções operacionais.',
        'Interações colaborativas entre a equipe e os gestores.',
        'Registro detalhado de ações corretivas no PDV.'
      ],
      placeholderTip: 'Sugestão: Insira uma captura de tela do aplicativo móvel de follow-up, exibindo o status de resolução das ocorrências.',
      dimensions: 'Dimensão sugerida: 1080x2400px (Mobile)',
      mockSkeletal: {
        type: 'board',
        headerText: 'Acompanhamento • Follow-up'
      }
    },
    {
      id: 'painel',
      title: 'Painel Gerencial',
      description: 'Consolida automaticamente os registros realizados em campo para acompanhamento da operação.',
      features: [
        'Consolidação automática e estruturada dos registros.',
        'Filtros avançados e buscas dinâmicas.',
        'Acompanhamento transparente das atividades.',
        'Relatórios organizados de rotas concluídas.'
      ],
      placeholderTip: 'Sugestão: Insira uma captura de tela do aplicativo móvel do painel gerencial, exibindo as metas e atividades consolidadas do dia.',
      dimensions: 'Dimensão sugerida: 1080x2400px (Mobile)',
      mockSkeletal: {
        type: 'charts',
        headerText: 'Resumo • Painel Gerencial'
      }
    },
    {
      id: 'acoes',
      title: 'Ações de Campo',
      description: 'Gestão e controle de ações de Trade Marketing e degustações agendadas nos pontos de venda em tempo real.',
      features: [
        'Planejamento de datas, promotores e redes atendidas.',
        'Acompanhamento e controle de execuções ativas em tempo real.',
        'Agrupamento estruturado por rede, loja e produto trabalhado.',
        'Controle de status e monitoramento de presença no PDV.'
      ],
      placeholderTip: 'Sugestão: Insira uma captura de tela do aplicativo móvel na seção de Ações, exibindo as programações e execuções.',
      dimensions: 'Dimensão sugerida: 1080x2400px (Mobile)',
      mockSkeletal: {
        type: 'table',
        headerText: 'Ações • Degustações'
      }
    },
    {
      id: 'indicadores',
      title: 'Indicadores Operacionais',
      description: 'Exibe programação das degustações, distribuição das equipes, produtos trabalhados, redes atendidas e indicadores operacionais.',
      features: [
        'Programações e escalas das ações de degustação.',
        'Distribuição e presença das equipes em campo.',
        'Relatórios de produtos trabalhados e marcas.',
        'Visão geral das redes atendidas e métricas de execução.'
      ],
      placeholderTip: 'Sugestão: Insira um print dos gráficos operacionais de desempenho e controle das ações de degustação e supervisão.',
      dimensions: 'Dimensão sugerida: 1920x1080px (Desktop)',
      mockSkeletal: {
        type: 'table',
        headerText: 'Relatórios de Performance Operacional'
      }
    }
  ];

  const activeData = modules.find(m => m.id === activeModule) || modules[0];

  const handleCopyPath = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  return (
    <section id="como-funciona" className="py-24 bg-[#070b16] relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/10 left-1/3 w-[600px] h-[600px] rounded-full bg-brand-blue/5 -z-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            <Layers className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan">Módulos do Sistema</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Como Funciona a Plataforma ISIS
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
            Navegue pelos módulos principais do sistema corporativo. Abaixo estão estruturados os <b>espaços visuais reservados</b> para os prints reais do seu software, permitindo fácil substituição.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {modules.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModule(m.id)}
              className={`px-5 py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                activeModule === m.id
                  ? 'bg-gradient-to-r from-brand-blue to-brand-indigo text-white border-brand-blue shadow-[0_4px_15px_rgba(0,82,255,0.25)]'
                  : 'bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10'
              }`}
              id={`tab-modulo-${m.id}`}
            >
              {m.title}
            </button>
          ))}
        </div>

        {/* Active Module Presentation Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column Left: Text description & interactive controls */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Detalhamento do Módulo</span>
                <h3 className="text-2xl font-extrabold text-white">{activeData.title}</h3>
                <p className="text-slate-300 text-sm font-light leading-relaxed">{activeData.description}</p>
              </div>

              {/* Functional bullets */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">O que este módulo gerencia:</h4>
                <div className="space-y-2.5">
                  {activeData.features.map((feat, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-brand-blue/10 border border-brand-blue/25 flex items-center justify-center text-brand-cyan text-[10px] font-bold mt-0.5">
                        {index + 1}
                      </span>
                      <span className="flex-1 font-light leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Instruction Panel for Developer/User */}
            <div className="bg-[#0e1529]/90 border border-brand-blue/15 p-5 rounded-2xl space-y-3.5">
              <div className="flex items-start gap-2.5">
                <Info className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className="text-xs font-bold text-white">Instruções de Substituição de Imagem</h5>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                    Esta seção está programada para exibir um print real. Para substituir, salve sua imagem no projeto e atualize a tag da imagem associada.
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-[11px] font-mono">
                <div className="bg-black/45 p-2 rounded border border-white/5 flex items-center justify-between text-slate-400">
                  <span className="truncate">Caminho: src/assets/{activeData.id}.png</span>
                  <button
                    onClick={() => handleCopyPath(`src/assets/${activeData.id}.png`)}
                    className="p-1 hover:text-white hover:bg-white/5 rounded transition-all cursor-pointer"
                    title="Copiar caminho"
                  >
                    {copiedPath === `src/assets/${activeData.id}.png` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="text-[10px] text-brand-cyan font-medium flex items-center gap-1 bg-brand-cyan/5 px-2 py-1 rounded border border-brand-cyan/10">
                  <span>ℹ</span>
                  <span>{activeData.dimensions}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column Right: Gorgeous high-fidelity device presenter */}
          <div className="lg:col-span-7 w-full flex flex-col justify-center">
            <div className="relative flex-1 min-h-[480px] glass-panel rounded-2xl border-white/5 bg-[#0e1428]/35 border-dashed border-2 border-slate-700/50 flex flex-col overflow-hidden group">
              
              {/* Header Bar */}
              <div className="bg-[#0f162a] px-4 py-3 border-b border-white/5 flex items-center justify-between z-10 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500">{activeData.mockSkeletal.headerText}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-mono">
                  {(activeData.id === 'registro' || activeData.id === 'followup' || activeData.id === 'painel' || activeData.id === 'acoes') ? <Smartphone className="w-3 h-3 text-brand-cyan" /> : <Monitor className="w-3 h-3 text-brand-purple" />}
                  <span className="uppercase text-[9px] font-bold tracking-wider">{(activeData.id === 'registro' || activeData.id === 'followup' || activeData.id === 'painel' || activeData.id === 'acoes') ? 'Mobile' : 'Desktop'}</span>
                </div>
              </div>

              {/* Central Area */}
              <div className="flex-1 p-4 md:p-6 flex flex-col items-center justify-center relative overflow-hidden bg-radial-glow">
                
                {activeModule === 'registro' ? (
                  /* High Fidelity Smartphone Mockup */
                  <div className="w-full max-w-[325px] bg-[#0c1122] rounded-[2.5rem] border-[6px] border-[#1a233d] shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden flex flex-col group/phone" style={{ height: '560px' }}>
                    
                    {/* Dynamic Notch */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#0c1122] rounded-b-xl z-30 flex items-center justify-center">
                      <span className="w-8 h-1 bg-[#232e52] rounded-full"></span>
                    </div>

                    {/* Subtle Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>
                    <div className="absolute top-0 -inset-full h-full w-1/2 bg-gradient-to-r from-transparent to-white/10 skew-x-[-25deg] pointer-events-none group-hover/phone:left-full transition-all duration-[1200ms] ease-out z-25"></div>

                    {/* Phone Screen Screen */}
                    <div className="flex-1 bg-white text-slate-800 flex flex-col overflow-hidden relative pt-4 text-left">
                      
                      {/* Status Bar */}
                      <div className="h-6 px-5 flex items-center justify-between text-[10px] font-semibold text-slate-500 bg-white select-none shrink-0">
                        <span>14:32</span>
                        <div className="flex items-center gap-1.5">
                          {/* cellular icon */}
                          <svg className="w-2.5 h-2.5 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2 22h20V2z" />
                          </svg>
                          {/* wifi icon */}
                          <svg className="w-3 h-3 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M12 20a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-5.3-5.3a7.5 7.5 0 0 1 10.6 0m-13.4-2.8a11.5 11.5 0 0 1 16.2 0" strokeLinecap="round" />
                          </svg>
                          {/* battery icon */}
                          <div className="w-4.5 h-2.2 border border-slate-500 rounded-2xs p-0.5 flex items-center">
                            <div className="h-full w-[80%] bg-slate-600 rounded-3xs"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Header Bar */}
                      <div className="h-11 px-3.5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0 select-none">
                        <div className="flex items-center gap-3">
                          <Menu className="w-4.5 h-4.5 text-slate-700" />
                          {/* Diamond Logo */}
                          <div className="flex items-center">
                            <svg className="w-5.5 h-5.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M2.7 10.3l9.3-9.3 9.3 9.3-9.3 9.3z" />
                              <path d="M12 1v18.6" />
                              <path d="M2.7 10.3h18.6" />
                            </svg>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-slate-500">
                          <Search className="w-4 h-4 hover:text-blue-600 cursor-pointer transition-colors" />
                          <CheckSquare className="w-4 h-4 text-blue-600 hover:text-blue-700 cursor-pointer transition-colors" />
                          <RotateCw className="w-4 h-4 hover:text-blue-600 cursor-pointer transition-colors" />
                        </div>
                      </div>

                      {/* App List Area */}
                      <div className="flex-1 overflow-y-auto bg-[#f8fafc] px-3 py-2 space-y-2">
                        {[
                          {
                            client: 'Blue Bay',
                            branch: 'ADM/Comercial',
                            day: 'Terça',
                            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=120&q=80',
                            imageAlt: 'ADM/Comercial'
                          },
                          {
                            client: 'Blue Bay',
                            branch: 'Arfrio',
                            day: 'Segunda',
                            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=120&q=80',
                            imageAlt: 'Warehouse pallet storage'
                          },
                          {
                            client: 'Atakarejo',
                            branch: 'Cajazeiras',
                            day: 'Segunda',
                            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=120&q=80',
                            imageAlt: 'Supermarket produce aisle'
                          },
                          {
                            client: 'Atacadão',
                            branch: 'Cajazeiras',
                            day: 'Segunda',
                            image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=120&q=80',
                            imageAlt: 'Frozen display chests'
                          },
                          {
                            client: 'Atacadão',
                            branch: 'Cajazeiras',
                            day: 'Segunda',
                            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=120&q=80',
                            imageAlt: 'Tech spec label plate'
                          },
                          {
                            client: 'Atakarejo',
                            branch: 'Sussuarana',
                            day: 'Segunda',
                            image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=120&q=80',
                            imageAlt: 'Supermarket gondolas'
                          },
                          {
                            client: 'Assaí',
                            branch: 'Cabula',
                            day: 'Segunda',
                            image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=120&q=80',
                            imageAlt: 'Supermarket display cabinets'
                          }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white p-2.5 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-200">
                            <div className="flex items-center gap-3">
                              {/* Round Thumbnail Image */}
                              <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-50 relative">
                                <img
                                  src={item.image}
                                  alt={item.imageAlt}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-slate-900 leading-tight">{item.client}</p>
                                <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">{item.branch}</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-1.5 shrink-0">
                              <span className="text-[9px] text-slate-400 font-medium">{item.day}</span>
                              <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer">
                                <Pencil className="w-3 h-3 text-slate-400 hover:text-blue-600" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Floating Action Button (FAB) */}
                      <button className="w-10 h-10 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center absolute bottom-15 right-4 shadow-lg shadow-blue-600/30 hover:bg-blue-700 active:scale-95 transition-all z-20 cursor-pointer">
                        <Plus className="w-5 h-5" />
                      </button>

                      {/* Navigation Bar bottom */}
                      <div className="h-13 border-t border-slate-150 bg-white flex items-center justify-around text-slate-400 shrink-0 px-1 select-none">
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="3" width="7" height="9" />
                            <rect x="14" y="3" width="7" height="5" />
                            <rect x="14" y="12" width="7" height="9" />
                            <rect x="3" y="16" width="7" height="5" />
                          </svg>
                          <span className="text-[7px] font-bold mt-0.5">Painel Gerencial</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-[#1d4ed8]">
                          <CheckSquare className="w-4 h-4 text-[#1d4ed8]" />
                          <span className="text-[7px] font-bold mt-0.5">Atividades</span>
                        </div>
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="8" y1="6" x2="21" y2="6" />
                            <line x1="8" y1="12" x2="21" y2="12" />
                            <line x1="8" y1="18" x2="21" y2="18" />
                            <line x1="3" y1="6" x2="3.01" y2="6" />
                            <line x1="3" y1="12" x2="3.01" y2="12" />
                            <line x1="3" y1="18" x2="3.01" y2="18" />
                          </svg>
                          <span className="text-[7px] font-bold mt-0.5">Follow-up</span>
                        </div>
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span className="text-[7px] font-bold mt-0.5">Ações</span>
                        </div>
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <BarChart3 className="w-4 h-4" />
                          <span className="text-[7px] font-bold mt-0.5">Dashboard</span>
                        </div>
                      </div>

                      {/* Safe Home Bar */}
                      <div className="h-1.5 w-full bg-white flex items-center justify-center pb-1 shrink-0">
                        <span className="w-20 h-1 bg-slate-300 rounded-full"></span>
                      </div>

                    </div>
                  </div>
                ) : activeModule === 'followup' ? (
                  /* High Fidelity Smartphone Mockup for Follow-up */
                  <div className="w-full max-w-[325px] bg-[#0c1122] rounded-[2.5rem] border-[6px] border-[#1a233d] shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden flex flex-col group/phone" style={{ height: '560px' }}>
                    
                    {/* Dynamic Notch */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#0c1122] rounded-b-xl z-30 flex items-center justify-center">
                      <span className="w-8 h-1 bg-[#232e52] rounded-full"></span>
                    </div>

                    {/* Subtle Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>
                    <div className="absolute top-0 -inset-full h-full w-1/2 bg-gradient-to-r from-transparent to-white/10 skew-x-[-25deg] pointer-events-none group-hover/phone:left-full transition-all duration-[1200ms] ease-out z-25"></div>

                    {/* Phone Screen */}
                    <div className="flex-1 bg-white text-slate-800 flex flex-col overflow-hidden relative pt-4 text-left">
                      
                      {/* Status Bar */}
                      <div className="h-6 px-5 flex items-center justify-between text-[10px] font-semibold text-slate-500 bg-white select-none shrink-0">
                        <span>14:32</span>
                        <div className="flex items-center gap-1.5">
                          {/* cellular icon */}
                          <svg className="w-2.5 h-2.5 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2 22h20V2z" />
                          </svg>
                          {/* wifi icon */}
                          <svg className="w-3 h-3 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M12 20a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-5.3-5.3a7.5 7.5 0 0 1 10.6 0m-13.4-2.8a11.5 11.5 0 0 1 16.2 0" strokeLinecap="round" />
                          </svg>
                          {/* battery icon */}
                          <div className="w-4.5 h-2.2 border border-slate-500 rounded-2xs p-0.5 flex items-center">
                            <div className="h-full w-[80%] bg-slate-600 rounded-3xs"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Header Bar */}
                      <div className="h-11 px-3.5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0 select-none">
                        <div className="flex items-center gap-3">
                          <Menu className="w-4.5 h-4.5 text-slate-700" />
                          {/* Diamond Logo */}
                          <div className="flex items-center">
                            <svg className="w-5.5 h-5.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M2.7 10.3l9.3-9.3 9.3 9.3-9.3 9.3z" />
                              <path d="M12 1v18.6" />
                              <path d="M2.7 10.3h18.6" />
                            </svg>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-slate-500">
                          <Search className="w-4 h-4 hover:text-blue-600 cursor-pointer transition-colors" />
                          <CheckSquare className="w-4 h-4 text-blue-600 hover:text-blue-700 cursor-pointer transition-colors" />
                          <RotateCw className="w-4 h-4 hover:text-blue-600 cursor-pointer transition-colors" />
                        </div>
                      </div>

                      {/* App List Area */}
                      <div className="flex-1 overflow-y-auto bg-[#f8fafc] px-3.5 py-2.5 space-y-4">
                        
                        {/* Group: Atrasado */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 px-1 select-none">
                            <span className="w-3 h-3 rounded-full bg-red-600 shrink-0"></span>
                            <span className="text-xs font-bold text-slate-800">Atrasado</span>
                            <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.2 rounded font-semibold">2</span>
                          </div>
                          
                          <div className="space-y-1.5">
                            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs hover:border-blue-200 transition-all flex items-center justify-between">
                              <div>
                                <p className="text-xs font-bold text-slate-900 leading-tight">Atakarejo</p>
                                <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Cajazeiras</p>
                              </div>
                              <div className="flex items-center gap-2.5 shrink-0">
                                <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 transition-colors">
                                  <Check className="w-3.5 h-3.5 text-slate-500" />
                                </div>
                                <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors">
                                  <Pencil className="w-3 h-3 text-slate-400" />
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs hover:border-blue-200 transition-all flex items-center justify-between">
                              <div>
                                <p className="text-xs font-bold text-slate-900 leading-tight">Atacadão</p>
                                <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Cajazeiras</p>
                              </div>
                              <div className="flex items-center gap-2.5 shrink-0">
                                <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 transition-colors">
                                  <Check className="w-3.5 h-3.5 text-slate-500" />
                                </div>
                                <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors">
                                  <Pencil className="w-3 h-3 text-slate-400" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Group: No prazo */}
                        <div className="space-y-2 pt-1">
                          <div className="flex items-center gap-2 px-1 select-none">
                            <span className="w-3 h-3 rounded-full bg-blue-600 shrink-0"></span>
                            <span className="text-xs font-bold text-slate-800">No prazo</span>
                            <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.2 rounded font-semibold">1</span>
                          </div>
                          
                          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs hover:border-blue-200 transition-all flex items-center justify-between">
                            <div>
                              <p className="text-xs font-bold text-slate-900 leading-tight">Atacadão</p>
                              <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Cajazeiras</p>
                            </div>
                            <div className="flex items-center gap-2.5 shrink-0">
                              <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 transition-colors">
                                <Check className="w-3.5 h-3.5 text-slate-500" />
                              </div>
                              <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors">
                                <Pencil className="w-3 h-3 text-slate-400" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Group: Concluído */}
                        <div className="space-y-2 pt-1">
                          <div className="flex items-center gap-2 px-1 select-none">
                            <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0"></span>
                            <span className="text-xs font-bold text-slate-800">Concluído</span>
                            <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.2 rounded font-semibold">6</span>
                          </div>
                          
                          <div className="space-y-1.5">
                            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs hover:border-blue-200 transition-all flex items-center justify-between gap-1">
                              <div>
                                <p className="text-xs font-bold text-slate-900 leading-tight">Assaí</p>
                                <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Barris</p>
                              </div>
                              <span className="text-[9px] text-slate-400 truncate max-w-[95px] text-right font-medium self-start mt-0.5 select-none">Alinhado limpeza ...</span>
                              <div className="flex items-center gap-2.5 shrink-0">
                                <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 transition-colors">
                                  <Check className="w-3.5 h-3.5 text-slate-500" />
                                </div>
                                <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors">
                                  <Pencil className="w-3 h-3 text-slate-400" />
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs hover:border-blue-200 transition-all flex items-center justify-between gap-1">
                              <div>
                                <p className="text-xs font-bold text-slate-900 leading-tight">Atakarejo</p>
                                <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Vasco</p>
                              </div>
                              <span className="text-[9px] text-slate-400 truncate max-w-[95px] text-right font-medium self-start mt-0.5 select-none">Limpeza de equip...</span>
                              <div className="flex items-center gap-2.5 shrink-0">
                                <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 transition-colors">
                                  <Check className="w-3.5 h-3.5 text-slate-500" />
                                </div>
                                <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors">
                                  <Pencil className="w-3 h-3 text-slate-400" />
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs hover:border-blue-200 transition-all flex items-center justify-between gap-1">
                              <div>
                                <p className="text-xs font-bold text-slate-900 leading-tight">Assaí</p>
                                <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Cabula</p>
                              </div>
                              <span className="text-[9px] text-slate-400 truncate max-w-[95px] text-right font-medium self-start mt-0.5 select-none">Alinhado ...</span>
                              <div className="flex items-center gap-2.5 shrink-0">
                                <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 transition-colors">
                                  <Check className="w-3.5 h-3.5 text-slate-500" />
                                </div>
                                <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors">
                                  <Pencil className="w-3 h-3 text-slate-400" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Floating Action Button (FAB) */}
                      <button className="w-10 h-10 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center absolute bottom-15 right-4 shadow-lg shadow-blue-600/30 hover:bg-blue-700 active:scale-95 transition-all z-20 cursor-pointer">
                        <Plus className="w-5 h-5" />
                      </button>

                      {/* Navigation Bar bottom */}
                      <div className="h-13 border-t border-slate-150 bg-white flex items-center justify-around text-slate-400 shrink-0 px-1 select-none">
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="3" width="7" height="9" />
                            <rect x="14" y="3" width="7" height="5" />
                            <rect x="14" y="12" width="7" height="9" />
                            <rect x="3" y="16" width="7" height="5" />
                          </svg>
                          <span className="text-[7px] font-bold mt-0.5">Painel Gerencial</span>
                        </div>
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <CheckSquare className="w-4 h-4" />
                          <span className="text-[7px] font-bold mt-0.5">Atividades</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-[#1d4ed8]">
                          <svg className="w-4 h-4 text-[#1d4ed8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="8" y1="6" x2="21" y2="6" />
                            <line x1="8" y1="12" x2="21" y2="12" />
                            <line x1="8" y1="18" x2="21" y2="18" />
                            <line x1="3" y1="6" x2="3.01" y2="6" />
                            <line x1="3" y1="12" x2="3.01" y2="12" />
                            <line x1="3" y1="18" x2="3.01" y2="18" />
                          </svg>
                          <span className="text-[7px] font-bold mt-0.5">Follow-up</span>
                        </div>
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span className="text-[7px] font-bold mt-0.5">Ações</span>
                        </div>
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <BarChart3 className="w-4 h-4" />
                          <span className="text-[7px] font-bold mt-0.5">Dashboard</span>
                        </div>
                      </div>

                      {/* Safe Home Bar */}
                      <div className="h-1.5 w-full bg-white flex items-center justify-center pb-1 shrink-0">
                        <span className="w-20 h-1 bg-slate-300 rounded-full"></span>
                      </div>

                    </div>
                  </div>
                ) : activeModule === 'painel' ? (
                  /* High Fidelity Smartphone Mockup for Painel Gerencial */
                  <div className="w-full max-w-[325px] bg-[#0c1122] rounded-[2.5rem] border-[6px] border-[#1a233d] shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden flex flex-col group/phone" style={{ height: '560px' }}>
                    
                    {/* Dynamic Notch */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#0c1122] rounded-b-xl z-30 flex items-center justify-center">
                      <span className="w-8 h-1 bg-[#232e52] rounded-full"></span>
                    </div>

                    {/* Subtle Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>
                    <div className="absolute top-0 -inset-full h-full w-1/2 bg-gradient-to-r from-transparent to-white/10 skew-x-[-25deg] pointer-events-none group-hover/phone:left-full transition-all duration-[1200ms] ease-out z-25"></div>

                    {/* Phone Screen */}
                    <div className="flex-1 bg-white text-slate-800 flex flex-col overflow-hidden relative pt-4 text-left">
                      
                      {/* Status Bar */}
                      <div className="h-6 px-5 flex items-center justify-between text-[10px] font-semibold text-slate-500 bg-white select-none shrink-0">
                        <span>14:32</span>
                        <div className="flex items-center gap-1.5">
                          {/* cellular icon */}
                          <svg className="w-2.5 h-2.5 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2 22h20V2z" />
                          </svg>
                          {/* wifi icon */}
                          <svg className="w-3 h-3 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M12 20a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-5.3-5.3a7.5 7.5 0 0 1 10.6 0m-13.4-2.8a11.5 11.5 0 0 1 16.2 0" strokeLinecap="round" />
                          </svg>
                          {/* battery icon */}
                          <div className="w-4.5 h-2.2 border border-slate-500 rounded-2xs p-0.5 flex items-center">
                            <div className="h-full w-[80%] bg-slate-600 rounded-3xs"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Header Bar */}
                      <div className="h-11 px-3.5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0 select-none">
                        <div className="flex items-center gap-3">
                          <Menu className="w-4.5 h-4.5 text-slate-700" />
                          {/* Diamond Logo */}
                          <div className="flex items-center">
                            <svg className="w-5.5 h-5.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M2.7 10.3l9.3-9.3 9.3 9.3-9.3 9.3z" />
                              <path d="M12 1v18.6" />
                              <path d="M2.7 10.3h18.6" />
                            </svg>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-slate-500">
                          <Search className="w-4 h-4 hover:text-blue-600 cursor-pointer transition-colors" />
                          <RotateCw className="w-4 h-4 hover:text-blue-600 cursor-pointer transition-colors" />
                        </div>
                      </div>

                      {/* App Scrollable Content Area */}
                      <div className="flex-1 overflow-y-auto bg-[#f8fafc] px-3.5 py-3 space-y-4">
                        
                        {/* Section: Resumo Hoje */}
                        <div className="space-y-2">
                          <h3 className="text-sm font-extrabold text-slate-900 px-1 select-none">Resumo Hoje</h3>
                          
                          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs hover:border-blue-200 transition-all flex items-center justify-between">
                            <div>
                              <p className="text-xs font-bold text-slate-900 leading-tight">Assaí</p>
                              <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Federação</p>
                            </div>
                            <div className="flex flex-col items-end gap-1 shrink-0">
                              <span className="text-[9px] text-slate-400 font-semibold select-none bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">Concluído</span>
                              <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors mt-1">
                                <Pencil className="w-3 h-3 text-slate-400" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Section: Follow-up */}
                        <div className="space-y-3 pt-1">
                          <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
                            <h3 className="text-sm font-extrabold text-slate-900 px-1 select-none">Follow-up</h3>
                          </div>

                          {/* Group: Atrasado */}
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2 px-1 select-none">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0"></span>
                              <span className="text-[11px] font-bold text-slate-800">Atrasado</span>
                              <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.2 rounded font-semibold">2</span>
                            </div>
                            
                            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs hover:border-blue-200 transition-all flex items-center justify-between">
                              <div>
                                <p className="text-xs font-bold text-slate-900 leading-tight">Atakarejo</p>
                                <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Cajazeiras</p>
                              </div>
                              <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors shrink-0">
                                <Pencil className="w-3 h-3 text-slate-400" />
                              </div>
                            </div>

                            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs hover:border-blue-200 transition-all flex items-center justify-between">
                              <div>
                                <p className="text-xs font-bold text-slate-900 leading-tight">Atacadão</p>
                                <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Cajazeiras</p>
                              </div>
                              <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors shrink-0">
                                <Pencil className="w-3 h-3 text-slate-400" />
                              </div>
                            </div>
                          </div>

                          {/* Group: No prazo */}
                          <div className="space-y-1.5 pt-1">
                            <div className="flex items-center gap-2 px-1 select-none">
                              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></span>
                              <span className="text-[11px] font-bold text-slate-800">No prazo</span>
                              <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.2 rounded font-semibold">1</span>
                            </div>
                            
                            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs hover:border-blue-200 transition-all flex items-center justify-between">
                              <div>
                                <p className="text-xs font-bold text-slate-900 leading-tight">Atacadão</p>
                                <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Cajazeiras</p>
                              </div>
                              <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors shrink-0">
                                <Pencil className="w-3 h-3 text-slate-400" />
                              </div>
                            </div>
                          </div>

                          {/* Group: Concluído */}
                          <div className="space-y-1.5 pt-1">
                            <div className="flex items-center gap-2 px-1 select-none">
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                              <span className="text-[11px] font-bold text-slate-800">Concluído</span>
                              <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.2 rounded font-semibold">6</span>
                            </div>
                            
                            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs hover:border-blue-200 transition-all flex items-center justify-between gap-1">
                              <div>
                                <p className="text-xs font-bold text-slate-900 leading-tight">Assaí</p>
                                <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">Barris</p>
                              </div>
                              <span className="text-[9px] text-slate-400 truncate max-w-[95px] text-right font-medium self-start mt-0.5 select-none">Alinhado limpeza ...</span>
                              <div className="w-5 h-5 rounded bg-slate-50 border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors shrink-0">
                                <Pencil className="w-3 h-3 text-slate-400" />
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Navigation Bar bottom */}
                      <div className="h-13 border-t border-slate-150 bg-white flex items-center justify-around text-slate-400 shrink-0 px-1 select-none">
                        <div className="flex flex-col items-center justify-center text-[#1d4ed8]">
                          <svg className="w-4 h-4 text-[#1d4ed8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="8" y1="6" x2="21" y2="6" />
                            <line x1="8" y1="12" x2="21" y2="12" />
                            <line x1="8" y1="18" x2="21" y2="18" />
                            <line x1="3" y1="6" x2="3.01" y2="6" />
                            <line x1="3" y1="12" x2="3.01" y2="12" />
                            <line x1="3" y1="18" x2="3.01" y2="18" />
                          </svg>
                          <span className="text-[7px] font-bold mt-0.5">Painel Gerencial</span>
                        </div>
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <CheckSquare className="w-4 h-4" />
                          <span className="text-[7px] font-bold mt-0.5">Atividades</span>
                        </div>
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="8" y1="6" x2="21" y2="6" />
                            <line x1="8" y1="12" x2="21" y2="12" />
                            <line x1="8" y1="18" x2="21" y2="18" />
                            <line x1="3" y1="6" x2="3.01" y2="6" />
                            <line x1="3" y1="12" x2="3.01" y2="12" />
                            <line x1="3" y1="18" x2="3.01" y2="18" />
                          </svg>
                          <span className="text-[7px] font-bold mt-0.5">Follow-up</span>
                        </div>
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span className="text-[7px] font-bold mt-0.5">Ações</span>
                        </div>
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <BarChart3 className="w-4 h-4" />
                          <span className="text-[7px] font-bold mt-0.5">Dashboard</span>
                        </div>
                      </div>

                      {/* Safe Home Bar */}
                      <div className="h-1.5 w-full bg-white flex items-center justify-center pb-1 shrink-0">
                        <span className="w-20 h-1 bg-slate-300 rounded-full"></span>
                      </div>

                    </div>
                  </div>
                ) : activeModule === 'acoes' ? (
                  /* High Fidelity Smartphone Mockup for Ações */
                  <div className="w-full max-w-[325px] bg-[#0c1122] rounded-[2.5rem] border-[6px] border-[#1a233d] shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden flex flex-col group/phone" style={{ height: '560px' }}>
                    
                    {/* Dynamic Notch */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#0c1122] rounded-b-xl z-30 flex items-center justify-center">
                      <span className="w-8 h-1 bg-[#232e52] rounded-full"></span>
                    </div>

                    {/* Subtle Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>
                    <div className="absolute top-0 -inset-full h-full w-1/2 bg-gradient-to-r from-transparent to-white/10 skew-x-[-25deg] pointer-events-none group-hover/phone:left-full transition-all duration-[1200ms] ease-out z-25"></div>

                    {/* Phone Screen */}
                    <div className="flex-1 bg-white text-slate-800 flex flex-col overflow-hidden relative pt-4 text-left">
                      
                      {/* Status Bar */}
                      <div className="h-6 px-5 flex items-center justify-between text-[10px] font-semibold text-slate-500 bg-white select-none shrink-0">
                        <span>14:32</span>
                        <div className="flex items-center gap-1.5">
                          {/* cellular icon */}
                          <svg className="w-2.5 h-2.5 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2 22h20V2z" />
                          </svg>
                          {/* wifi icon */}
                          <svg className="w-3 h-3 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M12 20a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-5.3-5.3a7.5 7.5 0 0 1 10.6 0m-13.4-2.8a11.5 11.5 0 0 1 16.2 0" strokeLinecap="round" />
                          </svg>
                          {/* battery icon */}
                          <div className="w-4.5 h-2.2 border border-slate-500 rounded-2xs p-0.5 flex items-center">
                            <div className="h-full w-[80%] bg-slate-600 rounded-3xs"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Header Bar */}
                      <div className="h-11 px-3.5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0 select-none">
                        <div className="flex items-center gap-3">
                          <Menu className="w-4.5 h-4.5 text-slate-700" />
                          {/* Diamond Logo */}
                          <div className="flex items-center">
                            <svg className="w-5.5 h-5.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M2.7 10.3l9.3-9.3 9.3 9.3-9.3 9.3z" />
                              <path d="M12 1v18.6" />
                              <path d="M2.7 10.3h18.6" />
                            </svg>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-slate-500">
                          <Search className="w-4 h-4 hover:text-blue-600 cursor-pointer transition-colors" />
                          <RotateCw className="w-4 h-4 hover:text-blue-600 cursor-pointer transition-colors" />
                        </div>
                      </div>

                      {/* Sticky Table Header */}
                      <div className="bg-white border-b border-slate-100 px-3.5 py-2.5 grid grid-cols-12 gap-1 text-[10px] font-black text-slate-500 uppercase tracking-wider shrink-0 select-none">
                        <span className="col-span-3">Data</span>
                        <span className="col-span-3">Rede</span>
                        <span className="col-span-3">Loja</span>
                        <span className="col-span-3 text-right">Produto</span>
                      </div>

                      {/* Scrollable Content Area */}
                      <div className="flex-1 overflow-y-auto bg-white">
                        
                        {/* Group: Assaí 6 */}
                        <div>
                          <div className="bg-slate-50/80 px-3.5 py-1.5 flex items-center gap-2 border-b border-slate-100 select-none">
                            <span className="text-xs font-bold text-slate-700">Assaí</span>
                            <span className="text-[10px] bg-slate-200/70 text-slate-600 px-1.5 py-0.2 rounded font-bold">6</span>
                          </div>
                          
                          <div className="divide-y divide-slate-100">
                            {[
                              { date: '26/6/2026', store: 'Mussurunga', product: 'Néctar' },
                              { date: '26/6/2026', store: 'Paripe', product: 'Néctar' },
                              { date: '26/6/2026', store: 'Uruguai', product: 'Néctar' },
                              { date: '27/6/2026', store: 'Mussurunga', product: 'Néctar' },
                              { date: '27/6/2026', store: 'Paripe', product: 'Néctar' },
                              { date: '30/6/2026', store: 'Mussurunga', product: 'Néctar' }
                            ].map((item, i) => (
                              <div key={i} className="grid grid-cols-12 gap-1 px-3.5 py-2.5 text-[10px] items-center hover:bg-slate-50/50 transition-colors">
                                <span className="col-span-3 text-slate-500 font-medium">{item.date}</span>
                                <span className="col-span-3 text-slate-800 font-medium">Assaí</span>
                                <span className="col-span-3 text-slate-600 truncate">{item.store}</span>
                                <span className="col-span-3 text-right text-slate-800 font-semibold">{item.product}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Group: Atakarejo 6 */}
                        <div className="mt-2">
                          <div className="bg-slate-50/80 px-3.5 py-1.5 flex items-center gap-2 border-b border-slate-100 select-none">
                            <span className="text-xs font-bold text-slate-700">Atakarejo</span>
                            <span className="text-[10px] bg-slate-200/70 text-slate-600 px-1.5 py-0.2 rounded font-bold">6</span>
                          </div>
                          
                          <div className="divide-y divide-slate-100">
                            {[
                              { date: '26/6/2026', store: 'Paripe', product: 'Polpa' },
                              { date: '26/6/2026', store: 'Lobato', product: 'Cremosinho' },
                              { date: '26/6/2026', store: 'São Caetano', product: 'Polpa' },
                              { date: '27/6/2026', store: 'Paripe', product: 'Polpa' },
                              { date: '27/6/2026', store: 'São Caetano', product: 'Polpa' },
                              { date: '1/7/2026', store: 'São Caetano', product: 'Polpa' }
                            ].map((item, i) => (
                              <div key={i} className="grid grid-cols-12 gap-1 px-3.5 py-2.5 text-[10px] items-center hover:bg-slate-50/50 transition-colors">
                                <span className="col-span-3 text-slate-500 font-medium">{item.date}</span>
                                <span className="col-span-3 text-slate-800 font-medium">Atakarejo</span>
                                <span className="col-span-3 text-slate-600 truncate">{item.store}</span>
                                <span className="col-span-3 text-right text-slate-800 font-semibold">{item.product}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Group: CDP 3 */}
                        <div className="mt-2">
                          <div className="bg-slate-50/80 px-3.5 py-1.5 flex items-center gap-2 border-b border-slate-100 select-none">
                            <span className="text-xs font-bold text-slate-700">CDP</span>
                            <span className="text-[10px] bg-slate-200/70 text-slate-600 px-1.5 py-0.2 rounded font-bold">3</span>
                          </div>
                          
                          <div className="divide-y divide-slate-100">
                            {[
                              { date: '30/6/2026', store: 'Armação', product: 'Néctar' }
                            ].map((item, i) => (
                              <div key={i} className="grid grid-cols-12 gap-1 px-3.5 py-2.5 text-[10px] items-center hover:bg-slate-50/50 transition-colors">
                                <span className="col-span-3 text-slate-500 font-medium">{item.date}</span>
                                <span className="col-span-3 text-slate-800 font-medium">CDP</span>
                                <span className="col-span-3 text-slate-600 truncate">{item.store}</span>
                                <span className="col-span-3 text-right text-slate-800 font-semibold">{item.product}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                      {/* Floating Action Button (FAB) */}
                      <button className="w-12 h-12 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center absolute bottom-15 right-4 shadow-lg shadow-blue-600/35 hover:bg-blue-700 active:scale-95 transition-all z-20 cursor-pointer">
                        <Plus className="w-5 h-5" />
                      </button>

                      {/* Navigation Bar bottom */}
                      <div className="h-13 border-t border-slate-150 bg-white flex items-center justify-around text-slate-400 shrink-0 px-1 select-none">
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="8" y1="6" x2="21" y2="6" />
                            <line x1="8" y1="12" x2="21" y2="12" />
                            <line x1="8" y1="18" x2="21" y2="18" />
                            <line x1="3" y1="6" x2="3.01" y2="6" />
                            <line x1="3" y1="12" x2="3.01" y2="12" />
                            <line x1="3" y1="18" x2="3.01" y2="18" />
                          </svg>
                          <span className="text-[7px] font-bold mt-0.5">Painel Gerencial</span>
                        </div>
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <CheckSquare className="w-4 h-4" />
                          <span className="text-[7px] font-bold mt-0.5">Atividades</span>
                        </div>
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="8" y1="6" x2="21" y2="6" />
                            <line x1="8" y1="12" x2="21" y2="12" />
                            <line x1="8" y1="18" x2="21" y2="18" />
                            <line x1="3" y1="6" x2="3.01" y2="6" />
                            <line x1="3" y1="12" x2="3.01" y2="12" />
                            <line x1="3" y1="18" x2="3.01" y2="18" />
                          </svg>
                          <span className="text-[7px] font-bold mt-0.5">Follow-up</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-[#1d4ed8]">
                          <svg className="w-4 h-4 text-[#1d4ed8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span className="text-[7px] font-bold mt-0.5">Ações</span>
                        </div>
                        <div className="flex flex-col items-center justify-center opacity-60">
                          <BarChart3 className="w-4 h-4" />
                          <span className="text-[7px] font-bold mt-0.5">Dashboard</span>
                        </div>
                      </div>

                      {/* Safe Home Bar */}
                      <div className="h-1.5 w-full bg-white flex items-center justify-center pb-1 shrink-0">
                        <span className="w-20 h-1 bg-slate-300 rounded-full"></span>
                      </div>

                    </div>
                  </div>
                ) : activeModule === 'indicadores' ? (
                  /* High Fidelity Browser/Desktop Mockup for Indicadores Operacionais */
                  <div className="w-full max-w-[580px] bg-[#0c1122] rounded-2xl border-[6px] border-[#1a233d] shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col group/browser" style={{ height: '560px' }}>
                    
                    {/* Browser Header Bar */}
                    <div className="h-10 px-4 bg-[#11182c] border-b border-[#1e293b] flex items-center justify-between shrink-0 select-none">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-80"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] opacity-80"></span>
                      </div>
                      
                      {/* Browser Address Bar */}
                      <div className="bg-[#070b16] rounded-md px-3 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-2 w-7/12 justify-center border border-white/5">
                        <svg className="w-2.5 h-2.5 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15l-4-4 1.41-1.41L11 13.17l5.59-5.59L18 9l-7 7z" />
                        </svg>
                        <span className="truncate text-[8px] md:text-[9px]">isis.trademkt.com.br/dashboard/indicadores</span>
                      </div>

                      <div className="flex items-center gap-2 text-slate-500">
                        <Search className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                        <RotateCw className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                      </div>
                    </div>

                    {/* Desktop App Layout */}
                    <div className="flex-1 bg-[#f8fafc] text-slate-800 flex overflow-hidden text-left">
                      
                      {/* Side Navigation Menu */}
                      <div className="w-40 bg-[#0f172a] text-slate-400 border-r border-[#1e293b] flex flex-col shrink-0 select-none py-4">
                        <div className="px-3.5 pb-4 mb-3 border-b border-[#1e293b] flex items-center gap-2">
                          {/* App Logo */}
                          <div className="w-5.5 h-5.5 rounded-md bg-blue-600 flex items-center justify-center text-white shrink-0">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M2.7 10.3l9.3-9.3 9.3 9.3-9.3 9.3z" />
                            </svg>
                          </div>
                          <span className="text-[10px] font-black tracking-wider text-white">ISIS PORTAL</span>
                        </div>

                        {/* Menu Items */}
                        <div className="space-y-1 px-1.5 flex-1 text-[9px] font-semibold">
                          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-white transition-colors cursor-pointer">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="3" width="7" height="9" />
                              <rect x="14" y="3" width="7" height="5" />
                              <rect x="14" y="12" width="7" height="9" />
                              <rect x="3" y="16" width="7" height="5" />
                            </svg>
                            <span>Dashboard</span>
                          </div>
                          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-white transition-colors cursor-pointer">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <span>Promotores</span>
                          </div>
                          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-white transition-colors cursor-pointer">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <span>Ações de Campo</span>
                          </div>
                          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/15 cursor-pointer">
                            <BarChart3 className="w-3.5 h-3.5" />
                            <span>Indicadores</span>
                          </div>
                          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-white transition-colors cursor-pointer">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="3" />
                              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                            </svg>
                            <span>Configurações</span>
                          </div>
                        </div>

                        {/* System status at bottom of menu */}
                        <div className="px-3.5 pt-3 mt-auto border-t border-[#1e293b] text-[8px] text-slate-500 flex flex-col gap-1 select-none">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                            <span>Sincronizado</span>
                          </div>
                          <span>V1.2.4</span>
                        </div>
                      </div>

                      {/* Main Dashboard Content Panel */}
                      <div className="flex-1 bg-[#f8fafc] overflow-y-auto flex flex-col">
                        
                        {/* Top Bar inside App */}
                        <div className="h-11 border-b border-slate-200/80 bg-white px-5 flex items-center justify-between shrink-0 select-none">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] bg-blue-50 text-blue-600 font-bold px-2 py-0.5 rounded-full border border-blue-100">Julho 2026</span>
                            <span className="text-[9px] text-slate-400 font-medium">Atualizado às 14:30</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[9px] text-slate-600 border border-slate-200">
                              PG
                            </div>
                          </div>
                        </div>

                        {/* Dashboard Body */}
                        <div className="p-4 space-y-4 flex-1">
                          
                          {/* Heading */}
                          <div className="flex items-center justify-between">
                            <div>
                              <h2 className="text-sm font-black text-slate-900 tracking-tight">Indicadores Operacionais</h2>
                              <p className="text-[9px] text-slate-500 font-medium mt-0.5">Visão consolidada de execuções de Trade Marketing</p>
                            </div>
                            <button className="flex items-center gap-1 px-2.5 py-1 bg-white border border-slate-200 rounded-md text-[9px] font-semibold text-slate-600 hover:bg-slate-50 transition-colors shadow-2xs select-none cursor-pointer">
                              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                              </svg>
                              <span>Filtrar</span>
                            </button>
                          </div>

                          {/* Metric Cards Row */}
                          <div className="grid grid-cols-4 gap-2">
                            {[
                              { label: 'Ações Planejadas', value: '45', change: '+12%', color: 'border-blue-500', isUp: true },
                              { label: 'Taxa de Execução', value: '94.2%', change: '+1.5%', color: 'border-emerald-500', isUp: true },
                              { label: 'Promotores', value: '18 / 20', change: 'Ativos', color: 'border-purple-500', isUp: null },
                              { label: 'Ações Restantes', value: '3', change: '-4', color: 'border-amber-500', isUp: false }
                            ].map((card, idx) => (
                              <div key={idx} className={`bg-white p-2 rounded-xl border border-slate-200/80 shadow-2xs relative overflow-hidden flex flex-col justify-between border-l-3 ${card.color}`}>
                                <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-wider">{card.label}</span>
                                <div className="flex items-baseline justify-between mt-1 select-none">
                                  <span className="text-[11px] font-black text-slate-800 tracking-tight">{card.value}</span>
                                  {card.isUp === true ? (
                                    <span className="text-[7.5px] font-black text-emerald-600 bg-emerald-50 px-1 rounded">▲ {card.change}</span>
                                  ) : card.isUp === false ? (
                                    <span className="text-[7.5px] font-black text-amber-600 bg-amber-50 px-1 rounded">▼ {card.change}</span>
                                  ) : (
                                    <span className="text-[7.5px] font-bold text-purple-600 bg-purple-50 px-1 rounded">{card.change}</span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Grid charts */}
                          <div className="grid grid-cols-12 gap-3">
                            
                            {/* Left: Performance horizontal bar chart (7 cols) */}
                            <div className="col-span-7 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col justify-between">
                              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-100">
                                <span className="text-[9px] font-black text-slate-800 uppercase tracking-wider">Ações Executadas por Rede</span>
                                <span className="text-[8px] text-slate-400 font-bold">Volume / Frequência</span>
                              </div>

                              <div className="space-y-2 flex-1 flex flex-col justify-center">
                                {[
                                  { name: 'Assaí', val: 12, pct: '100%', color: 'bg-blue-600' },
                                  { name: 'Atakarejo', val: 12, pct: '100%', color: 'bg-indigo-600' },
                                  { name: 'CDP', val: 3, pct: '50%', color: 'bg-emerald-500' },
                                  { name: 'Atacadão', val: 8, pct: '80%', color: 'bg-amber-500' },
                                  { name: 'Redemix', val: 10, pct: '90%', color: 'bg-pink-500' }
                                ].map((row, i) => (
                                  <div key={i} className="space-y-1">
                                    <div className="flex items-center justify-between text-[8px] font-bold select-none">
                                      <span className="text-slate-700">{row.name}</span>
                                      <span className="text-slate-500">{row.val} ações ({row.pct})</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                      <div className={`h-full ${row.color} rounded-full transition-all duration-1000`} style={{ width: row.pct }}></div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Right: Active Team & Status Table (5 cols) */}
                            <div className="col-span-5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col">
                              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-100 shrink-0">
                                <span className="text-[9px] font-black text-slate-800 uppercase tracking-wider">Últimos Status</span>
                                <span className="text-[8px] text-slate-400 font-bold">Tempo Real</span>
                              </div>

                              <div className="flex-1 overflow-y-auto space-y-2 pr-0.5">
                                {[
                                  { store: 'Assaí Mussurunga', status: 'Concluído', color: 'bg-emerald-100 text-emerald-800' },
                                  { store: 'Atakarejo Paripe', status: 'Em Execução', color: 'bg-blue-100 text-blue-800' },
                                  { store: 'CDP Armação', status: 'Agendado', color: 'bg-slate-100 text-slate-700' },
                                  { store: 'Atakarejo Lobato', status: 'Concluído', color: 'bg-emerald-100 text-emerald-800' },
                                  { store: 'Redemix Ondina', status: 'Em Execução', color: 'bg-blue-100 text-blue-800' }
                                ].map((item, i) => (
                                  <div key={i} className="flex items-center justify-between p-1.5 rounded bg-slate-50 border border-slate-100 hover:bg-slate-100/50 transition-colors">
                                    <span className="text-[8px] font-bold text-slate-800 truncate max-w-[85px]">{item.store}</span>
                                    <span className={`text-[7px] font-extrabold px-1.5 py-0.2 rounded-full uppercase tracking-wider scale-90 ${item.color}`}>
                                      {item.status}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                    {/* Window Status/Safe Bar */}
                    <div className="h-1.5 bg-[#11182c] w-full flex items-center justify-center shrink-0">
                      <span className="w-16 h-0.8 bg-[#1e293b] rounded-full"></span>
                    </div>

                  </div>
                ) : (
                  /* Standard Placeholder for remaining sections */
                  <div className="w-full max-w-md text-center p-8 flex flex-col justify-center items-center h-[400px]">
                    {/* Skeletal graphics */}
                    <div className="absolute inset-8 border border-white/5 rounded-xl border-dashed pointer-events-none flex flex-col justify-between p-4 opacity-15">
                      <div className="flex justify-between items-center">
                        <div className="w-1/4 h-3 bg-white rounded"></div>
                        <div className="w-8 h-8 rounded-full bg-white"></div>
                      </div>
                      <div className="space-y-3 my-auto">
                        <div className="h-4 bg-white rounded w-full"></div>
                        <div className="h-4 bg-white rounded w-5/6"></div>
                        <div className="h-4 bg-white rounded w-2/3"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 bg-white rounded w-16"></div>
                        <div className="h-8 bg-white rounded w-16"></div>
                      </div>
                    </div>

                    {/* Main Action Banner */}
                    <div className="space-y-4 z-10 p-6 rounded-2xl bg-[#080d1a]/85 border border-white/5 shadow-2xl">
                      <div className="w-12 h-12 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mx-auto text-brand-cyan pulse-indicator">
                        <UploadCloud className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider">Espaço de Print Real</h4>
                        <p className="text-slate-400 text-xs font-light leading-relaxed max-w-xs mx-auto">
                          {activeData.placeholderTip}
                        </p>
                      </div>
                      <div className="pt-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                          Substituir por {activeData.id}.png
                        </span>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Technical Blueprint Footer */}
              <div className="bg-[#090e1c] px-6 py-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-slate-500 shrink-0">
                <span>FORMATO: PNG / WEBP</span>
                <span>METADADOS: {activeData.dimensions}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
