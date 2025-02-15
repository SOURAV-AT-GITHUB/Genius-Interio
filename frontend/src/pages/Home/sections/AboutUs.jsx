import planningIcon from '/About-Us/planning.svg'
import consultationIcon from '/About-Us/consultation.svg'
import woodworkIcon from '/About-Us/woodwork.svg'
import installationIcon from '/About-Us/installation.svg'
export default function AboutUs() {
const image1 = "/About-Us/img1.JPG"
const image2 = "/About-Us/img2.JPG"
  const steps = [
      {text:"3D Space Designing",icon:planningIcon},
      {text:"Architectural Designing",icon:consultationIcon},
      {text:"3D Model building",icon:woodworkIcon},
      {text:"Building The Space",icon:installationIcon},

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
          src={image1}
          alt="bedroom-image"
          className="max-h-[350px] w-[70%] rounded-[20px] object-cover object-center"
        />
        <img
          src={image2}
          alt="kitchen-image"
          className="absolute h-[70%] max-h-[250px] w-[45%] pl-2 pt-2 bg-white right-0 bottom-0  rounded-[20px] object-cover object-center"
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
