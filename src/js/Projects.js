class Projects {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }

  deleteProject(index) {
    this.projects.splice(index, 1);
  }

  getSelectedProjectIndex() {
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].getSelectedState()) {
        return i;
      }
    }
  }
}

const projects = new Projects();

export default projects;
