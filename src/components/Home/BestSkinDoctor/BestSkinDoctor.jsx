import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

import "./BestSkinDoctor.css";
import useBestSkinDoctor from "../../../hooks/useBestSkinDoctor";
import SingleRatingCard from "../../SingleRatingCard/SingleRatingCard";

const BestSkinDoctor = () => {
  const [bestSkinDoctors] = useBestSkinDoctor();

  return (
    <div
      className="container mx-auto mt-[68px] lg:mt-[90px] xl:mt-[128px] mb-[26px] lg:mb-[10px] xl:mb-[60px]"
      id="bestSkinDoctor"
    >
      <div className="">
        <h3 className="text-black font-poppins text-[18px] sm:text-xl lg:text-2xl xl:text-[34px] 2xl:text-4xl font-medium leading-[123%] capitalize mb-0 lg:mb-4 xl:mb-[26px] max-w-[195px] sm:max-w-[212px] md:max-w-none text-center md:text-left mx-auto px-5">
          best skin doctor{" "}
          <span className="text-[14px] sm:text-base md:text-xl lg:text-2xl xl:text-[34px] 2xl:text-4xl">
            of the month
          </span>
        </h3>
        {bestSkinDoctors.length && (
          <div>
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 3,
                },
                1589: {
                  slidesPerView: 3,
                },
                1920: {
                  slidesPerView: 3,
                },
              }}
              slidesPerView={1}
              spaceBetween={22}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              className="mySwiper skinDoctorSlider"
            >
              {bestSkinDoctors.map((doctor) => (
                <SwiperSlide key={doctor.id}>
                  <SingleRatingCard doctor={doctor}></SingleRatingCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSkinDoctor;
