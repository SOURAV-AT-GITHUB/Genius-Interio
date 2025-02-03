export default function Step3() {
  return (
    <div className="text-center bg-white p-2 min-h-[500px]">
      <div className="flex flex-col gap-5 mt-8 max-w-[450px] m-auto">
        <p className="text-xl font-medium mb-4">Your estiamte is almost ready</p>
        <div className="flex flex-col gap-5">
          <input type="text" placeholder="Name" className="p-4 border border-slate-400"/>
          <input type="email" placeholder="Email ID" className="p-4 border border-slate-400"/>
          <input type="tel" placeholder="Phone Number" className="p-4 border border-slate-400"/>
          <input type="text" placeholder="Property Name" className="p-4 border border-slate-400"/>
          <p className="w-3/4 text-left">
            By submitting this form, you agree to the{" "}
            <a href="" className="text-secondary">
              privacy policy
            </a>{" "}
            &{" "}
            <a href="" className="text-secondary">
              terms and conditions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
