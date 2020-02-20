import React from "react";
import UserLine from "../UserLine/UserLine";
import "./UserList.scss";

export default function UserList() {
  return (
    <ul className="userList">
      <UserLine />
      <UserLine />
      <UserLine />
    </ul>
  );
}
