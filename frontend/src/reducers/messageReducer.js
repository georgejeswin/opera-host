const messageReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MESSAGES":
      return action.payload;
    case "CREATE_MESSAGE":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((message) =>
        message._id === action.payload._id ? action.payload : message
      );
    case "DELETE_MESSAGE":
      return state.filter((id) => id !== action.payload);
    default:
      return state;
  }
};

export default messageReducer;
