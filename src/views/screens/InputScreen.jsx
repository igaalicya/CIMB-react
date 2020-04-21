import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class InputScreen extends React.Component {
  state = {
    username: "",
    email: "",
    textbox: ""
  };

  render() {
    const { username, email, textbox } = this.state;
    // e => event
    const inputHandler = (e, field) => {
      this.setState({ [field]: e.target.value });
    };

    return (
      <div className="container">
        <h1>{this.props.haloDunia}</h1>
        <h1>Input Screen</h1>
        <h3>Username: {username} </h3>
        <h3>Email: {email}</h3>
        <Link to={"/profile/" + username}>
          <input
            className="btn btn-primary"
            type="button"
            value="Login"
            onClick="/profile/{username}"
          />
        </Link>
        <br />
        {/* onChange ={(e)=> inputHandler(e)} */}
        {/* onChange={inputHandler} */}
        <input
          onChange={e => inputHandler(e, "username")}
          type="text"
          placeholder="Username"
        />
        <br />
        <input
          onChange={e => inputHandler(e, "email")}
          type="text"
          placeholder="email"
        />
        <br />
        <textarea
          onChange={e => inputHandler(e, "textbox")}
          cols="30"
          rows="10"
        ></textarea>
        <p>{textbox.length}/140</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    haloDunia: state.haha.todoInput
  };
};

export default connect(mapStateToProps)(InputScreen);
