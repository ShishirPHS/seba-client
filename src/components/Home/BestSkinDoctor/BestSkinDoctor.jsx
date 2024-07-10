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
      className="container mx-auto mt-[128px] mb-[60px] "
      id="bestSkinDoctor"
    >
      <div className="mx-5">
        <h3 className="text-black font-poppins text-4xl font-medium leading-[123%] capitalize mb-[26px]">
          best skin doctor of the month
        </h3>
        {bestSkinDoctors.length && (
          <div>
            <Swiper
              slidesPerView={3}
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
