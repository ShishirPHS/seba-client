import PropTypes from "prop-types";
import BookAppointmentModal from "../../BookAppointmentModal/BookAppointmentModal";
import { useState } from "react";

const ChamberCard = ({ chamber }) => {
  const { chamberName, location, visitingPrice, visitingHour } = chamber;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 100);
  };

  return (
    <div
      className="chamberCard border-[#02c782] border-[1px] px-[15px] py-[10px] rounded-lg flex-shrink-0"
      onClick={openModal}
    >
      <p>{chamberName}</p>
      <p>{location}</p>
      <p>{visitingPrice}</p>
      <p>{visitingHour}</p>
      {isModalOpen && (
        <BookAppointmentModal
          chamber={chamber}
          closeModal={closeModal}
        ></BookAppointmentModal>
      )}
    </div>
  );
};

ChamberCard.propTypes = {
  chamber: PropTypes.object,
};

export default ChamberCard;
