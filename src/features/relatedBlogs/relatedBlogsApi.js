import axiosInstance from "../../utils/axios";

export const getRelatedBlogs = async ({ tags, id }) => {
  console.log("tags coming " + tags);
  const limit = 5;
  let queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;

  console.log("Str... " + queryString);

  const response = await axiosInstance.get(`/videos?${queryString}`);

  return response.data;
};
