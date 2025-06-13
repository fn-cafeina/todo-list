export default class Project {
  #isRemovable = true;
  #isSelected = false;

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

  getSelectedState() {
    return this.#isSelected;
  }

  setSelectedState(option) {
    this.#isSelected = option;
  }
}
