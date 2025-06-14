import pubSub from "./PubSub";

import addProject from "./add-project";
import addTodo from "./add-todo";

import renderProjects from "./render-projects";
import renderTodos from "./render-todos";

const initSubscribers = () => {
  pubSub.subscribe("add-project", addProject);
  pubSub.subscribe("add-todo", addTodo);
  pubSub.subscribe("render-projects", renderProjects);
  pubSub.subscribe("render-todos", renderTodos);
};

export default initSubscribers;
