import pubSub from "./PubSub";

import projects from "./Projects";

import { saveProjectsToLocalStorage } from "./local-storage";

import getProjectData from "./get-project-data";
import getTodoData from "./get-todo-data";

import { $ } from "./utils";

const addProjectEvent = () => {
  const { projectTitle } = getProjectData();

  pubSub.publish("add-project", { title: projectTitle });

  pubSub.publish("render-projects");
  pubSub.publish("render-todos");
  pubSub.publish("close-project-dialog");

  saveProjectsToLocalStorage();
};

const addTodoEvent = () => {
  const { todoTitle, todoPriority, todoDueDate } = getTodoData();

  pubSub.publish("add-todo", {
    title: todoTitle,
    priority: todoPriority,
    duedate: todoDueDate,
  });

  pubSub.publish("render-projects");
  pubSub.publish("render-todos");
  pubSub.publish("close-todo-dialog");

  saveProjectsToLocalStorage();
};

const selectProjectEvent = (event) => {
  const projectsCtn = $("#projects");

  if (event.target.id === "project") {
    const idx = [...projectsCtn.children].indexOf(event.target);

    projects.deselectAllProjects();
    projects.projects[idx].setSelectedState(true);

    pubSub.publish("render-projects");
    pubSub.publish("render-todos");
  }
};

const removeProjectEvent = (event) => {
  const projectsCtn = $("#projects");

  if (event.target.id === "remove-project-btn") {
    const pn = event.target.parentNode;

    const idx = [...projectsCtn.children].indexOf(pn);

    projects.removeProject(idx);
    projects.deselectAllProjects();
    projects.projects[0].setSelectedState(true);

    pubSub.publish("render-projects");
    pubSub.publish("render-todos");
  }

  saveProjectsToLocalStorage();
};

const removeTodoEvent = (event) => {
  const todosCtn = $("#todos");

  if (event.target.id === "remove-todo-btn") {
    const pn = event.target.parentNode;

    const idx = [...todosCtn.children].indexOf(pn);

    projects.projects[projects.getSelectedProjectIndex()].removeTodo(idx);

    pubSub.publish("render-projects");
    pubSub.publish("render-todos");
  }

  saveProjectsToLocalStorage();
};

const markTodoComplete = (event) => {
  const todosCtn = $("#todos");

  if (event.target.id === "todo-checkbox") {
    const pn = event.target.parentNode;

    const idx = [...todosCtn.children].indexOf(pn);

    projects.projects[projects.getSelectedProjectIndex()].todos[
      idx
    ].toggleCompletedState();

    pubSub.publish("render-projects");
    pubSub.publish("render-todos");
  }

  saveProjectsToLocalStorage();
};

const initEvents = () => {
  const addProjectBtn = $("#add-project-btn");
  const addTodoBtn = $("#add-todo-btn");

  const projectsCtn = $("#projects");
  const todosCtn = $("#todos");

  addProjectBtn.addEventListener("click", addProjectEvent);
  addTodoBtn.addEventListener("click", addTodoEvent);

  projectsCtn.addEventListener("click", selectProjectEvent);
  projectsCtn.addEventListener("click", removeProjectEvent);

  todosCtn.addEventListener("click", removeTodoEvent);
  todosCtn.addEventListener("click", markTodoComplete);

  $("#sidebar-add-project-btn").addEventListener("click", () => {
    pubSub.publish("show-project-dialog");
  });

  $("#add-project-btn-cancel").addEventListener("click", () => {
    pubSub.publish("close-project-dialog");
  });

  $("#main-add-todo-btn").addEventListener("click", () => {
    pubSub.publish("show-todo-dialog");
  });

  $("#add-todo-btn-cancel").addEventListener("click", () => {
    pubSub.publish("close-todo-dialog");
  });
};

export default initEvents;
