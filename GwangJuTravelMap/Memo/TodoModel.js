export const TodoModel = {
  filterRemove(savedTodo, LiId) {
    const filteredTodo = savedTodo.filter(
      (item, index) => index !== parseInt(LiId)
    );

    return filteredTodo;
  },
};
