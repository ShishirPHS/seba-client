import SectionHeader from "../../SectionHeader/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Autoplay } from "swiper/modules";

import img1 from "../../../assets/best-skin-doctor/img1.png";
import "./Hospital.css";

const Hospital = () => {
  return (
    <div className="w-[1589px] mx-auto mt-[205px] mb-[146px]" id="hospital">
      <SectionHeader
        sectionName={"Hospital"}
        sectionHeader={"Hospitals near you"}
        sectionSubHeader={"Find out how our users are spreading the world"}
      ></SectionHeader>
      {/* slider */}
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
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              style={{ boxShadow: " 4px 4px 19.3px 0px rgba(0, 0, 0, 0.07)" }}
              className="flex items-center gap-[34px] rounded-[40px] bg-white p-[14px]"
            >
              <div>
                <img className="rounded-[40px]" src={img1} alt="" />
              </div>
              <div>
                {/* text */}
                <div className="mb-5">
                  <h5 className="text-black font-poppins text-xl font-semibold">
                    Dr. Shafwanur Rahman
                  </h5>
                  <h6 className="text-black font-poppins text-xl font-light">
                    MBBS
                  </h6>
                  <p className="text-[#7F7F7F] font-poppins text-xl">
                    5 Year of Experience
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{ boxShadow: " 4px 4px 19.3px 0px rgba(0, 0, 0, 0.07)" }}
              className="flex items-center gap-[34px] rounded-[40px] bg-white p-[14px]"
            >
              <div>
                <img className="rounded-[40px]" src={img1} alt="" />
              </div>
              <div>
                {/* text */}
                <div className="mb-5">
                  <h5 className="text-black font-poppins text-xl font-semibold">
                    Dr. Shafwanur Rahman
                  </h5>
                  <h6 className="text-black font-poppins text-xl font-light">
                    MBBS
                  </h6>
                  <p className="text-[#7F7F7F] font-poppins text-xl">
                    5 Year of Experience
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hospital;
