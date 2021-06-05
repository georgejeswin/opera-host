import axios from "axios";

export const createOrUpdateUser = async (authToken) => {
  return await axios.post(
    `/create-or-update-user`,
    {},
    { headers: { authToken: authToken } }
  );
};

export const currentUser = async (authToken) => {
  return await axios.post(
    `/current-user`,
    {},
    { headers: { authToken: authToken } }
  );
};

// export const updateUserNot = async (id) => {
//   return await axios.patch(`/user/${id}`, {});
// };
