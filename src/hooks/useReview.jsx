import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReview = () => {
  const axiosPublic = useAxiosPublic();

  const { data: userReview = [] } = useQuery({
    queryKey: ["userReview"],
    queryFn: async () => {
      const res = await axiosPublic.get("reviews.json");

      return res.data;
    },
  });

  return [userReview];
};

export default useReview;
