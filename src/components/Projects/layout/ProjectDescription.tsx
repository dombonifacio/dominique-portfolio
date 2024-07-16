interface ProjectDescriptionProps {
    title: string;
    description: string;
    language: string[];
}

const ProjectDescription = ({title, description, language}: ProjectDescriptionProps) => {
  return (
    <div className="flex flex-col justify-between  h-full">
      <div>
        <p className=" border-red-500 border-b-4 inline-block">View Site</p>
        <h1 className="text-[1.6rem] sm:text-[1.8rem]  font-extrabold  ">
          {title}
        </h1>

        <p className="text-[.9rem] leading-6 sm:text-[1rem] lg:text-[1rem] text-gray-400">
          {description}
        </p>
      </div>
      <div className="flex gap-x-2">
        {/* Map the languages */}
        {language.map((val) => (
          <div className="bg-slate-800  px-3 py-2 text-[0.9rem] font-semibold rounded-full">
            {val}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDescription