import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import "./DoctorCard.css";
import BookAppointmentModal from "../BookAppointmentModal/BookAppointmentModal";

const DoctorCard = ({ doctor }) => {
  const [isDragging, setIsDragging] = useState(false);

  const scrollRef = useRef(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const { doctorsName, specialty, mobileNumber, chamberInfos, photo } = doctor;

  const specialties = specialty
    .map((singleSpecialty) => singleSpecialty.label)
    .join(", ");

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, []);

  return (
    <div
      style={{
        boxShadow:
          "0px 1px 30px rgba(0, 0, 0, .03), 0 .275rem .75rem -.0625rem rgba(0, 0, 0, .06)",
      }}
      className="rounded-lg overflow-hidden p-4 mb-[10px] font-poppins"
      id="doctor-card"
    >
      {/* card top */}
      <div>
        {/* top */}
        <div className="flex">
          {/* top left */}
          <img
            className="h-[150px] w-[150px] rounded-full object-cover"
            src={photo}
            alt={`Image of ${doctorsName}`}
          />
          {/* top right */}
          <div className="ml-4">
            <p className="underline font-medium leading-[20px]">
              {doctorsName}
            </p>
            <p className="mt-[10px]">{specialties}</p>
            <p>{mobileNumber}</p>
          </div>
        </div>
        {/* middle */}
        <div></div>
        {/* bottom div to show chamber infos */}
        <div
          className={`mt-5 flex gap-6 overflow-x-auto scrollable-div ${
            isDragging ? "active" : ""
          }`}
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {chamberInfos?.map((chamber) => (
            <div
              key={chamber.chamberCount}
              className="chamberCard border-[#02c782] border-[1px] px-[15px] py-[10px] rounded-lg flex-shrink-0"
            >
              <p>{chamber?.chamberName}</p>
              <p>{chamber?.location}</p>
              <p>{chamber?.visitingPrice}</p>
              <p>{chamber?.visitingHour}</p>
              <BookAppointmentModal></BookAppointmentModal>
            </div>
          ))}
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
