import axiosInstance from "../../utils/axios";

export const getBlog = async (id) => {
  const response = await axiosInstance.get(`/videos/${id}`);
  console.log("Res" + response);
  return response.data;
};
