import { useParams } from "react-router-dom";
import useSingleDoctor from "../../hooks/useSingleDoctor";
import Container from "../../components/shared/Container/Container";

const DoctorDetails = () => {
  const { id } = useParams();
  const singleDoctor = useSingleDoctor(id);

  const {
    doctorsName,
    doctorsEmail,
    qualifications,
    specialty,
    workplace,
    designationAndDepartment,
    chamberName,
    chamberAddress,
    visitingHour,
    mobileNumber,
    photo,
  } = singleDoctor;

  return (
    <div>
      <Container>
        <div className="px-5">
          <img src={photo} alt={`Photo of ${doctorsName}`} />
          <p>{doctorsName}</p>
          <p>{doctorsEmail}</p>
          <p>{qualifications}</p>
          <p>{specialty}</p>
          <p>{workplace}</p>
          <p>{designationAndDepartment}</p>
          <p>{chamberName}</p>
          <p>{chamberAddress}</p>
          <p>{visitingHour}</p>
          <p>{mobileNumber}</p>
        </div>
      </Container>
    </div>
  );
};

export default DoctorDetails;
