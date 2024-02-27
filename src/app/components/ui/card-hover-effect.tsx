import { cn } from "@/app/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGasPump,faUserGroup } from '@fortawesome/free-solid-svg-icons'


export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    image: any;
    title: string;
    price: number;
    transmission: number;
    fuel: string;
    persons: number;
    mileage: number;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href=""
          key={item?.title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
               <Image src={item.image} 
               className="w-full rounded-2xl"
               alt="Picture of the author"/>
               {/* <CardTitle>{item.image}</CardTitle> */}
               {/* <CardDescription>{item.title}</CardDescription> */}
               <p className="font-semibold text-xl my-[5px]">{item.title}</p>
               <h1><span className="text-3xl font-bold">{item.price}</span>€/day</h1>
               <div className="flex justify-between my-[5px] py-[5px] px-[5px] rounded-2xl bg-gray-100">
                    <div className="text-center">
                         <FontAwesomeIcon icon={faGasPump} className="w-[30px] h-[30px] text-gray-400" />
                         <p>{item.fuel}</p>
                    </div>
                    <div className="text-center">
                         <FontAwesomeIcon icon={faUserGroup} className="w-[30px] h-[30px] text-gray-400" />
                         <p>{item.persons}</p>
                    </div>
                    <div className="text-center">
                         <FontAwesomeIcon icon={faUserGroup} className="w-[30px] h-[30px] text-gray-400" />
                         <p>{item.mileage}</p>
                    </div>
                    <div className="text-center">
                         <FontAwesomeIcon icon={faUserGroup} className="w-[30px] h-[30px] text-gray-400" />
                         <p>{item.transmission}</p>
                    </div>
               </div>
               <button className="shadow-[inset_0_0_0_2px_#616467] w-full px-12 py-4 my-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white transition duration-200">
                    Rent now
               </button>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-[1px] overflow-hidden bg-white border border-transparent group-hover:border-slate-200 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-gray-300 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
