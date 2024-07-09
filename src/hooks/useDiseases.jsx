import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDiseases = () => {
  const axiosPublic = useAxiosPublic();

  const { data: diseaseInfo = [] } = useQuery({
    queryKey: ["diseaseInfo"],
    queryFn: async () => {
      const res = await axiosPublic.get("diseases.json");

      return res.data;
    },
  });

  return [diseaseInfo];
};

export default useDiseases;
