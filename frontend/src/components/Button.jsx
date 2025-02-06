export default function Button({ text = "Default" }) {
  return (
    <button className="  h-fit w-fit  border border-primary text-white rounded-full overflow-hidden">
      <div className="bg-primary p-2 px-4 sm:px-6 h-fit z-10 text-nowrap xl:text-lg">{text}</div>
    </button>
  );
}
