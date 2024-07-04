import SectionHeader from "../../SectionHeader/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Autoplay } from "swiper/modules";

import "./Hospital.css";
import img1 from "../../../assets/hospital/img1.png";
import img2 from "../../../assets/hospital/img2.png";
import img3 from "../../../assets/hospital/img3.png";
import img4 from "../../../assets/hospital/img4.png";

import icon1 from "../../../assets/icons/hospital/stethoscope.svg";
import icon2 from "../../../assets/icons/hospital/location.svg";
import icon3 from "../../../assets/icons/hospital/gps-navigation.svg";

const Hospital = () => {
  return (
    <div className="w-[1589px] mx-auto mt-[205px] mb-[146px]" id="hospital">
      <SectionHeader
        sectionName={"Hospital"}
        sectionHeader={"Hospitals near you"}
        sectionSubHeader={"Find out how our users are spreading the world"}
      ></SectionHeader>
      {/* slider */}
      <div className="mb-[60px]">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              style={{
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
              className="bg-white rounded-[22px] pl-[26px] pr-1 py-[22px] mb-2 mt-2"
            >
              {/* img div */}
              <div>
                <img className="rounded-[22px] mb-6" src={img1} alt="" />
              </div>
              {/* text div */}
              <div>
                <h5 className="mb-[8px] text-[#121212] font-poppins text-xl font-semibold">
                  Evercare Hospital Dhaka
                </h5>
                <div>
                  {/* specialties */}
                  <div className="flex items-start space-x-2">
                    {/* icon */}
                    <img className="mt-[8px]" src={icon1} alt="" />
                    {/* text */}
                    <p className="text-[#121212] text-[15px] font-inter">
                      <span className="text-[#121212] font-medium text-[15px] font-inter">
                        Specialities :
                      </span>{" "}
                      Plot: Cardiology, Obstetric and Gynecology, ENT,
                      Orthodontics (+21)
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
                      Plot: 81, Block: E, Bashundhara R/A, Dhaka 1229,
                      Bangladesh.
                    </p>
                  </div>
                </div>
              </div>
              {/* button div */}
              <div className="mt-[14px] pr-[26px]">
                <button className="text-white font-poppins text-[13px] font-semibold py-[15px] bg-[#086060] rounded-[22px] w-full">
                  View Clinic
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
              className="bg-white rounded-[22px] pl-[26px] pr-1 py-[22px] mb-2 mt-2"
            >
              {/* img div */}
              <div>
                <img className="rounded-[22px] mb-6" src={img2} alt="" />
              </div>
              {/* text div */}
              <div>
                <h5 className="mb-[8px] text-[#121212] font-poppins text-xl font-semibold">
                  Evercare Hospital Dhaka
                </h5>
                <div>
                  {/* specialties */}
                  <div className="flex items-start space-x-2">
                    {/* icon */}
                    <img className="mt-[8px]" src={icon1} alt="" />
                    {/* text */}
                    <p className="text-[#121212] text-[15px] font-inter">
                      <span className="text-[#121212] font-medium text-[15px] font-inter">
                        Specialities :
                      </span>{" "}
                      Plot: Cardiology, Obstetric and Gynecology, ENT,
                      Orthodontics (+21)
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
                      Plot: 81, Block: E, Bashundhara R/A, Dhaka 1229,
                      Bangladesh.
                    </p>
                  </div>
                </div>
              </div>
              {/* button div */}
              <div className="mt-[14px] pr-[26px]">
                <button className="text-white font-poppins text-[13px] font-semibold py-[15px] bg-[#086060] rounded-[22px] w-full">
                  View Clinic
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
              className="bg-white rounded-[22px] pl-[26px] pr-1 py-[22px] mb-2 mt-2"
            >
              {/* img div */}
              <div>
                <img className="rounded-[22px] mb-6" src={img3} alt="" />
              </div>
              {/* text div */}
              <div>
                <h5 className="mb-[8px] text-[#121212] font-poppins text-xl font-semibold">
                  Evercare Hospital Dhaka
                </h5>
                <div>
                  {/* specialties */}
                  <div className="flex items-start space-x-2">
                    {/* icon */}
                    <img className="mt-[8px]" src={icon1} alt="" />
                    {/* text */}
                    <p className="text-[#121212] text-[15px] font-inter">
                      <span className="text-[#121212] font-medium text-[15px] font-inter">
                        Specialities :
                      </span>{" "}
                      Plot: Cardiology, Obstetric and Gynecology, ENT,
                      Orthodontics (+21)
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
                      Plot: 81, Block: E, Bashundhara R/A, Dhaka 1229,
                      Bangladesh.
                    </p>
                  </div>
                </div>
              </div>
              {/* button div */}
              <div className="mt-[14px] pr-[26px]">
                <button className="text-white font-poppins text-[13px] font-semibold py-[15px] bg-[#086060] rounded-[22px] w-full">
                  View Clinic
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
              className="bg-white rounded-[22px] pl-[26px] pr-1 py-[22px] mb-2 mt-2"
            >
              {/* img div */}
              <div>
                <img className="rounded-[22px] mb-6" src={img4} alt="" />
              </div>
              {/* text div */}
              <div>
                <h5 className="mb-[8px] text-[#121212] font-poppins text-xl font-semibold">
                  Evercare Hospital Dhaka
                </h5>
                <div>
                  {/* specialties */}
                  <div className="flex items-start space-x-2">
                    {/* icon */}
                    <img className="mt-[8px]" src={icon1} alt="" />
                    {/* text */}
                    <p className="text-[#121212] text-[15px] font-inter">
                      <span className="text-[#121212] font-medium text-[15px] font-inter">
                        Specialities :
                      </span>{" "}
                      Plot: Cardiology, Obstetric and Gynecology, ENT,
                      Orthodontics (+21)
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
                      Plot: 81, Block: E, Bashundhara R/A, Dhaka 1229,
                      Bangladesh.
                    </p>
                  </div>
                </div>
              </div>
              {/* button div */}
              <div className="mt-[14px] pr-[26px]">
                <button className="text-white font-poppins text-[13px] font-semibold py-[15px] bg-[#086060] rounded-[22px] w-full">
                  View Clinic
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
              className="bg-white rounded-[22px] pl-[26px] pr-1 py-[22px] mb-2 mt-2"
            >
              {/* img div */}
              <div>
                <img className="rounded-[22px] mb-6" src={img4} alt="" />
              </div>
              {/* text div */}
              <div>
                <h5 className="mb-[8px] text-[#121212] font-poppins text-xl font-semibold">
                  Evercare Hospital Dhaka
                </h5>
                <div>
                  {/* specialties */}
                  <div className="flex items-start space-x-2">
                    {/* icon */}
                    <img className="mt-[8px]" src={icon1} alt="" />
                    {/* text */}
                    <p className="text-[#121212] text-[15px] font-inter">
                      <span className="text-[#121212] font-medium text-[15px] font-inter">
                        Specialities :
                      </span>{" "}
                      Plot: Cardiology, Obstetric and Gynecology, ENT,
                      Orthodontics (+21)
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
                      Plot: 81, Block: E, Bashundhara R/A, Dhaka 1229,
                      Bangladesh.
                    </p>
                  </div>
                </div>
              </div>
              {/* button div */}
              <div className="mt-[14px] pr-[26px]">
                <button className="text-white font-poppins text-[13px] font-semibold py-[15px] bg-[#086060] rounded-[22px] w-full">
                  View Clinic
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* view all btn */}
      <button className="text-white font-poppins text-2xl leading-[123%] px-[69px] py-[27px] bg-[#086060] rounded-[23px] block mx-auto">
        View All
      </button>
    </div>
  );
};

export default Hospital;
