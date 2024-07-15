import PropTypes from "prop-types";

const SectionHeader = ({ sectionName, sectionHeader, sectionSubHeader }) => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="sectionName py-[5px] lg:py-[10px] xl:py-[12px] mb-[15px] lg:mb-[16px] xl:mb-[22px] px-[29px] lg:px-[44px] xl:px-[47px] bg-[#FF0068] text-white font-poppins text-[9px] lg:text-sm xl:text-xl font-medium leading-[123%] rounded-[100px]">
          {sectionName}
        </p>
      </div>
      <h3 className="sectionHeader text-black text-center font-poppins text-xl lg:text-[34px] xl:text-5xl font-semibold leading-[123%] mb-1 lg:mb-2 xl:mb-[17px]">
        {sectionHeader}
      </h3>
      <p className="sectionSubHeader text-center text-black font-poppins text-[12px] lg:text-lg xl:text-xl font-light leading-[123%]">
        {sectionSubHeader}
      </p>
    </div>
  );
};

SectionHeader.propTypes = {
  sectionName: PropTypes.string.isRequired,
  sectionHeader: PropTypes.string.isRequired,
  sectionSubHeader: PropTypes.string.isRequired,
};

export default SectionHeader;
