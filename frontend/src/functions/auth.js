import axios from "axios";

const url = "https://oxetest.tk";

export const createOrUpdateUser = async (authToken) => {
  return await axios.post(
    `${url}/api/create-or-update-user`,
    {},
    { headers: { authToken: authToken } }
  );
};

export const currentUser = async (authToken) => {
  return await axios.post(
    `${url}/api/current-user`,
    {},
    { headers: { authToken: authToken } }
  );
};

// export const updateUserNot = async (id) => {
//   return await axios.patch(`/user/${id}`, {});
// };
