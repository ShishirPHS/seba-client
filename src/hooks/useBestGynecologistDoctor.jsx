import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import useAxiosPublic from "./useAxiosPublic";

const useBestGynecologistDoctor = () => {
  // const axiosPublic = useAxiosPublic();

  const { data: bestGynecologistDoctors = [] } = useQuery({
    queryKey: ["bestGynecologistDoctors"],
    queryFn: async () => {
      const res = await axios.get("best-gynecologist-doctors.json");

      return res.data;
    },
  });

  return [bestGynecologistDoctors];
};

export default useBestGynecologistDoctor;
