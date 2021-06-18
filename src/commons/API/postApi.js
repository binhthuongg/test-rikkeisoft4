import instanceAxios from "./instanceAxios";

export const postApi = {
  getList: () => {
    const url = "/postId";
    return instanceAxios.get(url);
  },
  getPost: id => {
    const url = "/postId";
    const params = {
      id
    };
    return instanceAxios.get(url, { params });
  }
};
