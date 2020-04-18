import React from "react";
import { Link } from "react-router-dom";

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
        {/* <Link to="/counter">Counter Screen</Link> */}
      </div>
    );
  }
}

export default Navbar;
