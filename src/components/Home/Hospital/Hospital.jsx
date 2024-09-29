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
import Container from "../../shared/Container/Container";
import { Link } from "react-router-dom";

const Hospital = () => {
  const [hospitalInfo] = useHospitalInfo();

  return (
    <>
      <Container>
        <div
          className="mt-[58px] lg:mt-[90px] xl:mt-[140px] md:mb-[60px] lg:mb-[90px] xl:mb-[104px] px-5 overflow-hidden"
          id="hospital"
        >
          <div className="mb-[16px] lg:mb-[55px] xl:mb-[75px]">
            <SectionHeader
              sectionName={"Hospital"}
              sectionHeader={"Hospitals near you"}
              sectionSubHeader={
                "Find out how our users are spreading the world"
              }
            ></SectionHeader>
          </div>

          {/* slider */}
          {hospitalInfo.length && (
            <>
              <div className="mb-[47px] lg:mb-[45px] xl:mb-[60px] lg:mx-[15px] sliderDiv relative">
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
                  spaceBetween={17}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
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
                {/* Custom Navigation buttons start */}
                <div className="custom-swiper-button-prev flex justify-center items-center w-9 lg:w-[50px] h-9 lg:h-[50px] shadow-slider-navigation-btn-shadow-normal">
                  <img
                    className="w-6 lg:w-[30px] h-6 md:h-auto"
                    src={prevIcon}
                    alt=""
                  />
                </div>
                <div className="custom-swiper-button-next flex justify-center items-center w-9 lg:w-[50px] h-9 lg:h-[50px] shadow-slider-navigation-btn-shadow-normal">
                  <img
                    className="w-6 lg:w-[30px] h-6 md:h-auto rotate-[180deg]"
                    src={prevIcon}
                    alt=""
                  />
                </div>
                {/* Custom Navigation buttons end */}
              </div>
            </>
          )}

          {/* view all btn */}
          <div className="flex justify-center items-center">
            <Link className="text-white font-poppins text-2xl md:text-lg lg:text-xl xl:text-[22px] leading-[123%] px-[69px] lg:px-[58px] xl:px-[62px] py-[22px] lg:py-[18px] xl:py-[24px] bg-primary rounded-[23px] hidden md:inline-block mx-auto">
              View All
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hospital;
