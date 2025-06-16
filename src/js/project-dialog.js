import { $ } from "./utils";

const projectDialog = (option) => {
  const projectDialog = $("#project-dialog");

  if (option) {
    projectDialog.showModal();
  } else {
    projectDialog.close();
  }
};

export default projectDialog;
