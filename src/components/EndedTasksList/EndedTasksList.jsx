import React from "react";
import EndedTaskLine from "../EndedTaskLine/EndedTaskLine";
import "./EndedTasksList.scss";

export default function EndedTasksList() {
  return (
    <ul className="endedTaskList">
      <EndedTaskLine />
    </ul>
  );
}
