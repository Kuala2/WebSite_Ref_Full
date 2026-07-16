import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-10 py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 focus:outline-none min-h-[48px] cursor-pointer rounded-full shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0";
  
  const variants = {
    primary: "bg-brand-accent text-brand-cream hover:bg-[#A37851] border border-transparent",
    secondary: "bg-brand-dark text-brand-cream hover:bg-brand-accent border border-transparent",
    outline: "bg-transparent border border-brand-dark/20 text-brand-dark hover:border-brand-accent hover:text-brand-accent shadow-none hover:shadow-none hover:-translate-y-0",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
