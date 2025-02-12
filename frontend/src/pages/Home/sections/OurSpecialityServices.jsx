import planningIcon from "/About-Us/planning.svg";
import consultationIcon from "/About-Us/consultation.svg";
import woodworkIcon from "/About-Us/woodwork.svg";
import installationIcon from "/About-Us/installation.svg";

export default function OurSpecialityServices() {
      const specialty = [
        { text: "Designing Construction", icon: planningIcon },
        { text: "Construction Works", icon: consultationIcon },
        { text: "House Renovation", icon: woodworkIcon },
        { text: "Architecture Design", icon: installationIcon },
        // {text:"Furnishing",icon:furnishingIcon},
      ];
  return (
      <section id="home-our-speciality-services" className="w-full bg-secondary p-4 lg:px-16 lg:py-6">
        <div className="relative w-[90%] m-auto  flex flex-col items-center gap-4">
            <h4 className="text-2xl font-semibold">Our Speciality Services</h4>
            
          
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
          <button className="bg-primary rounded-3xl text-white font-medium text-lg py-1 px-3 min-w-[150px]">
              Visit Us
            </button>
        </div>
      </section>
  )
}
