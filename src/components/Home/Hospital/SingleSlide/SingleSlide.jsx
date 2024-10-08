import icon1 from "../../../../assets/icons/hospital/stethoscope.svg";
import icon2 from "../../../../assets/icons/hospital/location.svg";
import icon3 from "../../../../assets/icons/hospital/gps-navigation.svg";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleSlide = ({ hospital }) => {
  const { image, hospitalName, specialties, area, address } = hospital;

  return (
    <div
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
      className="bg-white rounded-[22px] pl-[26px] sm:pl-[40px] md:pl-[26px] pr-1 md:pr-1 py-[22px] mb-2 mt-2 mx-[2px]"
    >
      {/* img div */}
      <div className="rounded-[22px] mb-6 pr-[22px] sm:pr-[36px] md:pr-[22px]">
        <img className="w-full rounded-[22px]" src={image} alt="" />
      </div>
      {/* text div */}
      <div className="pr-[20px] lg:pr-[20px] xl:pr-0 max-w-[360px] sm:max-w-[412px]">
        <h5 className="mb-[8px] text-[#121212] font-poppins text-[13px] sm:text-base lg:text-lg xl:text-xl font-semibold">
          {hospitalName}
        </h5>
        <div>
          {/* specialties */}
          <div className="flex items-start space-x-2">
            {/* icon */}
            <img className="mt-[8px]" src={icon1} alt="" />
            {/* text */}
            <p className="text-[#121212] text-[11px] sm:text-[13px] lg:text-sm xl:text-[15px] font-inter">
              <span className="text-[#121212] font-medium font-inter">
                Specialties:{" "}
              </span>
              {specialties}
            </p>
          </div>
          {/* area */}
          <div className="flex items-start space-x-2 my-[13px]">
            {/* icon */}
            <img src={icon2} alt="" />
            {/* text */}
            <p className="text-[#121212] text-[11px] sm:text-[13px] lg:text-sm xl:text-[15px] font-inter">
              <span className="text-[#121212] font-medium font-inter">
                Area:{" "}
              </span>
              {area}
            </p>
          </div>
          {/* address */}
          <div className="flex items-start space-x-2">
            {/* icon */}
            <img src={icon3} alt="" />
            {/* text */}
            <p className="text-[#121212] text-[11px] sm:text-[13px] lg:text-sm xl:text-[15px] font-inter">
              <span className="text-[#121212] font-medium font-inter">
                Address:{" "}
              </span>
              {address}
            </p>
          </div>
        </div>
      </div>
      {/* button div */}
      <div className="mt-[28px] md:mt-[14px] pr-[22px] sm:pr-[36px] md:pr-[22px]">
        <Link className="block text-center text-white font-poppins text-[13px] font-semibold py-[15px] bg-primary rounded-[22px] w-full">
          View Clinic
        </Link>
      </div>
    </div>
  );
};

SingleSlide.propTypes = {
  hospital: PropTypes.object.isRequired,
};

export default SingleSlide;
