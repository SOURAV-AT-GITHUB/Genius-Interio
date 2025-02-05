// import Button from '../../components/Button'
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
import Banner1 from "./sections/Banner1";
import VideoSection from "./sections/VideoSection";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <LatestProjects />
      <OurSpecialityServices />
      <Banner1 />
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
