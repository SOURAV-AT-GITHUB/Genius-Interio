import design1 from "/About-Us/design-1.svg";
import slideKitchen from "/About-Us/slide-kitchen.jfif";
import slideBedroom from "/About-Us/slide-bedroom.jfif";
import slideBathroom from "/About-Us/slide-bathroom.jfif";
import { useEffect, useState } from "react";

import planningIcon from '/About-Us/planning.svg'
import consultationIcon from '/About-Us/consultation.svg'
import woodworkIcon from '/About-Us/woodwork.svg'
import installationIcon from '/About-Us/installation.svg'
import furnishingIcon from '/About-Us/furnishing.svg'
import Button from "../../../components/Button";
export default function AboutUs() {
  const imageSlides = [slideKitchen, slideBedroom, slideBathroom];
  const slideTexts = ["Kitchen", "Bedroom", "Bathroom"];
  const steps = [
      {text:"Planning",icon:planningIcon},
      {text:"Consultation",icon:consultationIcon},
      {text:"Woodwork",icon:woodworkIcon},
      {text:"Installation",icon:installationIcon},
      {text:"Furnishing",icon:furnishingIcon},
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if(currentIndex != 2){
        setCurrentIndex(prev=>prev+1)
  }else if(currentIndex ===2){
        setCurrentIndex(0)
  }
    }, 1500);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <section className="flex flex-col lg:flex-row  gap-10 p-3  lg:p-16">
      
      <div className="flex gap-2  lg:gap-6 lg:w-[45%] overflow-hidden ">

      <div className="bg-secondary p-2  sm:p-4 w-2/6  text-white flex flex-col gap-6 justify-center sm:justify-start">
        <img src={design1} alt="square-designs" className="bg-secondary" />
        <p className="text-3xl  sm:text-6xl font-medium justify-self-end">5K+</p>
        <p className="text-lg sm:text-3xl">Successful</p>
        <p className="text-lg sm:text-3xl">Project</p>
        <p className="text-lg sm:text-3xl">Completetion</p>
      </div>

      <div className=" w-4/6">
        {""}
        <div className=" overflow-hidden h-[375px]">
          <div
            className="flex"
            style={{
              width: `${imageSlides.length*100}%`,
              transform: `translateX(-${
                currentIndex * (100 / imageSlides.length)
              }%)`,
              transition: "transform .5s ease-in-out",
            }}
          >
            {imageSlides.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-[375px]"
                width={`${100/imageSlides.length}%`}
              />
            ))}
          </div>
        </div>
        {""}
        <div className="my-5  grid grid-cols-2 text-2xl sm:text-4xl font-medium">
          <p className=" ">Elegaant</p>
          <div className=" bg-secondary text-white text-center h-[60px] flex flex-col  overflow-hidden">
            <div
              className="h-[300%]"
              style={{
                transform: `translateY(-${currentIndex * 33.33}%)`,
                transition: "transform .5s ease-in-out",
              }}
            >
              {slideTexts.map((text, index) => (
                <p key={index} className="h-[60px] flex items-center justify-center">
                  {text}
                </p>
              ))}
            </div>
          </div>
          <p className=" ">Designs</p>
        </div>
      </div>

     </div>
      


      <div className="flex flex-col gap-8 lg:w-[55%]">
        <p className="text-lg font-medium">About Us</p>
        <h4 className="text-4xl  sm:text-[2.75rem] leading-snug  text-secondary">
          Mastering Space, Honouring Vision: We Bring Ideas to Life
        </h4>
        <p>
          At Genius Interio, we specialize in creating personalized, functional,
          and stylish interiors that reflect your unique vision. With a focus on
          innovation and sustainability, our expert team transforms spaces to
          elevate your living experience. We believe in designing more than just
          rooms; we build dreams.
        </p>
        <div className="grid grid-cols-2  sm:grid-cols-3 gap-5 sm:w-4/6 ">
            {steps.map((step,index)=>(
                  <div key={index} className="flex items-center ">
                        <img src={step.icon} alt={step.text} className="scale-75"/>
                        <p>{step.text}</p>
                  </div>
            ))}
        </div>
        <div className="w-fit xl:text-lg">

        <Button text="Start Your Journey"/>
        </div>
      </div>
    </section>
  );
}
