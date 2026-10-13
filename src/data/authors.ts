import { AuthorType } from "./types";
import avatar1 from "@/images/avatars/Image-1.png";
import avatar2 from "@/images/avatars/Image-2.png";
import avatar3 from "@/images/avatars/Image-3.png";
import avatar4 from "@/images/avatars/Image-4.png";
import avatar5 from "@/images/avatars/Image-5.png";
import avatar6 from "@/images/avatars/Image-6.png";
import avatar7 from "@/images/avatars/Image-7.png";
import avatar8 from "@/images/avatars/Image-8.png";
import avatar9 from "@/images/avatars/Image-9.png";
import avatar10 from "@/images/avatars/Image-10.png";

const DEFAULT_AUTHOR: AuthorType = {
  id: "1",
  firstName: "Rajesh",
  lastName: "Sharma",
  displayName: "Rajesh Sharma",
  avatar: avatar1,
  count: 12,
  desc: "Verified Owner - Sector 62 Noida",
  jobName: "Verified Owner",
  href: "/author",
  starRating: 4.9,
};

const RAW_AUTHORS: AuthorType[] = [
  DEFAULT_AUTHOR,
  {
    id: "2",
    firstName: "Priya",
    lastName: "Verma",
    displayName: "Priya Verma",
    avatar: avatar2,
    count: 24,
    desc: "Property Consultant - Gurgaon",
    jobName: "Property Consultant",
    href: "/author",
    starRating: 4.8,
  },
  {
    id: "3",
    firstName: "Amit",
    lastName: "Patel",
    displayName: "Amit Patel",
    avatar: avatar3,
    count: 18,
    desc: "Verified Owner - Bandra West Mumbai",
    jobName: "Verified Owner",
    href: "/author",
    starRating: 5.0,
  },
  {
    id: "4",
    firstName: "Suresh",
    lastName: "Reddy",
    displayName: "Suresh Reddy",
    avatar: avatar4,
    count: 15,
    desc: "Builder Partner - Bangalore",
    jobName: "Builder Partner",
    href: "/author",
    starRating: 4.7,
  },
  {
    id: "5",
    firstName: "Neha",
    lastName: "Gupta",
    displayName: "Neha Gupta",
    avatar: avatar5,
    count: 9,
    desc: "Verified Owner - Indirapuram Ghaziabad",
    jobName: "Verified Owner",
    href: "/author",
    starRating: 4.9,
  },
  {
    id: "6",
    firstName: "Vikas",
    lastName: "Malhotra",
    displayName: "Vikas Malhotra",
    avatar: avatar6,
    count: 31,
    desc: "Commercial Agent - Connaught Place Delhi",
    jobName: "Commercial Agent",
    href: "/author",
    starRating: 4.9,
  },
  {
    id: "7",
    firstName: "Rohan",
    lastName: "Mehta",
    displayName: "Rohan Mehta",
    avatar: avatar7,
    count: 102,
    desc: "Verified Owner - Pune Central",
    jobName: "Verified Owner",
    href: "/author",
    starRating: 4.8,
  },
  {
    id: "8",
    firstName: "Ananya",
    lastName: "Rao",
    displayName: "Ananya Rao",
    avatar: avatar8,
    count: 35,
    desc: "Rental Specialist - Whitefield Bangalore",
    jobName: "Rental Specialist",
    href: "/author",
    starRating: 4.9,
  },
  {
    id: "9",
    firstName: "Karan",
    lastName: "Singh",
    displayName: "Karan Singh",
    avatar: avatar9,
    count: 21,
    desc: "Verified Owner - Greater Noida West",
    jobName: "Verified Owner",
    href: "/author",
    starRating: 4.7,
  },
  {
    id: "10",
    firstName: "Sanjay",
    lastName: "Joshi",
    displayName: "Sanjay Joshi",
    avatar: avatar10,
    count: 111,
    desc: "Global Property Agent - Dubai & UK Properties",
    jobName: "Global Agent",
    href: "/author",
    starRating: 5.0,
  },
];

// Proxy traps any undefined array access or out-of-bound index and returns DEFAULT_AUTHOR
export const DEMO_AUTHORS = new Proxy(RAW_AUTHORS, {
  get(target, prop, receiver) {
    if (typeof prop === "string" && !isNaN(Number(prop))) {
      const idx = Number(prop);
      return target[idx] || DEFAULT_AUTHOR;
    }
    return Reflect.get(target, prop, receiver);
  },
});
