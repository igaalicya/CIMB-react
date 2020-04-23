import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Cookie from "universal-cookie";
import swal from "sweetalert";

import { logoutHandler } from "../../redux/actions";

const cookieObject = new Cookie();

class Navbar extends React.Component {
  onLogout = () => {
    swal("Berhasil!", "Berhasil Logout", "success");
    this.props.logoutHandler();
    cookieObject.remove("authData");
  };

  render() {
    return (
      <div className="navbar d-flex justify-content-around p-3 bg-dark mb-5">
        <Link
          to="/register"
          className="navbar-brand text-white font-weight-bold"
        >
          Register
        </Link>
        <Link to="/login" className="navbar-brand text-white font-weight-bold">
          Login
        </Link>
        <Link className="navbar-brand text-white font-weight-bold">
          {this.props.user.username}
        </Link>
        {this.props.user.username ? (
          <Link
            className="navbar-brand text-white font-weight-bold"
            onClick={this.onLogout}
            to="/"
          >
            Logout
          </Link>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapsDispatchToProps = {
  logoutHandler
};

export default connect(mapStateToProps, mapsDispatchToProps)(Navbar);
