import PropTypes from "prop-types";

const SectionHeader = ({ sectionName, sectionHeader, sectionSubHeader }) => {
  return (
    <div className="mb-[16px] md:mb-[107px]">
      <div className="flex justify-center">
        <p className="sectionName py-[5px] md:py-[12px] mb-[15px] md:mb-[22px] px-[29px] md:px-[47px] bg-[#FF0068] text-white font-poppins text-[9px] md:text-xl font-medium leading-[123%] rounded-[100px]">
          {sectionName}
        </p>
      </div>
      <h3 className="sectionHeader text-black text-center font-poppins text-xl md:text-5xl font-semibold leading-[123%] mb-1 md:mb-[17px]">
        {sectionHeader}
      </h3>
      <p className="sectionSubHeader text-center text-black font-poppins text-[12px] md:text-xl font-light leading-[123%]">
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
