
import React, { useState } from 'react';
import { Sun, ArrowRight, Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-teal-brand">
            <Sun size={20} />
          </div>
          <span className="font-sans font-bold text-gray-800 tracking-tight">SolarPulse</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <a href="#architecture" className="hover:text-teal-brand transition-colors">Architecture</a>
          <a href="#hardware" className="hover:text-teal-brand transition-colors">Hardware</a>
          <a href="#dashboard" className="hover:text-teal-brand transition-colors">Dashboard</a>
          <a href="#ai" className="hover:text-teal-brand transition-colors">AI</a>
          <a href="#contact" className="ml-4 bg-slate-800 text-white px-5 py-2 rounded-lg hover:bg-brand-teal transition-all flex items-center gap-2">
            Contact <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-800 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-4 text-center">
            <a 
              href="#architecture" 
              className="text-slate-600 font-medium py-2 hover:text-teal-brand transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Architecture
            </a>
            <a 
              href="#hardware" 
              className="text-slate-600 font-medium py-2 hover:text-teal-brand transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hardware
            </a>
            <a 
              href="#dashboard" 
              className="text-slate-600 font-medium py-2 hover:text-teal-brand transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </a>
            <a 
              href="#ai" 
              className="text-slate-600 font-medium py-2 hover:text-teal-brand transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI
            </a>
            <a 
              href="#contact" 
              className="bg-slate-800 text-white px-5 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
