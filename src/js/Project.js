export default class Project {
  #isRemovable = true;

  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  getRemovableState() {
    return this.#isRemovable;
  }

  setRemovableState(option) {
    this.#isRemovable = option;
  }
}
