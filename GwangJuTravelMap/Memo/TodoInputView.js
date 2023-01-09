export default function TodoInputView(callback) {
  const toDoForm = document.getElementById("toDoForm");
  const toDoInput = document.getElementById("toDoInput");

  toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = toDoInput.value;
    callback(inputValue);
    toDoInput.value = ``;
  });
}
