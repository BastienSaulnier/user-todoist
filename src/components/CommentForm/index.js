import React from "react";
import { connect } from "react-redux";
import { setTaskComment } from "../../redux/actions/tasks.actions.js";
import "./index.scss";

class CommentForm extends React.Component {
  render() {
    const { taskById, setTaskComment } = this.props;

    return (
      <div className="commentForm">
        <p>
          <img src="/img/comment_icon.png" alt="Comment Icon" />
          Description
        </p>
        {Object.keys(taskById[0]).length === 0 &&
        taskById[0].constructor === Object ? (
          <textarea
            name="comment_text"
            id="comment_text"
            cols="30"
            rows="10"
            placeholder="Tapez votre texte ici."
            onChange={event => setTaskComment(event.target.value)}
            className={`addTaskForm ${this.props.status}`}
          ></textarea>
        ) : (
          <div className="taskComment">
            <textarea
              name="comment_text"
              id="comment_text"
              cols="30"
              rows="10"
              placeholder="Tapez votre texte ici."
              value={taskById[0].taskComment}
              readOnly
            ></textarea>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  taskById: state.tasks.taskById
});

const mapDispatchToProps = dispatch => ({
  setTaskComment: newComment => dispatch(setTaskComment(newComment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
