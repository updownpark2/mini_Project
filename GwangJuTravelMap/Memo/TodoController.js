import { TodoOutputView } from "./TodoOutputView.js";
import { TodoInputView } from "./TodoInputView.js";
import { TodoModel } from "./TodoModel.js";

export default class TodoController {
  #todo;
  #todolist = JSON.parse(localStorage.getItem("todolist"));

  #setNewTodolist() {
    this.#todolist = JSON.parse(localStorage.getItem("todolist"));
  }

  todolist() {
    this.#paintTodo();
    this.#getTodo();
  }

  #getTodo() {
    TodoInputView.inputSubmit((inputValue) => {
      this.#todo = inputValue;
      this.#saveLocal(this.#todo);
    });
  }

  #saveLocal(todo) {
    this.#setNewTodolist();

    if (this.#todolist !== null) {
      localStorage.setItem(
        "todolist",
        JSON.stringify([...this.#todolist, todo])
      );
    }
    if (this.#todolist === null) {
      localStorage.setItem("todolist", JSON.stringify([todo]));
    }

    this.#paintTodo();
  }

  #paintTodo() {
    this.#setNewTodolist();

    if (this.#todolist !== null) {
      TodoOutputView.paintTodo(this.#todolist);
    }

    this.#getLiId();
  }

  #getLiId() {
    TodoInputView.buttonClick((event) => {
      const LiId = event.target.parentElement.id;

      this.#setNewTodolist();
      this.#removeTodo(this.#todolist, LiId);
    });
  }

  #removeTodo(savedTodo, LiId) {
    const removedTodo = TodoModel.filterRemove(savedTodo, LiId);
    localStorage.setItem("todolist", JSON.stringify(removedTodo));

    this.#paintTodo();
  }
}
