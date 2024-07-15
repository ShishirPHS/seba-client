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
      <div className="mx-5">
        <h3 className="text-black font-poppins text-[18px] lg:text-2xl xl:text-4xl font-medium leading-[123%] capitalize mb-0 lg:mb-4 xl:mb-[26px] max-w-[160px] md:max-w-none text-center md:text-left mx-auto">
          best skin doctor{" "}
          <span className="text-[14px] lg:text-2xl xl:text-4xl">
            of the month
          </span>
        </h3>
        {bestSkinDoctors.length && (
          <div>
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1,
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
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              className="mySwiper"
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
