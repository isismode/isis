import React, { useState } from 'react';
import { BarChart3, TrendingUp, TrendingDown, Users, CheckSquare, AlertCircle, Play, Building, Calendar, Camera } from 'lucide-react';
import { IndicatorMetric } from '../types';

type TimeRange = 'hoje' | 'semana' | 'mes';

export default function Indicadores() {
  const [timeRange, setTimeRange] = useState<TimeRange>('semana');

  // Simulated metrics state for different ranges
  const metricsData: Record<TimeRange, IndicatorMetric[]> = {
    hoje: [
      { id: 'atividades', label: 'Atividades Registradas Hoje', value: '34', change: '▲ 15% vs ontem', isPositive: true, color: 'blue', chartData: [18, 22, 25, 20, 28, 30, 34] },
      { id: 'imagens', label: 'Imagens Enviadas', value: '60', change: '▲ 100% auditadas', isPositive: true, color: 'cyan', chartData: [35, 42, 48, 45, 52, 55, 60] },
      { id: 'pendencias', label: 'Pendências Abertas', value: '7', change: '▼ 2 resolvidas hoje', isPositive: true, color: 'purple', chartData: [10, 9, 8, 9, 7, 8, 7] },
      { id: 'lojas_sem_atendimento', label: 'Lojas sem atendimento', value: '5', change: 'Aguardando rota', isPositive: false, color: 'rose', chartData: [4, 6, 5, 4, 3, 4, 5] },
      { id: 'degustacoes', label: 'Degustações Hoje', value: '14', change: '▲ Em andamento', isPositive: true, color: 'cyan', chartData: [8, 10, 12, 11, 13, 14, 14] },
      { id: 'redes', label: 'Redes Atendidas', value: '6', change: '100% integradas', isPositive: true, color: 'emerald', chartData: [6, 6, 6, 6, 6, 6, 6] }
    ],
    semana: [
      { id: 'atividades', label: 'Atividades Registradas', value: '238', change: '▲ Média consistente', isPositive: true, color: 'blue', chartData: [180, 195, 210, 205, 220, 228, 238] },
      { id: 'imagens', label: 'Imagens Enviadas', value: '420', change: '▲ Todas armazenadas', isPositive: true, color: 'cyan', chartData: [310, 330, 360, 350, 385, 405, 420] },
      { id: 'pendencias', label: 'Pendências Abertas', value: '12', change: '▼ SLA sob controle', isPositive: true, color: 'purple', chartData: [15, 14, 13, 15, 11, 13, 12] },
      { id: 'lojas_sem_atendimento', label: 'Lojas sem atendimento', value: '2', change: 'Média semanal baixa', isPositive: true, color: 'rose', chartData: [4, 3, 3, 2, 2, 1, 2] },
      { id: 'degustacoes', label: 'Degustações Realizadas', value: '84', change: '▲ Escala cheia', isPositive: true, color: 'cyan', chartData: [65, 70, 76, 74, 80, 82, 84] },
      { id: 'redes', label: 'Redes Atendidas', value: '6', change: 'Consistência semanal', isPositive: true, color: 'emerald', chartData: [6, 6, 6, 6, 6, 6, 6] }
    ],
    mes: [
      { id: 'atividades', label: 'Atividades Registradas', value: '1.045', change: '▲ Recorde operacional', isPositive: true, color: 'blue', chartData: [820, 880, 930, 910, 980, 1010, 1045] },
      { id: 'imagens', label: 'Imagens Enviadas', value: '1.850', change: '▲ Histórico completo', isPositive: true, color: 'cyan', chartData: [1400, 1510, 1600, 1580, 1700, 1780, 1850] },
      { id: 'pendencias', label: 'Pendências Abertas', value: '15', change: '▼ Estável vs mês ant.', isPositive: true, color: 'purple', chartData: [22, 20, 18, 19, 16, 17, 15] },
      { id: 'lojas_sem_atendimento', label: 'Lojas sem atendimento', value: '0', change: 'Meta de atendimento OK', isPositive: true, color: 'rose', chartData: [3, 2, 2, 1, 1, 0, 0] },
      { id: 'degustacoes', label: 'Degustações Realizadas', value: '360', change: '▲ Performance ótima', isPositive: true, color: 'cyan', chartData: [280, 300, 320, 315, 340, 352, 360] },
      { id: 'redes', label: 'Redes Atendidas', value: '6', change: 'Foco total nas redes', isPositive: true, color: 'emerald', chartData: [6, 6, 6, 6, 6, 6, 6] }
    ]
  };

  const getCardStyle = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'border-brand-cyan/15 group-hover:border-brand-cyan/35 text-brand-cyan';
      case 'purple':
        return 'border-brand-purple/15 group-hover:border-brand-purple/35 text-brand-purple';
      case 'blue':
        return 'border-brand-blue/15 group-hover:border-brand-blue/35 text-brand-blue';
      case 'emerald':
        return 'border-emerald-500/15 group-hover:border-emerald-500/35 text-emerald-400';
      case 'rose':
        return 'border-rose-500/15 group-hover:border-rose-500/35 text-rose-400';
      default:
        return 'border-white/5';
    }
  };

  const getCardIcon = (id: string, color: string) => {
    const cls = `w-5 h-5`;
    switch (id) {
      case 'atividades':
        return <CheckSquare className={`${cls} text-brand-blue`} />;
      case 'imagens':
        return <Camera className={`${cls} text-brand-cyan`} />;
      case 'pendencias':
        return <AlertCircle className={`${cls} text-brand-purple`} />;
      case 'lojas_sem_atendimento':
        return <AlertCircle className={`${cls} text-rose-400`} />;
      case 'degustacoes':
        return <Calendar className={`${cls} text-brand-cyan`} />;
      case 'redes':
        return <Building className={`${cls} text-emerald-400`} />;
      default:
        return <BarChart3 className={`${cls} text-slate-400`} />;
    }
  };

  const activeMetrics = metricsData[timeRange];

  return (
    <section id="indicadores" className="py-24 bg-[#070b16] relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-brand-purple/5 -z-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] rounded-full bg-brand-blue/5 -z-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20">
              <BarChart3 className="w-3.5 h-3.5 text-brand-purple" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-purple">Dados Operacionais Simulados</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Acompanhamento de Indicadores
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-light">
              Monitore a volumetria operacional simulada e teste a agilidade analítica da inteligência do sistema selecionando diferentes períodos.
            </p>
          </div>

          {/* Timeframe selector controls */}
          <div className="flex bg-white/5 rounded-xl p-1 border border-white/5 backdrop-blur-sm self-start md:self-auto">
            {(['hoje', 'semana', 'mes'] as TimeRange[]).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  timeRange === range
                    ? 'bg-brand-blue text-white shadow-[0_2px_8px_rgba(0,82,255,0.25)]'
                    : 'text-slate-400 hover:text-white'
                }`}
                id={`btn-timeframe-${range}`}
              >
                {range === 'hoje' ? 'Hoje' : range === 'semana' ? 'Esta Semana' : 'Este Mês'}
              </button>
            ))}
          </div>
        </div>

        {/* Indicators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeMetrics.map((m) => (
            <div
              key={m.id}
              className={`glass-panel p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group glowing-border ${getCardStyle(m.color)}`}
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 tracking-wider">
                    {m.label}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
                    {getCardIcon(m.id, m.color)}
                  </div>
                </div>

                {/* Big Value Display */}
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-black text-white font-mono tracking-tight transition-all duration-300">
                    {m.value}
                  </span>
                  
                  {/* Positive/Negative Indicator Tag */}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-medium ${
                    m.isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                  }`}>
                    {m.change}
                  </span>
                </div>
              </div>

              {/* Inline SVG Mini Sparkline Chart to show professional data density */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="h-10 w-full flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`grad-${m.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={m.color === 'cyan' ? '#00f0ff' : m.color === 'purple' ? '#9d4edd' : m.color === 'blue' ? '#0052ff' : '#10b981'} stopOpacity="0.45" />
                        <stop offset="100%" stopColor={m.color === 'cyan' ? '#00f0ff' : m.color === 'purple' ? '#9d4edd' : m.color === 'blue' ? '#0052ff' : '#10b981'} stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Render Area */}
                    <path
                      d={`M 0 20 
                        ${m.chartData.map((val, i) => {
                          const x = (i / (m.chartData.length - 1)) * 100;
                          const maxVal = Math.max(...m.chartData);
                          const minVal = Math.min(...m.chartData);
                          const rangeVal = maxVal - minVal || 1;
                          const y = 18 - ((val - minVal) / rangeVal) * 15;
                          return `L ${x} ${y}`;
                        }).join(' ')} 
                        L 100 20 Z`}
                      fill={`url(#grad-${m.id})`}
                    />

                    {/* Render Path Line */}
                    <path
                      d={m.chartData.map((val, i) => {
                        const x = (i / (m.chartData.length - 1)) * 100;
                        const maxVal = Math.max(...m.chartData);
                        const minVal = Math.min(...m.chartData);
                        const rangeVal = maxVal - minVal || 1;
                        const y = 18 - ((val - minVal) / rangeVal) * 15;
                        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                      }).join(' ')}
                      fill="none"
                      stroke={m.color === 'cyan' ? '#00f0ff' : m.color === 'purple' ? '#9d4edd' : m.color === 'blue' ? '#0052ff' : m.color === 'rose' ? '#f43f5e' : '#10b981'}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    {/* Dot on final value */}
                    <circle
                      cx="100"
                      cy={18 - ((m.chartData[m.chartData.length - 1] - Math.min(...m.chartData)) / (Math.max(...m.chartData) - Math.min(...m.chartData) || 1)) * 15}
                      r="2"
                      fill={m.color === 'cyan' ? '#00f0ff' : m.color === 'purple' ? '#9d4edd' : m.color === 'blue' ? '#0052ff' : m.color === 'rose' ? '#f43f5e' : '#10b981'}
                    />
                  </svg>
                </div>
                
                <div className="flex justify-between items-center text-[8px] font-mono text-slate-500 mt-1.5 uppercase">
                  <span>Início do Período</span>
                  <span>Atualizado</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
