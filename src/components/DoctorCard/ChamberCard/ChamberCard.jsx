import PropTypes from "prop-types";
import BookAppointmentModal from "../../BookAppointmentModal/BookAppointmentModal";
import { useEffect, useState } from "react";

const ChamberCard = ({ chamber }) => {
  const { chamberName, location, visitingPrice, visitingHour } = chamber;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      const openBtn = document.querySelector("#modal-open-btn");

      if (openBtn) {
        openBtn.click();
      }
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isModalOpen) {
        document.body.style.overflow = "auto";
      }
    };

    handleScroll();
    return () => (document.body.style.overflow = "");
  }, [isModalOpen]);

  const closeModal = () => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 1);
  };

  return (
    <div
      className="chamberCard border-[#02c782] border-[1px] px-[15px] py-[10px] rounded-lg flex-shrink-0 hover:cursor-pointer"
      onClick={openModal}
    >
      <p className="text-lg font-medium mb-2">{chamberName}</p>
      <p>{location}</p>
      <p>{visitingPrice} Taka</p>
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
