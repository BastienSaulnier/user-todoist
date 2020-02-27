import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setTask } from "../../redux/actions/tasks.actions.js";
import "./index.scss";

class ActiveTaskLine extends React.Component {
  render() {
    const { setTask, taskById } = this.props;

    return (
      <li onClick={taskId => setTask(this.props.id)}>
        <div
          className={
            taskById[0].id === this.props.id
              ? "activeTaskLine selected"
              : "activeTaskLine"
          }
        >
          <NavLink to={`/${this.props.id}`}>
            <img
              src={
                this.props.taskUserPic !== ""
                  ? `${this.props.taskUserPic}`
                  : "/img/profile_pic.svg"
              }
              alt="Profile Pic"
              className="profilePic"
            />
            <div className="taskInfos">
              <div className="taskTitleAndUser">
                <p className="taskName">{this.props.taskName}</p>
                <p className="userName">{this.props.taskUser}</p>
              </div>
              <div className="taskDate">
                {this.props.taskDate === "" ? "" : this.props.taskDate}
              </div>
            </div>
          </NavLink>
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  taskById: state.tasks.taskById
});

const mapDispatchToProps = dispatch => ({
  setTask: taskId => dispatch(setTask(taskId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveTaskLine);
