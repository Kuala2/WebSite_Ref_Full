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
  const classes = `ui-button ui-button--${variant} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
        <span aria-hidden="true">↗</span>
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </button>
  );
}
