import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-150 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#c85a32] focus-visible:ring-offset-2 active:scale-[0.98] select-none';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs sm:text-sm gap-1.5',
    md: 'px-5 py-3 text-sm sm:text-base gap-2',
    lg: 'px-6 py-4 text-base sm:text-lg gap-2.5'
  };

  const variantStyles = {
    primary: 'bg-[#c85a32] hover:bg-[#b54f2a] text-white shadow-lg shadow-[#c85a32]/25',
    secondary: 'bg-white border border-[#d6cfc7] text-[#18181b] hover:border-[#18181b] hover:bg-[#f6f2ec] shadow-xs',
    dark: 'bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white',
    outline: 'border border-white/30 text-white hover:bg-white/10'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
