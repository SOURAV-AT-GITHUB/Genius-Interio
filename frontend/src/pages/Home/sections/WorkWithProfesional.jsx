import Button from "../../../components/Button";

export default function WorkWithProfesional() {
  return (
    <section className="p-3  lg:p-16 lg:py-20  dark-background-image flex flex-col items-center  md:flex-row gap-4  md:gap-8  md:justify-between">
      <h4 className="text-white text-xl sm:text-2xl  lg:text-[2.75rem]">
        Wanna Work With Our Profesional Team?
      </h4>
      <div className="w-fit xl:text-lg ">
        <Button text="Book and Appoinment" arrow="white" />
      </div>
    </section>
  );
}
