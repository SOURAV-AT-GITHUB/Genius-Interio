/*eslint-disable react/prop-types */
export default function Step3({ formData, setFormData }) {
  return (
    <div className="text-center bg-white p-2 min-h-[500px]">
      <div className="flex flex-col gap-5 mt-8 max-w-[450px] m-auto">
        <p className="text-xl font-medium mb-4">Your estiamte is almost ready</p>
        <div className="flex flex-col gap-5">
          <input type="text" placeholder="Name" value={formData.name} onChange={(e)=>setFormData(prev=>({...prev,name:e.target.value}))} className="p-4 border border-slate-400"/>
          <input type="email" placeholder="Email ID" value={formData.email} onChange={(e)=>setFormData(prev=>({...prev,email:e.target.value}))} className="p-4 border border-slate-400"/>
          <input type="number" placeholder="Phone Number" value={formData.mobile} onChange={(e)=>{
            if(e.target.value.length>10) return
            setFormData(prev=>({...prev,mobile:e.target.value}))
          }} className="p-4 border border-slate-400"/>
          <input type="text" placeholder="Property Name" value={formData.property_name} onChange={(e)=>setFormData(prev=>({...prev,property_name:e.target.value}))} className="p-4 border border-slate-400"/>
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
