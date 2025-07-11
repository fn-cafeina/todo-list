import { $ } from "./utils";

const getTodoData = () => {
  const todoTitle = $("#todo-title").value.trim();

  const tsp = $("#todo-priority");
  const todoPriority = tsp.options[tsp.selectedIndex].value;

  const todoDueDate = $("#todo-duedate").value;

  return { todoTitle, todoPriority, todoDueDate };
};

export default getTodoData;
