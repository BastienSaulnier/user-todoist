import React from "react";
import { connect } from "react-redux";
import AddTaskButton from "../AddTaskButton/index.js";
import "./index.scss";

class SubmitButtons extends React.Component {
  render() {
    const { taskById } = this.props;

    return (
      <div className="submitButtonsContainer">
        {Object.keys(taskById[0]).length === 0 &&
        taskById[0].constructor === Object ? (
          <AddTaskButton />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  taskById: state.tasks.taskById
});

export default connect(mapStateToProps)(SubmitButtons);
