import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer.js";
import todoReducer from "./reducers/todoReducer.js";
import weatherReducer from "./reducers/weatherReducer.js";

const rootReducer = combineReducers({
  user: userReducer,
  todos: todoReducer,
  weather: weatherReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;