const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGGEED_IN_USER":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    case "DELETE":
      return state.filter((user) => user._id !== action.payload);

    // case "FETCH_USERS":
    //   return action.payload;
    // case "UPDATE_USER":
    //   return action.payload;
    default:
      return state;
  }
};

export default userReducer;
