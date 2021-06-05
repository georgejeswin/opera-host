import axios from "axios";

const url = "http://oxetest.tk";

export const createOrUpdateUser = async (authToken) => {
  return await axios.post(
    `/api/create-or-update-user`,
    {},
    { headers: { authToken: authToken } }
  );
};

export const currentUser = async (authToken) => {
  return await axios.post(
    `/api/current-user`,
    {},
    { headers: { authToken: authToken } }
  );
};

// export const updateUserNot = async (id) => {
//   return await axios.patch(`/user/${id}`, {});
// };
