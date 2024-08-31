import useAllDoctors from "../../hooks/useAllDoctors";

const Doctors = () => {
  const [allDoctors] = useAllDoctors();

  console.log(allDoctors);

  return (
    <div className="container mx-auto">
      <h2 className="text-center py-[200px]">this is doctors page.</h2>
    </div>
  );
};

export default Doctors;
