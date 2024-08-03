import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import useAxiosPublic from "./useAxiosPublic";

const useDiseases = () => {
  // const axiosPublic = useAxiosPublic();

  const { data: diseaseInfo = [] } = useQuery({
    queryKey: ["diseaseInfo"],
    queryFn: async () => {
      const res = await axios.get("diseases.json");

      return res.data;
    },
  });

  return [diseaseInfo];
};

export default useDiseases;
