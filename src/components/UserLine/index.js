import React from "react";
import { connect } from "react-redux";
import { assignUser, update } from "../../redux/actions/tasks.actions.js";
import { setOpen } from "../../redux/actions/menu.actions.js";
import "./index.scss";

class UserLine extends React.Component {
  render() {
    const { assignUser, update, setOpen, taskById } = this.props;

    return (
      <li
        className="userLine"
        onClick={(userName, taskUserPic, taskId) => {
          assignUser(
            this.props.userName,
            this.props.profilePic,
            taskById[0].id
          );
          setOpen();
          update();
        }}
      >
        <img
          src={this.props.profilePic}
          alt="Profile Pic"
          className="profilePic"
        />
        <div className="userInfos">
          <div className="userNameAndEmail">
            <p className="userName">{this.props.userName}</p>
            <p className="userEmail">{this.props.userEmail}</p>
          </div>
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  taskById: state.tasks.taskById
});

const mapDispatchToProps = dispatch => ({
  assignUser: (userName, taskUserPic, taskId) =>
    dispatch(assignUser(userName, taskUserPic, taskId)),
  setOpen: () => dispatch(setOpen()),
  update: () => dispatch(update())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLine);
