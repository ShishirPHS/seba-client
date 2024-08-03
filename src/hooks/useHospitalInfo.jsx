import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import useAxiosPublic from "./useAxiosPublic";

const useHospitalInfo = () => {
  // const axiosPublic = useAxiosPublic();

  const { data: hospitalInfo = [] } = useQuery({
    queryKey: ["hospitalInfo"],
    queryFn: async () => {
      const res = await axios.get("hospital-info.json");

      return res.data;
    },
  });

  return [hospitalInfo];
};

export default useHospitalInfo;
