import { useEffect, useState } from "react";

import heroSectionImage from "/heroSectionImage.jfif";

import slideKitchen from "/About-Us/slide-kitchen.jfif";
import slideBedroom from "/About-Us/slide-bedroom.jfif";

import planningIcon from "/About-Us/planning.svg";
import consultationIcon from "/About-Us/consultation.svg";
import woodworkIcon from "/About-Us/woodwork.svg";
import installationIcon from "/About-Us/installation.svg";
// import furnishingIcon from '/About-Us/furnishing.svg'

import kitchen1 from "/Portfolio/kitchen1.jfif";
import kitchen2 from "/Portfolio/kitchen2.jfif";
import kitchen3 from "/Portfolio/kitchen3.jfif";
// import Button from "../../../components/Button";
import treePot from '/tree-pot.svg'
import chair from '/chair.svg'
export default function HeroSection() {
  const slides = [heroSectionImage, heroSectionImage, heroSectionImage];
  const steps = [
    { text: "3D Space Designing", icon: planningIcon },
    { text: "Architectural Drawing", icon: consultationIcon },
    { text: "3D Model building", icon: woodworkIcon },
    { text: "Building The Space", icon: installationIcon },
    // {text:"Furnishing",icon:furnishingIcon},
  ];
  const specialty = [
    { text: "Designing Construction", icon: planningIcon },
    { text: "Construction Works", icon: consultationIcon },
    { text: "House Renovation", icon: woodworkIcon },
    { text: "Architecture Design", icon: installationIcon },
    // {text:"Furnishing",icon:furnishingIcon},
  ];
  const projects = {
    title: "Most Loved Kitchen Creations",
    description:
      "Explore our most loved kitchen designs, blending functionality and style to create the heart of your home.",

    images: [kitchen1, kitchen2, kitchen3, slideKitchen],
  };

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
      <div className="relative w-full  h-full px-3 lg:px-16 ">
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
        <ul className="absolute bg-secondary p-1 px-3 rounded-3xl flex gap-1 z-10 -bottom-3 left-2/4 -translate-x-2/4">
          {Array.from({ length: slides.length }).map((_, index) => (
            <div
              key={index}
              className={`w-[12px] h-[12px] rounded-full border border-slate-600 ${
                index === activeSlide && "bg-darkBrown"
              } transition-all duration-1000 ease-in-out`}
            ></div>
          ))}
        </ul>
      </div>

      <div className="relative p-2 md:w-10/12 m-auto mt-20 md:flex gap-8 justify-center ">
        <div className="md:w-2/4">
          <h4 className="text-3xl lg:text-5xl leading-snug font-semibold py-1 mb-3">
            We are creative Interior and architech - Design company
          </h4>
          <div className="relative min-h-[400px]">
            <img
              src={slideBedroom}
              alt="bedroom-image"
              className="max-h-[350px] h-[70%] rounded-[20px]"
            />
            <img
              src={slideKitchen}
              alt="kitchen-image"
              className="absolute h-[70%] pl-2 pt-2 bg-white right-0 bottom-0 max-h-[225px] rounded-[20px] ab"
            />
          </div>
        </div>

        <div className="md:w-2/4 flex flex-col gap-4">
          <p className="text-sm text-secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            minima, aut officiis ipsa voluptates, unde possimus quisquam
            asperiores odio pariatur voluptatibus hic nihil suscipit, expedita
            enim dolore vero. Facilis, quibusdam! Rem eaque, consequuntur est
            provident quia asperiores, distinctio blanditiis cum ut, quaerat
            saepe veniam exercitationem. Quaerat error id nihil nulla, ad
            consequuntur similique deserunt, voluptatem, vitae cum nam doloribus
            sapiente?
          </p>
          <div className="grid grid-cols-2  gap-5  ">
            {steps.map((step, index) => (
              <div key={index} className="bg-slate-">
                <img
                  src={step.icon}
                  alt={step.text}
                  className="p-2 border border-secondary rounded-2xl"
                />
                <p className="text- font-medium">{step.text}</p>
              </div>
            ))}
          </div>
          <ul className="list-disc list-inside">
            <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Facilis, quibusdam!</li>
          </ul>
        </div>
      </div>

      <div className="relative  md:w-10/12  m-auto mt-20">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 p-2">
          <h4 className="text-2xl font-semibold">Latest Project</h4>
          <ul className="flex gap-2 items-center ">
            <button className="rounded-2xl p-1 px-2 text-xs sm:text-base bg-secondary text-white">
              Category 1
            </button>
            <button className="rounded-2xl p-1 px-2 text-xs sm:text-base ">Category 2</button>
            <button className="rounded-2xl p-1 px-2 text-xs sm:text-base ">Category 3</button>
            <button className="rounded-2xl p-1 px-2 text-xs sm:text-base ">Category 4</button>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 mt-5 gap-2 sm:gap-0">
          {projects.images.map((image, index) => (
            <div
              key={index}
              className="relative min-h-[250px] max-h-[300px] overflow-hidden project-cards group/card "
            >
              <img
                src={image}
                alt=""
                className="h-full w-full  object-cover object-center"
              />
              <div className="absolute z-10 w-full p-2 flex flex-col gap-3 text-sm text-white left-[50%] translate-x-[-50%]  -top-3/4 group-hover/card:top-[50%] translate-y-[-50%]  transition-all duration-300 ease-in">
                <p className="text-2xl font-medium">{projects.title}</p>
                <p>{projects.description}</p>
                <button className="w-fit bg-secondary text-lg text-white font-semibold py-1 px-3 rounded-3xl">
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-secondary mt-20 p-3 lg:py-6">
        <div className="relative m-auto md:w-10/12 ">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-semibold">Our Speciality Services</h4>
            <button className="bg-darkBrown rounded-3xl text-white font-medium text-lg py-1 px-3">
              Visit Us
            </button>
          </div>
          <div className="flex flex-col sm:flex-row  mt-5 gap-4">
            {specialty.map((item, index) => (
              <div
                key={index}
                className="p-2 py-6 rounded-3xl flex flex-col gap-1 bg-white items-center text-center"
              >
                <img
                  src={item.icon}
                  alt={item.text}
                  className="max-h-[150px]"
                />
                <p className="font-semibold text-lg">{item.text}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  delectus praesentium laboriosam dicta temporibus!{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    <div className="relative p-3  lg:p-16 dark-background-image text-center flex flex-col gap-8 ">
      <h4 className="text-secondary text-2xl  lg:text-4xl">Lorem ipsum dolor sit amet </h4>
      <p className="text-white lg:text-2xl tracking-wider">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore accusamus </p>
      <img src={treePot} alt="tree-pot" className='absolute h-3/6  lg:h-5/6 left-0 bottom-0'/>
      <img src={chair} alt="chair" className='absolute h-3/6  lg:h-5/6 right-0 bottom-0'/>
    </div>

      <div className="relative">
        <video
          autoPlay
          muted
          loop
          className="w-full h-[450px] object-cover"
          poster="https://static.vecteezy.com/system/resources/thumbnails/040/567/392/large/ai-generated-luxury-living-room-with-swimming-pool-view-from-the-terrace-interior-inviting-retreat-contemporary-residence-luxury-villa-with-large-swimming-pool-ai-generated-free-video.jpg"
          data-video-player-target="player"
          data-poster="https://static.vecteezy.com/system/resources/thumbnails/040/567/392/large/ai-generated-luxury-living-room-with-swimming-pool-view-from-the-terrace-interior-inviting-retreat-contemporary-residence-luxury-villa-with-large-swimming-pool-ai-generated-free-video.jpg"
        >
          <source
            src="https://static.vecteezy.com/system/resources/previews/040/567/392/mp4/ai-generated-luxury-living-room-with-swimming-pool-view-from-the-terrace-interior-inviting-retreat-contemporary-residence-luxury-villa-with-large-swimming-pool-ai-generated-free-video.mp4"
            type="video/mp4"
          />
          <source
            src="https://static.vecteezy.com/system/resources/previews/040/567/392/ai-generated-luxury-living-room-with-swimming-pool-view-from-the-terrace-interior-inviting-retreat-contemporary-residence-luxury-villa-with-large-swimming-pool-ai-generated-free-video.webm"
            type="video/webm"
          />
        </video>
        <div className="flex items-center justify-between relative m-auto md:w-10/12 text-center p-3 lg:py-10">
          <div>
            <h4 className="md:text-3xl lg:text-5xl font-semibold">21K+</h4>
            <p className="text-sm">Complete Projects</p>
          </div>
          <div>
            <h4 className="md:text-3xl lg:text-5xl font-semibold">31+</h4>
            <p className="text-sm">Award Wins</p>
          </div>
          <div>
            <h4 className="md:text-3xl lg:text-5xl font-semibold">60+</h4>
            <p className="text-sm">Team Members</p>
          </div>
          <div>
            <h4 className="md:text-3xl lg:text-5xl font-semibold">10+</h4>
            <p className="text-sm">Years of Experience</p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div></div>
      </div>
    </section>
  );
}
