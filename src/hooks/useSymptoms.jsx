import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSymptoms = () => {
  const axiosPublic = useAxiosPublic();

  const { data: symptomsInfo = [] } = useQuery({
    queryKey: ["symptomsInfo"],
    queryFn: async () => {
      const res = await axiosPublic.get("symptoms.json");

      return res.data;
    },
  });

  return [symptomsInfo];
};

export default useSymptoms;
