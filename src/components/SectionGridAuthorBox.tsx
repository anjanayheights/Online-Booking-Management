"use client";

import React, { FC } from "react";
import CardAuthorBox2 from "@/components/CardAuthorBox2";
import Heading from "@/shared/Heading";
import { DEMO_AUTHORS } from "@/data/authors";

export interface SectionGridAuthorBoxProps {
  className?: string;
  sectionGridClass?: string;
  boxCard?: "box1" | "box2 font-medium";
}

const DEMO_DATA = DEMO_AUTHORS.filter((_, i) => i < 10);

const SectionGridAuthorBox: FC<SectionGridAuthorBoxProps> = ({
  className = "",
  sectionGridClass = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 md:gap-8",
  boxCard = "box1",
}) => {
  return (
    <div
      className={`nc-SectionGridAuthorBox relative ${className}`}
      data-nc-id="SectionGridAuthorBox"
    >
      <Heading
        desc="Connect directly with verified property owners and top agents across India"
        isCenter
      >
        Top Verified Owners & Agents
      </Heading>
      <div className={`grid ${sectionGridClass}`}>
        {DEMO_DATA.map((author, index) => (
          <CardAuthorBox2 key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridAuthorBox;
