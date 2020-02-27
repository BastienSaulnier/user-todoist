import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  setResolved,
  setTaskName,
  update
} from "../../redux/actions/tasks.actions.js";
import "./index.scss";

class TaskTitle extends React.Component {
  render() {
    const { taskById, taskName } = this.props;
    const { setResolved, setTaskName, update } = this.props;

    return (
      <div className="taskTitle">
        {Object.keys(taskById[0]).length === 0 &&
        taskById[0].constructor === Object ? (
          <input
            type="text"
            placeholder="Nommez et décrivez votre tache puis ajoutez..."
            value={taskName}
            onChange={event => setTaskName(event.target.value)}
          />
        ) : (
          <h2>{taskName}</h2>
        )}

        {Object.keys(taskById[0]).length === 0 &&
        taskById[0].constructor === Object ? null : (
          <button
            className={taskById[0].isResolved === true ? "isResolved" : null}
            onClick={(isResolved, taskId) => {
              setResolved(!taskById[0].isResolved, taskById[0].id);
              update();
            }}
          >
            <img src="/img/tick.svg" alt="" />
            Marqué comme terminé
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  taskById: state.tasks.taskById,
  taskName: state.tasks.pendingTask.taskName
});

const mapDispatchToProps = dispatch => ({
  setResolved: (isResolved, taskId) =>
    dispatch(setResolved(isResolved, taskId)),
  setTaskName: newName => dispatch(setTaskName(newName)),
  update: () => dispatch(update())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TaskTitle)
);
