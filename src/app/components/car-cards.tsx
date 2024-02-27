import { HoverEffect } from "./ui/card-hover-effect";
import CardImage from "../images/tim-meyer-GIm7wxiAZys-unsplash.jpg"

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
     image: CardImage,
     title: "Audi A8 L 2022",
     price: 700,
     transmission: "Auto",
     fuel: "Electric",
     persons: 4,
     mileage: 4000,
  },
  {
     image: CardImage,
     title: "Audi A8 L 2022",
     price: 700,
     transmission: "Auto",
     fuel: "Electric",
     persons: 4,
     mileage: 4000,
  },
  {
     image: CardImage,
     title: "Audi A8 L 2022",
     price: 700,
     transmission: "Auto",
     fuel: "Electric",
     persons: 4,
     mileage: 4000,
  },
  {
     image: CardImage,
     title: "Audi A8 L 2022",
     price: 700,
     transmission: "Auto",
     fuel: "Electric",
     persons: 4,
     mileage: 4000,
  },
  {
     image: CardImage,
     title: "Audi A8 L 2022",
     price: 700,
     transmission: "Auto",
     fuel: "Electric",
     persons: 4,
     mileage: 4000,
  },
  {
     image: CardImage,
     title: "Audi A8 L 2022",
     price: 700,
     transmission: "Auto",
     fuel: "Electric",
     persons: 4,
     mileage: 4000,
  },
];
