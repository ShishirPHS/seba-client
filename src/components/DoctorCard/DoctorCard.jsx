import PropTypes from "prop-types";

const DoctorCard = ({ doctor }) => {
  const { doctorsName, photo } = doctor;

  return (
    <div>
      <img src={photo} alt="" />
      <p>
        {`Doctor's Name: `}
        {doctorsName}
      </p>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.object,
};

export default DoctorCard;
