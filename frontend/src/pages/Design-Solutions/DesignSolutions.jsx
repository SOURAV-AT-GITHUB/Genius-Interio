const dummyData = {
  title: "Modular Kitchen Designs",
  description:
    "We craft simple modular kitchen designs that are the perfect blend of functionality and style. Our curated, modular kitchen designs in India range from simple kitchens with minimal interiors to more elaborately designed kitchen interior designs. All our modern kitchen design ideas can be customised to fit your budget and existing space. We also have kitchen interior designs that work for all shapes: Be it a L-shaped kitchen, U-shaped kitchen or open kitchen design - crafting a kitchen interior design that works best for your home is our goal! Browse through our top kitchen designs to transform your space today.",
  images: [
    {
      title: "Contemporary Open Kitchen Design with Granite Countertop",
      size: "18x13 feet",
      image:
        "https://images.livspace-cdn.com/w:2048/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2024-1727950725-vfT46/kitchen-1727950741-6eo3Q/ki-12-1730175685-4Y2X6.jpg",
    },
    {
      title: "Modern L-Shaped Kitchen Design in Slate and Yellow Colour",
      size: "12x10 feet",
      image:
        "https://images.livspace-cdn.com/w:1080/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2024-1727950725-vfT46/kitchen-1727950741-6eo3Q/ki-11-1730175677-aE57r.jpg",
    },
    {
      title:
        "Modern Open Kitchen Design with Red Units and Champagne Wall Cabinets",
      size: "15x9 feet",
      image:
        "https://images.livspace-cdn.com/w:1080/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2024-1727950725-vfT46/kitchen-1727950741-6eo3Q/ki-9-1730175656-BzGbZ.jpg",
    },
    {
      title: "Modern Open Kitchen Design with Quartz Countertop",
      size: "12x9 feet",
      image:
        "https://images.livspace-cdn.com/w:1080/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2024-1727950725-vfT46/kitchen-1727950741-6eo3Q/ki-7-1730175619-pfN6N.jpg",
    },
    {
      title:
        "Stylish L-Shaped Kitchen Design with Yellow Accents and Corian Countertops",
      size: "18x15 feet",
      image:
        "https://images.livspace-cdn.com/w:1080/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2024-1727950725-vfT46/kitchen-1727950741-6eo3Q/ki-6-1730175611-0F8AS.jpg",
    },
    {
      title:
        "Contemporary L-Shaped Kitchen Design with Mid Tall Unit and Cabinets",
      size: "18x15 feet",
      image:
        "https://images.livspace-cdn.com/w:1080/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2024-1727950725-vfT46/kitchen-1727950741-6eo3Q/ki-4-1730175583-fX2z0.jpg",
    },
    {
      title: "Contemporary Parallel Kitchen Design with Teak and Slate Units",
      size: "16x7 feet",
      image:
        "https://images.livspace-cdn.com/w:1080/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2024-1727950725-vfT46/kitchen-1727950741-6eo3Q/ki-2-1730175564-6ciZn.jpg",
    },
    {
      title: "Modern Open Kitchen Design with White Units and Yellow Accents",
      size: "12x9 feet",
      image:
        "https://images.livspace-cdn.com/w:1080/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2024-1727950725-vfT46/kitchen-1727950741-6eo3Q/ki-1-1730175554-MSLPY.jpg",
    },
    {
      title:
        "Contemporary U-Shaped Kitchen Design with Grey, Glass, and White Units",
      size: "18x20 feet",
      image:
        "https://images.livspace-cdn.com/w:1080/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2024-1727950725-vfT46/kitchen-1727950741-6eo3Q/6-1-1728371014-lJ5Eb.jpg",
    },
    {
      title:
        "Bronze and White Traditional L-Shaped Kitchen Design in Suede Finish",
      size: "14x16 feet",
      image:
        "https://images.livspace-cdn.com/w:1080/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2024-1727950725-vfT46/kitchen-1727950741-6eo3Q/kitchen1-2-1728370772-vqPup.jpg",
    },
  ],
};
import { useEffect, useState,useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from "../../components/Button";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export default function DesignSolutions() {
  const slideNavItems = [
    "Kitchen",
    "Master Bedroom",
    "Living room",
    "Bathroom",
    "Homes by Genius Interio",
    "Wardrobe",
    "Study Room Designs",
    "Kid's Bedroom",
    "TV Unit Designs",
    "Pooja Room",
    "False Ceiling Designs",
    "Space Saving Designs",
    "Dining Room",
    "Foyer",
    "Guest Bedroom",
    "Home Office",
    "Kitchen Sink Designs",
    "Balcony",
    "Tile Designs",
    "Wallpaper Designs",
    "Wall Paint Designs",
    "Wall Decor Ideas",
    "Flooring Designs",
    "Window Designs",
    "Door Designs",
    "Staircase Designs",
    "Crockery Unit Designs",
    "Home Bar Designs",
  ];
  const slideNavRef = useRef(null)
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  console.log(isAtStart, isAtEnd)
  const scrollLeft = () => {
    if (slideNavRef.current) {
      slideNavRef.current.scrollBy({
        left: -200, // Adjust the value for the scroll speed
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  // Function to handle scroll to the right
  const scrollRight = () => {
    if (slideNavRef.current) {
      slideNavRef.current.scrollBy({
        left: 200, // Adjust the value for the scroll speed
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };
  const checkScrollPosition = () => {
    if (slideNavRef.current) {
      const container = slideNavRef.current;
      const isAtStart = container.scrollLeft === 0;
      const isAtEnd =
        container.scrollLeft + container.clientWidth >= container.scrollWidth - 1; // Added tolerance of -1px

      setIsAtStart(isAtStart);
      setIsAtEnd(isAtEnd);
    }
  };

  useEffect(() => {
    // Add scroll event listener to check scroll position
    const handleScroll = () => {
      checkScrollPosition();
    };

    const container = slideNavRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  const { category } = useParams();
  const validIndex = slideNavItems.findIndex(item=>item.toLowerCase().split(' ').join('-') === category)
 
  const [data, setData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const getData = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/images/${category}`);
      console.log(response.data.data);
      setData(response.data.data)
    } catch (error) {
      console.log(error);
      setData(null)
    }
  };
  useEffect(() => {
    getData()
  }, [category]);

  return (
    <div className="p-3 lg:p-16 flex flex-col gap-4">
      <p className="text-sm">
        <span className="text-secondary">Home / Design Solutions /</span>{" "}
        {slideNavItems[validIndex]}
      </p>
      <div className="relative">

        <button onClick={scrollLeft}   className={`${isAtStart && 'hidden'}  absolute left-0 top-1 bg-white border rounded-full border-black`}><KeyboardArrowLeftIcon/></button>

      <div ref={slideNavRef}  className=" px-8 py-1  w-full overflow-x-scroll flex gap-6 text-nowrap  hide-scrollbar">
        {slideNavItems.map((item,index) => (
          <NavLink key={item} to={`/design-solutions/${item.toLowerCase().split(' ').join('-')}`}>
          <p key={item} className={`font-medium text-slate-600 ${index === validIndex && 'text-red-500 border-b-4 border-red-500'}`}>
            {item}

          </p>
            </NavLink>
        ))}
      </div>
      
        <button  onClick={scrollRight} className={`${isAtEnd && 'hidden'}  absolute right-0 top-1 bg-white  border rounded-full border-black`}><KeyboardArrowRightIcon/></button>
      </div>
      {data && (
        <div className="flex flex-col gap-4">
          <p>Showing {data.images.length} Results for</p>
          <p className="text-5xl font-medium border-l-8 border-primary pl-3">
            {data.title}
          </p>
          <p className={`${!isExpanded && "line-clamp-2"} w-7/12`}>
            {data.description}
          </p>
          <p
            className="text-secondary flex  gap-1 cursor-pointer"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            Read More <KeyboardArrowDownIcon className="" />
          </p>

          <div className="grid grid-cols-3 gap-8">
            {data.images.map((item, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="group-hover:scale-125 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="p-3 flex flex-col gap-3">
                  <p className="font-medium">{item.title}</p>
                  {item.size &&  <p>Size: {item.size}</p>}
                  <div className="flex text-xs gap-6">
                    <Button text="Book Free Consultation" />
                    <Button text="Get Quote" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="bg-red-100 text-yellow-600 p-1">
        * The products shown on the website are subject to availability. Prices
        are bound to change depending on the market conditions.
      </p>
    </div>
  );
}
