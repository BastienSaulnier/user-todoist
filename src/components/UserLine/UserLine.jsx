import React from "react";
import "./UserLine.scss";

export default function UserLine() {
  return (
    <li className="userLine">
      <img
        src="/img/profile_pic.svg"
        alt="Profile Pic"
        className="profilePic"
      />
      <div className="userInfos">
        <div className="userNameAndEmail">
          <p className="userName">User Name</p>
          <p className="userEmail">user@email@email.com</p>
        </div>
      </div>
    </li>
  );
}
