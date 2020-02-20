import React from "react";
import "./TaskTitle.scss";

export default function TaskTitle() {
  return (
    <div className="taskTitle">
      <h2>Titre de la tache selectionnée</h2>
      <button>
        <img src="/img/tick.svg" alt="" /> Marqué comme terminé
      </button>
    </div>
  );
}
