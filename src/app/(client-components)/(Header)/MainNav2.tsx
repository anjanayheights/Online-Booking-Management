"use client";

import React, { FC } from "react";
import Logo from "@/shared/Logo";
import Link from "next/link";

export interface MainNav2Props {
  className?: string;
}

const MainNav2: FC<MainNav2Props> = ({ className = "" }) => {
  return (
    <div className={`nc-MainNav2 relative z-10 ${className}`}>
      <div className="px-4 lg:px-14 py-4 flex justify-between items-center bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center space-x-8">
          <Logo />
          <nav className="hidden md:flex space-x-6 text-sm font-semibold">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <Link href="/listing-real-estate" className="hover:text-red-600">Buy (8 Lakh+ Properties)</Link>
            <Link href="/listing-real-estate" className="hover:text-red-600">Rent (Zero Brokerage)</Link>
            <Link href="/listing-real-estate" className="hover:text-red-600">International (4 Lakh+ Western)</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="/author"
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-full shadow-md transition-all"
          >
            Post Free Ad
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNav2;
