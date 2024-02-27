import { Carousel, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import VisageHomme from "../images/visage_homme.jpg"
import BgVoiture1 from "../images/bg-voiture1.jpg"
 
export function FeedbackCarousel() {
  return (
    <Carousel
      className=""
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
          
          {/* <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
          /> */}
          {/* <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
          /> */}
          <div className="text-center py-[30px] md:py-[70px] bg-cover bg-center" style={{ backgroundImage:`url(${BgVoiture1})` }}>
               <p className="font-bold text-gray-400">WHAT OUR CUSTOMERS SAY</p>
               <p className="font-semibold text-xl md:text-4xl w-[70%] justify-center m-auto my-[15px] md:my-[40px]">&quot;My Drivox experience was nothing short of incredible.The pristine car and impeccable service made my trip unforgottable.I will back for more&quot;</p>
               <div className="text-center">
                    <Image src={VisageHomme} 
                    className="w-[50px] rounded-full justify-center m-auto"
                    alt="Picture of the author"/>
                    <p className="mt-[10px]">Jean François</p>
               </div>
          </div>
          <div className="text-center py-[30px] md:py-[70px] bg-red-200">
               <p className="font-bold text-gray-400">WHAT OUR CUSTOMERS SAY</p>
               <p className="font-semibold text-xl md:text-4xl w-[70%] justify-center m-auto my-[15px] md:my-[40px]">&quot;My Drivox experience was nothing short of incredible.The pristine car and impeccable service made my trip unforgottable.I will back for more&quot;</p>
               <div className="text-center">
                    <Image src={VisageHomme} 
                    className="w-[50px] rounded-full justify-center m-auto"
                    alt="Picture of the author"/>
                    <p className="mt-[10px]">Jean François</p>
               </div>
          </div>
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
          {/* <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
          /> */}
    </Carousel>
  );
}