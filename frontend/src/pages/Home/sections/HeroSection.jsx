import { useEffect, useState } from "react";
import image1 from "/HeroSection/img1.jpg"
import image2 from "/HeroSection/img2.jpg"
import image3 from "/HeroSection/img3.jpg"
import image4 from "/HeroSection/img4.jpg"
export default function HeroSection() {

  const slides = [
    {
      title: "Home to beautiful interiors",
      image: image1,
      button: "BOOK FREE CONSULTATION",
      href: "#home-get-in-touch",
    },
    {
      title: "Want to know how much your kitchen interiors will cost?",
      image: image2,
      button: "CALCULATE NOW",
      href: "/calculate-approximate-cost",
    },
    {
      title: "Came to say hi to beautiful interiors",
      image: image3,
      button: "VISIT US",
      href: "#home-get-in-touch",
    },
    {
      title: "Transform Your Space with Stunning Interiors",
      image: image4,
      button: "",
      href: null,
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveSlide((prev) => {
          if (prev < slides.length - 1) return prev + 1;
          else if (prev >= slides.length) return 0;
          else return 0;
        });
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isPaused]);
  return (
    <section id="home-hero-section" className="relative ">
      <div className="relative w-full  h-full p-4 lg:px-16">
        <div className="relative w-full overflow-hidden h-full rounded-[30px]">
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              display: "flex",
              width: `${100 * slides.length}%`,
              height: "100%",
              transform: `translateX(-${100 * (activeSlide / slides.length)}%)`,
              transition: "transform 0.75s ease-in-out",
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                style={{ width: `${100 / slides.length}%` }}
                className={`max-h-[65vh] relative`}
              >
                <img
                  src={slide.image}
                  alt="heroSectionImage"
                  className="h-full object-cover object-center w-full"
                  loading="lazy"
                />
                <div className="absolute  bottom-12 left-2/4 -translate-x-2/4 min-h-[35%] w-full overflow-hidden flex flex-col gap-4 justify-between items-center text-white text-center">
                  <p className="bg-[#00000075] p-2 rounded-md text-xl sm:text-3xl md:text-5xl font-semibold shadow-2xl">
                    {slide.title}
                  </p>
                  {slide.href && (
                    <a
                      href={slide.href}
                      className="bg-primary w-fit min-w-[150px] p-2 sm:p-3 sm:px-5 rounded-full text-sm sm:text-lg"
                    >
                      {slide.button}
                    </a>
                  )}
                </div>
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
