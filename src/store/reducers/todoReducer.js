import { ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_TODO, TOGGLE_IMPORTANT } from "../todos/todoType.js";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        ),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case TOGGLE_IMPORTANT:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, important: !todo.important } : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
