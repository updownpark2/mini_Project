export const TodoInputView = {
  inputSubmit(callback) {
    const toDoForm = document.getElementById("toDoForm");
    const toDoInput = document.getElementById("toDoInput");

    toDoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const inputValue = toDoInput.value;
      callback(inputValue);
      toDoInput.value = ``;
    });
  },

  buttonClick(callback) {
    const button = document.querySelectorAll(".BUTTON");
    button.forEach((item) => {
      item.addEventListener("click", (event) => {
        callback(event);
      });
    });
  }, // button이 계속 변하는게 문제..

  boxCheck(callback) {
    const checkbox = document.querySelectorAll(".check");
    checkbox.forEach((item) => {
      item.addEventListener("click", (event) => {
        callback(event);
      });
    });
  },
};
