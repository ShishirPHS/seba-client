import PropTypes from "prop-types";

const SingleSymptomsCard = ({ symptom }) => {
  const { image, symptomsName } = symptom;

  return (
    <div className="flex flex-col items-center">
      <div
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        className="mb-[22px] border border-[#086060] rounded-[18px] md:rounded-[22px]"
      >
        <img
          style={{ boxSizing: "content-box" }}
          className="p-4 rounded-[18px] md:rounded-[22px] px-[24px] md:px-[45px] py-[22px] md:py-[40px] w-10 md:w-auto h-10 md:h-auto"
          src={image}
          alt="an icon of thermometer"
        />
      </div>
      <p className="text-black font-poppins text-xs md:text-2xl font-medium leading-[123%]">
        {symptomsName}
      </p>
    </div>
  );
};

SingleSymptomsCard.propTypes = {
  symptom: PropTypes.object.isRequired,
};

export default SingleSymptomsCard;
