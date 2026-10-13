import Logo from "@/shared/Logo";
import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "1",
    title: "Properties",
    menus: [
      { href: "/listing-real-estate", label: "Buy Apartments" },
      { href: "/listing-real-estate", label: "Rent Houses" },
      { href: "/listing-real-estate", label: "Commercial Plots" },
      { href: "/listing-real-estate", label: "Luxury Villas" },
    ],
  },
  {
    id: "2",
    title: "Quick Links",
    menus: [
      { href: "/about", label: "About Us" },
      { href: "/author", label: "Agent Directory" },
      { href: "/blog", label: "Real Estate News" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    id: "3",
    title: "Explore Cities",
    menus: [
      { href: "/listing-real-estate", label: "Mumbai Real Estate" },
      { href: "/listing-real-estate", label: "Delhi NCR Properties" },
      { href: "/listing-real-estate", label: "Bengaluru Homes" },
      { href: "/listing-real-estate", label: "Pune Spaces" },
    ],
  },
  {
    id: "4",
    title: "Support",
    menus: [
      { href: "/contact", label: "Help Center" },
      { href: "/contact", label: "Terms of Service" },
      { href: "/contact", label: "Privacy Policy" },
      { href: "/contact", label: "Site Visit Inquiry" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700 font-sans">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10">
        <div className="grid grid-cols-1 gap-5 col-span-2 md:col-span-4 lg:col-span-1 lg:flex lg:flex-col justify-between">
          <div className="col-span-1">
            <Logo />
          </div>
          <p className="text-sm text-neutral-6000 dark:text-neutral-300">
            Your trusted real estate portal for finding verified residential and commercial properties.
          </p>
          <div className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start">
            <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};

export default Footer;
