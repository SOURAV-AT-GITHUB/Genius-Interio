import logo from "/logo-white.svg";
import twitterLogo from "/twitter.svg";
import facebookLogo from "/facebook.svg";
import linkedinLogo from "/linkedin.svg";
export default function Footer() {
  const items = [
    [
      "Offerings",
      "Modular Kitchen Designs",
      "Pooja Room Designs",
      "Living Room Designs",
      "Bedroom Designs",
      "Bathroom Designs",
      "Dining Room Designs",
    ],
    [
      "Company",
      " Refer a friend",
      "How it works",
      "Policies",
      "Terms & Conditions",
      "About Us",
      "Contact Us",
      "Our Location",
    ],
    [
      "Contact Us",
      "Call Us : +91 89296 44783",
      "Email Us : support@geniusinterio.com",
    ],
  ];
  return (
    <footer className="p-6 text-center   lg:p-20  bg-[#212121]">
      <div className="flex flex-col gap-6  lg:grid  lg:grid-cols-5 md:gap-5  lg:gap-14">
        
        <div className="  lg:col-span-2  flex flex-col gap-8 mx-auto lg:ml-0">
          <img src={logo} alt="logo" className="xl:max-w-[400px]" />
          <div className="flex justify-center gap-8">
            <img src={twitterLogo} alt="twiter" className="max-h-[35px]" />
            <img src={facebookLogo} alt="facebook" className="max-h-[35px]" />
            <img src={linkedinLogo} alt="linked" className="max-h-[35px]" />
          </div>
        </div>
        {items.map((column,i)=>(
          <div key={i}>
            {column.map((item,index)=>(
              <p key={item} className={`${index === 0 ? "text-secondary mb-4" : "text-white mb-2"} lg:text-sm font-light`}>{item}</p>
            ))}
          </div>
        ))}
      </div>
      <hr className="mt-10"/>
      <p className="text-center mt-10 pb-16 lg:pb-0 text-white tracking-wider text-sm">2024 © All rights reserved by Genius Interio Pvt. Ltd.</p>
    </footer>
  );
}
