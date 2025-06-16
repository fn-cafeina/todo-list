import projects from "./Projects";
import Todo from "./Todo";

import pubSub from "./PubSub";

import { errorMsg } from "./utils";

const addTodo = (todoData) => {
  if (todoData.title && todoData.duedate) {
    const newTodo = new Todo(
      todoData.title,
      todoData.priority,
      todoData.duedate,
    );

    projects.projects[projects.getSelectedProjectIndex()].addTodo(newTodo);

    pubSub.publish("close-todo-dialog");
  } else errorMsg("Please enter a valid todo data.");
};

export default addTodo;
