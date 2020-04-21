export const todoInputHandler = text => {
  return {
    type: "ON_CHANGE_TODO_INPUT",
    payload: text
  };
};

export const addTodoInputHandler = text => {
  return {
    type: "ADD_TODO_INPUT",
    payload: text
  };
};
