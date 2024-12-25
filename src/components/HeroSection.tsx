import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

function HeroSection() {
    return (
        <div className="md:h-[68rem] h-[48rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight
                className="-top-40 left-0 md:left-[34rem] md:-top-20"
                fill="white"
            />
            <div className="p-4 relative z-10 text-center mt-10">
                <h1 className="mt-20 md:mt-24 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    AE TRADERS
                </h1>
                <p className="mt-7 font-normal text-base md:text-2xl text-neutral-300 mx-auto px-4 md:px-4">
                    Discover an extensive collection of beautifully designed home essentials, including curtains, bedsheets, doormats, and much more! Transform your living space into a haven of comfort and style with our premium-quality products. Whether you&apos;re looking for elegant designs, vibrant colors, or durable materials, we offer something for every taste and need. Enhance the ambiance of your home effortlessly with our stylish yet affordable range that combines functionality and aesthetics to perfection
                </p>

                <div className="mt-8">
                    <Link href="/products">
                        <Button 
                            borderRadius="1.75rem"
                            className=" bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
                        Explore Products
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default HeroSection