import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'terracotta' | 'light' | 'dark';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'terracotta',
  className = ''
}) => {
  const variantStyles = {
    terracotta: 'text-[#c85a32]',
    light: 'text-neutral-300',
    dark: 'text-neutral-900 bg-neutral-100'
  };

  return (
    <span className={`text-xs sm:text-sm font-bold tracking-widest uppercase inline-block ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
