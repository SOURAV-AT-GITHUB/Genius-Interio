export default function Step1(props) {
  const { formData, setFormData } = props;
  const BHKOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK+"];
  return (
    <div className="text-center bg-white p-2">
      <div className="flex flex-col gap-5 mt-8 max-w-[450px] m-auto">
        <p className="text-xl mb-4">Select your BHK Type</p>
        {BHKOptions.map((option) => (
          <div
            key={option}
            className={`${
              formData.BHKType === option
                ? "border-primary"
                : " border-slate-400"
            }  border   p-4 flex items-center  gap-4 cursor-pointer`}
            onClick={() =>
              setFormData((prev) => ({ ...prev, BHKType: option }))
            }
          >
            <div
              className={`${
                formData.BHKType === option
                  ? "border-8 border-primary p-2"
                  : " border border-slate-400 p-3"
              }  rounded-full `}
            ></div>
            <p>{option}</p>
          </div>
        ))}
        <input
          type="text"
          placeholder="Type manually"
          className="border border-slate-400 p-4"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, BHKType: e.target.value }))
          }
        />
      </div>
    </div>
  );
}
