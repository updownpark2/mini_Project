import TodoInputView from "./TodoInputView.js";

export default class TodoController {
  #todo;
  getTodo() {
    TodoInputView((inputValue) => {
      this.#todo = inputValue;
      this.saveLocal(this.#todo);
    });
  }

  saveLocal(todo) {
    const savedTodo = JSON.parse(localStorage.getItem("todolist"));

    if (savedTodo === null) {
      localStorage.setItem("todolist", JSON.stringify([todo]));
      return;
    }
    localStorage.setItem(`todolist`, JSON.stringify([todo, ...savedTodo]));
  }
}
