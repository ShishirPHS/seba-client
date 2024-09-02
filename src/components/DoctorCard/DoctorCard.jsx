import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const { _id, doctorsName, qualifications, designationAndDepartment, photo } =
    doctor;

  return (
    <div
      style={{ boxShadow: "1px 4px 12px rgba(0,0,0,0.25)" }}
      className="rounded-3xl overflow-hidden p-4 border"
    >
      <img
        className="rounded-lg h-[350px] w-full object-cover"
        src={photo}
        alt=""
      />
      <div className="mt-5 flex flex-col items-center justify-start">
        <p className="text-xl font-bold font-poppins">{doctorsName}</p>
        <p className="text-lg font-semibold font-dmSans">{qualifications}</p>
        <p className="text-lg font-medium">{designationAndDepartment}</p>
        <Link to={`/doctor-details/${_id}`}>
          <p className="text-xl text-primary hover:text-secondary font-medium font-inter underline transition-all mt-1">
            See Details
          </p>
        </Link>
      </div>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.object,
};

export default DoctorCard;
