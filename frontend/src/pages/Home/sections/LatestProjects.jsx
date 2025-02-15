import kitchen1 from "/Portfolio/kitchen/kitchen1.jpg";
import kitchen2 from "/Portfolio/kitchen/kitchen2.jpg";
import kitchen3 from "/Portfolio/kitchen/kitchen3.jpeg";
import kitchen4 from "/Portfolio/kitchen/kitchen4.jpg";

import wardrobe1 from "/Portfolio/wardrobe/wardrobe1.jpeg";
import wardrobe2 from "/Portfolio/wardrobe/wardrobe2.jpg";
import wardrobe3 from "/Portfolio/wardrobe/wardrobe3.jpg";
import wardrobe4 from "/Portfolio/wardrobe/wardrobe4.jpg";

import bedroom1 from "/Portfolio/bedroom/bedroom1.jpg";
import bedroom2 from "/Portfolio/bedroom/bedroom2.jpg";
import bedroom3 from "/Portfolio/bedroom/bedroom3.jpg";
import bedroom4 from "/Portfolio/bedroom/bedroom4.jpg";

import { useState } from "react";
export default function LatestProjects() {

  const allProjects = {
    kitchen: [
      {
        title: "Modern Minimalist Kitchen",
        description:
          "A sleek and functional design focused on simplicity, clean lines, and open space for a contemporary kitchen feel.",
        image: kitchen1,
      },
      {
        title: "Elegant L-Shaped Kitchen",
        description:
          "An elegant design maximizing corner space while offering efficiency, perfect for small or medium-sized kitchens with an open feel.",
        image: kitchen2,
      },
      {
        title: "Sleek U-Shaped Kitchen",
        description:
          "A streamlined design with ample storage and workspace, providing a seamless flow for cooking and entertaining in larger kitchens.",
        image: kitchen3,
      },
      {
        title: "Cozy Rustic Kitchen",
        description:
          "Warm, welcoming, and functional with natural materials, ideal for a homely, rustic vibe to inspire comfort and creativity.",
        image: kitchen4,
      },
    ],
    wardrobe: [
      {
        title: "Classic Sliding Door Wardrobe",
        description:
          "A sleek and space-saving wardrobe with smooth sliding doors, perfect for modern bedrooms with a minimalist touch.",
        image: wardrobe1,
      },
      {
        title: "Multifunctional Storage Wardrobe",
        description:
          "Designed for versatility, this wardrobe offers ample storage with shelves, drawers, and hanging space for all essentials.",
        image: wardrobe2,
      },
      {
        title: "Glass Walk-In Closet",
        description:
          "A luxurious walk-in wardrobe with transparent glass panels, offering an elegant and organized storage solution.",
        image: wardrobe3,
      },
      {
        title: "Modern Open Wardrobe",
        description:
          "A stylish open wardrobe with a contemporary design, ideal for easy access and display of clothing and accessories.",
        image: wardrobe4,
      },
    ],
    bedroom: [
      {
        title: "Modern and Minimalist Bedroom",
        description:
          "A sleek bedroom with neutral tones, clean lines, and functional decor, creating a calm and clutter-free space.",
        image: bedroom1,
      },
      {
        title: "Vibrant Classy Bedroom",
        description:
          "A stylish bedroom with bold colors, elegant furnishings, and a touch of luxury for a sophisticated atmosphere.",
        image: bedroom2,
      },
      {
        title: "Bold Japandi-Style Bedroom",
        description:
          "A fusion of Japanese and Scandinavian aesthetics, featuring natural materials, earthy tones, and minimalist design.",
        image: bedroom3,
      },
      {
        title: "Cozy Contemporary Bedroom",
        description:
          "A warm and inviting bedroom with soft textures, modern furniture, and a relaxing ambiance for ultimate comfort.",
        image: bedroom4,
      },
    ],
  };
  const [currentCategory, setCurrentCategory] = useState("kitchen");
  const updateCategory = (category) => {
    if (category === currentCategory) return;
    setCurrentCategory(category);
  };
  return (
    <section
      id="home-latest-projects"
      className="relative  p-4 lg:px-16 lg:pt-6 lg:pb-12"
    >
      <div className="lg:w-[90%] m-auto">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 p-2">
          <h4 className="text-2xl font-semibold">Latest Project</h4>
          <ul className="flex gap-2 items-center ">
            <button
              className={`rounded-2xl p-1 px-2 text-xs sm:text-base ${
                currentCategory === "kitchen" &&
                "bg-primary text-white"
              }`}
              value={"kitchen"}
              onClick={(e) => updateCategory(e.target.value)}
            >
              Kitchen
            </button>
            <button
              className={`rounded-2xl p-1 px-2 text-xs sm:text-base ${
                currentCategory === "wardrobe" &&
                "bg-primary text-white"
              }`}
              value={"wardrobe"}
              onClick={(e) => updateCategory(e.target.value)}
            >
              Wardrobe
            </button>
            <button
              className={`rounded-2xl p-1 px-2 text-xs sm:text-base ${
                currentCategory === "bedroom" &&
                "bg-primary text-white"
              }`}
              value={"bedroom"}
              onClick={(e) => updateCategory(e.target.value)}
            >
              Bedroom
            </button>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row mt-5 gap-2 sm:gap-0 overflow-x-scroll">
          {allProjects[currentCategory].map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 min-h-[250px] max-h-[400px] w-full sm:max-w-[350px] overflow-hidden project-cards group/card "
            >
              <img
                src={project.image}
                alt=""
                className="h-full w-full  object-cover object-center"
                loading="lazy"
              />
              <div className="absolute z-10 w-full p-2 flex flex-col gap-3 text-sm text-white left-[50%] translate-x-[-50%]  -top-3/4 group-hover/card:top-[50%] translate-y-[-50%]  transition-all duration-300 ease-in">
                <p className="text-2xl font-medium">{project.title}</p>
                <p>{project.description}</p>
                <button className="w-fit bg-primary text-lg text-white font-semibold py-1 px-3 rounded-3xl">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
