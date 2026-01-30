import React from 'react';
import { Check, AlertCircle, ArrowRight } from 'lucide-react';

interface FeatureItemProps {
  text: string;
  type?: 'check' | 'warning' | 'step';
}

export function FeatureItem({ text, type = 'check' }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div className={`mt-1 shrink-0 ${
        type === 'warning' ? 'text-slate-400' :
        type === 'step' ? 'text-teal-brand' : 'text-emerald-500'
      }`}>
        {type === 'warning' && <AlertCircle size={18} />}
        {type === 'check' && <Check size={18} strokeWidth={3} />}
        {type === 'step' && <ArrowRight size={18} strokeWidth={3} />}
      </div>
      <span className={`${type === 'warning' ? 'text-slate-500' : 'text-slate-700'} text-[15px]`}>
        {text}
      </span>
    </div>
  );
}
