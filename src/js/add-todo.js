import projects from "./Projects";
import Todo from "./Todo";

import { errorMsg } from "./utils";

export default function addTodo(todoData) {
  if ((todoData.title, todoData.duedate)) {
    const newTodo = new Todo(
      todoData.title,
      todoData.priority,
      todoData.duedate,
    );

    projects.projects[projects.getSelectedProjectIndex()].addTodo(newTodo);
  } else errorMsg("Please enter a valid todo data.");
}
