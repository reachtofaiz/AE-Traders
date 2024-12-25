'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
        "quote": "The quality of the products exceeded my expectations. Every item feels premium and adds a classy touch to my home. Highly recommended for anyone seeking elegant home decor.",
        "name": "Krishna",
        "title": "Interior Designer"
    },
    {
        "quote": "Amazing service and beautiful designs. The products not only look stunning but also enhance the overall vibe of my living space. My home feels more vibrant and welcoming now!",
        "name": "Michael Smith",
        "title": "Homeowner"
    },
    {
        "quote": "I was impressed with the affordability and premium feel of their collection. The attention to detail in the designs and the quality of materials truly stand out.",
        "name": "Arjuna",
        "title": "Event Planner"
    },
    {
        "quote": "The curtains I bought were absolutely stunning and fit perfectly. They’ve completely transformed my living room. I’m beyond happy with my purchase and will definitely order more.",
        "name": "Arvind",
        "title": "Architect"
    },
    {
        "quote": "High-quality and stylish items! Their bedsheets are incredibly soft, comfortable, and last after multiple washes. These are some of the best products I’ve ever purchased for my home.",
        "name": "Kishor Daa",
        "title": "Freelancer"
    },
    {
        "quote": "Fantastic customer service and quick delivery! The team was super helpful in guiding me through the selection process. I’ll definitely return to shop for more products soon.",
        "name": "Ben Wilson",
        "title": "Business Owner"
    },
    {
        "quote": "Their doormats are not just durable but also extremely stylish. They have added a modern and cheerful vibe to my entryway. My guests frequently compliment them!",
        "name": "Kitti Kumari",
        "title": "Blogger"
    },
    {
        "quote": "The variety in their collection is amazing. From colorful patterns to minimalistic designs, they have something for every taste. I found exactly what I needed without any hassle.",
        "name": "Daniel John",
        "title": "Engineer"
    },
    {
        "quote": "Affordable prices without compromising on quality. Perfect for anyone looking for home essentials that are both budget-friendly and luxurious. I’m incredibly pleased with my purchase.",
        "name": "Laura Gop",
        "title": "Teacher"
    },
    {
        "quote": "I love how their products add a touch of elegance and sophistication to my home. Every item is beautifully crafted, and it’s evident that great care went into its design.",
        "name": "James Miller",
        "title": "Photographer"
    }
];


function Testimonials() {
    return (
            <div className="h-[50rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
                <h2 className="text-3xl xl:text-5xl mb-20 font-bold text-center xl:mb-[12rem] z-10">Here are the some testimony from our client</h2>
                    <div className="flex justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
                        <div className="sm:w-[50%] xl:w-full max-w-6xl">
                            <InfiniteMovingCards
                            items={testimonials}
                            direction="right"
                            speed="slow"
                        />
                        </div>
                    </div>
            </div>
        )
}



export default Testimonials