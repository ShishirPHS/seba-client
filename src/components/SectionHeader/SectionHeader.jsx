import PropTypes from "prop-types";

const SectionHeader = ({ sectionName, sectionHeader, sectionSubHeader }) => {
  return (
    <>
      <div className="flex justify-center">
        <h3 className="sectionName py-[5px] lg:py-[10px] xl:py-[9px] mb-[15px] lg:mb-[16px] xl:mb-[22px] px-[29px] lg:px-[44px] xl:px-[44px] bg-[#FF0068] text-white font-poppins text-[9px] sm:text-xs lg:text-sm xl:text-lg font-medium leading-[123%] rounded-[100px]">
          {sectionName}
        </h3>
      </div>
      <h2 className="sectionHeader text-black text-center font-poppins text-xl sm:text-2xl lg:text-[34px] xl:text-5xl font-semibold leading-[123%] mb-1 lg:mb-2 xl:mb-[12px]">
        {sectionHeader}
      </h2>
      <p className="sectionSubHeader text-center text-black font-poppins text-[12px] sm:text-base lg:text-lg xl:text-lg font-light leading-[123%]">
        {sectionSubHeader}
      </p>
    </>
  );
};

SectionHeader.propTypes = {
  sectionName: PropTypes.string.isRequired,
  sectionHeader: PropTypes.string.isRequired,
  sectionSubHeader: PropTypes.string.isRequired,
};

export default SectionHeader;
