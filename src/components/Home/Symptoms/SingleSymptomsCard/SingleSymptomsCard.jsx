import PropTypes from "prop-types";

const SingleSymptomsCard = ({ symptom }) => {
  const { image, symptomsName } = symptom;

  return (
    <div className="flex flex-col items-center">
      <div
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
        className="mb-[12px] lg:mb-[18px] xl:mb-[22px] border border-primary rounded-[18px] md:rounded-[22px]"
      >
        <img
          style={{ boxSizing: "content-box" }}
          className="p-4 rounded-[18px] md:rounded-[22px] px-[20px] sm:px-[24px] lg:px-[35px] xl:px-[45px] py-[18px] sm:py-[22px] lg:py-[30px] xl:py-[40px] w-[34px] sm:w-10 lg:w-[50px] xl:w-auto h-[34px] sm:h-10 md:h-auto"
          src={image}
          alt={`An icon representing ${symptomsName}`}
        />
      </div>
      <p className="text-black text-center font-poppins text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-medium leading-[123%]">
        {symptomsName}
      </p>
    </div>
  );
};

SingleSymptomsCard.propTypes = {
  symptom: PropTypes.object.isRequired,
};

export default SingleSymptomsCard;
