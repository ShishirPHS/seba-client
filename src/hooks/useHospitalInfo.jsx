import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useHospitalInfo = () => {
  const axiosPublic = useAxiosPublic();

  const { data: hospitalInfo = [] } = useQuery({
    queryKey: ["hospitalInfo"],
    queryFn: async () => {
      const res = await axiosPublic.get("hospital-info.json");

      return res.data;
    },
  });

  return [hospitalInfo];
};

export default useHospitalInfo;
