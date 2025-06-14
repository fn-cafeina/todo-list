import pubSub from "./PubSub";

import projects from "./Projects";

import getProjectData from "./get-project-data";
import getTodoData from "./get-todo-data";

import { $ } from "./utils";

const addProjectEvent = () => {
  const { projectTitle } = getProjectData();

  pubSub.publish("add-project", { title: projectTitle });

  pubSub.publish("render-projects");
  pubSub.publish("render-todos");
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
};

const selectProjectEvent = (event) => {
  const projectsCtn = $("#l-projects");

  if (event.target.id === "project") {
    const idx = [...projectsCtn.children].indexOf(event.target);

    projects.deselectAllProjects();
    projects.projects[idx].setSelectedState(true);

    pubSub.publish("render-projects");
    pubSub.publish("render-todos");
  }
};

const removeProjectEvent = (event) => {
  const projectsCtn = $("#l-projects");

  if (event.target.id === "remove-project-btn") {
    const pn = event.target.parentNode;

    const idx = [...projectsCtn.children].indexOf(pn);

    projects.removeProject(idx);
    projects.deselectAllProjects();
    projects.projects[0].setSelectedState(true);

    pubSub.publish("render-projects");
    pubSub.publish("render-todos");
  }
};

const removeTodoEvent = (event) => {
  const todosCtn = $("#l-todos");

  if (event.target.id === "remove-todo-btn") {
    const pn = event.target.parentNode;

    const idx = [...todosCtn.children].indexOf(pn);

    projects.projects[projects.getSelectedProjectIndex()].removeTodo(idx);

    pubSub.publish("render-projects");
    pubSub.publish("render-todos");
  }
};

const initEvents = () => {
  const addProjectBtn = $("#add-project-btn");
  const addTodoBtn = $("#add-todo-btn");

  const projectsCtn = $("#l-projects");
  const todosCtn = $("#l-todos");

  addProjectBtn.addEventListener("click", addProjectEvent);
  addTodoBtn.addEventListener("click", addTodoEvent);

  projectsCtn.addEventListener("click", selectProjectEvent);
  projectsCtn.addEventListener("click", removeProjectEvent);

  todosCtn.addEventListener("click", removeTodoEvent);
};

export default initEvents;
