import projects from "./Projects";

import { cleanCtn, createElement, $ } from "./utils";

const renderProjects = () => {
  const projectsCtn = $("#l-projects");

  cleanCtn(projectsCtn);

  projects.projects.forEach((project) => {
    const projectDiv = createElement({
      tagName: "div",
      text: "",
      classes: project.getSelectedState() ? ["is-selected"] : [],
      id: "project",
    });

    const projectP = createElement({
      tagName: "p",
      text: project.title,
      classes: [],
      id: "",
    });

    projectDiv.appendChild(projectP);

    if (project.getRemovableState()) {
      const projectSpan = createElement({
        tagName: "span",
        text: "x",
        classes: [],
        id: "remove-project-btn",
      });

      projectDiv.appendChild(projectSpan);
    }

    projectsCtn.appendChild(projectDiv);
  });
};

export default renderProjects;
