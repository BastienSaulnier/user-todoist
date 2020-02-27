import React from "react";
import { connect } from "react-redux";
import { assignDeadline, update } from "../../redux/actions/tasks.actions.js";
import "./index.scss";

class CalendarButton extends React.Component {
  render() {
    const { assignDeadline, update, taskById } = this.props;

    return (
      <div className={`${this.props.buttonState} calendarButton`}>
        <img src="/img/calendar_button.png" alt="" />
        <p>échéance</p>
        <input
          type="date"
          value={
            Object.keys(taskById[0]).length === 0 &&
            taskById[0].constructor === Object
              ? ""
              : taskById[0].taskDate
          }
          onChange={(event, taskId) => {
            assignDeadline(event.target.value, taskById[0].id);
            update();
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  taskById: state.tasks.taskById
});

const mapDispatchToProps = dispatch => ({
  assignDeadline: (date, taskId) => dispatch(assignDeadline(date, taskId)),
  update: () => dispatch(update())
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarButton);
