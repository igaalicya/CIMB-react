import React from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../constant/API";
import swal from "sweetalert";
import { connect } from "react-redux";
import { usernameHandler } from "../../redux/actions";
import { loginHandler } from "../../redux/actions";

class LoginScreen extends React.Component {
  state = {
    username: "",
    fullname: "",
    password: "",
    repPassword: "",
    role: "",
    isLoggedIn: false,
    users: [],
    username: "",
    password: "",
    currentUsername: ""
  };

  inputHandler = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  loginHandler = () => {
    const { username, password, users } = this.state;

    const userData = {
      username,
      password
    };

    this.props.onLogin(userData);
    // Axios.get(`${API_URL}/users`, {
    //   params: {
    //     username: sername,
    //     password: password
    //   }
    // })
    //   .then(res => {
    //     if (res.data.length > 0) {
    //       swal("Berhasil!", "Berhasil Login", "success");
    //       this.props.onLoginUser(username);
    //       this.setState({
    //         isLoggedIn: true,
    //         currentUsername: res.data[0].username,
    //         username: "",
    //         password: ""
    //       });
    //     } else {
    //       swal("Gagal!", "User tidak ada atau password salah", "error");
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  render() {
    const { isLoggedIn, currentUsername, password, username } = this.state;

    if (!isLoggedIn) {
      return (
        <div>
          <center className="container">
            <div className="card p-5" style={{ width: "400px" }}>
              <h4>Login</h4>
              <p>Username : {this.props.user.username}</p>
              <input
                value={username}
                className="form-control mt-2"
                type="text"
                placeholder="Username"
                onChange={e => this.inputHandler(e, "username")}
              />
              <input
                value={password}
                className="form-control mt-2"
                type="text"
                placeholder="Password"
                onChange={e => this.inputHandler(e, "password")}
              />
              <input
                type="button"
                value="Login"
                className="btn btn-primary mt-3"
                onClick={this.loginHandler}
              />
            </div>
          </center>
        </div>
      );
    } else {
      return <Redirect to={`/profileUser/${currentUsername}`} />;
    }
  }
}

const mapsStateToProps = state => {
  return {
    user: state.user
  };
};

const mapsDispatchToProps = {
  onLogin: loginHandler
};

export default connect(mapsStateToProps, mapsDispatchToProps)(LoginScreen);
