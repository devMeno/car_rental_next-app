"use client";
 
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import AlphaRomeo from "../images/car_brands/alfa-romeo.png"
import AstonMartin from "../images/car_brands/aston-martin.png"
import Audi from "../images/car_brands/audi.png"
import Bentley from "../images/car_brands/bentley.png"
import Bugatti from "../images/car_brands/bugatti.png"
import Cadillac from "../images/car_brands/cadillac.png"
import Chevrolet from "../images/car_brands/chevrolet.png"
import Ferrari from "../images/car_brands/ferrari.png"
import Jaguar from "../images/car_brands/jaguar.png"
import Lamborghini from "../images/car_brands/lamborghini.png"
import Mercedes from "../images/car_brands/mercedes.png"
import Opel from "../images/car_brands/opel.png"
import RollsRoyce from "../images/car_brands/rolls royce.png"
import Toyota from "../images/car_brands/toyota.png"
import Volkswagen from "../images/car_brands/vw.png"


export default function MovingCards(){
     const testimonials = [
          {
            src: AlphaRomeo,
            name: "Charles Dickens",
            title: "A Tale of Two Cities",
          },
          {
               src: AstonMartin,
               name: "Charles Dickens",
               title: "A Tale of Two Cities",
          },
          {
               src: Audi,
               name: "Charles Dickens",
               title: "A Tale of Two Cities",
          },
          {
               src: Bentley,
               name: "Charles Dickens",
               title: "A Tale of Two Cities",
          },
          {
               src: Bugatti,
               name: "Charles Dickens",
               title: "A Tale of Two Cities",
          },
          {
               src: Cadillac,
               name: "Charles Dickens",
               title: "A Tale of Two Cities",
          },
          {
               src: Chevrolet,
               name: "Charles Dickens",
               title: "A Tale of Two Cities",
          },
          {
               src: Ferrari,
               name: "Charles Dickens",
               title: "A Tale of Two Cities",
          },
          {
               src: Jaguar,
               name: "Charles Dickens",
               title: "A Tale of Two Cities",
          },
          {
               src: Lamborghini,
               name: "Charles Dickens",
               title: "A Tale of Two Cities",
          },
          {
               src: Mercedes,
               name: "Charles Dickens",
               title: "A Tale of Two Cities",
          },
          {
               src: Opel,
               name: "Charles Dickens",
               title: "A Tale of Two Cities",
          },
          {
               src: RollsRoyce,
               name: "Charles Dickens",
               title: "A Tale of Two Cities",
          },
          {
               src: Toyota,
               name: "Charles Dickens",
               title: "A Tale of Two Cities",
          },
          {
               src: Volkswagen,
               name: "Charles Dickens",
               title: "A Tale of Two Cities",
          },                                         
      ];

     return(
          <div className="h-[8rem] rounded-md flex flex-col antialiased bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
          </div>
     )
}