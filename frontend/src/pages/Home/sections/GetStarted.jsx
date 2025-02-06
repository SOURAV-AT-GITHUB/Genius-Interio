import lefttImage from "/Get-Started/left-image.jfif";
import rightImage from "/Get-Started/right-image.jfif";
import potImage from "/Get-Started/pot.svg";
import couchImage from "/Get-Started/couch.svg";
import Button from "../../../components/Button";
export default function GetStarted() {
  return (
    <section className="relative border-b flex gap-10 justify-between items-center bg-secondary border border-primary">
      <div className="relative w-fit">
        <img
          src={lefttImage}
          alt="kitchen"
          className="w-[275px] max-h-[325px]  mt-24"
        />

        <img
          src={potImage}
          alt="tree-pot-svg"
          className="absolute  top-5 -right-8  lg:top-0 lg:-right-12 max-w-[25vw] lg:max-h-[250px]"
        />
      </div>
      <div className="flex flex-col  lg:items-center gap-2  md:gap-10 xl:text-lg">
        <p className="lg:text-2xl  xl:text-[2.5rem] font-medium">Your dream home is just a click away</p>
        <Button text="Get Started" />
      </div>
      <div className="relative w-fit">

      <img
        src={rightImage}
        alt="drawing-room"
        className="w-[275px] max-h-[325px] mb-24"
      />
      <img src={couchImage} alt="couch-svg" className='absolute bottom-0 right-2  min-w-[35vw]  lg:min-w-[400px] lg:right-3/4'/>
      </div>
    </section>
  );
}
