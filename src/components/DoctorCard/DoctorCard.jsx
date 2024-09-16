import PropTypes from "prop-types";
import "./DoctorCard.css";
import ChamberCard from "./ChamberCard/ChamberCard";

const DoctorCard = ({ doctor }) => {
  const { doctorsName, specialty, mobileNumber, chamberInfos, photo } = doctor;

  const specialties = specialty
    .map((singleSpecialty) => singleSpecialty.label)
    .join(", ");

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
        <div className={`mt-5 flex gap-6`}>
          {chamberInfos?.map((chamber) => (
            <ChamberCard
              key={chamber.chamberCount}
              chamber={chamber}
            ></ChamberCard>
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
