import AboutUs from "./sections/AboutUs";
import WhyChooseUs from "./sections/WhyChooseUs";
import WorkWithProfesional from "./sections/WorkWithProfesional";
import ClientStories from "./sections/ClientStories";
import OurDistinctAdvantage from "./sections/OurDistinctAdvantage";
import GetInTouch from "./sections/GetInTouch";
import GetStarted from "./sections/GetStarted";
import HeroSection from "./sections/HeroSection";
import Blogs from "./sections/Blogs";
import LatestProjects from "./sections/LatestProjects";
import OurSpecialityServices from "./sections/OurSpecialityServices";
import VideoSection from "./sections/VideoSection";
import useMediaQuery from "@mui/material/useMediaQuery";
import whatsappIcon from "/whatsapp.svg";
import phoneIcon from "/phone.svg";
import { useState } from "react";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const isMinWidth500 = useMediaQuery("(min-width:500px)");
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <main className="relative">
      {isMinWidth500 ? (
        <div className="fixed right-0 bottom-14 w-fit h-fit z-10 flex flex-col">
          <a
            href="https://wa.me/+919899878932?text=Hello%20there"
            target="_blank"
          >
            <img src={whatsappIcon} alt="whatsapp-icon" className="h-24" />
          </a>
          <a href="tel:+919899878932">
            <img src={phoneIcon} alt="phone-icon" className="h-24" />
          </a>
        </div>
      ) : (
        <div className={`fixed right-0 bottom-20  z-10  `}>
          <div
            className={`${
              isOpen ? "h-auto " : "h-0"
            } transition-transform duration-300 ease-linear`}
          >
            <a
              href="https://wa.me/+919899878932?text=Hello%20there"
              target="_blank"
            >
              <img
                src={whatsappIcon}
                className={`h-20 ${
                  isOpen
                    ? "translate-y-0 rotate-0"
                    : "translate-y-[4.5rem] -rotate-45 opacity-0"
                } transition duration-200 ease-in-out z-0`}
              />
            </a>
            <a href="tel:+919899878932">
              <img
                src={phoneIcon}
                alt="phone-icon"
                className={`h-20 ${
                  isOpen
                    ? "translate-y-0 rotate-0 "
                    : "translate-y-[4.5rem] -rotate-45 opacity-0"
                } transition duration-200 ease-in z-0`}
              />
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="bg-primary text-white p-3 ml-3  rounded-l-lg z-10 shadow-2xl border border-secondary "
          >
            <PermPhoneMsgIcon fontSize="large" />
          </button>
        </div>
      )}
      <HeroSection />
      <AboutUs />
      <LatestProjects />
      <OurSpecialityServices />
      {/* <Banner1 /> */}
      <VideoSection />
      <WhyChooseUs />
      <WorkWithProfesional />
      <ClientStories />
      <OurDistinctAdvantage />
      <GetInTouch />
      <GetStarted />
      <Blogs />
    </main>
  );
}
