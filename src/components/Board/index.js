import React from "react";
import TaskTitle from "../TaskTitle/index.js";
import AttributesButtons from "../AttributesButtons/index.js";
import CommentForm from "../CommentForm/index.js";
import SubmitButtons from "../SubmitButtons/index.js";
import { withRouter } from "react-router-dom";
import "./index.scss";

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        {this.props.location.pathname === "/" ? (
          <div className="welcome">Bienvenue !</div>
        ) : (
          <TaskTitle />
        )}
        <AttributesButtons />
        <CommentForm />
        <SubmitButtons />
      </div>
    );
  }
}

export default withRouter(Board);
