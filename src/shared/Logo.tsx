import React from "react";
import Link from "next/link";

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-28" }) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-red-600 font-extrabold text-2xl tracking-tight ${className}`}
    >
      <span className="flex items-center gap-2">
        <span className="bg-red-600 text-white px-2 py-0.5 rounded-md text-base font-black">AH</span>
        <span>Anjanay Heights</span>
      </span>
    </Link>
  );
};

export default Logo;
