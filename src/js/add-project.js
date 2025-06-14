import projects from "./Projects";
import Project from "./Project";

import { errorMsg } from "./utils";

export default function addProject(projectData) {
  if (projectData.title) {
    const newProject = new Project(projectData.title);

    projects.addProject(newProject);
  } else errorMsg("Please enter a valid project title");
}
