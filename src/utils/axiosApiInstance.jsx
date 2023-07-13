import axios from "axios";

const axiosApiInstance = () => {
  const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  return { apiInstance };
};

export default axiosApiInstance;
