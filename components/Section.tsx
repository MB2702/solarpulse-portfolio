
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  bgColor?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, bgColor = 'bg-white', children, className = '' }) => {
  return (
    <section id={id} className={`${bgColor} py-[80px] md:py-[120px] px-6 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="section-title text-[32px] md:text-[40px] font-semibold tracking-tight text-slate-900 mb-6">{title}</h2>
          {subtitle && <p className="text-[17px] text-slate-500 max-w-3xl leading-[1.6]">{subtitle}</p>}
          <div className="h-1.5 w-16 bg-slate-900 rounded-full mt-8"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export const ColumnLayout: React.FC<{ children: React.ReactNode; reverse?: boolean; itemsCenter?: boolean; className?: string }> = ({ children, reverse = false, itemsCenter = true, className = "" }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 ${itemsCenter ? 'items-center' : 'items-stretch'} ${className}`}>
      {reverse ? (
        <>{React.Children.toArray(children).reverse()}</>
      ) : (
        children
      )}
    </div>
  );
};

export const PlaceholderImage: React.FC<{ label: string; height?: string; className?: string; src?: string; alt?: string; loading?: 'lazy' | 'eager'; fluid?: boolean; hero?: boolean; ai?: boolean; }> = ({ label, height = "h-[450px] md:h-[600px]", className = "", src, alt, loading = 'lazy', fluid = false, hero = false, ai = false }) => {
  return (
    <div className={`image-container w-full ${fluid ? '' : height} flex items-center justify-center relative overflow-hidden group ${className}`}>
      {src ? (
        <img src={src} alt={alt || ''} loading={loading} decoding="async" className={`${hero ? 'hero-image' : ''} ${ai ? 'ai-anomaly-image' : ''} ${hero ? '' : 'object-contain'} w-full`} />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/20 to-transparent"></div>
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200 shadow-sm transition-transform duration-300 group-hover:scale-110">
               <span className="text-slate-500 font-mono text-sm font-bold tracking-widest uppercase">{label}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
