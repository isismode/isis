export interface ProblemCase {
  id: string;
  title: string;
  description: string;
  painPoint: string;
  impact: string;
}

export interface SystemModule {
  id: string;
  title: string;
  description: string;
  features: string[];
  placeholderTip: string;
  dimensions: string;
  mockSkeletal: {
    type: 'list' | 'board' | 'charts' | 'directory' | 'table';
    headerText: string;
  };
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export interface IndicatorMetric {
  id: string;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  color: 'cyan' | 'purple' | 'blue' | 'emerald' | 'rose';
  chartData: number[];
}

export interface RoadmapItem {
  id: string;
  phase: string;
  title: string;
  description: string;
  status: 'concluido' | 'em_desenvolvimento' | 'proximos' | 'futuro';
  details: string[];
}
