import projects from "./Projects";
import Project from "./Project";

import pubSub from "./PubSub";

import { errorMsg } from "./utils";

const addProject = (projectData) => {
  if (projectData.title) {
    const newProject = new Project(projectData.title);

    projects.addProject(newProject);

    pubSub.publish("close-project-dialog");
  } else errorMsg("Please enter a valid project title");
};

export default addProject;
