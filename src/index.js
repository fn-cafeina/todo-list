import "./index.css";

import init from "./js/init";
import pubSub from "./js/PubSub";
import addProject from "./js/add-project";
import render from "./js/render";

init();

pubSub.subscribe("add-project", addProject);
pubSub.subscribe("render", render);

const $addProjectBtn = document.getElementById("add-project-btn");
$addProjectBtn.addEventListener("click", () => {
  const projectTitle = document.getElementById("project-title").value;
  pubSub.publish("add-project", { title: projectTitle });
  pubSub.publish("render");
});
