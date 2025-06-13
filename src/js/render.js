import projects from "./Projects";

import { cleanCtn } from "./utils";

const $projects = document.getElementById("projects");
const $todos = document.getElementById("todos");

function renderProjects() {
  for (const project of projects.projects) {
    const projectDiv = document.createElement("div");
    // const projectP = document.createElement("p");
    projectDiv.id = "project";
    // projectP.textContent = project.title;
    projectDiv.textContent = project.title;

    // projectDiv.appendChild(projectP);

    if (project.getRemovableState()) {
      const projectSpan = document.createElement("span");
      projectSpan.textContent = "x";
      projectDiv.appendChild(projectSpan);
    }

    $projects.appendChild(projectDiv);
  }
}

function renderTodos() {
  for (const project of projects.projects) {
    if (project.getSelectedState()) {
      const todos = project.todos;

      if (todos.length) {
        for (const todo of todos) {
          const todoDiv = document.createElement("div");
          const todoTitleP = document.createElement("p");
          const todoDescriptionP = document.createElement("p");
          const todoPrioritySpan = document.createElement("span");
          const todoDueDateSpan = document.createElement("span");

          todoDiv.id = "todo";
          todoTitleP.textContent = todo.title;

          if (todo.description) {
            todoDescriptionP.textContent = todo.description;
          } else {
            todoDescriptionP.textContent = "No description";
          }

          switch (parseInt(todo.priority)) {
            case 0:
              todoPrioritySpan.textContent = "Priority: High";
              break;
            case 1:
              todoPrioritySpan.textContent = "Normal";
              break;
            case 2:
              todoPrioritySpan.textContent = "Low";
              break;
          }

          todoDueDateSpan.textContent = todo.duedate;

          todoDiv.append(
            todoTitleP,
            todoDescriptionP,
            todoPrioritySpan,
            todoDueDateSpan,
          );

          $todos.appendChild(todoDiv);
        }
      }
    }
  }
}

export default function render() {
  cleanCtn($todos);
  cleanCtn($projects);
  renderProjects();
  renderTodos();
}
