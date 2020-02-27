import React from "react";
import { connect } from "react-redux";
import { setOpen } from "../../redux/actions/menu.actions.js";
import "./index.scss";

class AssignButton extends React.Component {
  render() {
    const { setOpen } = this.props;

    return (
      <button
        className={`${this.props.buttonState} assignButton`}
        onClick={() => setOpen()}
      >
        <img src="/img/assign_button.png" alt="" /> assigner à
      </button>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setOpen: () => dispatch(setOpen())
});

export default connect(mapStateToProps, mapDispatchToProps)(AssignButton);
