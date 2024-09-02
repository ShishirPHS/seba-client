import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://seba-server-tau.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
