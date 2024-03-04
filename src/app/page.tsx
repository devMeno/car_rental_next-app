"use client";
import React, {useState} from "react";
import {Menu, MenuItem} from "./components/ui/navbar-menu";
import {cn} from "./utils/cn";
import {motion} from "framer-motion";
import {ImagesSlider} from "./components/ui/images-slider";
import MovingCards from "./components/moving-cards";
import {Inter} from "next/font/google";
import {CardHoverEffect} from "./components/car-cards";
import {Steps} from "./components/steps";
import {FeedbackCarousel} from "@/app/components/feedback-carousel";
import RollsRoyceBanner from "../app/images/rolls-royce_banner.jpg";
import BlackCarBanner from "../app/images/black_cars_banner.jpg";
import MazdaBanner from "../app/images/mazda_banner.jpg"


const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    // weight: ['100','200','300','400','500','600','700','800','900']
})

export default function NavbarDemo() {

    const images = [
        RollsRoyceBanner.src,
        BlackCarBanner.src,
        MazdaBanner.src,
    ];
    return (
        <>
            <div className={`${inter.variable} font-sans`}>
                <div className="relative w-full flex items-center justify-center">
                    <Navbar className="top-2"/>
                    <ImagesSlider className="h-[40rem]" images={images}>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -80,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                            className="z-50 flex flex-col justify-center items-center"
                        >
                            <motion.p
                                className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 text-white">
                                The hero section slideshow <br/> nobody asked for
                            </motion.p>
                            <button
                                className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                                <span>Join now →</span>
                                <div
                                    className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent"/>
                            </button>
                        </motion.div>
                    </ImagesSlider>
                </div>
                <MovingCards/>
                <div className="text-center pt-[100px] pb-[80px]">
                    <p className="font-semibold">THE CARS</p>
                    <p className="font-extrabold text-5xl">Our impressive fleet</p>
                </div>
                <CardHoverEffect/>
                <Steps/>
                <FeedbackCarousel/>
            </div>
        </>
    );
}

function Navbar({className}: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home">
                    {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div> */}
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Cars">
                    {/* <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src=""
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src=""
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src=""
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src=""
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div> */}
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About us">
                    {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div> */}
                </MenuItem>
            </Menu>
        </div>
    );
}
