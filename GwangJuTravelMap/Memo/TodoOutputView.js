export const TodoOutputView = {
  paintTodo(savedTodo) {
    const ul = document.querySelector("ul");

    ul.innerHTML = `${savedTodo
      .map(
        (todo, index) =>
          `<li id=${index}><input class="check" type="checkbox"><span>${todo}</span><button class="BUTTON">삭제</button></li>`
      )
      .join("")}`;
  },
};
