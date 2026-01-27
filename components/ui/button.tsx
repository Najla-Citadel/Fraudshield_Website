
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-bold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none tracking-widest uppercase";
  
  const variants = {
    primary: "bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]",
    outline: "border border-cyan-500/30 bg-white/5 text-cyan-400 hover:bg-cyan-500/10 backdrop-blur-sm",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5",
    neon: "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)] border border-blue-400/30"
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-3 text-xs",
    lg: "px-12 py-5 text-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
