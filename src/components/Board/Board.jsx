import React from "react";
import TaskTitle from "../TaskTitle/TaskTitle";
import AttributesButtons from "../AttributesButtons/AttributesButtons";
import CommentForm from "../CommentForm/CommentForm";
import CommentButton from "../CommentButton/CommentButton";
import "./Board.scss";

export default function Board() {
  return (
    <div className="board">
      <TaskTitle />
      <AttributesButtons />
      <CommentForm />
      <CommentButton />
    </div>
  );
}
