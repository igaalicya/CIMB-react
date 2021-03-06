import React from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../../constant/API";
import { Spinner } from "reactstrap";
import swal from "sweetalert";
import { registerHandler } from "../../redux/actions";
import { connect } from "react-redux";

class RegisterScreen extends React.Component {
  state = {
    username: "",
    firstName: "",
    lastName: "",
    fullName: "",
    password: "",
    repPassword: "",
    role: "",
    isLoading: false
  };

  inputHandler = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  registerHandler = () => {
    this.setState({ isLoading: true });
    const {
      repPassword,
      password,
      username,
      firstName,
      lastName,
      role
    } = this.state;

    const userData = {
      username,
      password,
      repPassword,
      firstName,
      lastName,
      role
    };

    this.props.onRegister(userData);

    // setTimeout(() => {
    //   Axios.get(`${API_URL}/users`, {
    //     params: {
    //       username: username
    //     }
    //   })
    //     .then(res => {
    //       if (res.data.length == 0) {
    //         if (password == repPassword) {
    //           Axios.post(`${API_URL}/users`, {
    //             username: username,
    //             password: password,
    //             role: role,
    //             fullName: firstName + " " + lastName
    //           })
    //             .then(res => {
    //               swal("Berhasil", "Registrasi akun berhasil", "success");
    //               this.setState({ isLoading: false });
    //               this.setState({
    //                 username: "",
    //                 password: "",
    //                 repPassword: "",
    //                 role: "",
    //                 firstName: "",
    //                 lastName: ""
    //               });
    //             })
    //             .catch(err => {
    //               swal("Gagal", "Password yang dimasukkan tidak sama", "error");
    //               this.setState({ isLoading: false });
    //             });
    //         } else {
    //           swal("Gagal", "Password yang dimasukkan tidak sama", "error");
    //           this.setState({ isLoading: false });
    //         }
    //       } else {
    //         swal("Gagal", `username ${username} telah digunakan`, "error");
    //         this.setState({ isLoading: false });
    //       }
    //     })
    //     .catch(err => {
    //       swal("Gagal", `username ${username} telah digunakan`, "error");
    //       this.setState({ isLoading: false });
    //     });
    // }, 1000);
  };

  render() {
    const {
      username,
      password,
      repPassword,
      firstName,
      lastName,
      role
    } = this.state;

    return (
      <div>
        {/* <h1>Register Screen</h1> */}
        <center className="container">
          <div className="card p-5" style={{ width: "400px" }}>
            <h4>Register</h4>
            <input
              value={username}
              className="form-control mt-2"
              type="text"
              placeholder="Username"
              onChange={e => this.inputHandler(e, "username")}
            />
            <input
              value={firstName}
              className="form-control mt-2"
              type="text"
              placeholder="First Name"
              onChange={e => this.inputHandler(e, "firstName")}
            />
            <input
              value={lastName}
              className="form-control mt-2"
              type="text"
              placeholder="Last Name"
              onChange={e => this.inputHandler(e, "lastName")}
            />
            <input
              value={role}
              className="form-control mt-2"
              type="text"
              placeholder="Role"
              onChange={e => this.inputHandler(e, "role")}
            />
            <input
              value={password}
              className="form-control mt-2"
              type="text"
              placeholder="Password"
              onChange={e => this.inputHandler(e, "password")}
            />
            <input
              value={repPassword}
              className="form-control mt-2"
              type="text"
              placeholder="Repeat Password"
              onChange={e => this.inputHandler(e, "repPassword")}
            />
            <input
              type="button"
              value="Register"
              className="btn btn-primary mt-3"
              onClick={this.registerHandler}
              disabled={this.state.isLoading}
            />
          </div>
          {/* <Spinner color="primary" /> */}
        </center>
      </div>
    );
  }
}

const mapsStateToProps = state => {
  return {
    user: state.user
  };
};
const mapsDispatchToProps = {
  onRegister: registerHandler
};

export default connect(mapsStateToProps, mapsDispatchToProps)(RegisterScreen);
