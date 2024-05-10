import icons from "../../../data/icons";
const ToolIcon = () => {
  return (
    <>
      {icons.map((icon) => {
        return (
          // <li className="py-4 flex flex-col items-center bg-slate-800 rounded-lg gap-y-2 text-[0.950rem]">
          <li className="rounded-lg bg-slate-800 py-3 flex flex-col gap-y-2 items-center text-sm lg:gap-y-2 text-[0.950rem]">
            {icon.svg}
            {icon.name}
          </li>
        );
      })}
    </>
  );
};

export default ToolIcon;
