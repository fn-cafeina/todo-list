import { $ } from "./utils";

const todoDialog = (option) => {
  const todoDialog = $("#todo-dialog");

  if (option) {
    todoDialog.showModal();
  } else {
    todoDialog.close();
  }
};

export default todoDialog;
