import { TodoOutputView } from "./TodoOutputView.js";
import { TodoInputView } from "./TodoInputView.js";

export default class TodoController {
  #todo;

  todolist() {
    this.#paintTodo();
    this.#getTodo();
  }

  #getTodo() {
    TodoInputView.getTodo((inputValue) => {
      this.#todo = inputValue;
      this.#saveLocal(this.#todo);
    });
  }

  #saveLocal(todo) {
    const savedTodo = JSON.parse(localStorage.getItem("todolist"));

    if (savedTodo !== null) {
      localStorage.setItem("todolist", JSON.stringify([...savedTodo, todo]));
    }
    if (savedTodo === null) {
      localStorage.setItem("todolist", JSON.stringify([todo]));
    }

    this.#paintTodo();
  }

  #paintTodo() {
    const savedTodo = JSON.parse(localStorage.getItem("todolist"));
    if (savedTodo !== null) {
      TodoOutputView.paintTodo(savedTodo);
    }
  }
}
