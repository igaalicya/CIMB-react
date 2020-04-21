// state ini bisa available buat semua component
const init_state = {
  username: "",
  id: 0
};

export default (state = init_state, action) => {
  if (action.type == "USER_LOGIN") {
    return { ...state, username: action.payload };
  } else {
    return { ...state };
  }
};
