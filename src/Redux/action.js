import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOOGLE_TODO } from "./actionTypes";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOOGLE_TODO,
    payload,
  };
};
export const editTodo = (payload) => {
  return {
    type: EDIT_TODO,
    payload,
  };
};
