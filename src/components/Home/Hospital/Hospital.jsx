import SectionHeader from "../../SectionHeader/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Autoplay } from "swiper/modules";

import "./Hospital.css";

import prevIcon from "../../../assets/icons/hospital/prevArrow.svg";
import SingleSlide from "./SingleSlide/SingleSlide";
import useHospitalInfo from "../../../hooks/useHospitalInfo";

const Hospital = () => {
  const [hospitalInfo] = useHospitalInfo();

  return (
    <div
      className="container mx-auto mt-[58px] lg:mt-[90px] xl:mt-[205px] lg:mb-[90px] xl:mb-[146px] px-5 overflow-hidden"
      id="hospital"
    >
      <div className="mb-[16px] lg:mb-[55px] xl:mb-[107px]">
        <SectionHeader
          cla
          sectionName={"Hospital"}
          sectionHeader={"Hospitals near you"}
          sectionSubHeader={"Find out how our users are spreading the world"}
        ></SectionHeader>
      </div>

      {/* slider */}
      {hospitalInfo.length && (
        <>
          <div className="mb-[47px] lg:mb-[45px] xl:mb-[60px] sliderDiv relative">
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 3,
                },
                1589: {
                  slidesPerView: 4,
                },
                1920: {
                  slidesPerView: 4,
                },
              }}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              // autoplay={{
              //   delay: 2000,
              //   disableOnInteraction: false,
              // }}
              navigation={{
                prevEl: ".custom-swiper-button-prev",
                nextEl: ".custom-swiper-button-next",
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {hospitalInfo.map((singleHospital) => (
                <SwiperSlide key={singleHospital.id}>
                  <SingleSlide hospital={singleHospital}></SingleSlide>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation */}
            <div className="custom-swiper-button-prev flex justify-center items-center w-9 md:w-[72px]  h-9 md:h-[72px] shadow-slider-navigation-btn-shadow">
              <img
                className="w-6 md:w-auto h-6 md:h-auto "
                src={prevIcon}
                alt=""
              />
            </div>
            <div className="custom-swiper-button-next flex justify-center items-center w-9 md:w-[72px]  h-9 md:h-[72px] shadow-slider-navigation-btn-shadow">
              <img
                className="w-6 md:w-auto h-6 md:h-auto rotate-[180deg]"
                src={prevIcon}
                alt=""
              />
            </div>
          </div>
        </>
      )}

      {/* view all btn */}
      <button className="text-white font-poppins text-2xl lg:text-xl xl:text-2xl leading-[123%] px-[69px] lg:px-[58px] xl:px-[69px] py-[27px] lg:py-[18px] xl:py-[27px] bg-[#086060] rounded-[23px] hidden md:block mx-auto">
        View All
      </button>
    </div>
  );
};

export default Hospital;
