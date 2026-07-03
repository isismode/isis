import React from 'react';
import { 
  LayoutGrid, 
  RefreshCw, 
  Archive, 
  Camera, 
  Eye, 
  Sliders, 
  LineChart, 
  Activity, 
  Search, 
  Map, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';
import { BenefitItem } from '../types';

export default function Beneficios() {
  const benefits: BenefitItem[] = [
    {
      id: 'centralized',
      title: 'Informações Centralizadas',
      description: 'Consolide fotos, ocorrências, checklists e rotas em uma única fonte de verdade corporativa.',
      metric: '100%',
      metricLabel: 'Base Unificada'
    },
    {
      id: 'automatizacao',
      title: 'Automatização dos Registros',
      description: 'Sincronização imediata das atividades de campo com o painel corporativo, reduzindo tarefas manuais.',
      metric: 'Direta',
      metricLabel: 'Sincronização'
    },
    {
      id: 'historico',
      title: 'Histórico Completo',
      description: 'Acesse o dossiê unificado de visitas e ações aplicadas em cada ponto de venda sempre que precisar.',
      metric: 'Completo',
      metricLabel: 'Registro de Rotas'
    },
    {
      id: 'evidencias',
      title: 'Evidências de Atividades',
      description: 'Comprovação por imagens e registros estruturados do cumprimento das metas estipuladas.',
      metric: 'Auditável',
      metricLabel: 'Sinalização Visual'
    },
    {
      id: 'gestao',
      title: 'Gestão Transparente',
      description: 'Supervisão transparente e acompanhamento simplificado das tarefas operacionais executadas.',
      metric: 'Clara',
      metricLabel: 'Visibilidade'
    },
    {
      id: 'organizacao',
      title: 'Organização de Campo',
      description: 'Estruture todas as informações colhidas durante as visitas de forma limpa e organizada.',
      metric: 'Fácil',
      metricLabel: 'Estruturação'
    },
    {
      id: 'indicadores',
      title: 'Indicadores Operacionais',
      description: 'Monitore programações de degustação, escalas de promotores e marcas atendidas.',
      metric: 'Consolidada',
      metricLabel: 'Visão de KPIs'
    },
    {
      id: 'rastreabilidade',
      title: 'Rastreabilidade das Ações',
      description: 'Acompanhe o fluxo de tratamento de cada ocorrência registrada, do início até a conclusão.',
      metric: 'Total',
      metricLabel: 'Rastreabilidade'
    },
    {
      id: 'consulta',
      title: 'Consulta Rápida por Filtros',
      description: 'Localize registros antigos, lojas ou ocorrências de forma instantânea com filtros avançados.',
      metric: 'Imediata',
      metricLabel: 'Pesquisa Inteligente'
    },
    {
      id: 'rotas',
      title: 'Atualização das Rotas',
      description: 'Ajuste e atualize roteiros de visitas rapidamente em caso de intercorrências operacionais.',
      metric: 'Flexível',
      metricLabel: 'Ajuste de Rota'
    }
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case 'centralized':
        return <LayoutGrid className="w-5 h-5 text-brand-cyan" />;
      case 'automatizacao':
        return <RefreshCw className="w-5 h-5 text-brand-purple" />;
      case 'historico':
        return <Archive className="w-5 h-5 text-brand-cyan" />;
      case 'evidencias':
        return <Camera className="w-5 h-5 text-brand-purple" />;
      case 'gestao':
        return <Eye className="w-5 h-5 text-brand-cyan" />;
      case 'organizacao':
        return <Sliders className="w-5 h-5 text-brand-purple" />;
      case 'indicadores':
        return <LineChart className="w-5 h-5 text-brand-cyan" />;
      case 'rastreabilidade':
        return <Activity className="w-5 h-5 text-brand-purple" />;
      case 'consulta':
        return <Search className="w-5 h-5 text-brand-cyan" />;
      case 'rotas':
        return <Map className="w-5 h-5 text-brand-purple" />;
      default:
        return <ChevronRight className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section id="beneficios" className="py-24 bg-[#0a0f1d] relative overflow-hidden">
      {/* Background decoration glows */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-blue/5 -z-10 blur-3xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan">Vantagens de Negócio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Vantagens Estratégicas do ISIS
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
            O ISIS organiza e automatiza a coleta de dados da operação de campo, simplificando o acompanhamento gerencial e promovendo a transparência.
          </p>
        </div>

        {/* Bento/Responsive Grid of Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="glass-panel p-6 rounded-2xl border-white/5 bg-[#0e1428]/40 hover:bg-[#111933]/70 hover:border-brand-blue/20 border transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                    {getIcon(benefit.id)}
                  </div>
                  
                  {/* Small Micro pill */}
                  <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    Impacto
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-slate-100 group-hover:text-white transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 text-[12px] font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Graphic/Metric Tag Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-end justify-between">
                <div className="flex flex-col">
                  <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider leading-none mb-1">
                    Métrica Chave
                  </span>
                  <span className="text-[10px] text-slate-300 font-light">
                    {benefit.metricLabel}
                  </span>
                </div>
                
                <span className="text-sm font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple font-mono">
                  {benefit.metric}
                </span>
              </div>

            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
