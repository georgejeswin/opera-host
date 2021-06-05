import axios from "axios";

export const singleFileUpload = async (data) => {
  try {
    await axios.post("singleFile", data);
  } catch (error) {
    throw error;
  }
};
export const getSingleFiles = async () => {
  try {
    const { data } = await axios.get("getSingleFiles");
    return data;
  } catch (error) {
    throw error;
  }
};

export const cvFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`cvFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const psFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`psFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const SslcFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`sslcFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const PlusTwoFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`plustwoFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const DegreeFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`degreeFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const IeltsFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`ieltsFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const ExperienceFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`experienceFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const SopFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`sopFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const LorFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`lorFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
// export const getMultipleFiles = async () => {
//   try {
//     const { data } = await axios.get("/getMultipleFiles");
//     console.log("files>>>>", data);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

export const getMultipleFilesRedux = async () =>
  await axios.get("/getMultipleFiles");

export const deleteMultipleFiles = (id) =>
  axios.delete(`http://localhost:8000/uploads/getMultipleFiles/${id}`);

// User name update
// export const fetchUsers = () => axios.get("http://localhost:8000/user");

export const updateUserName = async (id, updatedUser) => {
  await axios.patch(`/${id}`, updatedUser);
};

export const deleteUser = (id) =>
  axios.delete(`http://localhost:8000/user/${id}`);

//messages api

const url = "http://localhost:8000/messages";

export const fetchMessages = () => axios.get(url);

export const createMessagesAPI = (newMessage) => axios.post(url, newMessage);

export const deleteMessage = (id) => axios.delete(`${url}/${id}`);
