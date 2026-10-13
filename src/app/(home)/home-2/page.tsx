"use client";

import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import React from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import SectionHowItWork from "@/components/SectionHowItWork";
import BackgroundSection from "@/components/BackgroundSection";
import { TaxonomyType } from "@/data/types";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";

import logo1 from "@/images/logos/nomal/1.png";
import logo1Dark from "@/images/logos/dark/1.png";
import logo2 from "@/images/logos/nomal/2.png";
import logo2Dark from "@/images/logos/dark/2.png";
import logo3 from "@/images/logos/nomal/3.png";
import logo3Dark from "@/images/logos/dark/3.png";
import logo4 from "@/images/logos/nomal/4.png";
import logo4Dark from "@/images/logos/dark/4.png";
import logo5 from "@/images/logos/nomal/5.png";
import logo5Dark from "@/images/logos/dark/5.png";

import HIW1img from "@/images/HIW2-1.png";
import HIW2img from "@/images/HIW2-2.png";
import HIW3img from "@/images/HIW2-3.png";
import HIW1imgDark from "@/images/HIW2-1-dark.png";
import HIW2imgDark from "@/images/HIW2-2-dark.png";
import HIW3imgDark from "@/images/HIW2-3-dark.png";
import rightImgPng from "@/images/our-features-2.png";

