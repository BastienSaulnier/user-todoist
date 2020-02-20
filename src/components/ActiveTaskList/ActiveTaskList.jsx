import React from "react";
import ActiveTaskLine from "../ActiveTaskLine/ActiveTaskLine";
import "./ActiveTaskList.scss";

export default function ActiveTaskList() {
  return (
    <ul className="activeTaskList">
      <ActiveTaskLine />
      <ActiveTaskLine selected="selected" />
    </ul>
  );
}
