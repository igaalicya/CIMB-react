import React from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../constant/API";
import swal from "sweetalert";
import { connect } from "react-redux";
import { usernameHandler } from "../../redux/actions";

class LoginScreen extends React.Component {
  state = {
    username: "",
    fullname: "",
    password: "",
    repPassword: "",
    role: "",
    isLoggedIn: false,
    users: [],
    loginUsername: "",
    loginPassword: "",
    currentUsername: ""
  };

  inputHandler = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  loginHandler = () => {
    const { loginUsername, loginPassword, users } = this.state;

    Axios.get(`${API_URL}/users`, {
      params: {
        username: loginUsername,
        password: loginPassword
      }
    })
      .then(res => {
        if (res.data.length > 0) {
          swal("Berhasil!", "Berhasil Login", "success");
          this.props.onLoginUser(loginUsername);
          this.setState({
            isLoggedIn: true,
            currentUsername: res.data[0].username,
            loginUsername: "",
            loginPassword: ""
          });
        } else {
          swal("Gagal!", "User tidak ada atau password salah", "error");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const {
      isLoggedIn,
      currentUsername,
      loginPassword,
      loginUsername
    } = this.state;

    if (!isLoggedIn) {
      return (
        <div>
          <center className="container">
            <div className="card p-5" style={{ width: "400px" }}>
              <h4>Login</h4>
              <input
                value={loginUsername}
                className="form-control mt-2"
                type="text"
                placeholder="Username"
                onChange={e => this.inputHandler(e, "loginUsername")}
              />
              <input
                value={loginPassword}
                className="form-control mt-2"
                type="text"
                placeholder="Password"
                onChange={e => this.inputHandler(e, "loginPassword")}
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
    userLogin: state.userLogin
  };
};

const mapsDispatchToProps = {
  onLoginUser: usernameHandler
};

export default connect(mapsStateToProps, mapsDispatchToProps)(LoginScreen);
