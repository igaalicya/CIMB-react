import { combineReducers } from "redux";
import todo from "./todo";
import user from "./user";
import userLogin from "./userLogin";

export default combineReducers({
  haha: todo,
  user,
  userLogin
});
