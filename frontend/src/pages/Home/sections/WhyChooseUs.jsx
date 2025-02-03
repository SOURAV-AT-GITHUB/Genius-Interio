import { useEffect, useRef, useState } from "react";
import warrantyIcon from "/WhyChooseUs/warranty.svg";
import guaranteeIcon from "/WhyChooseUs/guarantee.svg";
import qualityChecksIcon from "/WhyChooseUs/qualityChecks.svg";
import happyCustomersIcon from "/WhyChooseUs/happyCustomers.svg";
import catalogueIcon from "/WhyChooseUs/catalogue.svg";
export default function WhyChooseUs() {
  const sliderRef = useRef(null);
  const WhyChooseUs = [
    {
      text: "Flat 10-year warranty",
      icon: warrantyIcon,
    },
    {
      text: "45-day move-in gurantee",
      icon: guaranteeIcon,
    },
    {
      text: "140+ quality checks",
      icon: qualityChecksIcon,
    },
    {
      text: "1200+ happy customers",
      icon: happyCustomersIcon,
    },
    {
      text: "500+ catalogue products",
      icon: catalogueIcon,
    },
  ];
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      setReverse((prev) => !prev);
    }, 5300);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = reverse
        ? "translateX(-25%)"
        : "translateX(20%)";
    }
  }, [reverse]);
  return (
    <section className="my-20  text-center grid gap-4">
      <p className="text-lg font-medium">Why Choose Us</p>
      <h4 className="text-4xl text-accent">What Sets Us Apart ?</h4>
      <p className="m-auto sm:w-2/4 text-lg">
        With innovative designs, personalized solutions, and a commitment to
        quality, we create spaces that reflect your style and elevate your
        living experience.
      </p>
      <div className="overflow-hidden w-full">
        <div
          ref={sliderRef}
          className="flex gap-10 sm:gap-52 my-6 w-[150%] transition-transform duration-[5000ms] ease-linear"
        >
          {WhyChooseUs.map((item, index) => (
            <div key={index} className="grid justify-center gap-6">
              <img src={item.icon} alt={item.text} className="m-auto" />
              <p className="w-4/5 m-auto text-lg text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
