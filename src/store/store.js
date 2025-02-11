import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "./reducers/userReducer.js";
import todoReducer from "./reducers/todoReducer.js";
import weatherReducer from "./reducers/weatherReducer.js";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  user: userReducer,
  todos: todoReducer,
  weather: weatherReducer
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;