import { Link } from "react-router-dom";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import Container from "../../components/shared/Container/Container";
import useAllDoctors from "../../hooks/useAllDoctors";

const Doctors = () => {
  const [allDoctors, isLoading] = useAllDoctors();

  return (
    <>
      <Container>
        <div className="px-5 3xl:px-[140px] py-[100px]">
          {isLoading ? (
            <div
              className="animate-spin block mx-auto size-10 border-[4px] border-current border-t-transparent text-primary rounded-full"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>
              <div className="mb-[80px]">
                <Link to="/add-doctor">
                  <button className="bg-primary text-white hover:bg-secondary py-3 px-8 rounded-2xl mt-[10px] transition-all block mx-auto">
                    Add Doctor
                  </button>
                </Link>
              </div>
              <div>
                <div className="grid grid-cols-3 gap-6">
                  {allDoctors?.map((doctor) => (
                    <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default Doctors;
