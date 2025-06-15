export default class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];
    this.isSelected = false;
    this.isRemovable = true;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
  }

  getRemovableState() {
    return this.isRemovable;
  }

  setRemovableState(option) {
    this.isRemovable = option;
  }

  getSelectedState() {
    return this.isSelected;
  }

  setSelectedState(option) {
    this.isSelected = option;
  }
}
