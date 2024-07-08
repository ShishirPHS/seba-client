import img1 from "../../../../assets/hospital/img1.png";

import icon1 from "../../../../assets/icons/hospital/stethoscope.svg";
import icon2 from "../../../../assets/icons/hospital/location.svg";
import icon3 from "../../../../assets/icons/hospital/gps-navigation.svg";

const SingleSlide = () => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
      className="bg-white rounded-[22px] pl-[44px] md:pl-[26px] pr-1 md:pr-1 py-[22px] mb-2 mt-2 mx-[2px]"
    >
      {/* img div */}
      <div className="rounded-[22px] mb-6 pr-[40px] md:pr-[22px]">
        <img className="w-full rounded-[22px]" src={img1} alt="" />
      </div>
      {/* text div */}
      <div>
        <h5 className="mb-[8px] text-[#121212] font-poppins text-[13px] md:text-xl font-semibold">
          Evercare Hospital Dhaka
        </h5>
        <div className="text-[11px] md:text-[15px]">
          {/* specialties */}
          <div className="flex items-start space-x-2">
            {/* icon */}
            <img className="mt-[8px]" src={icon1} alt="" />
            {/* text */}
            <p className="text-[#121212] text-[15px] font-inter">
              <span className="text-[#121212] font-medium text-[15px] font-inter">
                Specialities :
              </span>
              Plot: Cardiology, Obstetric and Gynecology, ENT, Orthodontics
              (+21)
            </p>
          </div>
          {/* area */}
          <div className="flex items-start space-x-2 my-[13px]">
            {/* icon */}
            <img src={icon2} alt="" />
            {/* text */}
            <p className="text-[#121212] text-[15px] font-inter">
              <span className="text-[#121212] font-medium text-[15px] font-inter">
                Area :
              </span>
              Dhaka
            </p>
          </div>
          {/* address */}
          <div className="flex items-start space-x-2">
            {/* icon */}
            <img src={icon3} alt="" />
            {/* text */}
            <p className="text-[#121212] text-[15px] font-inter">
              <span className="text-[#121212] font-medium text-[15px] font-inter">
                Address :
              </span>
              Plot: 81, Block: E, Bashundhara R/A, Dhaka 1229, Bangladesh.
            </p>
          </div>
        </div>
      </div>
      {/* button div */}
      <div className="mt-[28px] md:mt-[14px] pr-[22px]">
        <button className="text-white font-poppins text-[13px] font-semibold py-[15px] bg-[#086060] rounded-[22px] w-full">
          View Clinic
        </button>
      </div>
    </div>
  );
};

export default SingleSlide;
