
import projects from "../../../data/projects.json";
import ProjectsContent from "./ProjectsContent";


const ProjectsContainer = () => {
  return (
    <div className="w-full  ">
      <ProjectsContent data={projects} />
    </div>
  );
};

export default ProjectsContainer;
