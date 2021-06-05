import { fetchMessages, createMessagesAPI, deleteMessage } from "../data/api";

export const getMessages = () => async (dispatch) => {
  try {
    const { data } = await fetchMessages();
    dispatch({ type: "FETCH_MESSAGES", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createMessages = (message) => async (dispatch) => {
  try {
    const { data } = await createMessagesAPI(message);
    dispatch({ type: "CREATE_MESSAGE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteMessages = (id) => async (dispatch) => {
  try {
    await deleteMessage(id);
    dispatch({ type: "DELETE_MESSAGE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
