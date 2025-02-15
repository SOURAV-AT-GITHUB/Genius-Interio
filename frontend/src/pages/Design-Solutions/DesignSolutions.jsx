import { useEffect, useState,useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from "../../components/Button";
import axios from "axios";

const DATABASE_URL = import.meta.env.VITE_DATABASE_URL
export default function DesignSolutions() {
  /*_________Static data_________ */
  const slideNavItems = [
    "Modular Kitchen",
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
  /*__________Hooks and states___________ */
  const slideNavRef = useRef(null)
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
    const { category } = useParams();
  const validIndex = slideNavItems.findIndex(item=>item.toLowerCase().split(' ').join('-') === category)
  const [data, setData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  /*____________Pure functions_____________ */
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

  //useEffect to add scroll event listener to check scroll position
  useEffect(() => {
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

  const getData = async () => {
    try {
      const response = await axios.get(`${DATABASE_URL}/categories/${category}.json`);
      if(response.data){
        const images = Object.entries(response.data.images).map(([id,rest])=>({...rest}))
       setData({...response.data,images})
      }else{
        setData(null)
      }
    } catch (/*eslint-disable no-unused-vars*/error) {
      setData(null)
    }
  };
  useEffect(() => {
    if(slideNavRef.current && slideNavItems.some(item=>item.toLowerCase().split(' ').join('-') === category) ) {
      const index = slideNavItems.findIndex(item=>item.toLowerCase().split(' ').join('-') === category)
      const nodeList = slideNavRef.current
      const node = nodeList.querySelectorAll("a > p")[index]
      node.scrollIntoView({
        behavior:"smooth",
        block:"nearest",
        inline:"center"
      }
    )
      getData()
    }else{
      setData(null)
    }
  }, [category]);

  return (
    <div className="p-3 lg:p-16 flex flex-col gap-4">
      <p className="text-sm">
        <span className="text-secondary">Home / Design Solutions /</span>{" "}
        {slideNavItems[validIndex]}
      </p>
      <div className="relative">

        <button onClick={scrollLeft}   className={`${isAtStart && 'hidden'}  absolute left-0 top-1 bg-white border rounded-full border-black`}><KeyboardArrowLeftIcon/></button>

      <div ref={slideNavRef}  className="px-2 sm:px-8 py-1  w-full overflow-x-scroll flex gap-6 text-nowrap  hide-scrollbar">
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
          <p className={`${!isExpanded && "line-clamp-2"} lg:w-7/12`}>
            {data.description}
          </p>
          <p
            className="text-secondary flex  gap-1 cursor-pointer"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            Read More <KeyboardArrowDownIcon className="" />
          </p>

          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
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
