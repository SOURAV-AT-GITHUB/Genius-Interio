import slideKitchen from "/About-Us/slide-kitchen.jfif";
import slideBedroom from "/About-Us/slide-bedroom.jfif";
import planningIcon from '/About-Us/planning.svg'
import consultationIcon from '/About-Us/consultation.svg'
import woodworkIcon from '/About-Us/woodwork.svg'
import installationIcon from '/About-Us/installation.svg'
// import furnishingIcon from '/About-Us/furnishing.svg'
export default function AboutUs() {

  const steps = [
      {text:"3D Space Designing",icon:planningIcon},
      {text:"Architectural Designing",icon:consultationIcon},
      {text:"3D Model building",icon:woodworkIcon},
      {text:"Building The Space",icon:installationIcon},
      // {text:"Furnishing",icon:furnishingIcon},
  ]

  return (
    <section id="home-about-us" className="relative p-4 lg:px-16 lg:pt-12 lg:pb-6  ">
      <div className="w-full lg:w-[90%] m-auto flex flex-col sm:flex-row gap-8 justify-center">
      
    <div className="sm:w-2/4">
      <h4 className="text-3xl lg:text-5xl !leading-snug font-medium  mb-5" >
      Mastering Space, Honouring Vision: We Bring Ideas to Life
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

    <div className="sm:w-2/4 flex flex-col gap-8">
      <p className="text-sm text-primary">
      At Genius Interio, we specialize in creating personalized, functional, and stylish interiors that reflect your unique vision. With a focus on innovation and sustainability, our expert team transforms spaces to elevate your living experience. We believe in designing more than just rooms; we build dreams.
      </p>
      <div className="grid grid-cols-2  gap-10  ">
        {steps.map((step, index) => (
          <div key={index} className="bg-slate-">
            <img
              src={step.icon}
              alt={step.text}
              className="p-2 border border-primary rounded-2xl"
            />
            <p className="text- font-medium">{step.text}</p>
          </div>
        ))}
      </div>

    </div></div>
  </section>
  );
}
