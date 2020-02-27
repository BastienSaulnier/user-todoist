import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addTask, setTask } from "../../redux/actions/tasks.actions.js";

import "./index.scss";

class Home extends React.Component {
  handleClick = () => {
    const { tasks } = this.props;
    this.props.history.push(`/${tasks.length + 1}`);
  };

  render() {
    const { addTask, setTask, tasks, pendingTask } = this.props;

    return (
      <button
        className="addTaskButton"
        onClick={() =>
          pendingTask.taskName === "" || pendingTask.taskComment === ""
            ? alert(
                "Veuillez indiquer un NOM et une DESCRIPTION pour votre nouvelle tache"
              )
            : (addTask(tasks.length + 1),
              setTask(tasks.length + 1),
              this.handleClick())
        }
      >
        Ajouter tache
      </button>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  pendingTask: state.tasks.pendingTask
});

const mapDispatchToProps = dispatch => ({
  addTask: newId => dispatch(addTask(newId)),
  setTask: taskId => dispatch(setTask(taskId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
