import PropTypes from "prop-types";
import useAllSpecialties from "../../hooks/useAllSpecialties";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

const DoctorCard = ({ doctor }) => {
  const { doctorsName, yearsOfExperience, specialty, chamberInfos, photo } =
    doctor;
  const [allSpecialties] = useAllSpecialties();

  const specialtyValue = allSpecialties.find(
    (singleSpecialty) => singleSpecialty.value === specialty
  );

  return (
    <div
      style={{
        boxShadow:
          "0px 1px 30px rgba(0, 0, 0, .03), 0 .275rem .75rem -.0625rem rgba(0, 0, 0, .06)",
      }}
      className="rounded-lg overflow-hidden p-4 mb-[10px] font-poppins"
    >
      {/* card top */}
      <div>
        {/* top */}
        <div className="flex">
          {/* top left */}
          <img
            className="h-[150px] w-[150px] rounded-full object-cover"
            src={photo}
            alt={`Image of ${doctorsName}`}
          />
          {/* top right */}
          <div className="ml-4">
            <p className="underline font-medium leading-[20px]">
              {doctorsName}
            </p>
            <p className="mt-[10px]">
              {specialtyValue && specialtyValue?.label}
            </p>
            <p>{yearsOfExperience}</p>
          </div>
        </div>
        {/* middle */}
        <div></div>
        {/* bottom div to show chamber infos */}
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
            {chamberInfos?.map((chamber) => (
              <SwiperSlide key={chamber.chamberCount}>
                <div className="border-[#02c782] border-[1px]">
                  <p>{chamber?.chamberName}</p>
                  <p>{chamber?.location}</p>
                  <p>{chamber?.visitingPrice}</p>
                  <p>{chamber?.visitingHour}</p>
                  <p>{chamber?.mobileNumber}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* card bottom */}
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.object,
};

export default DoctorCard;
