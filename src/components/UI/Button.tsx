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
    "inline-flex items-center justify-center px-[48px] py-[18px] text-xs md:text-sm font-bold uppercase tracking-[0.12em] transition-all duration-300 focus:outline-none cursor-pointer rounded-[4px] shadow-sm hover:shadow-md transform hover:-translate-y-1 active:translate-y-0";
  
  const variants = {
    primary: "bg-brand-caramel text-white hover:bg-[#9e7a50] border border-transparent",
    secondary: "bg-brand-dark text-brand-cream hover:bg-brand-caramel border border-transparent",
    outline: "bg-transparent border border-brand-dark/20 text-brand-dark hover:border-brand-caramel hover:text-brand-caramel shadow-none hover:shadow-none hover:-translate-y-1",
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
