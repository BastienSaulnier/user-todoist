import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { resetAll, update } from "../../redux/actions/tasks.actions.js";
import "./index.scss";

class AddTaskLine extends React.Component {
  handleClick = () => {
    this.props.history.push("/add");
  };

  render() {
    const { resetAll, update } = this.props;
    return (
      <div
        className={
          this.props.location.pathname === "/add"
            ? "addTaskLine selected"
            : "addTaskLine"
        }
        onClick={() => {
          update();
          resetAll();
          this.handleClick();
        }}
      >
        + Ajouter une tache...
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  resetAll: () => dispatch(resetAll()),
  update: () => dispatch(update())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddTaskLine)
);
