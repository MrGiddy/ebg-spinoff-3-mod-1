import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeader({ title, subtitle, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-5 relative pb-4 inline-block">
        {title}
        <span className={`absolute bottom-0 h-[3px] w-20 bg-secondary ${align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'}`}></span>
      </h2>
      {subtitle && (
        <p className={`text-lg text-textLight max-w-2xl ${align === 'center' ? 'mx-auto' : ''} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}