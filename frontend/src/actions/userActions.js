import { deleteUser, updateUserName } from "../data/api";

// export const getUsers = () => async (dispatch) => {
//   try {
//     const { data } = await fetchUsers();
//     dispatch({ type: "FETCH_USERS", payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const updateUser = (id, user) => async (dispatch) => {
  try {
    await updateUserName(id, user);

    // dispatch({ type: "UPDATE_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteUsers = (id) => async (dispatch) => {
  try {
    await deleteUser(id);
    dispatch({ type: "DELETE_USER", payload: id });
  } catch (error) {
    console.log(error);
  }
};
