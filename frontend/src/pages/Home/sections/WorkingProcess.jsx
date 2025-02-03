import { useEffect, useState } from "react";
import image1 from "/Working-Process/image1.jfif";
import image2 from "/Working-Process/image2.jfif";
import image3 from "/Working-Process/image3.jfif";
import image4 from "/Working-Process/image4.jfif";
import Button from "../../../components/Button";
export default function WorkingProcess() {
  const images = [image1, image2, image3, image4];
  const workingProcess = [
    {
      title: "Schedule a Meeting",
      description:
        "Start your journey by scheduling a consultation with our design experts. Share your vision, ideas, and requirements to kick off the process.",
    },
    {
      title: "3D Model",
      description:
        "Visualize your dream space with our detailed 3D models, allowing you to see and refine the design before moving forward.",
    },
    {
      title: "Execute with Precision",
      description:
        "Once the design is finalized, our skilled team manages the implementation, ensuring every element is executed to perfection.",
    },
    {
      title: "Deliver & Transform",
      description:
        "Your dream space is delivered, ready to enhance your lifestyle. We ensure your complete satisfaction with a seamless handover.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass,setFadeClass] = useState('opacity-100')

  useEffect(() => {
    let timeout
    const interval = setInterval(() => {
      setFadeClass('opacity-80')
    timeout =  setTimeout(()=>{
        setCurrentIndex((prev) => {
          if (prev <=2) {
            return prev + 1;
          } else if (prev >= 3) {
            return 0;
          }
        });
        setFadeClass("opacity-100")
      },500)
    }, 1500);
    return () => {clearInterval(interval)
      clearTimeout(timeout)
    };
  }, [currentIndex]);

  return (
    <section className="p-3 lg:p-16 dark-background-image text-white">
      <div className="text-center w-3/4 m-auto flex flex-col gap-4">
        <p>Working Process</p>
        <p className="text-4xl text-secondary">Our Seamless Design Process</p>
        <p className="text-sm tracking-wider">
          From consultation to completion, our step-by-step process ensures a
          smooth and stress-free journey to your dream space. Discover how we
          bring your vision to life with precision and care.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row  gap-8  mt-8">

        <div className="md:w-2/5 md:h-[400px] overflow-hidden">
          <div
            className="w-[400%] flex"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
              transition: "transform .5s ease-in-out",
            }}
          >
            {images.map((image, index) => (
              <img
                className=" h-[400px]"
                width={`${100/images.length}%`}
                key={index}
                src={image}
                alt={"image" + index}
              />
            ))}
          </div>
        </div>


          <div className="md:w-3/5   md:p-12 pr-0  flex flex-col gap-10">
            <div className="md:w-9/12  flex justify-between">
            {Array.from({length:4}).map((_,index)=>(
              <div key={index} className={`fade-indicator ${index === currentIndex && "active"}`}>{index+1}</div>
            ))}
            </div>
            <div className="flex flex-col gap-5">
              <p className={`transition-opacity duration-500 ${fadeClass}  text-xl text-secondary`}>{workingProcess[currentIndex]?.title || "Error"}</p>
              <p className={`transition-opacity duration-500 ${fadeClass} tracking-widest text-sm font-light`}>{workingProcess[currentIndex]?.description || "Error"}</p>
            </div>
            <div className="w-fit text-black xl:text-lg">

          <Button text="Book an Appoinment" arrow="white"/>
            </div>
          </div>
      </div>
    </section>
  );
}
