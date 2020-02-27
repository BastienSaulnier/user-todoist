import React from "react";
import { connect } from "react-redux";
import { getAllTasks } from "../../redux/actions/tasks.actions.js";
import ActiveTaskLine from "../ActiveTaskLine/index.js";
import "./index.scss";

class ActiveTaskList extends React.Component {
  componentDidMount() {
    const { getAllTasks } = this.props;
    getAllTasks();
  }

  render() {
    const { tasks } = this.props;

    return (
      <ul className="activeTaskList">
        {tasks
          .filter(task => {
            return task.isResolved === false;
          })
          .map((task, key) => {
            return <ActiveTaskLine key={key} {...task} />;
          })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  lastUpdate: state.tasks.lastUpdate
});

const mapDispatchToProps = dispatch => ({
  getAllTasks: () => dispatch(getAllTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveTaskList);
