import React from "react";
import AssignButton from "../AssignButton/AssignButton";
import UserList from "../UserList/UserList";
import CalendarButton from "../CalendarButton/CalendarButton";
import Calendar from "../Calendar/Calendar";
import "./AttributesButtons.scss";

export default function AttributesButtons() {
  return (
    <div className="attributesButtons">
      <AssignButton />
      <UserList />
      <CalendarButton />
      <Calendar />
    </div>
  );
}
