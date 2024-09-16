import PropTypes from "prop-types";
import BookAppointmentModal from "../../BookAppointmentModal/BookAppointmentModal";

const ChamberCard = ({ chamber }) => {
  const { chamberName, location, visitingPrice, visitingHour } = chamber;

  return (
    <div className="chamberCard border-[#02c782] border-[1px] px-[15px] py-[10px] rounded-lg flex-shrink-0">
      <p>{chamberName}</p>
      <p>{location}</p>
      <p>{visitingPrice}</p>
      <p>{visitingHour}</p>
      <BookAppointmentModal chamber={chamber}></BookAppointmentModal>
    </div>
  );
};

ChamberCard.propTypes = {
  chamber: PropTypes.object,
};

export default ChamberCard;
