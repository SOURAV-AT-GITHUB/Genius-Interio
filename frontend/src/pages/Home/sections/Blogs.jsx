import slideKitchen from "/About-Us/slide-kitchen.jfif";
import slideBedroom from "/About-Us/slide-bedroom.jfif";
import kitchen1 from "/Portfolio/kitchen1.jfif";
import kitchen2 from "/Portfolio/kitchen2.jfif";
// import kitchen3 from "/Portfolio/kitchen3.jfif";
export default function Blogs() {
  const blogs = [
    {
      image: kitchen1,
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Illum minima, aut officiis ipsa voluptates, unde possimus quisquamasperiores.",
    },
    {
      image: slideKitchen,
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Illum minima, aut officiis ipsa voluptates, unde possimus quisquamasperiores.",
    },
    {
      image: kitchen2,
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Illum minima, aut officiis ipsa voluptates, unde possimus quisquamasperiores.",
    },
    {
      image: slideBedroom,
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Illum minima, aut officiis ipsa voluptates, unde possimus quisquamasperiores.",
    },
  ];
  return (
    <section className=" p-3 lg:px-16 lg:py-8 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
            <h4 className="text-3xl font-semibold">Blogs</h4>
            <button className="text-lg px-3 bg-secondary text-white rounded-2xl">See More</button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-between">
      {blogs.map((blog, index) => (
        <div key={index} className="relative h-[350px]  overflow-hidden">
          <img
            src={blog.image}
            alt=""
            className="h-3/4 w-full object-cover object-center rounded-2xl"
          />
          <div className="absolute bottom-10 left-2/4 -translate-x-2/4 bg-white rounded-xl h-1/4 w-11/12 p-2">
            <h4 className="bg-darkBrown text-white px-2 rounded-3xl w-fit">
              Title {index + 1}
            </h4>
            <h4>{blog.title}</h4>
            <p>{blog.description}</p>
          </div>
        </div>
      ))}</div>
    </section>
  );
}
