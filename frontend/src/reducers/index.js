import { combineReducers } from "redux";
import fileReducer from "./fileReducer";
import messageReducer from "./messageReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  files: fileReducer,
  messages: messageReducer,
});

export default rootReducer;
