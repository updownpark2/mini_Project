import { TodoOutputView } from "./TodoOutputView.js";
import { TodoInputView } from "./TodoInputView.js";

export default class TodoController {
  #todo = [];
  #todolist = JSON.parse(localStorage.getItem("todolist"));

  todolist() {
    this.#paintTodo(this.#todolist);
    this.#getTodo();
  }

  #getTodo() {
    TodoInputView.getTodo((inputValue) => {
      this.#todo.push(inputValue);
      this.#saveLocal(this.#todo);
    });
  }

  #saveLocal(todo) {
    localStorage.setItem("todolist", JSON.stringify(todo));
  }

  #paintTodo(todolist) {
    TodoOutputView.paintTodo(todolist);
  }
}
