import kitchen1 from "/Portfolio/kitchen1.jfif";
import kitchen2 from "/Portfolio/kitchen2.jfif";
import kitchen3 from "/Portfolio/kitchen3.jfif";
import slideKitchen from "/About-Us/slide-kitchen.jfif";
export default function LatestProjects() {
      const projects = {
        title: "Most Loved Kitchen Creations",
        description:
          "Explore our most loved kitchen designs, blending functionality and style to create the heart of your home.",
    
        images: [kitchen1, kitchen2, kitchen3, slideKitchen],
      };
  return (
    <section id="home-latest-projects" className="relative  md:w-10/12  m-auto mt-10 lg:mt-20">
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 p-2">
      <h4 className="text-2xl font-semibold">Latest Project</h4>
      <ul className="flex gap-2 items-center ">
        <button className="rounded-2xl p-1 px-2 text-xs sm:text-base bg-primary text-white">
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
            <button className="w-fit bg-primary text-lg text-white font-semibold py-1 px-3 rounded-3xl">
              Get Quote
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}
