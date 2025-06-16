import projects from "./Projects";

import { cleanCtn, createElement, $ } from "./utils";

const getTodoPriority = (priority) => {
  const priorityInt = parseInt(priority);

  if (priorityInt === 2) return { class: "is-low", priority: "Low" };
  if (priorityInt === 1) return { class: "is-normal", priority: "Normal" };
  if (priorityInt === 0) return { class: "is-high", priority: "High" };
};

const renderTodos = () => {
  const todosCtn = $("#todos");

  cleanCtn(todosCtn);

  projects.projects[projects.getSelectedProjectIndex()].todos.forEach(
    (todo) => {
      const todoDiv = createElement({
        tagName: "div",
        text: "",
        classes: todo.getCompletedState() ? ["is-completed"] : [],
        id: "todo",
      });

      const todoTitleP = createElement({
        tagName: "p",
        text: todo.title,
        classes: [],
        id: "",
      });

      const todoPrioritySpan = createElement({
        tagName: "span",
        text: `Priority: ${getTodoPriority(todo.priority).priority}`,
        classes: [getTodoPriority(todo.priority).class],
        id: "",
      });

      const todoDueDateSpan = createElement({
        tagName: "span",
        text: todo.duedate,
        classes: [],
        id: "",
      });

      const todoCheckbox = createElement({
        tagName: "input",
        text: "",
        classes: [],
        id: "todo-checkbox",
      });

      todoCheckbox.setAttribute("type", "checkbox");

      if (todo.getCompletedState()) {
        todoCheckbox.checked = true;
      }

      const todoSpanX = createElement({
        tagName: "span",
        text: "x",
        classes: [],
        id: "remove-todo-btn",
      });

      todoDiv.append(
        todoCheckbox,
        todoTitleP,
        todoPrioritySpan,
        todoDueDateSpan,
        todoSpanX,
      );

      todosCtn.appendChild(todoDiv);
    },
  );
};

export default renderTodos;
