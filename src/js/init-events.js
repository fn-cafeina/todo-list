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
  const { todoTitle, todoDescription, todoPriority, todoDueDate } =
    getTodoData();

  pubSub.publish("add-todo", {
    title: todoTitle,
    description: todoDescription,
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

const initEvents = () => {
  const addProjectBtn = $("#add-project-btn");
  const addTodoBtn = $("#add-todo-btn");

  const projectsCtn = $("#l-projects");

  addProjectBtn.addEventListener("click", addProjectEvent);
  addTodoBtn.addEventListener("click", addTodoEvent);

  projectsCtn.addEventListener("click", selectProjectEvent);
};

export default initEvents;
