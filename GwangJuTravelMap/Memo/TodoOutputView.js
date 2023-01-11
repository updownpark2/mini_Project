export const TodoOutputView = {
  paintTodo(savedTodo) {
    const ul = document.querySelector("ul");
    ul.innerHTML = `${savedTodo
      .map((todo, index) => `<li id=${index}>${todo}<button>삭제</button></li>`)
      .join("")}`;
  },
};