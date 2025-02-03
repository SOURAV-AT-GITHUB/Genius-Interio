import kitchen1 from "/Portfolio/kitchen1.jfif";
import kitchen2 from "/Portfolio/kitchen2.jfif";
import kitchen3 from "/Portfolio/kitchen3.jfif";
import bedroom1 from "/Portfolio/bedroom1.jfif";
import bedroom2 from "/Portfolio/bedroom2.jfif";
import bedroom3 from "/Portfolio/bedroom3.jfif";
import storage1 from "/Portfolio/storage1.jfif";
import storage2 from "/Portfolio/storage2.jfif";
import storage3 from "/Portfolio/storage3.jfif";
import Button from "../../../components/Button";


export default function Portfolio() {
  const portfolio = [
    [
      {
        title: "Most Loved Kitchen Creations",
        description:
          "Explore our most loved kitchen designs, blending functionality and style to create the heart of your home.",
      },
      kitchen1,
      kitchen2,
      kitchen3,
    ],
    [
      {
        title: "Dream Bedrooms Crafted for Comfort",
        description:
          "Discover bedrooms crafted for comfort and style, creating a serene retreat tailored to your needs.",
      },
      bedroom1,
      bedroom2,
      bedroom3,
    ],
    [
      {
        title: "Stylish Storage Solutions",
        description:
          "Discover stylish wardrobes that combine elegance and functionality, perfectly tailored to your storage needs.",
      },
      storage1,
      storage2,
      storage3,
    ],
  ];
  return (
    <section className="p-3 lg:p-16">
      <div className="sm:w-2/4 flex flex-col gap-3">
        <p className="text-lg font-medium">Portfolio</p>
        <h4 className="text-4xl text-secondary">Spaces We Have Transformed</h4>
        <p>
          Take a look at our diverse range of projects, showcasing our expertise
          in creating beautiful, tailored interiors.
        </p>
      </div>
      <div>
        {portfolio.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-1  md:grid-cols-4 gap-4  md:gap-8 items-center sm:max-h-[300px] my-10"
          >
            {row.map((element, index) => (
              <div
                key={index}
                className={`${index!==0 && 'portfolio-cards'}  relative group/card  h-full max-h-[300px] overflow-hidden`}
              >
                {index === 0 ? (
                  <div className="flex flex-col justify-center gap-2  h-full">
                    <p className="text-xl sm:text-base  font-medium">{element.title}</p>
                    <p className="md:text-sm">{element.description}</p>
                  </div>
                ) : (
                  <img
                    src={element}
                    alt={row[0].title + index}
                    className="h-full w-full  object-cover scale-125"
                  />
                )}
                {index !== 0 && (
                  <div className=" z-10  text-sm absolute left-[50%] translate-x-[-50%]  -top-20 group-hover/card:top-[50%] translate-y-[-50%]  transition-all duration-300 ease-in">
                    <Button text="Get Quote" arrow="white"/>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
