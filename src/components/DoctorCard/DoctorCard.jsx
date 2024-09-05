import PropTypes from "prop-types";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const DoctorCard = ({ doctor }) => {
  const { doctorsName, yearsOfExperience, specialty, photo } = doctor;

  return (
    <div
      style={{ boxShadow: "1px 4px 12px rgba(0,0,0,0.25)" }}
      className="rounded-xl overflow-hidden p-4 border"
    >
      {/* card top */}
      <div className="flex relative">
        {/* top left */}
        <img
          className="h-[80px] w-[80px] rounded-full object-cover"
          src={photo}
          alt={`Image of ${doctorsName}`}
        />
        {/* top right */}
        <div className="ml-4">
          <p>{doctorsName}</p>
          <p>{specialty}</p>
          <p>{yearsOfExperience}</p>
          <MdOutlinePhoneAndroid className="absolute right-0 top-0"></MdOutlinePhoneAndroid>
        </div>
      </div>
      {/* card bottom */}
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.object,
};

export default DoctorCard;
