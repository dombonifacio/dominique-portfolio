
import ProjectDescription from "./ProjectDescription";

interface Project {
  id: number;
  name: string;
  languages: string[];
  description: string;
  link: string;
  github: string;
  image: string;
}

interface ProjectsContentProps {
  data: Project[];
}

const ProjectsContent = ({ data }: ProjectsContentProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 ">
      {data.map((project, index) => (
        <>
          {index % 2 === 0 ? (
            <>
              <div className="pt-6 md:pt-0">
                <img
                  src={project.image}
                  className="object-cover h-64 w-full rounded-lg"
                  loading="lazy"
                ></img>
              </div>
              <div className="">
                <ProjectDescription
                  title={project.name}
                  description={project.description}
                  language={project.languages}
                  link={project.link}
                  github={project.github}
                />
              </div>
            </>
          ) : (
            <>
              <div className="hidden md:block py-10">
                <ProjectDescription
                  title={project.name}
                  description={project.description}
                  language={project.languages}
                  link={project.link}
                  github={project.github}
                />
              </div>
              <div className="pt-6 md:py-10 ">
                <img
                  src={project.image}
                  loading="lazy"
                  className={`object-cover rounded-md ${
                    project.id === 2
                      ? " mx-auto object-cover"
                      : "object-cover h-full w-full"
                  }"`}
                ></img>
              </div>
              <div className="block md:hidden md:py-10">
                <ProjectDescription
                  title={project.name}
                  description={project.description}
                  language={project.languages}
                  link={project.link}
                  github={project.github}
                />
              </div>
            </>
          )}
        </>
      ))}
    </div>
  );
};

export default ProjectsContent;
