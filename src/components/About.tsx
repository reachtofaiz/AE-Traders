"use client";

import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";

const about = [
  {
    title: 'Our Journey: From Vision to Reality',
    description:
      'Discover the story behind our brand, how we started, and our dedication to providing high-quality home essentials for every household.',
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        {/* <Image
          src={aboutImage}
          alt="Error 404"
          width={300}
          height={300}
          className="object-cover"
        /> */}
      </div>
    ),
  },
  {
    title: 'Craftsmanship and Quality at Heart',
    description:
      'Learn about our commitment to blending traditional artistry with modern designs to create stunning curtains, bedsheets, and doormats.',
  },
  {
    title: 'Why Choose Us for Your Home',
    description:
      'Explore what sets us apart—our passion for quality, customer satisfaction, and affordable pricing for your everyday home needs.',
  },
  {
    title: 'Bringing Comfort to Every Corner of Your Home',
    description:
      'At the core of our mission is to make your house feel like a home with elegant, durable, and affordable home essentials.',
  },
];

function About() {
  return (
    <div>
      <Link href={"/about"}>
      <h1 className="text-center font-bold text-6xl mt-20 mb-20">About Us</h1>
      </Link>
      <div>
        <StickyScroll content={about} />
      </div>
    </div>
  )
}

export default About