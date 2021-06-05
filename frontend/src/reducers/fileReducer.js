const fileReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_FILES":
      return action.payload;
    case "DELETE_FILES":
      return state.filter((file) => file._id !== action.payload);

    default:
      return state;
  }
};

export default fileReducer;
