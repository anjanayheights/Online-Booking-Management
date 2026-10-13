'use client';

import React, { useState } from 'react';

interface HeaderProps {
  onOpenPlansModal: () => void;
}

export default function Header({ onOpenPlansModal }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-blue-700 tracking-tight">Anjanay Heights</span>
          <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded-full">
            Verified
          </span>
        </div>

        {/* Navigation Section */}
        <nav className="flex items-center gap-6">
          <a href="#properties" className="text-gray-700 hover:text-blue-600 font-semibold text-sm">
            Properties
          </a>
          <a href="#owner" className="text-gray-700 hover:text-blue-600 font-semibold text-sm">
            Owner Corner
          </a>
          
          {/* Header Mein Plans Ka New Section / Button */}
          <button
            onClick={onOpenPlansModal}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-2 rounded-lg text-sm transition shadow-sm flex items-center gap-1"
          >
            ⭐ Owner Plans & Passes
          </button>

          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-semibold text-sm">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
