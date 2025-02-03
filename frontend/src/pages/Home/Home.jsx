// import Button from '../../components/Button'
import AboutUs from './sections/AboutUs'
import Portfolio from './sections/Portfolio'
import WorkingArea from './sections/WorkingArea'
import WorkingProcess from './sections/WorkingProcess'
// import heroSectionImage from '/heroSectionImage.jfif'
import WhyChooseUs from './sections/WhyChooseUs'
import WorkWithProfesional from './sections/WorkWithProfesional'
import ClientStories from './sections/ClientStories'
import OurDistinctAdvantage from './sections/OurDistinctAdvantage'
import GetInTouch from './sections/GetInTouch'
import GetStarted from './sections/GetStarted'
import HeroSection from './sections/HeroSection'
import Blogs from './sections/Blogs'
export default function Home() {
  return (
    <main className='h-fit'>
      {/* <section id='home-hero-section' className='overflow-hidden h-fit relative'>
        <img src={heroSectionImage} alt="heroSectionImage" className='max-h-[95vh] h-full  w-full -top-8 relative object-cover scale-y-110 '/>
        <div className="absolute bottom-0 left-[50%] translate-x-[-50%] linear-dark-bg w-full h-2/5  flex flex-col  justify-center  items-center">
          <h3 className='text-2xl  sm:text-4xl  md:text-5xl  lg:text-6xl text-white leading-[0] tracking-wider'>Beyond Walls, Build Dreams</h3>
          <div className='lg:w-2/4 m-auto mt-8  sm:mt-10 flex justify-center tracking-wide xl:text-lg'>

          <Button text='Claim Your Free Consultation' arrow='white'/>
          </div>
        </div>
      </section> */}
      <HeroSection/>
      {/* <AboutUs/>
      <WorkingArea/>
      <Portfolio/>
      <WorkingProcess/> */}
      <WhyChooseUs/>
      <WorkWithProfesional/>
      <ClientStories/>
      <OurDistinctAdvantage/>
      <GetInTouch/>
      <GetStarted/>
      <Blogs/>
    </main>
  )
}
