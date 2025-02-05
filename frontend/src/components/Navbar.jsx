// import Button from "./Button";
import logo from "/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import navImage1 from "/Navbar/nav-design-solutions.jfif";
// import navImage2 from "/Navbar/nav-more.jfif";
import penIcon from "/Navbar/pen.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Drawer } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
export default function Navbar() {
  const solutions = [
    ["Modular Kitchen", "Wardrobe", "Bathroom", "Master Bedroom"],
    ["Living Room", "Pooja Room", "TV Unit Designs", "Home Bar Unit"],
    ["Dining Room", "Tile Designs", "Wallpaper Designs", "Home Office"],
    ["False Ceiling Designs", "Flooring Designs", "Wall Decors Ideas", "Door Designs"],
  ];
  // const more = ["About Us", "Contact Us", "Privacy Policy", "Our Blog"];
  const [open,setOpen] = useState(false)
  const openDrawer = ()=> setOpen(true)
  const closeDrawer = ()=> setOpen(false)
  return (
    <nav className="max-w-[100vw] w-full px-2  lg:px-6  xl:px-12   bg-white flex items-center justify-between lg:justify-center  border-b ">
      <NavLink to="/" className='w-2/4  lg:w-1/6'>
      <img src={logo} alt="logo" className="object-cover object-center" />
      </NavLink>

      <ul className="hidden lg:flex w-2/4 h-full gap-1  xl:gap-4 justify-center  items-center  ">
        <li className="flex items-end gap-2  py-4 px-2">
          <p>Home</p>{" "}
        </li>
        <li className="flex items-end gap-2  py-4 px-2">
          <p>About</p>{" "}
        </li>
        <li className="flex items-end gap-2  py-4 px-2">
          <p>Service</p>{" "}
        </li>
        <li className="flex items-end gap-2  py-4 px-2">
          <p>Portfolio</p>{" "}
        </li>

        <li className="group  relative flex items-end gap-2  py-4 px-2  border-b-4 border-transparent  group-hover:border-secondary transition-all duration-300">
          <p>Pages</p>
          <KeyboardArrowDownIcon className="group-hover:text-secondary group-hover:rotate-180 transform transition-transform  duration-300 ease-in-out" />
          <div className="absolute min-w-[65vw] min-h-[300px] p-8   top-[3.8rem] -right-96 z-[1] bg-white   grid-cols-5 gap-10 hidden group-hover:grid transition-opacity duration-300  ">
            <div className="relative ">
              <img src={navImage1} alt="solution-image" className="h-full" />
              <img
                src={penIcon}
                alt="pen-svg"
                className="absolute bottom-2 left-2"
              />
            </div>
            {solutions.map((column, index) => (
              <ul
                key={index}
                className={`flex flex-col gap-1 text-sm  ${
                  index !== 3 && "border-r-2  pr-4"
                }`}
              >
                {column.map((solution) => (
                  <li
                    key={solution}
                    className="border-2 border-transparent hover:border-secondary h-full flex flex-col justify-center pl-2 transition-all duration-500 ease-linear"
                  >
                    <Link to={`/design-solutions/${solution.split(' ').join('-').toLowerCase()}`}>
                    
                    {solution}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </li>
        <li className="flex items-end gap-2  py-4 px-2">
          <p>Blog</p>{" "}
        </li>
        <li className="flex items-end gap-2  py-4 px-2">
          <p>Contact</p>{" "}
        </li>
{/* 
        <li className="flex items-end gap-2  py-4 px-2">
          <p>Client Stories</p>{" "}
        </li> */}

        {/* <li className="group/more  relative  flex items-end gap-2  py-4 px-2  border-b-4 border-transparent  hover:border-secondary transition-all duration-300">
          <p>More</p>{" "}
          <KeyboardArrowDownIcon className="group-hover/more:text-secondary group-hover/more:rotate-180 transform transition-transform  duration-300 ease-in-out" />
          <div className="absolute hidden  group-hover/more:grid grid-cols-2 gap-10 transition-opacity duration-300    min-w-[26vw] min-h-[300px]  p-8 pr-0  bg-white  top-[5.5rem] -left-[10.5rem]  z-[2]">
            <div className="relative border-r-2">
              <img
                src={navImage2}
                alt="solution-image"
                className="h-full w-full"
              />
              <img
                src={penIcon}
                alt="pen-svg"
                className="absolute bottom-2 left-2"
              />
            </div>
            <ul className="flex flex-col gap-2 text-sm w-10/12">
              {more.map((item) => (
                <li
                  key={item}
                  className="border-2 border-transparent hover:border-secondary h-full flex flex-col justify-center pl-2 transition-all duration-500 ease-linear"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </li> */}
      </ul>


      <div className="hidden lg:block w-fit xl:text-lg">
        {/* <Button text={"Connect Now"} /> */}
        <button className="bg-secondary text-white px-2 rounded-full ">Connect Now</button>
      </div>
      <div className="lg:hidden" onClick={openDrawer}>
        <MenuIcon  sx={{fontSize:"2.5rem"}}/>
      </div>
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <div className="min-w-[40vw] max-w-[70vw]">
          <button onClick={closeDrawer}>

          <CloseIcon fontSize="large" />
          </button>
          <img src={logo} alt="" className="w-full my-2"/>
        <ul className="flex flex-col gap-4 p-4 text-xl">
        <li >
          <p>Home</p>{" "}
        </li>
        <li >
          <p>About</p>{" "}
        </li>
        <li >
          <p>Service</p>{" "}
        </li>
        <li >
          <p>Portfolio</p>{" "}
        </li>
        <li >
          <p>Pages</p>{" "}
        </li>
        <li >
          <p>Blog</p>{" "}
        </li>
        <li >
          <p>Contacts</p>{" "}
        </li>
        </ul>
        <div className="text-2xl w-full text-center">
        {/* <Button text={"Connect Now"} /> */}
        <button className="bg-secondary text-white p-2 w-4/5 rounded-full">Connect Now</button>
      </div>
        </div>
      </Drawer>
    </nav>
  );
}
