import testimonialImage1 from "/testimonials/testimonial1.jfif";
import testimonialImage2 from "/testimonials/testimonial2.jfif";
import testimonialImage3 from "/testimonials/testimonial3.jfif";
import starRatings from "/testimonials/stars.svg";
import quotes from "/testimonials/quotes.svg";
import arrowIcon from '/testimonials/arrow.svg'
export default function ClientStories() {
  const testimonials = [
    {
      image: testimonialImage1,
      review:
        "Genius Interio turned our vision into reality! Our home feels like a dream now, with every corner reflecting our personality. The team was professional, creative, and attentive to every detail.",
      author: "Ananya S.",
      authorType: "Homeowner",
    },
    {
      image: testimonialImage2,
      review:
        "Working with Genius Interio was a seamless experience. They perfectly balanced functionality and aesthetics in our living room design. We couldn’t be happier with the result!",
      author: "Megha & Kunal P.",
      authorType: "Business Owner",

    },
    {
      image: testimonialImage3,
      review:
        "The Genius Interio team exceeded our expectations! From the initial consultation to the final execution, they delivered a stunning design that’s both practical and elegant.",
      author: "Priya R.",
      authorType: "Renovation Project",

    },
  ];



  return (
    <section className="p-3 lg:p-16 grid gap-6">
      <div className="flex flex-col md:flex-row gap-4  justify-between">

      
      <div className="flex flex-col gap-6 ">
        <p className="font-medium text-lg">Client Stories</p>
        <h4 className="text-3xl  md:text-5xl text-accent">What Out Clients Say</h4>
        <p className="md:w-2/4 text-lg tracking-wider ">
          Discover what our clients have to say about their transformed spaces
          and how we brought their dreams to life.
        </p>
      </div>
      <div className="flex   gap-5">
        <button><img src={arrowIcon} alt="arrow" className="rotate-180 border border-primary  p-4 py-5"/></button>
        <button><img src={arrowIcon} alt="arrow" className="bg-primary  p-4 py-5"/></button>
      </div>
      </div>
      <div className="flex flex-col md:flex-row  gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group  relative grid pl-10 pt-10"

          >
            <div className=" z-10  w-[175px] h-[150px] absolute top-0 left-0">
              <img
                src={quotes}
                alt="quotes"
                className={`absolute ml-14 bottom-0 top-32 group-hover:top-0  transition-all duration-300 ease-linear`}
              />
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className={`transform scale-x-[-1] absolute top-0 w-3/5 h-3/5 group-hover:h-full group-hover:w-full "
                 transition-all duration-300 ease-linear`}
              />
            </div>
            <div className={`bg-secondary p-6 mt-10 testimonial-border group-hover:before:h-full group-hover:before:w-full group-hover:before:top-[7px] group-hover:before:left-[7px]`}>
              <img
                src={starRatings}
                alt="starRatings"
                className={`justify-self-end`}
              />
              <div className="mt-16">
                <p>{testimonial.review}</p>
                <div className="mt-8 border-l-2 border-black p-2">
                  <div className="flex items-center gap-1">
                  <div className={`w-0 h-0 group-hover:w-[15px] group-hover:h-[1.5px] group-hover:bg-black  transition-all duration-300 ease-linear`}></div>
                  <p className="font-medium">  {testimonial.author}</p>
                  </div>
                  <p>{testimonial.authorType}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
