import projects from "./Projects";
import Project from "./Project";
import render from "./render";

export default function init() {
  const defaultProject = new Project("Default");
  defaultProject.setRemovableState(false);
  projects.addProject(defaultProject);
  render();
}
