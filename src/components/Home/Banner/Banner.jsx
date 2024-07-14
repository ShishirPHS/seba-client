import bannerImg from "../../../assets/banner/banner-image.png";
import "./Banner.css";
import locationIcon from "../../../assets/icons/location-icon.svg";
import angelDown from "../../../assets/icons/angel-down.svg";
import { useRef } from "react";

const Banner = () => {
  const selectRef1 = useRef(null);
  const selectRef2 = useRef(null);

  const handleImageClick = (ref) => {
    if (ref.current) {
      ref.current.focus();
      ref.current.click();
    }
  };

  return (
    <div className="bg-[#086060] banner px-[24px] md:px-0">
      <div className="container mx-auto relative overflow-hidden">
        <div className="flex md:mx-5">
          {/* banner left */}
          <div className="mb-[70px] lg:mb-[70px] 2xl:mb-[156px] bg-white rounded-[40px] pt-[23px] lg:pt-[30px] 2xl:pt-[49px] pb-[23px] lg:pb-[25px] 2xl:pb-[40px] px-7 lg:px-[25px] 2xl:px-16 mt-[64px] lg:mt-[80px] 2xl:mt-[177px] w-full md:w-[50%]">
            <h3 className="mb-[25px] md:mb-[62px] font-poppins text-xl lg:30px 2xl:text-5xl text-center md:text-left font-bold max-w-[226px]  2xl:max-w-[490px] leading-[123%] block md:inline-block mx-auto">
              Find the Best Doctor Near You
            </h3>
            <form className="border border-[#808080] rounded-[25px] md:rounded-[40px] overflow-hidden">
              <div className="border-b border-[#808080] relative pt-[10px] md:pt-[48px] px-[8px] md:px-[32px] pb-[2px] md:pb-[20px]">
                <input
                  type="text"
                  placeholder="Enter Your City or Location"
                  className="input placeholder:text-sm md:placeholder:text-2xl text-sm md:text-2xl flex-grow placeholder:text-[#808080] w-full"
                  required
                />
                <img
                  className="w-[19px] md:w-[31px] h-[19px] md:h-[33px] absolute right-[25px] md:right-[55px] top-[50%] "
                  src={locationIcon}
                  alt="a icon of location"
                />
              </div>
              <div className="border-b border-[#808080] flex justify-between pt-[8px] md:pt-[48px] px-[8px] md:px-[32px] pb-[2px] md:pb-[30px] gap-[5px] md:gap-[100px]">
                <div className="w-full relative">
                  <select
                    ref={selectRef1}
                    className="select w-full text-sm md:text-2xl text-[#808080]"
                    defaultValue={"Symptoms"}
                  >
                    <option disabled>Symptoms</option>
                    <option>Svelte</option>
                    <option>Vue</option>
                    <option>React</option>
                  </select>
                  <img
                    className="absolute right-[10px] md:right-0 top-[50%] transform translate-y-[-50%] bg-white cursor-pointer z-20 w-[19px] md:w-auto h-[27px] md:h-auto"
                    src={angelDown}
                    alt="angel down"
                    onClick={() => handleImageClick(selectRef1)}
                  />
                </div>
                <div className="w-full relative">
                  <select
                    ref={selectRef2}
                    className="select w-full text-sm md:text-2xl text-[#808080]"
                    defaultValue={"Diseases"}
                  >
                    <option disabled>Diseases</option>
                    <option>Svelte</option>
                    <option>Vue</option>
                    <option>React</option>
                  </select>
                  <img
                    className="absolute right-[10px] md:right-0 top-[50%] transform translate-y-[-50%] bg-white cursor-pointer z-20 w-[19px] md:w-auto h-[27px] md:h-auto"
                    src={angelDown}
                    alt="angel down"
                    onClick={() => handleImageClick(selectRef2)}
                  />
                </div>
              </div>
              <div className="pt-[12px] md:pt-[20px] px-4 md:px-[40px] pb-[13px] md:pb-[30px]">
                <button className="text-white font-bold text-[10px] md:text-xl bg-[#FF0068] rounded-[12px] md:rounded-[20px] w-full py-2 md:py-[14px] font-poppins">
                  Search
                </button>
              </div>
            </form>
          </div>
          {/* banner right */}
          <div>
            <img
              className="hidden md:block absolute bottom-0 -right-[18px] 2xl:right-0 w-[640px] 2xl:w-auto"
              src={bannerImg}
              alt="banner image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
