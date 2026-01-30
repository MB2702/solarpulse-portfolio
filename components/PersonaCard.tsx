import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PersonaCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function PersonaCard({ icon: Icon, title, description }: PersonaCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 p-8 transition-all duration-300 hover:border-teal-brand/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1">
      {/* Icon Container */}
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-teal-tint text-teal-brand mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} strokeWidth={2} />
      </div>
      
      {/* Title */}
      <h4 className="text-lg font-semibold text-slate-800 mb-3">
        {title}
      </h4>
      
      {/* Description */}
      <p className="text-[15px] leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
