import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-expand bg-dark mb-5">
        <Link to="/register" className="navbar-brand text-white">
          Register
        </Link>
        <Link to="/login" className="navbar-brand text-white">
          Login
        </Link>
        <Link className="navbar-brand text-white">
          {this.props.user.username}
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.haha,
    user: state.user,
    userLogin: state.userLogin
  };
};

export default connect(mapStateToProps)(Navbar);
