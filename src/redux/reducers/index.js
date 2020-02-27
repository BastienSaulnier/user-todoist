import { combineReducers } from "redux";
import users from "./users.reducer.js";
import tasks from "./tasks.reducer.js";
import menu from "./menu.reducer.js";

export default combineReducers({ users, tasks, menu });
