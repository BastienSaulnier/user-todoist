import React from "react";
import { connect } from "react-redux";
import "./index.scss";

class EndedTasksTitle extends React.Component {
  render() {
    const { tasks } = this.props;

    return (
      <div className="endedTasksTitle">
        <p>Taches terminées</p>
        <p>
          {tasks.filter(task => {
            return task.isResolved === true;
          }).length === 0
            ? "0"
            : tasks.filter(task => {
                return task.isResolved === true;
              }).length}
        </p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  lastUpdate: state.tasks.lastUpdate
});

export default connect(mapStateToProps)(EndedTasksTitle);
