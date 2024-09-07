import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllSpecialties = () => {
  const { data: allSpecialties = [] } = useQuery({
    queryKey: ["allSpecialties"],
    queryFn: async () => {
      const res = await axios.get("specialties.json");

      return res.data;
    },
  });

  return [allSpecialties];
};

export default useAllSpecialties;
