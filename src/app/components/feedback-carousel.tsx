import {Carousel} from 'flowbite-react';
import Image from "next/image";
import VisageHomme from "../images/visage_homme.jpg"

export function FeedbackCarousel() {
    return (
        <div className="h-[440px] rounded-none">
            <Carousel>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="text-center py-[30px] md:py-[70px] bg-blue-200">
                        <p className="font-bold text-gray-400">WHAT OUR CUSTOMERS SAY</p>
                        <p className="font-semibold text-xl md:text-4xl w-[70%] justify-center m-auto my-[15px] md:my-[40px]">&quot;My Drivox experience was nothing short of incredible.The pristine car and impeccable service made my trip unforgottable.I will back for more&quot;</p>
                        <div className="text-center">
                            <Image src={VisageHomme}
                                   className="w-[50px] rounded-full justify-center m-auto"
                                   alt="Picture of the author"/>
                            <p className="mt-[10px]">Jean François</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="text-center py-[30px] md:py-[70px] bg-red-100">
                        <p className="font-bold text-gray-400">WHAT OUR CUSTOMERS SAY</p>
                        <p className="font-semibold text-xl md:text-4xl w-[70%] justify-center m-auto my-[15px] md:my-[40px]">&quot;My Drivox experience was nothing short of incredible.The pristine car and impeccable service made my trip unforgottable.I will back for more&quot;</p>
                        <div className="text-center">
                            <Image src={VisageHomme}
                                   className="w-[50px] rounded-full justify-center m-auto"
                                   alt="Picture of the author"/>
                            <p className="mt-[10px]">Jean François</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="text-center py-[30px] md:py-[70px] bg-green-200">
                        <p className="font-bold text-gray-400">WHAT OUR CUSTOMERS SAY</p>
                        <p className="font-semibold text-xl md:text-4xl w-[70%] justify-center m-auto my-[15px] md:my-[40px]">&quot;My Drivox experience was nothing short of incredible.The pristine car and impeccable service made my trip unforgottable.I will back for more&quot;</p>
                        <div className="text-center">
                            <Image src={VisageHomme}
                                   className="w-[50px] rounded-full justify-center m-auto"
                                   alt="Picture of the author"/>
                            <p className="mt-[10px]">Jean François</p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
