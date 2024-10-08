import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllDoctors = () => {
  const axiosPublic = useAxiosPublic();

  const { data: allDoctors = [], isLoading } = useQuery({
    queryKey: ["allDoctors"],
    queryFn: async () => {
      const res = await axiosPublic.get("/getDoctor");

      return res.data;
    },
  });

  return [allDoctors, isLoading];
};

export default useAllDoctors;
