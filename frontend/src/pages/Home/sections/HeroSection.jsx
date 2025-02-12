import { useEffect, useState } from "react";

import heroSectionImage from "/heroSectionImage.jfif";




// import furnishingIcon from '/About-Us/furnishing.svg'


// import Button from "../../../components/Button";

export default function HeroSection() {
  const slides = [heroSectionImage, heroSectionImage, heroSectionImage];



  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => {
        if (prev < slides.length - 1) return prev + 1;
        else if (prev >= slides.length) return 0;
        else return 0;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home-hero-section" className="relative ">
      <div className="relative w-full  h-full p-4 lg:px-16">
        <div className="relative w-full overflow-hidden h-full rounded-[30px]">
          <div
            style={{
              display: "flex",
              width: `${100 * slides.length}%`,
              height: "100%",
              transform: `translateX(-${100 * (activeSlide / slides.length)}%)`,
              transition: "transform 0.75s ease-in-out",
            }}
          >
            {slides.map((image, index) => (
              <div
                key={index}
                style={{ width: `${100 / slides.length}` }}
                className={`max-h-[65vh] `}
              >
                <img
                  src={image}
                  alt="heroSectionImage"
                  className="h-full object-cover object-center w-full"
                />
              </div>
            ))}
          </div>
        </div>
        <ul className="absolute bg-secondary p-1 px-3 rounded-3xl flex gap-1 z-10 bottom-2 left-2/4 -translate-x-2/4">
          {Array.from({ length: slides.length }).map((_, index) => (
            <div
              key={index}
              className={`w-[12px] h-[12px] rounded-full border border-slate-600 ${
                index === activeSlide && "bg-primary"
              } transition-all duration-[750ms] ease-in-out`}
            ></div>
          ))}
        </ul>
      </div>












    </section>
  );
}
