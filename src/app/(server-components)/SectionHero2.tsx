"use client";

import React, { useState } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";

const SectionHero2 = ({ className = "" }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState<"buy" | "rent" | "commercial">("buy");

  return (
    <div className={`nc-SectionHero2 relative flex flex-col items-center justify-center py-12 lg:py-16 ${className}`}>
      {/* Top Banner Badge */}
      <div className="flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border border-red-200 mb-6">
        <span>🔥 World's Largest No-Brokerage Property Portal</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-center text-neutral-900 dark:text-white max-w-4xl tracking-tight leading-tight">
        Buy, Rent or Sell Real Estate with <span className="text-red-600">Zero Brokerage</span>
      </h1>
      <p className="mt-4 text-base sm:text-lg text-center text-neutral-600 dark:text-neutral-300 max-w-2xl">
        Connect directly with verified property owners in Noida, Delhi NCR, Mumbai, and Bangalore.
      </p>

      {/* NoBroker Multi-Tab Search Box */}
      <div className="w-full max-w-4xl mt-8 bg-white dark:bg-neutral-900 shadow-2xl rounded-2xl p-4 sm:p-6 border border-neutral-200 dark:border-neutral-800">
        {/* Category Tabs */}
        <div className="flex space-x-4 border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-5">
          <button
            onClick={() => setActiveTab("buy")}
            className={`pb-2 px-4 text-sm font-bold border-b-2 transition-all ${
              activeTab === "buy"
                ? "border-red-600 text-red-600"
                : "border-transparent text-neutral-500 hover:text-neutral-800"
            }`}
          >
            Buy Property
          </button>
          <button
            onClick={() => setActiveTab("rent")}
            className={`pb-2 px-4 text-sm font-bold border-b-2 transition-all ${
              activeTab === "rent"
                ? "border-red-600 text-red-600"
                : "border-transparent text-neutral-500 hover:text-neutral-800"
            }`}
          >
            Rent Property
          </button>
          <button
            onClick={() => setActiveTab("commercial")}
            className={`pb-2 px-4 text-sm font-bold border-b-2 transition-all ${
              activeTab === "commercial"
                ? "border-red-600 text-red-600"
                : "border-transparent text-neutral-500 hover:text-neutral-800"
            }`}
          >
            Commercial
          </button>
        </div>

        {/* Search Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div className="sm:col-span-2 flex flex-col">
            <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">Search Locality / Landmark</label>
            <input
              type="text"
              placeholder="e.g. Sector 62 Noida, Whitefield, Andheri East"
              className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">Property Type</label>
            <select className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
              <option>Full House / Flat</option>
              <option>1 BHK Apartment</option>
              <option>2 BHK Apartment</option>
              <option>3 BHK Apartment</option>
              <option>Villa / Independent House</option>
              <option>Plot / Land</option>
            </select>
          </div>

          <div className="flex items-end">
            <ButtonPrimary href="/listing-real-estate" className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg flex items-center justify-center">
              Search
            </ButtonPrimary>
          </div>
        </div>
      </div>

      {/* Post Property Quick CTA for Owners */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <span className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">Are you a Property Owner?</span>
        <ButtonSecondary href="/author" className="text-xs font-bold py-2 px-4 border border-red-600 text-red-600 hover:bg-red-50">
          Post Free Property Ad ➔
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default SectionHero2;
