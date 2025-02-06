import slideKitchen from "/About-Us/slide-kitchen.jfif";
import slideBedroom from "/About-Us/slide-bedroom.jfif";
import planningIcon from '/About-Us/planning.svg'
import consultationIcon from '/About-Us/consultation.svg'
import woodworkIcon from '/About-Us/woodwork.svg'
import installationIcon from '/About-Us/installation.svg'
import furnishingIcon from '/About-Us/furnishing.svg'
export default function AboutUs() {

  const steps = [
      {text:"Planning",icon:planningIcon},
      {text:"Consultation",icon:consultationIcon},
      {text:"Woodwork",icon:woodworkIcon},
      {text:"Installation",icon:installationIcon},
      {text:"Furnishing",icon:furnishingIcon},
  ]

  return (
    <section id="home-about-us" className="relative p-2 md:w-10/12 m-auto mt-10 lg:mt-20 flex flex-col sm:flex-row gap-8 justify-center ">
    <div className="sm:w-2/4">
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

    <div className="sm:w-2/4 flex flex-col gap-4">
      <p className="text-sm text-primary">
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
              className="p-2 border border-primary rounded-2xl"
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
  </section>
  );
}
