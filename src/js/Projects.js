class Projects {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }

  removeProject(index) {
    this.projects.splice(index, 1);
  }

  removeAllProjects() {
    this.projects = [];
  }

  getSelectedProjectIndex() {
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].getSelectedState()) {
        return i;
      }
    }
  }

  deselectAllProjects() {
    if (this.projects.length) {
      this.projects.forEach((project) => {
        project.setSelectedState(false);
      });
    }
  }
}

const projects = new Projects();

export default projects;
