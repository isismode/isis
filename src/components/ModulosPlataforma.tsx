import React, { useState } from 'react';
import { ClipboardList, CheckSquare, BarChart3, LineChart, Calendar, Users, ChevronRight, Info } from 'lucide-react';

interface ModuleItem {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export default function ModulosPlataforma() {
  const [activeModule, setActiveModule] = useState<string>('registro');

  const modules: ModuleItem[] = [
    {
      id: 'registro',
      title: 'Registro Diário',
      description: 'O supervisor registra a loja visitada, motivo da visita, ações executadas, ocorrências encontradas, fotografias e necessidades de acompanhamento.',
      features: [
        'Registro detalhado do motivo e horário da visita.',
        'Ações executadas no ponto de venda de forma simplificada.',
        'Sinalização instantânea de ocorrências encontradas na gôndola.',
        'Registro fotográfico para comprovação de presença e evidência.'
      ]
    },
    {
      id: 'followup',
      title: 'Follow-up',
      description: 'As ocorrências registradas podem ser direcionadas aos gestores responsáveis para acompanhamento até sua conclusão.',
      features: [
        'Direcionamento automático de anomalias por e-mail ou canais internos.',
        'Acompanhamento do status de resolução (Aberto, Em Tratativa, Concluído).',
        'Controle transparente de prazos e responsáveis por cada ação.',
        'Histórico unificado das tratativas aplicadas no ponto de venda.'
      ]
    },
    {
      id: 'painel',
      title: 'Painel Gerencial',
      description: 'Consolida automaticamente os registros realizados em campo para acompanhamento da operação.',
      features: [
        'Visão macro e estruturada de todas as visitas efetuadas.',
        'Busca rápida de registros utilizando filtros inteligentes.',
        'Acompanhamento das atividades em tempo real, sem planilhas soltas.',
        'Visualização transparente e relatórios fáceis de exportar.'
      ]
    },
    {
      id: 'indicadores',
      title: 'Indicadores Operacionais',
      description: 'Exibe programação das degustações, distribuição das equipes, produtos trabalhados, redes atendidas e indicadores operacionais.',
      features: [
        'Visualização integrada da escala de promotores de degustação.',
        'Distribuição geográfica e alocação de equipes regionais.',
        'Acompanhamento dos produtos trabalhados por canal e rede.',
        'Gráficos analíticos consolidados de desempenho das ações.'
      ]
    },
    {
      id: 'agenda',
      title: 'Agenda das Degustações',
      description: 'Gestão e controle de agendamentos, promotores de degustação, escalas e distribuição das ações nos pontos de venda.',
      features: [
        'Planejamento centralizado de datas e PDVs das ações de degustação.',
        'Escala de trabalho e controle de promotores especializados.',
        'Evidências de execução de eventos promocionais por loja.',
        'Histórico consolidado de realização das degustações na rede.'
      ]
    },
    {
      id: 'lojas',
      title: 'Lojas e Contatos',
      description: 'Cadastro e consulta de redes varejistas, lojas, endereços, contatos de gerência e supervisores responsáveis.',
      features: [
        'Diretório estruturado com telefones, endereços e redes parceiras.',
        'Vínculo claro de cada ponto de venda com os supervisores alocados.',
        'Informações críticas de contato dos gerentes de loja para agilizar ações.',
        'Facilidade para atualização rápida das rotas de supervisão.'
      ]
    }
  ];

  const getIcon = (id: string, active: boolean) => {
    const cls = `w-5 h-5 transition-colors ${active ? 'text-brand-cyan' : 'text-slate-400 group-hover:text-white'}`;
    switch (id) {
      case 'registro':
        return <ClipboardList className={cls} />;
      case 'followup':
        return <CheckSquare className={cls} />;
      case 'painel':
        return <BarChart3 className={cls} />;
      case 'indicadores':
        return <LineChart className={cls} />;
      case 'agenda':
        return <Calendar className={cls} />;
      case 'lojas':
        return <Users className={cls} />;
      default:
        return <ChevronRight className={cls} />;
    }
  };

  const selectedData = modules.find(m => m.id === activeModule) || modules[0];

  return (
    <section id="modulos" className="py-24 bg-[#0a0f1d] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-brand-blue/5 -z-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20">
            <ClipboardList className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan">Solução Integrada</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Módulos da Plataforma ISIS
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
            Uma plataforma robusta de Trade Marketing corporativo estruturada em módulos complementares, garantindo organização, transparência e controle operacional completo.
          </p>
        </div>

        {/* Layout: Module list left, detail view right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Timeline-style modules list (left column) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="space-y-1 mb-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Módulos Disponíveis</h3>
              <p className="text-xs text-slate-500">Selecione um módulo para detalhar seus fluxos operacionais.</p>
            </div>

            <div className="space-y-3">
              {modules.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveModule(item.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    activeModule === item.id
                      ? 'bg-[#111933]/70 border-brand-blue/30 shadow-[0_4px_15px_rgba(0,82,255,0.1)]'
                      : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                  }`}
                  id={`btn-module-${item.id}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      activeModule === item.id ? 'bg-brand-blue' : 'bg-white/5'
                    }`}>
                      {getIcon(item.id, activeModule === item.id)}
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold transition-colors ${
                        activeModule === item.id ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-1 font-light mt-0.5 max-w-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${
                    activeModule === item.id ? 'translate-x-1 text-brand-cyan' : ''
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Module details card (right column) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="relative flex-1 glass-panel p-8 rounded-2xl border-white/5 bg-[#0e1428]/45 flex flex-col justify-between glowing-border min-h-[350px]">
              
              {/* Card top details */}
              <div className="space-y-5">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider font-mono">
                    Detalhes do Módulo
                  </span>
                  <h3 className="text-2xl font-black text-white">{selectedData.title}</h3>
                </div>

                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  {selectedData.description}
                </p>

                {/* Sub-features list */}
                <div className="space-y-3.5 pt-4 border-t border-white/5">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">O que este módulo gerencia:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedData.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs text-slate-300 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0"></span>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative timeline footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>INTEGRADO À PLATAFORMA ISIS</span>
                </div>
                <span>GESTÃO DE TRADE TRANSPARENTE</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
