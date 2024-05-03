const initialState = {
  isAuthentication: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthentication: true };
    default:
      return state;
  }
};
