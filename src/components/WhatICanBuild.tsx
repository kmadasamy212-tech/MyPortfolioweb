import React from 'react';
import {
  Layout,
  Smartphone,
  BarChart3,
  Sparkles,
  Database,
  Globe,
  CheckCircle2,
  Code2,
} from 'lucide-react';
import { capabilitiesData } from '../data/portfolioData';

export const WhatICanBuild: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-indigo-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-sky-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-emerald-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-purple-400" />;
      default:
        return <Code2 className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="capabilities" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>06 // PRACTICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            What I Can Build
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical, end-to-end software deliverables grounded in academic training, full-stack development, and data analytics internships.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilitiesData.map((cap) => (
            <div
              key={cap.id}
              className="glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 border border-white/[0.08] hover:border-indigo-500/30"
            >
              <div>
                {/* Header with Icon */}
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/[0.08] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-indigo-500/40 transition-transform">
                  {getIcon(cap.iconName)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  {cap.title}
                </h3>

                <p className="text-xs text-indigo-300 font-medium mb-3">
                  {cap.shortDesc}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {cap.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                    Core Deliverables:
                  </span>
                  {cap.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies strip */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {cap.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
