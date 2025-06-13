import projects from "./Projects";
import { cleanCtn } from "./utils";

export default function render() {
  const $projects = document.getElementById("projects");

  cleanCtn($projects);

  for (const project of projects.projects) {
    const projectDiv = document.createElement("div");
    const projectP = document.createElement("p");
    projectDiv.id = "project";
    projectP.textContent = project.title;

    projectDiv.appendChild(projectP);

    if (project.getRemovableState()) {
      const projectSpan = document.createElement("span");
      projectSpan.textContent = "x";
      projectDiv.appendChild(projectSpan);
    }

    $projects.appendChild(projectDiv);
  }
}
