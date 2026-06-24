const initialState = {
  user: null,
  isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
    case "GET_ME":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    case "LOGOUT":
      return {
        user: null,
        isAuthenticated: false,
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
}
