export const usernameHandler = text => {
  return {
    type: "USER_LOGIN",
    payload: text
  };
};
