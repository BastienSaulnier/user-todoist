import React from "react";
import { connect } from "react-redux";
import { resetAll, update } from "../../redux/actions/tasks.actions.js";
import { Link, withRouter } from "react-router-dom";
import "./index.scss";

class Bar extends React.Component {
  handleClick = () => {
    this.props.history.push("/");
  };

  render() {
    const { resetAll, update } = this.props;

    return (
      <header>
        <div
          className="indexRedirection"
          onClick={() => {
            resetAll();
            update();
            this.handleClick();
          }}
        >
          <Link to="/">
            <img src="/img/logo.png" alt="logo" />
          </Link>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  resetAll: () => dispatch(resetAll()),
  update: () => dispatch(update())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Bar));
