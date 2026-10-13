"use client";

import React, { FC, useState } from "react";
import HeaderFilter from "@/components/HeaderFilter";
import PropertyCardH from "@/components/PropertyCardH";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";

export interface SectionGridFeaturePropertyProps {
  stayListings?: StayDataType[];
  gridClass?: string;
  heading?: string;
  subHeading?: string;
  headingIsCenter?: boolean;
  tabs?: string[];
}

const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

const SectionGridFeatureProperty: FC<SectionGridFeaturePropertyProps> = ({
  stayListings = DEMO_DATA,
  gridClass = "grid-cols-1 md:grid-cols-2",
  heading = "Featured Verified Properties",
  subHeading = "Zero-brokerage homes and commercial spaces handpicked by Anjanay Heights",
  headingIsCenter,
  tabs = ["Noida & Delhi NCR", "Mumbai", "Bangalore", "Global / Western"],
}) => {
  const [tabActive, setTabActive] = useState<string>(tabs[0]);

  return (
    <div className="nc-SectionGridFeatureProperty relative">
      <HeaderFilter
        tabActive={tabActive}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
        onClickTab={(item) => setTabActive(item)}
      />
      <div className={`grid gap-6 md:gap-8 mt-8 ${gridClass}`}>
        {stayListings.map((stay) => (
          <PropertyCardH key={stay.id} data={stay} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridFeatureProperty;
