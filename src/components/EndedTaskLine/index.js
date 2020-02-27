import React from "react";
import { connect } from "react-redux";
import { setTask } from "../../redux/actions/tasks.actions.js";
import { NavLink } from "react-router-dom";
import "./index.scss";

class EndedTaskLine extends React.Component {
  render() {
    const { setTask, taskById } = this.props;

    return (
      <li onClick={taskId => setTask(this.props.id)}>
        <div
          className={
            taskById[0].id === this.props.id
              ? "endedTaskLine selected"
              : "endedTaskLine"
          }
        >
          <NavLink to={`/${this.props.id}`}>
            <img
              src="/img/ticked_pic.svg"
              alt="Ticked Pic"
              className="tickedPic"
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

export default connect(mapStateToProps, mapDispatchToProps)(EndedTaskLine);
