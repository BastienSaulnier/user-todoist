import React from "react";
import { connect } from "react-redux";
import AssignButton from "../AssignButton/index.js";
import UserList from "../UserList/index.js";
import CalendarButton from "../CalendarButton/index.js";
import "./index.scss";

class AttributesButtons extends React.Component {
  render() {
    const { taskById } = this.props;

    return (
      <div className="attributesButtons">
        <AssignButton
          buttonState={
            (Object.keys(taskById[0]).length === 0 &&
              taskById[0].constructor === Object) ||
            taskById[0].isResolved === true
              ? "inactiveAssign"
              : "activeAssign"
          }
        />
        <UserList />
        <CalendarButton
          buttonState={
            (Object.keys(taskById[0]).length === 0 &&
              taskById[0].constructor === Object) ||
            taskById[0].isResolved === true
              ? "inactiveCalendar"
              : "activeCalendar"
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  taskById: state.tasks.taskById
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AttributesButtons);
