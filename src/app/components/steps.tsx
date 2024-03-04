"use client";
import {CardStack} from "../components/ui/card-stack";
import {cn} from "@/app/utils/cn";
import Image from "next/image";
import StepsImage from "../images/steps-image.png"


export function Steps() {
  return (
     <>
          <div className="bg-white">
               <p className="font-bold text-4xl text-center pt-[50px]">How it works</p>
               <p className="text-center text-xl w-[90%] md:w-[55%] justify-center m-auto my-[20px]">Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online.</p>
               <div className="h-[330px] md:h-[450px] px-[100px] w-full ">
                    <div className="flex items-center">
                         <div className="md:w-1/3 -ml-[10px] md:ml-0">
                              <CardStack items={CARDS} />
                         </div>
                         <div className="md:w-2/3">
                              <Image src={StepsImage}
                              className="justify-center m-auto"
                              alt="Steps image"/>
                         </div>
                    </div>
               </div>
          </div>
     </>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    step: 1,
    title: "Browse and select",
    description: "Choose from our wide range of premium cars, select the pickup , the return dates and locations that suit your best.",
  },
  {
     id: 1,
     step: 2,
     title: "Book and confirm",
     description: "Book your desired car with just a few clicks and receive an instant confirmation via mail or SMS.",
  },
  {
     id: 2,
     step: 3,
     title: "Enjoy your ride",
     description: "Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service.",
  },
];
