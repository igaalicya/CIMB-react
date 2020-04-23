import Axios from "axios";
import { API_URL } from "../../constant/API";
import user from "../reducers/user";

export const usernameInputHandler = text => {
  return {
    type: "ON_CHANGE_USERNAME",
    payload: text
  };
};

export const loginHandler = userData => {
  return dispatch => {
    const { username, password } = userData;

    Axios.get(`${API_URL}/users`, {
      params: {
        username,
        password
      }
    })
      .then(res => {
        if (res.data.length > 0) {
          // alert("masuk");
          dispatch({
            type: "ON_LOGIN_SUCCESS",
            payload: res.data[0]
            // {
            //   id,
            //   username,
            //   password,
            //   fullName,
            //   role,
            // }
          });
        } else {
          dispatch({
            type: "ON_LOGIN_FAIL",
            payload: "Username atau password salah"
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const registerHandler = userData => {
  return dispatch => {
    const {
      username,
      password,
      repPassword,
      role,
      firstName,
      lastName
    } = userData;

    Axios.get(`${API_URL}/users`, {
      params: {
        username
      }
    })
      .then(res => {
        if (res.data.length == 0) {
          if (password == repPassword) {
            Axios.post(`${API_URL}/users`, {
              username: username,
              password: password,
              role: role,
              fullName: firstName + " " + lastName
            })
              .then(res => {
                dispatch({
                  type: "ON_REGISTER_SUCCESS",
                  payload: res.data
                });
              })
              .catch(err => {
                dispatch({
                  type: "ON_REGISTER_FAIL",
                  payload: "Password tidak sesuai atau username telah digunakan"
                });
              });
          } else {
            dispatch({
              type: "ON_REGISTER_FAIL",
              payload: "Password tidak sesuai atau username telah digunakan"
            });
          }
        } else {
          dispatch({
            type: "ON_REGISTER_FAIL",
            payload: "Password tidak sesuai atau username telah digunakan"
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const userKeepLogin = userData => {
  return dispatch => {
    Axios.get(`${API_URL}/users`, {
      params: {
        id: userData.id
      }
    })
      .then(res => {
        if (res.data.length > 0) {
          dispatch({
            type: "ON_LOGIN_SUCCESS",
            payload: res.data[0]
          });
        } else {
          dispatch({
            type: "ON_LOGIN_FAIL",
            payload: "Username atau password salah"
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const logoutHandler = () => {
  return {
    type: "ON_LOGOUT",
    payload: ""
  };
};
