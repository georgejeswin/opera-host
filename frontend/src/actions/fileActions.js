import { deleteMultipleFiles, getMultipleFilesRedux } from "../data/api";

export const getFiles = () => async (dispatch) => {
  try {
    const { data } = await getMultipleFilesRedux();
    dispatch({ type: "FETCH_FILES", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// const getUserFiles=()=>async(dispatch)=>{
//   try {
    
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
