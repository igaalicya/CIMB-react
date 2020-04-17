import React from "react";
import Axios from "axios";
import { API_URL } from "../../constant/API";

class ProfileScreen extends React.Component {
  state = {
    userList: []
  };

  getDataHandler = () => {
    // Request GET by ID
    // ID nya diletakkan setelah '/'
    // axios.get -> asynchronuous
    // Axios.get("http://localhost:3001/users/1")
    //   .then(res => {
    //     // res = response dari API
    //     console.log(res.data);
    //     this.setState({ userList: res.data });
    //     // console.log(this.state.userList);
    //   })
    //   .catch(err => {
    //     // err = error
    //     console.log(err);
    //   });
    Axios.get("http://localhost:3001/users", {
      params: {
        role: "user",
        username: "seto"
      }
    })
      .then(res => {
        // res = response dari API
        console.log(res.data);
        this.setState({ userList: res.data });
      })
      .catch(err => {
        console.log(err);
      });
    // data ini langsung ditampilin duluan karena tidak usah menunggu fungsi lain
    console.log("bukan axios");
  };

  deleteDataHandler = () => {
    Axios.delete(`${API_URL}/users/1`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  postDataHandler = () => {
    Axios.post(`${API_URL}/users`, {
      username: "Bill",
      password: "123456",
      role: "admin",
      fullName: "Bill Gates"
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container">
        <h1>Profile</h1>
        <h2>Welcome, {this.props.match.params.username}</h2>
        <input
          type="button"
          value="Get Data"
          className="btn btn-success"
          onClick={this.getDataHandler}
        />
        <input
          type="button"
          value="Delete Data"
          className="btn btn-danger"
          onClick={this.deleteDataHandler}
        />
        <input
          type="button"
          value="Post Data"
          className="btn btn-primary"
          onClick={this.postDataHandler}
        />
      </div>
    );
  }
}

export default ProfileScreen;
