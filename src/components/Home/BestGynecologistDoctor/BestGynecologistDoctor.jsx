import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import "./BestGynecologistDoctor.css";
import SingleRatingCard from "../../SingleRatingCard/SingleRatingCard";
import useBestGynecologistDoctor from "../../../hooks/useBestGynecologistDoctor";

const BestGynecologistDoctor = () => {
  const [bestGynecologistDoctors] = useBestGynecologistDoctor();

  return (
    <div
      className="container mx-auto mt-0 lg:mt-[30px] xl:mt-[68px] mb-[40px] lg:mb-[60px] xl:mb-[80px] 2xl:mb-[136px]"
      id="bestGynecologistDoctor"
    >
      <div className="">
        <h3 className="text-black font-poppins text-[18px] sm:text-xl lg:text-2xl xl:text-[34px] 2xl:text-4xl font-medium leading-[123%] capitalize mb-0 lg:mb-[16px] xl:mb-[26px] max-w-[275px] sm:max-w-[305px] md:max-w-none text-center md:text-left mx-auto px-5">
          best gynecologist doctor{" "}
          <span className="text-[14px] sm:text-base lg:text-2xl xl:text-[34px] 2xl:text-4xl">
            of the month
          </span>
        </h3>
        {bestGynecologistDoctors.length && (
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
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              className="mySwiper gyDoctorSlider"
            >
              {bestGynecologistDoctors.map((doctor) => (
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

export default BestGynecologistDoctor;
