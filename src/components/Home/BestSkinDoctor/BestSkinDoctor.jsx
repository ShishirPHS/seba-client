import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const BestSkinDoctor = () => {
  return (
    <div className="w-[1589px] mx-auto mt-[128px] mb-[100px]">
      <h3 className="text-black font-poppins text-4xl font-medium leading-[123%] capitalize mb-[46px]">
        best skin doctor of the month
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
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-[100px] bg-red-600">hello world!</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[100px] bg-red-600">hello world!</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[100px] bg-red-600">hello world!</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[100px] bg-red-600">hello world!</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BestSkinDoctor;
