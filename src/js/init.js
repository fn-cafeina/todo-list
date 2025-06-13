import projects from "./Projects";
import Project from "./Project";
import render from "./render";

export default function init() {
  const defaultProject = new Project("Default");
  defaultProject.setRemovableState(false);
  defaultProject.setSelectedState(true);
  projects.addProject(defaultProject);
  render();
}
