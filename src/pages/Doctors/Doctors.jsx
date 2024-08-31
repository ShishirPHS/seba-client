import DoctorCard from "../../components/DoctorCard/DoctorCard";
import useAllDoctors from "../../hooks/useAllDoctors";

const Doctors = () => {
  const [allDoctors] = useAllDoctors();

  console.log(allDoctors);

  return (
    <div className="container mx-auto px-[140px] py-[100px]">
      <div className="grid grid-cols-3 gap-6">
        {allDoctors?.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
