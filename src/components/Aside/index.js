import React from "react";
import AllTasks from "../AllTasks/index.js";
import AddTaskLine from "../AddTaskLine/index.js";
import ActiveTaskList from "../ActiveTaskList/index.js";
import EndedTasksTitle from "../EndedTasksTitle/index.js";
import EndedTasksList from "../EndedTasksList/index.js";
import "./index.scss";

export default function Aside() {
  return (
    <aside>
      <AllTasks />
      <AddTaskLine />
      <div className="asideWrapper">
        <ActiveTaskList />
        <EndedTasksTitle />
        <EndedTasksList />
      </div>
    </aside>
  );
}
