import { combineReducers } from "redux";
import user from "./user/reducer";
import auth from "./auth/reducer";
import sentiment from "./sentiment/reducer";

export default combineReducers({
  user,
  auth,
  sentiment,
});
