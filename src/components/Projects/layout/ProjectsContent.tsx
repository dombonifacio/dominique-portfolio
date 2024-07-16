import React from "react";
import ProjectDescription from "./ProjectDescription";

interface Project {
  id: number;
  name: string;
  languages: string[];
  description: string;
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
              <div className="">
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
                />
              </div>
              <div className="py-10">
                <img
                  src={project.image}
                  loading="lazy"
                  className={`object-cover rounded-md ${
                    project.id === 2
                      ? " mx-auto object-cover"
                      : "object-cover h-64 w-full"
                  }"`}
                ></img>
              </div>
              <div className="block md:hidden py-10">
                <ProjectDescription
                  title={project.name}
                  description={project.description}
                  language={project.languages}
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
