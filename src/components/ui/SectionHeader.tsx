import React from 'react';
import { Badge } from './Badge';

export interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = ''
}) => {
  const isCentered = align === 'center';

  return (
    <div className={`${isCentered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} mb-16 lg:mb-24 ${className}`}>
      <Badge variant={dark ? 'light' : 'terracotta'} className="mb-3">
        {eyebrow}
      </Badge>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-5 ${dark ? 'text-white' : 'text-[#18181b]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${dark ? 'text-neutral-300' : 'text-[#52525b]'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
