import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL + "/api";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // toast.error("An unexpected error occurrred.");
    console.error(error.response.status, " : ", error);
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
