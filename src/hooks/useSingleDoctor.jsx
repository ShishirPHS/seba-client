import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import useAxiosPublic from "./useAxiosPublic";

const useSingleDoctor = (id) => {
  const axiosPublic = useAxiosPublic();

  const { data: singleDoctor = {} } = useQuery({
    queryKey: ["singleDoctor"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/getDoctor/${id}`);
      return result.data;
    },
  });

  return singleDoctor;
};

useSingleDoctor.propTypes = {
  id: PropTypes.string,
};

export default useSingleDoctor;
