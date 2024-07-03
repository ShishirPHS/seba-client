import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

import img1 from "../../../assets/best-gynecologist-doctor/img1.png";
import img2 from "../../../assets/best-gynecologist-doctor/img2.png";
import img3 from "../../../assets/best-gynecologist-doctor/img3.png";
import Rating from "react-rating";
import emptyStar from "../../../assets/icons/star/empty.svg";
import fullStar from "../../../assets/icons/star/full.svg";

const BestGynecologistDoctor = () => {
  return (
    <div className="w-[1589px] mx-auto mt-[128px] mb-[176px]">
      <h3 className="text-black font-poppins text-4xl font-medium leading-[123%] capitalize mb-[46px]">
        best gynocologist doctor of the month
      </h3>
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
          modules={[Autoplay]}
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
                    Dr. Rifat Ara Nova
                  </h5>
                  <h6 className="text-black font-poppins text-xl font-light">
                    MBBS
                  </h6>
                  <p className="text-[#7F7F7F] font-poppins text-xl">
                    3 Year of Experience
                  </p>
                </div>
                {/* rating */}
                <div className="flex items-center">
                  <Rating
                    initialRating={5}
                    readonly
                    emptySymbol={<img src={emptyStar} className="icon" />}
                    fullSymbol={<img src={fullStar} className="icon" />}
                  />
                  <p className="text-black font-poppins text-sm font-semibold ml-[12px]">
                    5 (278)
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
                <img className="rounded-[40px]" src={img2} alt="" />
              </div>
              <div>
                {/* text */}
                <div className="mb-5">
                  <h5 className="text-black font-poppins text-xl font-semibold">
                    Dr. Muhaimen Salit
                  </h5>
                  <h6 className="text-black font-poppins text-xl font-light">
                    MBBS
                  </h6>
                  <p className="text-[#7F7F7F] font-poppins text-xl">
                    4 Year of Experience
                  </p>
                </div>
                {/* rating */}
                <div className="flex items-center">
                  <Rating
                    initialRating={5}
                    readonly
                    emptySymbol={<img src={emptyStar} className="icon" />}
                    fullSymbol={<img src={fullStar} className="icon" />}
                  />
                  <p className="text-black font-poppins text-sm font-semibold ml-[12px]">
                    5 (193)
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
                <img className="rounded-[40px]" src={img3} alt="" />
              </div>
              <div>
                {/* text */}
                <div className="mb-5">
                  <h5 className="text-black font-poppins text-xl font-semibold">
                    Dr. Mahnaz Sultana
                  </h5>
                  <h6 className="text-black font-poppins text-xl font-light">
                    MBBS
                  </h6>
                  <p className="text-[#7F7F7F] font-poppins text-xl">
                    8 Year of Experience
                  </p>
                </div>
                {/* rating */}
                <div className="flex items-center">
                  <Rating
                    initialRating={5}
                    readonly
                    emptySymbol={<img src={emptyStar} className="icon" />}
                    fullSymbol={<img src={fullStar} className="icon" />}
                  />
                  <p className="text-black font-poppins text-sm font-semibold ml-[12px]">
                    5 (504)
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
                    Dr. Rifat Ara Nova
                  </h5>
                  <h6 className="text-black font-poppins text-xl font-light">
                    MBBS
                  </h6>
                  <p className="text-[#7F7F7F] font-poppins text-xl">
                    3 Year of Experience
                  </p>
                </div>
                {/* rating */}
                <div className="flex items-center">
                  <Rating
                    initialRating={5}
                    readonly
                    emptySymbol={<img src={emptyStar} className="icon" />}
                    fullSymbol={<img src={fullStar} className="icon" />}
                  />
                  <p className="text-black font-poppins text-sm font-semibold ml-[12px]">
                    5 (278)
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

export default BestGynecologistDoctor;