import SectionGridFeatureProperty from "../SectionGridFeatureProperty";
import SectionDowloadApp from "../SectionDowloadApp";
import SectionHero2 from "@/app/(server-components)/SectionHero2";
import Image from "next/image";

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-real-estate",
    name: "Ready to Move Flats",
    taxonomy: "category",
    count: 2450,
    thumbnail:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "2",
    href: "/listing-real-estate",
    name: "Independent Builder Floors",
    taxonomy: "category",
    count: 1120,
    thumbnail:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "3",
    href: "/listing-real-estate",
    name: "Commercial Office Spaces",
    taxonomy: "category",
    count: 840,
    thumbnail:
      "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "4",
    href: "/listing-real-estate",
    name: "Residential Plots & Land",
    taxonomy: "category",
    count: 650,
    thumbnail:
      "https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function PageHome2() {
  return (
    <main className="nc-PageHome2 relative overflow-hidden">
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <SectionHero2 className="" />

        {/* Inventory Stats Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-6 text-white my-8 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-xl">
          <div className="flex items-center space-x-4 border-b md:border-b-0 md:border-r border-red-400 pb-4 md:pb-0">
            <span className="text-4xl">🇮🇳</span>
            <div>
              <h3 className="text-2xl font-black">8,00,000+ Indian Properties</h3>
              <p className="text-sm text-red-100">Direct Owner Contact • Zero Brokerage</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-4xl">🌐</span>
            <div>
              <h3 className="text-2xl font-black">4,00,000+ Western & Global Properties</h3>
              <p className="text-sm text-red-100">Top-Searched US, UK, Europe & UAE Properties</p>
            </div>
          </div>
        </div>

        {/* 25% Cheaper NoBroker Subscription Plans & Daily Passes */}
        <div className="my-12">
          <div className="text-center mb-8">
            <span className="bg-red-100 text-red-600 font-bold text-xs uppercase px-3 py-1 rounded-full">
              🔥 25% Cheaper Than Standard NoBroker Plans
            </span>
            <h2 className="text-3xl font-extrabold mt-2">Anjanay Heights Owner & Buyer Passes</h2>
            <p className="text-neutral-500 text-sm mt-1">Get instant owner details with our flexible daily & monthly plans</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* ₹99 Indian Pass */}
            <div className="border-2 border-red-500 bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg relative flex flex-col justify-between">
              <span className="absolute -top-3 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Most Popular</span>
              <div>
                <h3 className="font-bold text-lg">Indian Daily Pass</h3>
                <p className="text-xs text-neutral-500 mt-1">Unlock all 8 Lakh+ Indian owner listings for 24 hrs</p>
                <div className="my-4">
                  <span className="text-3xl font-black">₹99</span>
                  <span className="text-xs text-neutral-400"> / day</span>
                </div>
                <ul className="text-xs space-y-2 text-neutral-600 dark:text-neutral-300 my-4">
                  <li>✓ Direct Owner Contact Numbers</li>
                  <li>✓ Zero Brokerage Guaranteed</li>
                  <li>✓ Instant WhatsApp Connect</li>
                </ul>
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-xs">
                Get ₹99 Pass
              </button>
            </div>

            {/* $2 International Pass */}
            <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg">Global Daily Pass</h3>
                <p className="text-xs text-neutral-500 mt-1">Access 4 Lakh+ Western & International listings</p>
                <div className="my-4">
                  <span className="text-3xl font-black">$2</span>
                  <span className="text-xs text-neutral-400"> / day</span>
                </div>
                <ul className="text-xs space-y-2 text-neutral-600 dark:text-neutral-300 my-4">
                  <li>✓ Top US, UK, UAE & European Listings</li>
                  <li>✓ Verified Landlords & Agents</li>
                  <li>✓ Multi-Currency Support</li>
                </ul>
              </div>
              <button className="w-full bg-neutral-900 hover:bg-black text-white font-bold py-2.5 rounded-xl text-xs">
                Get $2 Pass
              </button>
            </div>

            {/* 25% Cheaper Freedom Plan */}
            <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">Full Freedom Plan</h3>
                  <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded">Save 25%</span>
                </div>
                <p className="text-xs text-neutral-500 mt-1">Unlimited contacts for 45 Days</p>
                <div className="my-4">
                  <span className="text-3xl font-black">₹1,499</span>
                  <span className="line-through text-xs text-neutral-400 ml-2">₹1,999</span>
                </div>
                <ul className="text-xs space-y-2 text-neutral-600 dark:text-neutral-300 my-4">
                  <li>✓ Unlimited Owner Contacts</li>
                  <li>✓ Relationship Manager Assistance</li>
                  <li>✓ Free Rental Agreement Draft</li>
                </ul>
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-xs">
                Subscribe & Save 25%
              </button>
            </div>
          </div>
        </div>

        <div className="ncSectionLogos grid grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-16">
          <div className="flex items-end justify-center">
            <Image className="block dark:hidden" src={logo1} alt="logo1" />
            <Image className="hidden dark:block" src={logo1Dark} alt="logo1" />
          </div>
          <div className="flex items-end justify-center">
            <Image className="block dark:hidden" src={logo4} alt="logo4" />
            <Image className="hidden dark:block" src={logo4Dark} alt="logo4" />
          </div>
          <div className="flex items-end justify-center">
            <Image className="block dark:hidden" src={logo2} alt="logo2" />
            <Image className="hidden dark:block" src={logo2Dark} alt="logo2" />
          </div>
          <div className="flex items-end justify-center">
            <Image className="block dark:hidden" src={logo3} alt="logo3" />
            <Image className="hidden dark:block" src={logo3Dark} alt="logo3" />
          </div>
          <div className="flex items-end justify-center">
            <Image className="block dark:hidden" src={logo5} alt="logo5" />
            <Image className="hidden dark:block" src={logo5Dark} alt="logo5" />
          </div>
        </div>

        <SectionHowItWork
          data={[
            {
              id: 1,
              img: HIW1img,
              imgDark: HIW1imgDark,
              title: "Smart search",
              desc: "Name the area or type of home you are looking for in the search bar. Our app will find you the perfect match.",
            },
            {
              id: 2,
              img: HIW2img,
              imgDark: HIW2imgDark,
              title: "Choose property",
              desc: "From the options provided, select any property you like to explore.",
            },
            {
              id: 3,
              img: HIW3img,
              imgDark: HIW3imgDark,
              title: "Book your property",
              desc: "Enter your specific location, property type and price range to finalize.",
            },
          ]}
        />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionGridFeatureProperty />
        </div>

        <SectionOurFeatures type="type2" rightImg={rightImgPng} />

        <SectionDowloadApp />

        <SectionSliderNewCategories
          categories={DEMO_CATS_2}
          categoryCardType="card4"
          itemPerRow={4}
          heading="Explore Top Real Estate Destinations"
          subHeading="Popular places and cities recommended for property investment"
        />

        <div className="relative py-16">
          <BackgroundSection className="bg-neutral-100 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox boxCard="box2" />
        </div>

        <SectionSubscribe2 />
      </div>
    </main>
  );
}
