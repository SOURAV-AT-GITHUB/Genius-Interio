import logo from "/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import navImage1 from "/Navbar/nav-design-solutions.jfif";
import penIcon from "/Navbar/pen.svg";
// import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";
// import { Drawer } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "/Navbar/home.png"
import AboutIcon from '/Navbar/about.png'
import ServicesIcon from "/Navbar/services.png"
import PortfolioIcon from "/Navbar/portfolio.png"
import BlogIcon from "/Navbar/blog.png"
import ContactIcon from "/Navbar/contact.png"
import { NavHashLink } from "react-router-hash-link";
import Button from "./Button";

import modularKitchenIcon from "/Navbar/modular-kitchen.svg";
import wardrobeIcon from "/Navbar/wardrobe.svg";
import bathroomIcon from "/Navbar/bathroom.svg";
import masterBedroomIcon from "/Navbar/master-bedroom.svg";
import livingRoomIcon from "/Navbar/living-room.svg";
import poojaRoomIcon from "/Navbar/pooja-room.svg";
import tvUnitIcon from "/Navbar/tv-room.svg";
import homeBarIcon from "/Navbar/home-bar.svg";
import diningRoomIcon from "/Navbar/dining-room.svg";
import tileDesignsIcon from "/Navbar/tiles-designs.svg";
import wallpaperDesignsIcon from "/Navbar/wallpapers-designing.svg";
import homeOfficeIcon from "/Navbar/home-office.svg";
import falseCeilingIcon from "/Navbar/false-ceiling.svg";
import flooringDesignsIcon from "/Navbar/flooring-designs.svg";
import wallDecorIcon from "/Navbar/wall-decor.svg";
import doorDesignsIcon from "/Navbar/door.svg";
export default function Navbar() {

  const solutions = [
    [
      { text: "Modular Kitchen", icon: modularKitchenIcon },
      { text: "Wardrobe", icon: wardrobeIcon },
      { text: "Bathroom", icon: bathroomIcon },
      { text: "Master Bedroom", icon: masterBedroomIcon },
    ],
    [
      { text: "Living Room", icon: livingRoomIcon },
      { text: "Pooja Room", icon: poojaRoomIcon },
      { text: "TV Unit Designs", icon: tvUnitIcon },
      { text: "Home Bar Unit", icon: homeBarIcon },
    ],
    [
      { text: "Dining Room", icon: diningRoomIcon },
      { text: "Tile Designs", icon: tileDesignsIcon },
      { text: "Wallpaper Designs", icon: wallpaperDesignsIcon },
      { text: "Home Office", icon: homeOfficeIcon },
    ],
    [
      { text: "False Ceiling Designs", icon: falseCeilingIcon },
      { text: "Flooring Designs", icon: flooringDesignsIcon },
      { text: "Wall Decor Ideas", icon: wallDecorIcon },
      { text: "Door Designs", icon: doorDesignsIcon },
    ],
  ];
  // const [open, setOpen] = useState(false);
  // const openDrawer = () => setOpen(true);
  // const closeDrawer = () => setOpen(false);
  return (
    <nav className="max-w-[100vw] w-full p-2 gap-2  xl:px-12   bg-white flex items-center justify-between xl:justify-center  border-b ">
      <NavLink to="/" className="w-2/4  lg:w-1/6">
        <img src={logo} alt="logo" className="object-cover object-center " />
      </NavLink>

      <ul className="hidden lg:flex w-2/4 h-full  justify-center  items-center  ">
        <li>
          <NavLink to={"/"}>
            <p className="py-4 px-2 lg:px-4 ">Home</p>{" "}
          </NavLink>
        </li>
        <li>
          <NavHashLink
            to="/#home-about-us"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <p className="py-4 px-2 lg:px-4">About</p>
          </NavHashLink>
        </li>

        <li className="group  relative  group-hover:border-primary transition-all duration-300">
          <a
            href="/design-solutions/modular-kitchen"
            className="flex  gap-2  py-4 px-2 lg:px-4"
          >
            <p>Services</p>
            <KeyboardArrowDownIcon className="group-hover:text-primary group-hover:rotate-180 transform transition-transform  duration-300 ease-in-out self-center" />
          </a>
          <div className="absolute min-w-[65vw] min-h-[300px] p-6   top-[3.8rem] -right-96 z-[1] bg-white   grid-cols-5 gap-4 hidden group-hover:grid transition-opacity duration-300  ">
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
                    key={solution.text}
                    className="border-2 border-transparent hover:border-primary h-full flex flex-col justify-center pl-2 transition-all duration-500 ease-linear"
                  >
                    <Link
                      to={`/design-solutions/${solution.text
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                      className="flex items-center gap-2 h-full"
                    >
                      <img src={solution.icon} alt={solution} className="w-6" />
                      <p>{solution.text}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </li>

        <li>
          <NavHashLink
            to={"/#home-latest-projects"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <p className="py-4 px-2 lg:px-4">Portfolio</p>{" "}
          </NavHashLink>
        </li>

        <li>
          <NavHashLink
            to={"/#home-blogs"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="flex"
          >
            <p className="py-4 px-2 lg:px-4">Blog</p>{" "}
          </NavHashLink>
        </li>

        <li>
          <NavHashLink
            to={"/#home-get-in-touch"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <p className="py-4 px-2 lg:px-4">Contact</p>{" "}
          </NavHashLink>
        </li>
      </ul>

      <div className=" w-fit text-sm sm:text-lg">
        <NavHashLink
          to={"/#home-get-in-touch"}
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <Button text="Connect Now" />
        </NavHashLink>
      </div>




      <div className="fixed lg:hidden border border-slate-300 z-20  justify-between bg-white bottom-0 left-0 right-0">
<ul className="max-w-[500px] text-[10px] min-[400px]:text-base m-auto flex justify-between  items-center  ">
        <li className="p-2">
          <NavLink to={"/"}>
            <img src={HomeIcon} alt="" className="h-6 m-auto"/>
            <p>Home</p>{" "}
          </NavLink>
        </li>
        <li className="p-2">
          <NavHashLink
            to="/#home-about-us"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <img src={AboutIcon} alt="" className="h-6 m-auto"/>
            <p>About</p>
          </NavHashLink>
        </li>

        <li className="p-2">
          <a
            href="/design-solutions/modular-kitchen"
           
          >
            <img src={ServicesIcon} alt="" className="h-6 m-auto"/>
            <p>Services</p>
          </a>
          
        </li>

        <li className="p-2">
          <NavHashLink
            to={"/#home-latest-projects"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <img src={PortfolioIcon} alt="" className="h-6 m-auto"/>
            <p>Portfolio</p>{" "}
          </NavHashLink>
        </li>

        <li className="p-2">
          <NavHashLink
            to={"/#home-blogs"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <img src={BlogIcon} alt="" className="h-6 m-auto"/>
            <p>Blog</p>{" "}
          </NavHashLink>
        </li>

        <li className="p-2">
          <NavHashLink
            to={"/#home-get-in-touch"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            <img src={ContactIcon} alt="" className="h-6 m-auto"/>
            <p>Contact</p>{" "}
          </NavHashLink>
        </li>
      </ul>
      </div>
      {/* <div className="lg:hidden" onClick={openDrawer}>
        <MenuIcon sx={{ fontSize: "2.5rem" }} />
      </div> */}
      {/* <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <div className="min-w-[40vw] max-w-[70vw]">
          <button onClick={closeDrawer}>
            <CloseIcon fontSize="large" />
          </button>
          <img src={logo} alt="" className="w-full my-2" />
          <ul className="flex flex-col gap-4 p-4 text-xl">
            <li onClick={closeDrawer}>
              <NavLink to={"/"}>
                <p>Home</p>{" "}
              </NavLink>
            </li>
            <li onClick={closeDrawer}>
              <NavHashLink
                to="/#home-about-us"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                <p>About</p>
              </NavHashLink>
            </li>
            <li onClick={closeDrawer}>
              <Link to={"/design-solutions/modular-kitchen"} className="flex">
                <p>Services</p>{" "}
              </Link>
            </li>
            <li onClick={closeDrawer}>
              <NavHashLink
                to={"/#home-latest-projects"}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                <p>Portfolio</p>{" "}
              </NavHashLink>
            </li>

            <li>
              <NavHashLink
                to={"/#home-blogs"}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="flex"
              >
                <p>Blog</p>{" "}
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to={"/#home-get-in-touch"}
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                <p>Contact</p>{" "}
              </NavHashLink>
            </li>
          </ul>
          <div className="text-2xl w-full text-center" onClick={closeDrawer}>
            <NavHashLink
              to={"/#home-get-in-touch"}
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              <Button text="Connect Now" />
            </NavHashLink>
          </div>
        </div>
      </Drawer> */}
    </nav>
  );
}
