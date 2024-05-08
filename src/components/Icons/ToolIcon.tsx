import icons from "../../data/icons"
const ToolIcon = () => {
  
  return (
    <div>
      <ul>
        {icons.map((icon) => {
          return (
            <li className="bg-slate-700 p-4">
              {icon.name}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default ToolIcon;
