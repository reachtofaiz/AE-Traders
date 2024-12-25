'use client'

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function Blog() {

  const BlogDetails = [
    {
      "title": "5 Tips to Choose Perfect Curtains for Your Home",
      "description": "Learn how to select the perfect curtains that enhance the look of your living space.",
       slug: 'a',
       ssFeatured: true,
    },
    {
        "title": "Bedsheet Fabric Guide: Cotton vs. Satin",
        "description": "Explore the pros and cons of cotton and satin bedsheets to choose the right one for your home.",
         slug: 'b',
         isFeatured: true,
    },
    {
      "title": "How to Keep Your Doormats Clean and Fresh",
      "description": "Discover easy tips to maintain and clean your doormats for a fresh entryway.",
       slug: 'c',
       isFeatured: true,
    },
    {
        "title": "Top 10 Home Décor Ideas on a Budget",
      "description": "Transform your home with stylish and budget-friendly home décor ideas.",
       slug: 'd',
       isFeatued: true,
    },
    {
        "title": "Choosing the Right Fabric for Your Bedsheets",
        "description": "Understand how different fabrics like microfiber, silk, and linen affect comfort and quality.",
        slug: 'e',
        isFeatured: true,
    },
    {
        "title": "How to Mix and Match Bedsheets for a Stylish Bedroom",
        "description": "Tips and tricks for combining colors and patterns for the perfect bedroom look.",
        slug: 'f',
        isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 xl:text-5xl font-semibold tracking-wide uppercase">Blogs</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">5 Tips to Choose Perfect Curtains for Your Home</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={BlogDetails.map(blog => (
            {
              title: blog.title,
              description: blog.description,
              link: blog.slug
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/products"}
          className="px-4 py-2 font-semibold rounded border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200"
          >
            View All products
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Blog