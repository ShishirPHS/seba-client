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
    <div className="bg-[#086060] banner relative px-[24px] md:px-0">
      <div className="container mx-auto flex">
        {/* banner left */}
        <div className="mb-[70px] md:mb-[156px] bg-white rounded-[40px] pt-[23px] md:pt-[49px] pb-[23px] md:pb-[40px] px-7 md:px-16 mt-[64px] md:mt-[177px] w-full md:w-[50%]">
          <h3 className="mb-[25px] md:mb-[62px] font-poppins text-xl md:text-5xl text-center md:text-left font-bold max-w-[226px] md:max-w-[490px] leading-[123%]">
            Find the Best Doctor Near You
          </h3>
          <form className="border border-[#808080] rounded-[25px] md:rounded-[40px] overflow-hidden">
            <div className="border-b border-[#808080] flex pt-[28px] md:pt-[48px] px-[24px] md:px-[32px] pb-[14px] md:pb-[20px]">
              <input
                type="text"
                placeholder="Enter Your City or Location"
                className="input placeholder:text-2xl text-2xl flex-grow placeholder:text-[#808080]"
                required
              />
              <img
                className="w-[31px] h-[33px]"
                src={locationIcon}
                alt="a icon of location"
              />
            </div>
            <div className="border-b border-[#808080] flex justify-between pt-[48px] px-[32px] pb-[30px] gap-[100px]">
              <div className="w-full relative">
                <select
                  ref={selectRef1}
                  className="select w-full text-2xl text-[#808080]"
                  defaultValue={"Symptoms"}
                >
                  <option disabled>Symptoms</option>
                  <option>Svelte</option>
                  <option>Vue</option>
                  <option>React</option>
                </select>
                <img
                  className="absolute right-0 top-[50%] transform translate-y-[-50%] bg-white cursor-pointer z-20"
                  src={angelDown}
                  alt="angel down"
                  onClick={() => handleImageClick(selectRef1)}
                />
              </div>
              <div className="w-full relative">
                <select
                  ref={selectRef2}
                  className="select w-full text-2xl text-[#808080]"
                  defaultValue={"Diseases"}
                >
                  <option disabled>Diseases</option>
                  <option>Svelte</option>
                  <option>Vue</option>
                  <option>React</option>
                </select>
                <img
                  className="absolute right-0 top-[50%] transform translate-y-[-50%] bg-white cursor-pointer z-20"
                  src={angelDown}
                  alt="angel down"
                  onClick={() => handleImageClick(selectRef2)}
                />
              </div>
            </div>
            <div className="py-[20px] px-[40px] pb-[30px]">
              <button className="text-white font-bold text-xl bg-[#FF0068] rounded-[20px] w-full py-[14px] font-poppins">
                Search
              </button>
            </div>
          </form>
        </div>
        {/* banner right */}
        <div>
          <img
            className="hidden md:block absolute bottom-0"
            src={bannerImg}
            alt="banner image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
