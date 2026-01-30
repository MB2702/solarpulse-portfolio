import React from 'react';

interface ArchitectureCardProps {
  number: string;
  title: string;
  description: string;
}

export function ArchitectureCard({ number, title, description }: ArchitectureCardProps) {
  return (
    <div className="relative p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-teal-brand/30 transition-colors h-full">
      {/* Step Number Badge */}
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
        {number}
      </div>
      
      <h4 className="text-base font-semibold text-slate-800 mb-2 mt-2">
        {title}
      </h4>
      <p className="text-sm text-slate-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
