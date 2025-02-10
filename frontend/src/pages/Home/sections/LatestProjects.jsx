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
  const allImages = {
    kitchen: [kitchen1, kitchen2, kitchen3, kitchen4],
    wardrobe: [wardrobe1, wardrobe2, wardrobe3, wardrobe4],
    bedroom: [bedroom1, bedroom2, bedroom3, bedroom4],
  };
  const [currentCategory, setCurrentCategory] = useState({
    category: "kitchen",
    images: [...allImages.kitchen],
  });
  const updateCategory = (category) => {
    if (category === currentCategory.category) return
    setCurrentCategory({ category, images:allImages[category] });
  };
  return (
    <section
      id="home-latest-projects"
      className="relative  p-3 lg:p-16 lg:pt-3"
    >
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 p-2">
        <h4 className="text-2xl font-semibold">Latest Project</h4>
        <ul className="flex gap-2 items-center ">
          <button
            className={`rounded-2xl p-1 px-2 text-xs sm:text-base ${
              currentCategory.category === "kitchen" && "bg-primary text-white"
            }`}
            value={"kitchen"}
            onClick={(e)=>updateCategory(e.target.value)}
          >
            Kitchen
          </button>
          <button
            className={`rounded-2xl p-1 px-2 text-xs sm:text-base ${
              currentCategory.category === "wardrobe" && "bg-primary text-white"
            }`}
            value={"wardrobe"}
            onClick={(e)=>updateCategory(e.target.value)}
          >
            Wardrobe
          </button>
          <button
            className={`rounded-2xl p-1 px-2 text-xs sm:text-base ${
              currentCategory.category === "bedroom" && "bg-primary text-white"
            }`}
            value={"bedroom"}
            onClick={(e)=>updateCategory(e.target.value)}
          >
            Bedroom
          </button>
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row mt-5 gap-2 sm:gap-0 overflow-x-scroll">
        {currentCategory.images.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 min-h-[250px] max-h-[400px] w-full sm:max-w-[350px] overflow-hidden project-cards group/card "
          >
            <img
              src={image}
              alt=""
              className="h-full w-full  object-cover object-center"
              loading="lazy"
            />
            <div className="absolute z-10 w-full p-2 flex flex-col gap-3 text-sm text-white left-[50%] translate-x-[-50%]  -top-3/4 group-hover/card:top-[50%] translate-y-[-50%]  transition-all duration-300 ease-in">
              <p className="text-2xl font-medium">Most Loved {currentCategory.category} Creations</p>
              <p>Explore our most loved {currentCategory.category} designs, blending functionality and style to create the heart of your home.</p>
              <button className="w-fit bg-primary text-lg text-white font-semibold py-1 px-3 rounded-3xl">
                Get Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
