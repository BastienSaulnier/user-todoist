import React from "react";
import "./ActiveTaskLine.scss";

export default function ActiveTaskLine(props) {
  return (
    <li className={`activeTaskLine ${props.selected}`}>
      <img
        src="/img/profile_pic.svg"
        alt="Profile Pic"
        className="profilePic"
      />
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
