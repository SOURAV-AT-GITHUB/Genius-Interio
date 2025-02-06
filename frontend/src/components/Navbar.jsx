import logo from "/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import navImage1 from "/Navbar/nav-design-solutions.jfif";
import penIcon from "/Navbar/pen.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { NavHashLink } from "react-router-hash-link";
import Button from "./Button";
import homeIcon from "/Navbar/home.svg"
import aboutIcon from "/Navbar/about.svg"
import serviceIcon from "/Navbar/service.svg"
import portfolioIcon from "/Navbar/portfolio.svg"
import pagesIcon from "/Navbar/pages.svg"
import blogsIcon from "/Navbar/blogs.svg"
import contactIcon from "/Navbar/contact.svg"
export default function Navbar() {
  const solutions = [
    ["Modular Kitchen", "Wardrobe", "Bathroom", "Master Bedroom"],
    ["Living Room", "Pooja Room", "TV Unit Designs", "Home Bar Unit"],
    ["Dining Room", "Tile Designs", "Wallpaper Designs", "Home Office"],
    [
      "False Ceiling Designs",
      "Flooring Designs",
      "Wall Decor Ideas",
      "Door Designs",
    ],
  ];
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <nav className="max-w-[100vw] w-full px-2 gap-2  xl:px-12   bg-white flex items-center justify-between xl:justify-center  border-b ">
      <NavLink to="/" className="w-2/4  lg:w-1/6">
        <img src={logo} alt="logo" className="object-cover object-center" />
      </NavLink>

      <ul className="hidden lg:flex w-2/4 h-full  justify-center  items-center  ">
        <li className="flex items-end gap-2 py-4 px-2 lg:px-4 ">
          <NavLink to={"/"} className='flex'>
            <img src={homeIcon} alt="home-icon" className="w-6 scale-105" />
            <p>Home</p>{" "}
          </NavLink>
        </li>
        <li className="flex items-end gap-2 py-4 px-2 lg:px-4 ">
          <NavHashLink
            to="/#home-about-us"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className='flex'
          >
            <img src={aboutIcon} alt="about-icon" className="w-6"/>
            <p>About</p>
          </NavHashLink>
        </li>
        <li className="flex items-end gap-2 py-4 px-2 lg:px-4">
          <NavHashLink
            to={"/#home-our-speciality-services"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className='flex'
          >
            <img src={serviceIcon} alt="service-icon" className="w-6" />
            <p>Service</p>{" "}
          </NavHashLink>
        </li>
        <li className="flex items-end gap-2 py-4 px-2 lg:px-4">
          <NavHashLink
            to={"/#home-latest-projects"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className='flex'
          >
            <img src={portfolioIcon} alt="portfolio-icon" className="w-6" />
            <p>Portfolio</p>{" "}
          </NavHashLink>
        </li>

        <li className="group  relative flex  gap-2 py-4 px-2 lg:px-4  border-b-4 border-transparent  group-hover:border-primary transition-all duration-300">
          <img src={pagesIcon} alt="pages-icon" className="w-6" />
          <p>Pages</p>
          <KeyboardArrowDownIcon className="group-hover:text-primary group-hover:rotate-180 transform transition-transform  duration-300 ease-in-out self-center" />
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
                    className="border-2 border-transparent hover:border-primary h-full flex flex-col justify-center pl-2 transition-all duration-500 ease-linear"
                  >
                    <Link
                      to={`/design-solutions/${solution
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                    >
                      {solution}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </li>
        <li className="flex items-end gap-2 py-4 px-2 lg:px-4">
          <NavHashLink
            to={"/#home-blogs"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="flex"
          >
            <img src={blogsIcon} alt="blogs-icon" className="w-6" />
            <p>Blog</p>{" "}
          </NavHashLink>
        </li>
        <li className="flex items-end gap-2 py-4 px-2 lg:px-4">
          <NavHashLink
            to={"/#home-get-in-touch"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className='flex'
          >
            <img src={contactIcon} alt="contact-icon" className="w-6" />
            <p>Contact</p>{" "}
          </NavHashLink>
        </li>
      </ul>

      <div className="hidden lg:block w-fit xl:text-lg">
        <NavHashLink
          to={"/#home-get-in-touch"}
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <Button text="Connect Now"/>
        </NavHashLink>
      </div>
      <div className="lg:hidden" onClick={openDrawer}>
        <MenuIcon sx={{ fontSize: "2.5rem" }} />
      </div>
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <div className="min-w-[40vw] max-w-[70vw]">
          <button onClick={closeDrawer}>
            <CloseIcon fontSize="large" />
          </button>
          <img src={logo} alt="" className="w-full my-2" />
          <ul className="flex flex-col gap-4 p-4 text-xl">
            <li onClick={closeDrawer}>
            <NavLink to={"/"} className='flex'>
            <img src={homeIcon} alt="home-icon" className="w-8" />
            <p>Home</p>{" "}
          </NavLink>
            </li>
            <li onClick={closeDrawer}>
            <NavHashLink
            to="/#home-about-us"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className='flex'
          >
            <img src={aboutIcon} alt="about-icon" className="w-6"/>
            <p>About</p>
          </NavHashLink>
            </li>
            <li onClick={closeDrawer}>
            <NavHashLink
            to={"/#home-our-speciality-services"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className='flex'
          >
            <img src={serviceIcon} alt="service-icon" className="w-6" />
            <p>Service</p>{" "}
          </NavHashLink>
            </li>
            <li onClick={closeDrawer}>
            <NavHashLink
            to={"/#home-latest-projects"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className='flex'
          >
            <img src={portfolioIcon} alt="portfolio-icon" className="w-6" />
            <p>Portfolio</p>{" "}
          </NavHashLink>
            </li>
            <li onClick={closeDrawer}>
              <Link to={"/design-solutions/modular-kitchen"} className="flex">
              <img src={pagesIcon} alt="pages-icon" className="w-6" />
              <p>Pages</p>{" "}
              
              </Link>
            </li>
            <li>
            <NavHashLink
            to={"/#home-blogs"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="flex"
          >
            <img src={blogsIcon} alt="blogs-icon" className="w-6" />
            <p>Blog</p>{" "}
          </NavHashLink>
            </li>
            <li>
            <NavHashLink
            to={"/#home-get-in-touch"}
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className='flex'
          >
            <img src={contactIcon} alt="contact-icon" className="w-6" />
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
              
              <Button text="Connect Now"/>
            </NavHashLink>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}
