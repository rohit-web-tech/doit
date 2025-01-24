import { LOGIN, LOGOUT, SET_USER } from "./userActionTypes";

export const loginUser = (user) => ({
  type: LOGIN,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
