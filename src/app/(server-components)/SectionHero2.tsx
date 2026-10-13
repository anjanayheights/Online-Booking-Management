import React, { FC } from "react";
import imageRight from "@/images/hero-right-3.png";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHero2Props {
  className?: string;
}

const SectionHero2: FC<SectionHero2Props> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero2 relative flex flex-col-reverse lg:flex-col ${className}`}
    >
      <div className="relative py-8 lg:py-20 lg:pr-14 flex flex-col items-start justify-center max-w-3xl space-y-8">
        <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 dark:bg-primary-900 dark:bg-opacity-30 dark:text-primary-300">
          🇮🇳 India’s Trusted Real Estate Marketplace
        </span>
        <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl !leading-[1.12] tracking-tight">
          Find Verified Flats, Villas & Plots in India
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
          Explore residential and commercial properties across top Indian cities with zero brokerage options and direct builder listings.
        </p>

        {/* Indian Quick Search Bar */}
        <div className="w-full bg-white dark:bg-neutral-900 shadow-xl rounded-2xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border border-neutral-100 dark:border-neutral-800">
          <div className="flex flex-col space-y-1">
            <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">City / Locality</label>
            <input 
              type="text" 
              placeholder="e.g. Noida, Mumbai, Bangalore" 
              className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Configuration</label>
            <select className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Any BHK / Type</option>
              <option>1 BHK Apartment</option>
              <option>2 BHK Apartment</option>
              <option>3 BHK Apartment</option>
              <option>4+ BHK Luxury Villa</option>
              <option>Commercial Office Space</option>
              <option>Residential Plot / Land</option>
            </select>
          </div>

          <div className="flex items-end">
            <ButtonPrimary href="/listing-real-estate" className="w-full py-3 flex items-center justify-center font-medium">
              Search Properties
            </ButtonPrimary>
          </div>
        </div>
      </div>

      <div className="relative lg:absolute right-0 top-0 bottom-0 w-full lg:w-1/2 flex items-center justify-center">
        <Image
          className="w-full h-auto object-contain max-h-[550px]"
          src={imageRight}
          alt="Indian Real Estate Hero"
          priority
        />
      </div>
    </div>
  );
};

export default SectionHero2;
