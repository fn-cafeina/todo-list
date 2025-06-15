export default class Todo {
  constructor(title, priority, duedate) {
    this.title = title;
    this.priority = priority;
    this.duedate = duedate;
    this.isCompleted = false;
  }

  getCompletedState() {
    return this.isCompleted;
  }

  toggleCompletedState() {
    this.isCompleted = !this.isCompleted;
  }
}
