import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import useAxiosPublic from "./useAxiosPublic";

const useReview = () => {
  // const axiosPublic = useAxiosPublic();

  const { data: userReview = [] } = useQuery({
    queryKey: ["userReview"],
    queryFn: async () => {
      const res = await axios.get("reviews.json");

      return res.data;
    },
  });

  return [userReview];
};

export default useReview;
