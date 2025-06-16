import pubSub from "./PubSub";

import addProject from "./add-project";
import addTodo from "./add-todo";

import renderProjects from "./render-projects";
import renderTodos from "./render-todos";

import projectDialog from "./project-dialog";
import todoDialog from "./todo-dialog";

const initSubscribers = () => {
  pubSub.subscribe("add-project", addProject);
  pubSub.subscribe("add-todo", addTodo);
  pubSub.subscribe("render-projects", renderProjects);
  pubSub.subscribe("render-todos", renderTodos);
  pubSub.subscribe("show-project-dialog", () => projectDialog(true));
  pubSub.subscribe("close-project-dialog", () => projectDialog(false));
  pubSub.subscribe("show-todo-dialog", () => todoDialog(true));
  pubSub.subscribe("close-todo-dialog", () => todoDialog(false));
};

export default initSubscribers;
