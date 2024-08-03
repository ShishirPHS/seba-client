import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import useAxiosPublic from "./useAxiosPublic";

const useBestSkinDoctor = () => {
  // const axiosPublic = useAxiosPublic();

  const { data: bestSkinDoctors = [] } = useQuery({
    queryKey: ["bestSkinDoctors"],
    queryFn: async () => {
      const res = await axios.get("best-skin-doctors.json");

      return res.data;
    },
  });

  return [bestSkinDoctors];
};

export default useBestSkinDoctor;
