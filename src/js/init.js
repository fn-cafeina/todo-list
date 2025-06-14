import projects from "./Projects";

import Project from "./Project";

import renderTodos from "./render-todos";
import renderProjects from "./render-projects";

import initEvents from "./init-events";
import initSubscribers from "./init-subscribers";

export default function init() {
  const defaultProject = new Project("Default");

  defaultProject.setRemovableState(false);
  defaultProject.setSelectedState(true);

  projects.addProject(defaultProject);

  initEvents();
  initSubscribers();

  renderProjects();
  renderTodos();
}
