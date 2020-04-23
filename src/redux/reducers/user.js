// state ini bisa available buat semua component
const init_state = {
  username: "",
  id: 0,
  fullname: "",
  role: "",
  testing: "",
  testing2: "",
  errMsg: ""
};

export default (state = init_state, action) => {
  if (action.type == "ON_CHANGE_USERNAME") {
    return { ...state, username: action.payload };
  } else if (action.type == "ON_LOGIN_SUCCESS") {
    const { username, fullName, role, id } = action.payload;
    return { ...state, username, fullName, role, id };
  } else if (action.type == "ON_LOGIN_FAIL") {
    return { ...state, errMsg: action.payload };
  } else if (action.type == "ON_REGISTER_SUCCESS") {
    const { username, fullName, role, id } = action.payload;
    return { ...state, username, fullName, id, role };
  } else if (action.type == "ON_REGISTER_FAIL") {
    return { ...state, errMsg: action.payload };
  } else if (action.type == "ON_LOGOUT") {
    const { username, fullName, role, id } = action.payload;
    return { ...state, username, fullName, role, id };
  } else {
    return { ...state };
  }
};
