import React from 'react';
import { MessageSquareOff, FileSpreadsheet, Clock, History, AlertTriangle, AlertOctagon } from 'lucide-react';
import { ProblemCase } from '../types';

export default function Problema() {
  const problems: ProblemCase[] = [
    {
      id: 'whatsapp',
      title: 'Descentralização no WhatsApp',
      description: 'Fotos de gôndolas, avisos de rupturas e dúvidas operacionais ficam perdidos em dezenas de grupos de conversas instantâneas informais.',
      painPoint: 'Sem busca estruturada ou controle de status.',
      impact: 'Informações críticas ignoradas ou respondidas tarde demais.'
    },
    {
      id: 'spreadsheets',
      title: 'Caos das Planilhas Desconectadas',
      description: 'Múltiplas versões de arquivos enviadas por e-mail ou salvas localmente, sem padronização, auditoria, histórico ou integridade de dados.',
      painPoint: 'Divergência de dados entre a equipe de campo e a gestão.',
      impact: 'Decisões lentas baseadas em dados desatualizados.'
    },
    {
      id: 'reports',
      title: 'Dificuldade na Consolidação',
      description: 'Supervisores e gestores gastam horas compilando dados dispersos para gerar relatórios, dificultando uma resposta rápida a problemas em loja.',
      painPoint: 'Desperdício de inteligência e tempo analítico.',
      impact: 'Baixa produtividade e foco desviado da supervisão de campo.'
    },
    {
      id: 'history',
      title: 'Ausência Crítica de Histórico',
      description: 'Não há rastreabilidade de recorrência de problemas na loja. Se um promotor de vendas é desligado ou remanejado, todo o conhecimento operacional é perdido.',
      painPoint: 'Dependência de pessoas físicas, sem histórico organizacional.',
      impact: 'Rupturas repetitivas nos mesmos pontos de venda.'
    },
    {
      id: 'deadlines',
      title: 'Prazos Operacionais às Cegas',
      description: 'Dificuldade de rastrear se as ocorrências de campo foram resolvidas, quem é o responsável atual de cada pendência ou se os prazos de SLA expiraram.',
      painPoint: 'Sem alarmes, alertas ou monitoramento de SLA de lojas.',
      impact: 'Dificuldade em manter a padronização e o ritmo da execução operacional.'
    }
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case 'whatsapp':
        return <MessageSquareOff className="w-6 h-6 text-rose-400" />;
      case 'spreadsheets':
        return <FileSpreadsheet className="w-6 h-6 text-rose-400" />;
      case 'reports':
        return <Clock className="w-6 h-6 text-rose-400" />;
      case 'history':
        return <History className="w-6 h-6 text-rose-400" />;
      case 'deadlines':
        return <AlertTriangle className="w-6 h-6 text-rose-400" />;
      default:
        return <AlertOctagon className="w-6 h-6 text-rose-400" />;
    }
  };

  return (
    <section id="problema" className="py-24 bg-[#070b16] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-rose-500/5 -z-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20">
            <AlertOctagon className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-rose-400">Gargalos Operacionais</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Os Desafios Reais das Equipes de Campo
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
            A operação de Trade Marketing gera diariamente um grande volume de informações distribuídas entre mensagens, fotos, ligações e anotações. Essa dispersão dificulta o acompanhamento da dinâmica real das atividades, reduz a rastreabilidade das ações e limita a visão estratégica da gestão.
          </p>
        </div>

        {/* Problems Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob) => (
            <div
              key={prob.id}
              className="glass-panel p-6.5 rounded-2xl border-white/5 hover:border-rose-500/20 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-rose-500/0 via-rose-500/0 to-rose-500/0 group-hover:via-rose-500/40 transition-all duration-500"></div>
              
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-rose-500/5 border border-rose-500/15 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {getIcon(prob.id)}
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                    {prob.title}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                    {prob.description}
                  </p>
                </div>
              </div>

              {/* Technical / Business Breakdown (The "Why it hurts" block) */}
              <div className="mt-6 pt-5 border-t border-white/5 space-y-2.5">
                <div className="flex items-start gap-2">
                  <span className="text-[9px] font-bold text-rose-400 uppercase tracking-wider mt-0.5 min-w-[50px]">Dor:</span>
                  <span className="text-[11px] text-slate-300 font-medium leading-normal">{prob.painPoint}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5 min-w-[50px]">Impacto:</span>
                  <span className="text-[11px] text-slate-400 font-light leading-normal">{prob.impact}</span>
                </div>
              </div>

            </div>
          ))}

          {/* Special Executive Callout Panel */}
          <div className="glass-panel p-6.5 rounded-2xl border-white/5 bg-gradient-to-b from-[#16121a]/60 to-[#0e0a14]/60 lg:col-span-1 flex flex-col justify-between border-dashed border-rose-500/20">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 font-bold text-base">
                !
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-rose-300 uppercase tracking-wider">Desafio da Centralização</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Sem uma centralização das informações, gestores têm dificuldade para acompanhar em tempo real as atividades realizadas em campo, identificar pendências, visualizar ocorrências e manter um histórico organizado das operações.
                </p>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/5">
              <p className="text-[10px] text-slate-400 italic">
                "A organização centralizada de dados é o pilar fundamental para a excelência na gestão de Trade de alta performance."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
