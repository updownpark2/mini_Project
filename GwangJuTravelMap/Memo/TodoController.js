import TodoInputView from "./TodoInputView.js";

export default class TodoController {
  getTodo() {
    TodoInputView((inputValue) => {
      const toDo = inputValue;
      console.log(toDo);
    });
  }
}
