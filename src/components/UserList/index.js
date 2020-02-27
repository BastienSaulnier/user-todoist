import React from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../../redux/actions/users.actions.js";
import UserLine from "../UserLine/index.js";
import "./index.scss";

class UserList extends React.Component {
  componentDidMount() {
    const { getAllUsers } = this.props;
    getAllUsers();
  }

  render() {
    const { users, menu } = this.props;

    return (
      <ul className={menu === false ? "userList" : "userList open"}>
        {users.map((user, key) => {
          return <UserLine key={key} {...user} />;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  menu: state.menu.isOpen
});

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
