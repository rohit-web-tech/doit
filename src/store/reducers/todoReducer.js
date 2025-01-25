import { getDataFromLocalStorage, setDataToLocalStorage } from "../../lib/localStorage.js";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_TODO, TOGGLE_IMPORTANT } from "../todos/todoType.js";

const initialState = getDataFromLocalStorage("todos") || [];

const todoReducer = (state = initialState, action) => {

  let newState = state;

  switch (action.type) {
    case ADD_TODO:
      newState = [...state, action.payload];
      setDataToLocalStorage("todos", newState);
      return newState;
    case DELETE_TODO:
      newState = state.filter((todo) => todo.id !== action.payload);
      setDataToLocalStorage("todos", newState);
      return newState;
    case UPDATE_TODO:
      newState = state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
      setDataToLocalStorage("todos", newState);
      return newState;
    case TOGGLE_TODO:
      newState = state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      setDataToLocalStorage("todos", newState);
      return newState;
    case TOGGLE_IMPORTANT:
      newState = state.map((todo) =>
        todo.id === action.payload ? { ...todo, important: !todo.important } : todo
      );
      setDataToLocalStorage("todos", newState);
      return newState;

    default:
      return state;
  }
};

export default todoReducer;
