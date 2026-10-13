"use client";

import React, { FC, useState } from "react";
import PropertyCardH from "@/components/PropertyCardH";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";

export interface SectionGridFeaturePropertyProps {
  stayListings?: StayDataType[];
  gridClass?: string;
  heading?: string;
  subHeading?: string;
}

const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

const SectionGridFeatureProperty: FC<SectionGridFeaturePropertyProps> = ({
  stayListings = DEMO_DATA,
  gridClass = "grid-cols-1 md:grid-cols-2",
  heading = "Featured Verified Properties",
  subHeading = "Zero-brokerage homes and commercial spaces handpicked by Anjanay Heights",
}) => {
  const [tabActive, setTabActive] = useState<string>("Noida & Delhi NCR");
  const tabs = ["Noida & Delhi NCR", "Mumbai", "Bangalore", "Global / Western"];

  return (
    <div className="nc-SectionGridFeatureProperty relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white">
            {heading}
          </h2>
          <p className="mt-2 text-neutral-500 dark:text-neutral-400 text-sm">
            {subHeading}
          </p>
        </div>

        {/* Localized City Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-neutral-100 dark:bg-neutral-800 p-1.5 rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setTabActive(tab)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                tabActive === tab
                  ? "bg-red-600 text-white shadow-md"
                  : "text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className={`grid gap-6 md:gap-8 ${gridClass}`}>
        {stayListings.map((stay) => (
          <PropertyCardH key={stay.id} data={stay} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridFeatureProperty;
