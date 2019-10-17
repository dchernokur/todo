import axios from "axios";

axios.defaults.baseURL =
  process.env.VUE_APP_API_URL || "https://www.boredapi.com/api/activity";

axios.interceptors.response.use(
  response => {
    return response.data;
  },
  async error => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default axios;
