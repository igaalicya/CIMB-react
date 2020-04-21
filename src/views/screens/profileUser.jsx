import React from "react";
import Axios from "axios";
import { API_URL } from "../../constant/API";
import { connect } from "react-redux";
import {
  todoInputHandler,
  usernameInputHandler,
  addTodoInputHandler
} from "../../redux/actions";

class ProfileUser extends React.Component {
  state = {
    userList: []
  };

  componentDidMount() {
    Axios.get(`${API_URL}/users`, {
      params: {
        username: this.props.match.params.username
      }
    })
      .then(res => {
        this.setState({ userList: res.data[0] });
      })
      .catch(err => {
        alert("user tidak tersedia");
      });
  }

  render() {
    const { userList } = this.state;
    return (
      <>
        <div className="container p-2">
          <h1 className="font-weight-bolder">
            Welcome,{" "}
            <span className="text-primary">
              {this.props.match.params.username}
            </span>
          </h1>
          <h4>This is your Data</h4>
        </div>
        <br />
        <div className="container">
          <p>ID : {userList.id} </p>
          <p>Username : {userList.username}</p>
          <p>Full Name : {userList.fullName}</p>
          <p>Role : {userList.role}</p>
        </div>
      </>
    );
  }
}

// export default ProfileUser;
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  onChangeUsername: usernameInputHandler
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUser);
