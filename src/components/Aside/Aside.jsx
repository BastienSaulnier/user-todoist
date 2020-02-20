import React from "react";
import AllTasks from "../AllTasks/AllTasks";
import AddTaskButton from "../AddTaskButton/AddTaskButton";
import ActiveTaskList from "../ActiveTaskList/ActiveTaskList";
import EndedTasksTitle from "../EndedTasksTitle/EndedTasksTitle";
import EndedTasksList from "../EndedTasksList/EndedTasksList";
import "./Aside.scss";

export default function Aside() {
  return (
    <aside>
      <AllTasks />
      <AddTaskButton />
      <ActiveTaskList />
      <EndedTasksTitle />
      <EndedTasksList />
    </aside>
  );
}
