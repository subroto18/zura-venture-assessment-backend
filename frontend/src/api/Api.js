import axios from "axios";
export default () => {
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  let Api = axios.create({
    baseURL: "http://localhost:5001/v1",
  });

  return Api;
};
