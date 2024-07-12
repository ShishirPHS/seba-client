import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBlogsInfo = () => {
  const axiosPublic = useAxiosPublic();

  const { data: blogsInfo = [] } = useQuery({
    queryKey: ["blogsInfo"],
    queryFn: async () => {
      const res = await axiosPublic.get("blogs.json");

      return res.data;
    },
  });

  return [blogsInfo];
};

export default useBlogsInfo;
