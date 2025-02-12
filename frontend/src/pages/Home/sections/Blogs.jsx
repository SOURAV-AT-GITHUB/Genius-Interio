import slideKitchen from "/About-Us/slide-kitchen.jfif";
import slideBedroom from "/About-Us/slide-bedroom.jfif";
import kitchen1 from "/Portfolio/kitchen1.jfif";
import kitchen2 from "/Portfolio/kitchen2.jfif";
// import kitchen3 from "/Portfolio/kitchen3.jfif";
export default function Blogs() {
  const blogs = [
    {
      image: kitchen1,
      heading: "Maximize Space",
      title: "Small Space Solutions",
      description:"Discover clever design tricks and multifunctional furniture to maximize space without sacrificing style. Create a functional, beautiful home, even in small areas."
    },
    {
      image: slideKitchen,
      heading: "Eco Interiors",
      title: "Sustainable Design Trends",
      description:"Incorporate sustainable materials and eco-conscious practices into your home. Create a stylish, environmentally friendly space with modern, green design choices."
    },
    {
      image: kitchen2,
      heading: "Texture Play",
      title: "Layering Textures Effectively",
      description:"Learn how to layer textures to create warmth and visual interest. Combine textiles, wood, and metal for a cozy, inviting atmosphere."
    },
    {
      image: slideBedroom,
      heading: "Color Psychology",
      title: "Color for Mood",
      description:"Use color to influence the mood of your space. Choose calming hues or energizing shades to create the perfect ambiance for any room."
    },
  ];
  return (
    <section
      id="home-blogs"
      className="  p-4 lg:px-16 lg:py-12 "
    >
      <div className="w-[90%] m-auto  overflow-hidden flex flex-col gap-5 items-center">
      <h4 className="text-3xl font-semibold">Blogs</h4>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-between">
        {blogs.map((blog, index) => (
          <div key={index} className="relative h-[400px] overflow-hidden ">
            <img
              src={blog.image}
              alt=""
              className="h-3/4 w-full object-cover object-center rounded-2xl"
            />
            <div className="absolute -bottom-5 left-2/4 -translate-x-2/4 bg-white rounded-xl h-3/6 w-11/12 p-2 min-h-fit border flex flex-col gap-1">
              <h4 className="bg-primary text-white px-2 rounded-3xl w-fit">
                {blog.heading}
              </h4>
              <h4 className="font-semibold">{blog.title}</h4>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="text-lg px-3 text-white bg-primary rounded-2xl">
        See More
      </button></div>
    </section>
  );
}
