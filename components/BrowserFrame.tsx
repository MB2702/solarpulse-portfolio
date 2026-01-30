import React from 'react';

interface BrowserFrameProps {
  children: React.ReactNode;
  url?: string;
  className?: string;
}

export function BrowserFrame({
  children,
  url = "localhost:3000/monitoring",
  className = ""
}: BrowserFrameProps) {
  return (
    <div className={`w-full transition-all duration-300 hover:shadow-2xl ${className}`}>
      {/* Browser Chrome */}
      <div className="bg-slate-100 rounded-t-xl border border-slate-200 px-4 py-3 flex items-center gap-2">
        {/* Traffic Lights */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
          <div className="w-3 h-3 rounded-full bg-[#10B981]" />
        </div>
        
        {/* Address Bar */}
        <div className="flex-1 ml-4 bg-white rounded border border-slate-200 px-3 py-1 text-xs text-slate-400 font-mono flex items-center gap-2">
          <span className="opacity-50">🔒</span> {url}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="bg-white rounded-b-xl border border-t-0 border-slate-200 overflow-hidden shadow-xl">
        {children}
      </div>
    </div>
  );
}
