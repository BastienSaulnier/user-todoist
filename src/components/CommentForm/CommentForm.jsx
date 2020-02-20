import React from "react";
import "./CommentForm.scss";

export default function CommentForm() {
  return (
    <div className="commentForm">
      <p>
        <img src="/img/comment_icon.png" alt="Comment Icon" />
        Description
      </p>
      <textarea
        name="comment_text"
        id="comment_text"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
}
