import Button from "../../../components/Button";

export default function GetInTouch() {
  return (
    <section id="get-in-touch" className="flex flex-col lg:flex-row">
      <div className="relative  lg:w-2/4 bg-no-repeat min-h-[400px] p-4  lg:p-28 lg:py-40  text-secondary flex flex-col gap-5 justify-evenly">
        <p className="text-lg text-nowrap">Get In Touch</p>
        <h4 className="text-5xl text-nowrap">Got Any Inquiry?</h4>
        <p className=" text-lg">
          Have questions or need assistance? Reach out to us, and our team will
          be happy to help!
        </p>
        <div className="w-fit text-black xl:text-lg m-auto lg:m-0">
    <Button text="Download Brochure" arrow="white"/>
        </div>
      </div>




      <div className="bg-secondary p-4  lg:w-2/4 lg:p-28 lg:pb-40">
        <form action="" className="flex flex-col md:grid grid-cols-2 justify-between gap-4  md:gap-10">
          <input
            type="text"
            placeholder="Last Name"
            className="border border-black p-2 pl-5  text-lg "
          />
          <input
            type="text"
            placeholder="First Name"
            className="border border-black p-2 pl-5  text-lg "
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="border border-black p-2 pl-5  text-lg "
          />
          <input
            type="text"
            placeholder="Email"
            className="border border-black p-2 pl-5  text-lg "
          />
          <select className="col-span-2 border border-black p-2 pl-5  text-lg">
            <option value="">Project Type</option>
            <option value="">Home</option>
            <option value="">Business</option>
            <option value="">Renovation</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            className="col-span-2 row-span-4  border border-black p-2 pl-5  text-lg"
          />
        </form>
      </div>
    </section>
  );
}
