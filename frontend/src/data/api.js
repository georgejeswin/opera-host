import axios from "axios";

const uploadUrl = "https://operaonlineapplication.in/backenduploads";

export const singleFileUpload = async (data) => {
  try {
    await axios.post(`${uploadUrl}/singleFile`, data);
  } catch (error) {
    throw error;
  }
};
export const getSingleFiles = async () => {
  try {
    const { data } = await axios.get(`${uploadUrl}/getSingleFiles`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const cvFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`${uploadUrl}/cvFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const psFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  console.log(id);
  try {
    await axios.post(`${uploadUrl}/psFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const SslcFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`${uploadUrl}/sslcFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const PlusTwoFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`${uploadUrl}/plustwoFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const DegreeFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`${uploadUrl}/degreeFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const IeltsFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`${uploadUrl}/ieltsFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const ExperienceFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`${uploadUrl}/experienceFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const SopFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`${uploadUrl}/sopFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const LorFileUpload = async (data, userInfo) => {
  const id = userInfo._id;
  try {
    await axios.post(`${uploadUrl}/lorFiles/${id}`, data);
  } catch (error) {
    throw error;
  }
};
export const universityUpload = async (data, userInfo) => {
  console.log(data);
  const id = userInfo._id;
  try {
    await axios.post(`${uploadUrl}/university/${id}`, { data });
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
  await axios.get(`${uploadUrl}/getMultipleFiles`);

export const deleteMultipleFiles = (id) =>
  axios.delete(
    `https://operaonlineapplication.in/backenduploads/getMultipleFiles/${id}`
  );

//get user files
// export const getUserFilesRedux = async () =>
//   await axios.get(`${uploadUrl}/getUserFiles`);


// User name update

export const updateUserName = async (id, updatedUser) => {
  await axios.patch(
    `https://operaonlineapplication.in/backenduser/${id}`,
    updatedUser
  );
};

export const deleteUser = (id) =>
  axios.delete(`https://operaonlineapplication.in/backenduser/${id}`);

//messages api

const url = "https://operaonlineapplication.in/backendmessages";

export const fetchMessages = () => axios.get(url);

export const createMessagesAPI = (newMessage) => axios.post(url, newMessage);

export const deleteMessage = (id) => axios.delete(`${url}/${id}`);
