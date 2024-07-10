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
      className="container mx-auto mt-[128px] mb-[176px]"
      id="bestGynecologistDoctor"
    >
      <div className="mx-5">
        <h3 className="text-black font-poppins text-4xl font-medium leading-[123%] capitalize mb-[26px]">
          best gynecologist doctor of the month
        </h3>
        {bestGynecologistDoctors.length && (
          <div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              className="mySwiper"
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
