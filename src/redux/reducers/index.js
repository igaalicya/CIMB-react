import { combineReducers } from "redux";
import todoReducer from "./todo";
import userReducer from "./user";
import userLogin from "./userLogin";

export default combineReducers({
  todo: todoReducer,
  user: userReducer,
  userLogin
});
