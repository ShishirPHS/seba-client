import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBestGynecologistDoctor = () => {
  const axiosPublic = useAxiosPublic();

  const { data: bestGynecologistDoctors = [] } = useQuery({
    queryKey: ["bestGynecologistDoctors"],
    queryFn: async () => {
      const res = await axiosPublic.get("best-gynecologist-doctors.json");

      return res.data;
    },
  });

  return [bestGynecologistDoctors];
};

export default useBestGynecologistDoctor;
