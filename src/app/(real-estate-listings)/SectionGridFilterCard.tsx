"use client";

import React, { FC, useState } from "react";
import Heading2 from "@/components/Heading2";
import PropertyCardH from "@/components/PropertyCardH";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import TabFilters from "./TabFilters";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: StayDataType[];
}

const DEMO_DATA = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  const [activeTab, setActiveTab] = useState("Noida & Delhi NCR");

  const tabs = ["Noida & Delhi NCR", "Mumbai", "Bangalore", "Global / Western"];

  return (
    <div className={`nc-SectionGridFilterCard ${className}`}>
      <Heading2
        heading="Verified Properties & Direct Owner Listings"
        subHeading="Explore top verified zero-brokerage apartments, villas, and commercial properties"
      />

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        {/* Indian & Global Metro Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-neutral-100 dark:bg-neutral-800 p-1.5 rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === tab
                  ? "bg-red-600 text-white shadow-md"
                  : "text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <TabFilters />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-8 lg:mt-10">
        {data.map((stay) => (
          <PropertyCardH key={stay.id} data={stay} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
