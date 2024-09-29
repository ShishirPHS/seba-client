import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import "./BestGynecologistDoctor.css";
import SingleRatingCard from "../../SingleRatingCard/SingleRatingCard";
import useBestGynecologistDoctor from "../../../hooks/useBestGynecologistDoctor";
import Container from "../../shared/Container/Container";

const BestGynecologistDoctor = () => {
  const [bestGynecologistDoctors] = useBestGynecologistDoctor();

  return (
    <>
      <Container>
        <div
          className="mt-0 lg:mt-[30px] xl:mt-[68px] mb-[40px] lg:mb-[60px] xl:mb-[80px]"
          id="bestGynecologistDoctor"
        >
          <div>
            <h2 className="text-black font-poppins text-[18px] sm:text-xl lg:text-2xl xl:text-[34px] font-medium leading-[123%] capitalize mb-0 lg:mb-[16px] xl:mb-[26px] max-w-[275px] sm:max-w-[305px] md:max-w-none text-center md:text-left mx-auto px-5">
              best gynecologist doctor{" "}
              <span className="text-[14px] sm:text-base md:text-xl lg:text-2xl xl:text-[34px]">
                of the month
              </span>
            </h2>
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
                  }}
                  slidesPerView={1}
                  spaceBetween={22}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    reverseDirection: true,
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
      </Container>
    </>
  );
};

export default BestGynecologistDoctor;
