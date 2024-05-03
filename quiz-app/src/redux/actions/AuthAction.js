const login = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "LOGIN_SUCCESS" });
    }, 1000);
  };
};

export default login;