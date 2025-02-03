import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
export default function Step2(props) {
      const {formData,setFormData} = props
//onClick={()=>setFormData((prev)=>({...prev,roomDesign:{...prev.roomDesign,[key]:prev.roomDesign[key]-1}}))}
      
  return (
    <div className="text-center  bg-white p-6">
      <div className="flex flex-col gap-5 mt-8 max-w-[450px] m-auto">
        <p className="text-xl">Select the rooms you&apos;d like us to desgin</p>
            <div className='flex flex-col gap-4'>
            {Object.entries(formData.roomDesign).map(([key,value])=>(
                  <div key={key} className="flex justify-between items-center  border p-3">
                        <p>{key}</p>
                        <div className="flex justify-between  gap-1 p-1  min-w-24" >
                        <button className='bg-secondary rounded-full px-0.5 disabled:opacity-60 disabled:cursor-not-allowed' disabled={value<=1}  onClick={()=>setFormData((prev)=>({...prev,roomDesign:{...prev.roomDesign,[key]:prev.roomDesign[key]-1}}))}><RemoveIcon/></button>
                        <p className='text-lg font-medium'>{value}</p>
                        <button className='bg-secondary rounded-full px-0.5' onClick={()=>setFormData((prev)=>({...prev,roomDesign:{...prev.roomDesign,[key]:prev.roomDesign[key]+1}}))}><AddIcon/></button>
                        </div>
                  </div>
            ))}
            </div>
      </div>
    </div>
  );
}
