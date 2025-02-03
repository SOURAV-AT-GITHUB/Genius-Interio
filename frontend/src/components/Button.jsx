import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
export default function Button({ text = "Default",arrow='black' }) {
  return (
    <button className="group/button overflow-hidden  flex items-center  h-fit w-fit  border border-primary ">
      <div className="bg-primary p-2  sm:p-3 sm:px-8 h-fit z-10 text-nowrap">{text}</div>
      <div className="h-full w-14 relative">
        <div className="absolute h-full w-[200%]  top-2/4 left-0 group-hover/button:left-full transition-all duration-300 ease-out  translate-x-[-50%] translate-y-[-50%] flex justify-center">
          <div className="bg-secondary h-full w-full   flex items-center justify-center">
            <EastOutlinedIcon
              className="bg-secondary"
              sx={{ height: "55px", width: "100%", paddingY: "1rem",paddingX:"0.5rem" }}
            />
          </div>
          <div className="bg-transparent h-full w-full   flex items-center justify-center">
            <EastOutlinedIcon
            htmlColor={arrow}
              sx={{ height: "55px", width: "100%", paddingY: "1rem",paddingX:"0.5rem" }}
            />
          </div>
        </div>
      </div>
    </button>
  );
}
