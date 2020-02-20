import React from "react";
import "./EndedTaskLine.scss";

export default function EndedTaskLine(props) {
  return (
    <li className={`endedTaskLine ${props.selected}`}>
      <img src="/img/ticked_pic.svg" alt="Ticked Pic" className="tickedPic" />
      <div className="taskInfos">
        <div className="taskTitleAndUser">
          <p className="taskName">Titre de la tache</p>
          <p className="userName">User Name</p>
        </div>
        <div className="taskDate">Aujourd'hui</div>
      </div>
    </li>
  );
}
