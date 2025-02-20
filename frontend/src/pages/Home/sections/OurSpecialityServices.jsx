import planningIcon from "/About-Us/planning.svg";
import consultationIcon from "/About-Us/consultation.svg";
import woodworkIcon from "/About-Us/woodwork.svg";
import installationIcon from "/About-Us/installation.svg";

export default function OurSpecialityServices() {
  const specialty = [
    { text: "Designing Construction", description: "Transforming ideas into reality with innovative and sustainable construction design solutions tailored to your needs.", icon: planningIcon },
    { text: "Construction Works", description: "Expert craftsmanship and precision in every step, ensuring quality construction for both residential and commercial projects", icon: consultationIcon },
    { text: "House Renovation", description: "Breathing new life into your home with creative renovations that enhance style, function, and comfort.", icon: woodworkIcon },
    { text: "Architecture Design", description: "Creating timeless, functional, and aesthetically pleasing architectural designs that reflect your unique vision.", icon: installationIcon },
    // {text:"Furnishing",icon:furnishingIcon},
  ];
  return (
    <section
      id="home-our-speciality-services"
      className="w-full bg-secondary p-4 lg:px-16 lg:py-6"
    >
      <div className="relative w-[90%] m-auto  flex flex-col items-center gap-4">
        <h4 className="text-2xl font-semibold">Our Speciality Services</h4>

        <div className="flex flex-col sm:flex-row  mt-5 gap-4">
          {specialty.map((item, index) => (
            <div
              key={index}
              className="p-2 py-6 rounded-3xl flex flex-col gap-1 bg-white items-center text-center"
            >
              <img src={item.icon} alt={item.text} className="max-h-[150px]" />
              <p className="font-semibold text-lg">{item.text}</p>
              <p>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <button className="bg-primary rounded-3xl text-white font-medium text-lg py-1 px-3 min-w-[150px]">
          Visit Us
        </button>
      </div>
    </section>
  );
}
