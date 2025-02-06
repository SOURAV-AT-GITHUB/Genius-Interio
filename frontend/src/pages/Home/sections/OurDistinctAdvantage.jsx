import treePot from '/tree-pot.svg'
import chair from '/chair.svg'
export default function OurDistinctAdvantage() {
  return (
    <section className="relative p-3  lg:p-16 bg-secondary border border-primary text-center flex flex-col gap-8 ">
      <h4 className="text-primary text-2xl  lg:text-4xl">Our Distinct Advantage</h4>
      <p className="text-primary lg:text-2xl tracking-wider">We keep the pace with the advancement, never getting you out of date</p>
      <img src={treePot} alt="tree-pot" className='absolute h-3/6  lg:h-5/6 left-0 bottom-0'/>
      <img src={chair} alt="chair" className='absolute h-3/6  lg:h-5/6 right-0 bottom-0'/>
    </section>
  );
}
