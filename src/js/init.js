import projects from "./Projects";

import Project from "./Project";

import renderTodos from "./render-todos";
import renderProjects from "./render-projects";

import initEvents from "./init-events";
import initSubscribers from "./init-subscribers";

import { getProjectsFromLocalStorage } from "./local-storage";

export default function init() {
  if (localStorage.getItem("projects") !== null) {
    getProjectsFromLocalStorage();
  } else {
    const defaultProject = new Project("Default");

    defaultProject.setRemovableState(false);
    defaultProject.setSelectedState(true);

    projects.addProject(defaultProject);
  }

  initEvents();
  initSubscribers();

  renderProjects();
  renderTodos();

  getProjectsFromLocalStorage();
}
