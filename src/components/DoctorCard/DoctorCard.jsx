import PropTypes from "prop-types";
import "./DoctorCard.css";
import ChamberCard from "./ChamberCard/ChamberCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const DoctorCard = ({ doctor }) => {
  const { doctorsName, specialty, mobileNumber, chamberInfos, photo } = doctor;

  const specialties = specialty
    .map((singleSpecialty) => singleSpecialty.label)
    .join(", ");

  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 450;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 450;
    }
  };

  return (
    <div
      style={{
        boxShadow:
          "0px 1px 30px rgba(0, 0, 0, .03), 0 .275rem .75rem -.0625rem rgba(0, 0, 0, .06)",
      }}
      className="rounded-lg overflow-hidden p-4 mb-[10px] font-poppins"
      id="doctor-card"
    >
      {/* top */}
      <div className="flex">
        {/* top left */}
        <img
          className="h-[150px] w-[150px] flex-shrink-0 rounded-full object-cover"
          src={photo}
          alt={`Image of ${doctorsName}`}
        />
        {/* top right */}
        <div className="ml-4">
          <p className="underline font-medium leading-[20px]">{doctorsName}</p>
          <p className="mt-[10px]">{specialties}</p>
          <p>{mobileNumber}</p>
        </div>
      </div>
      {/* middle */}
      <div></div>
      {/* bottom div to show chamber infos */}
      <div className="relative">
        <FaChevronLeft
          style={{
            boxSizing: "content-box",
            boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.25)",
          }}
          className="hidden lg:block absolute top-[50%] translate-y-[-50%] left-[-10px] p-[5px] rounded-full bg-white cursor-pointer"
          onClick={scrollLeft}
        />
        <div
          className={`mt-5 flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth mx-0 lg:mx-3`}
          ref={containerRef}
        >
          {chamberInfos?.map((chamber) => (
            <ChamberCard
              key={chamber.chamberCount}
              chamber={chamber}
            ></ChamberCard>
          ))}
        </div>
        <FaChevronRight
          style={{
            boxSizing: "content-box",
            boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.25)",
          }}
          className="hidden lg:block absolute top-[50%] translate-y-[-50%] right-[-10px] p-[5px] rounded-full bg-white cursor-pointer"
          onClick={scrollRight}
        />
      </div>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.object,
};

export default DoctorCard;
