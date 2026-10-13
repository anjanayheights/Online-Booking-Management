import React, { FC } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import { TaxonomyType } from "@/data/types";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-real-estate",
    name: "Flats & Apartments",
    taxonomy: "category",
    count: 420000,
    thumbnail:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "2",
    href: "/listing-real-estate",
    name: "Independent Houses & Villas",
    taxonomy: "category",
    count: 180000,
    thumbnail:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "3",
    href: "/listing-real-estate",
    name: "Commercial Offices & Shops",
    taxonomy: "category",
    count: 95000,
    thumbnail:
      "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "4",
    href: "/listing-real-estate",
    name: "Plots & Residential Land",
    taxonomy: "category",
    count: 125000,
    thumbnail:
      "https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "5",
    href: "/listing-real-estate",
    name: "Global & Western Properties",
    taxonomy: "category",
    count: 400000,
    thumbnail:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export interface ListingRealEstatePageProps {}

const ListingRealEstatePage: FC<ListingRealEstatePageProps> = ({}) => {
  return (
    <div className="container relative space-y-16 py-10">
      <SectionSliderNewCategories
        heading="Explore Properties by Category"
        subHeading="Find residential, commercial, and international real estate listings with zero brokerage"
        categoryCardType="card5"
        itemPerRow={5}
        categories={DEMO_CATS}
        sliderStyle="style2"
      />
      <SectionGridFilterCard className="pb-24 lg:pb-28" />
    </div>
  );
};

export default ListingRealEstatePage;
