import { deleteMultipleFiles, getMultipleFilesRedux } from "../data/api";

export const getFiles = () => async (dispatch) => {
  try {
    const { data } = await getMultipleFilesRedux();
    dispatch({ type: "FETCH_FILES", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const getUserFiles=()=>async(dispatch)=>{
//   try {
//     const { data } = await getUserFilesRedux();
//     dispatch({ type: "FETCH_USER_FILES", payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// }

export const deleteMultipleFile = (id) => async (dispatch) => {
  try {
    await deleteMultipleFiles(id);
    dispatch({ type: "DELETE_FILES", payload: id });
  } catch (error) {
    console.log(error);
  }
};
