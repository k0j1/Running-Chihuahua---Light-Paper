import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  darker?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '', darker = false }) => {
  return (
    <section id={id} className={`py-20 lg:py-28 ${darker ? 'bg-slate-900' : 'bg-slate-800/50'} ${className} border-t border-slate-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="border-b-4 border-amber-500 pb-1">{title}</span>
          </h2>
          {subtitle && (
            <p className="mt-4 text-xl text-slate-400 max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};