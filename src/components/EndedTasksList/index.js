import React from "react";
import { connect } from "react-redux";
import EndedTaskLine from "../EndedTaskLine/index.js";
import "./index.scss";

class EndedTasksList extends React.Component {
  render() {
    const { tasks } = this.props;

    return (
      <ul className="endedTaskList">
        {tasks
          .filter(task => {
            return task.isResolved === true;
          })
          .map((task, key) => {
            return <EndedTaskLine key={key} {...task} />;
          })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  lastUpdate: state.tasks.lastUpdate
});

export default connect(mapStateToProps)(EndedTasksList);
