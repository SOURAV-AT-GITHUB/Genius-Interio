import addIcon from "/Working-Areas/add-icon.svg";

import modularKitchenImage from "/Working-Areas/modular-kitchen.jfif";
import modularKitchenIcon from "/Working-Areas/modular-kitchen.svg";

import fullhomeInteriorImage from "/Working-Areas/fullhome-interior.jfif";
import fullhomeInteriorIcon from "/Working-Areas/fullhome-interior.svg";

import luxuryInteriorImage from "/Working-Areas/luxury-interiors.jfif";
import luxuryInteriorIcon from "/Working-Areas/luxury-interiors.svg";

import renovationImage from "/Working-Areas/renovation.jfif";
import renovationIcon from "/Working-Areas/renovation.svg";
import Button from "../../../components/Button";
import { NavLink } from "react-router-dom";
export default function WorkingArea() {
  const workingAreas = [
    {
      title: "Modular Kitchen",
      description:
        "Functional kitchens, wardrobes, and storage solutions designed to blend style and practicality seamlessly.",
      image: modularKitchenImage,
      icon: modularKitchenIcon,
    },
    {
      title: "Full Home Interiors",
      description:
        "Providing turnkey interior solutions to transform your house into a dream home, tailored to your style and needs.",
      image: fullhomeInteriorImage,
      icon: fullhomeInteriorIcon,
    },
    {
      title: "Luxury Interiors",
      description:
        "Tailored interiors that redefine elegance with a perfect blend of style, sophistication, and design, crafted to suit your unique vision.",
      image: luxuryInteriorImage,
      icon: luxuryInteriorIcon,
    },
    {
      title: "Renovation",
      description:
        "Expert solutions to upgrade your home, combining design, functionality, and style to create spaces that reflect your vision.",
      image: renovationImage,
      icon: renovationIcon,
    },
  ];
  return (
    <section id="home-working-area" className=" dark-background-image p-3  lg:p-16">
      <div className="sm:w-4/6 m-auto flex flex-col gap-4 text-center">
        <p className="text-white">Working Areas</p>
        <p className="text-secondary text-4xl tracking-wider">
          Elevate Your Space with Our Design Services
        </p>
        <p className="text-white font-light tracking-wide ">
          At Genius Interio, we offer a wide range of services to meet all your
          interior design needs. Whether it’s a residential, commercial, or
          sustainable project, we ensure each design reflects your unique style
          and enhances the functionality of your space.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4  gap-5 justify-between mt-6">
        {workingAreas.map((area, index) => (
          <div
            key={index}
            className="h-[400px]  relative group overflow-hidden"
          >
            <img
              src={area.image}
              alt={area.title + " Image"}
              className="box-border  border-8 border-transparent group-hover:border-secondary group-hover:opacity-50  transition-all duration-300 ease-in"
            />
            <div className="absolute  w-4/5 left-2/4 translate-x-[-50%] top-[42.5%]  flex">
              <img
                src={area.icon}
                alt={area.title + " Icon"}
                className="icon-bg p-2 max-w-[45px]"
              />
              <div className="bg-white relative px-2 tracking-wide  pb-5 pt-10">
                <img
                  src={addIcon}
                  alt="add"
                  className="bg-secondary p-4 group-hover:pb-16 w-[65px]  group-hover:rounded-br-none group-hover:rounded-bl-none  rounded-full  absolute right-8 bottom-[80%]  scale-75  transition-all duration-300 ease-in"
                />
                <h4 className="text-xl text-nowrap font-medium  my-2">
                  {area.title}
                </h4>
                <p className="text-xs tracking-wider  text-slate-600">
                  {area.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-fit m-auto xl:text-lg">
        <NavLink to={"calculate-approximate-cost"}>
          <Button text="Calculate Your Approximate Cost" arrow="white" />
        </NavLink>
      </div>
    </section>
  );
}
