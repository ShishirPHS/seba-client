import PropTypes from "prop-types";
import useAllSpecialties from "../../hooks/useAllSpecialties";

const DoctorCard = ({ doctor }) => {
  const { doctorsName, specialty, mobileNumber, chamberInfos, photo } = doctor;
  const [allSpecialties] = useAllSpecialties();

  const specialtyValue = allSpecialties.find(
    (singleSpecialty) => singleSpecialty.value === specialty
  );

  return (
    <div
      style={{
        boxShadow:
          "0px 1px 30px rgba(0, 0, 0, .03), 0 .275rem .75rem -.0625rem rgba(0, 0, 0, .06)",
      }}
      className="rounded-lg overflow-hidden p-4 mb-[10px] font-poppins"
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
            <p className="mt-[10px]">
              {specialtyValue && specialtyValue?.label}
            </p>
            <p>{mobileNumber}</p>
          </div>
        </div>
        {/* middle */}
        <div></div>
        {/* bottom div to show chamber infos */}
        <div className="mt-5 flex gap-6 overflow-x-auto">
          {chamberInfos?.map((chamber) => (
            <div
              key={chamber.chamberCount}
              className="border-[#02c782] border-[1px] px-[15px] py-[10px] rounded-lg flex-shrink-0"
            >
              <p>{chamber?.chamberName}</p>
              <p>{chamber?.location}</p>
              <p>{chamber?.visitingPrice}</p>
              <p>{chamber?.visitingHour}</p>
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
