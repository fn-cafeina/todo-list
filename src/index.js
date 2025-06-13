import "./index.css";

import init from "./js/init";
import pubSub from "./js/PubSub";
import addProject from "./js/add-project";
import addTodo from "./js/add-todo";
import render from "./js/render";

init();

pubSub.subscribe("add-project", addProject);
pubSub.subscribe("add-todo", addTodo);
pubSub.subscribe("render", render);

const $addProjectBtn = document.getElementById("add-project-btn");
$addProjectBtn.addEventListener("click", () => {
  const projectTitle = document.getElementById("project-title").value;
  pubSub.publish("add-project", { title: projectTitle });
  pubSub.publish("render");
});

const $addTodoBtn = document.getElementById("add-todo-btn");
$addTodoBtn.addEventListener("click", () => {
  const todoTitle = document.getElementById("todo-title").value;
  const todoDescription = document.getElementById("todo-description").value;
  const todoSelect = document.getElementById("todo-priority");
  const todoPriority = todoSelect.options[todoSelect.selectedIndex].value;
  const todoDueDate = document.getElementById("todo-duedate").value;

  pubSub.publish("add-todo", {
    title: todoTitle,
    description: todoDescription,
    priority: todoPriority,
    duedate: todoDueDate,
  });

  pubSub.publish("render");
});
