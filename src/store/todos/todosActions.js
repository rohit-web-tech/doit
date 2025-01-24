import { ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_TODO, TOGGLE_IMPORTANT } from "./todoType";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const toggleImportant = (id) => ({
  type: TOGGLE_IMPORTANT,
  payload: id,
});