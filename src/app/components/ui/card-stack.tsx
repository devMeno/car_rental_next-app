"use client";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

let interval: any;

type Card = {
    id: number;
    step: number;
    title: string;
    description: string;
    logo: any;
};

export const CardStack = ({
                              items,
                              offset,
                              scaleFactor,
                          }: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(items);

    useEffect(() => {
        startFlipping();
    }, []);
    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards]; // create a copy of the array
                newArray.unshift(newArray.pop()!); // move the last element to the front
                return newArray;
            });
        }, 5000);

        return () => clearInterval(interval);
    };

    return (
        <div className="relative mt-[50px] justify-center m-auto h-60 w-60 md:h-60 md:w-96">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="absolute text-white bg-[#03045eff] h-60 w-60 md:h-[180px] md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
                        style={{
                            transformOrigin: "top center",
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                            zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                        }}
                    >
                        <div className="flex md:p-[10px] justify-center">
                            {/* <div className="w-1/5 h-[120px] bg-blue-50 mr-[5px] rounded-xl">
                         Bonjour
                         {card.logo}
                    </div> */}
                            <div className="w-full">
                                <span className="font-bold text-2xl">Step{card.step} : </span><span
                                className="font-semibold text-2xl">{card.title}</span>
                                <br/><br/>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
