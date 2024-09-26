import bannerImg from "../../../assets/banner/banner-image.png";
import "./Banner.css";
import locationIcon from "../../../assets/icons/location-icon.svg";
import { useEffect, useState } from "react";
import Select, { components } from "react-select";
import Container from "../../shared/Container/Container";

const Banner = () => {
  const [menuListHeight, setMenuListHeight] = useState("120px");

  const symptoms = [
    { label: "Fever", value: "fever" },
    {
      label: "Heart Attack",
      value: "heartAttack",
    },
    {
      label: "Pregnancy",
      value: "pregnancy",
    },
    {
      label: "High Blood Pressure",
      value: "highBloodPressure",
    },
    {
      label: "Breathlessness",
      value: "breathlessness",
    },
    {
      label: "Diarrhea",
      value: "diarrhea",
    },
    { label: "Fever", value: "fever" },
    {
      label: "Heart Attack",
      value: "heartAttack",
    },
    {
      label: "Pregnancy",
      value: "pregnancy",
    },
    {
      label: "High Blood Pressure",
      value: "highBloodPressure",
    },
    {
      label: "Breathlessness",
      value: "breathlessness",
    },
    {
      label: "Diarrhea",
      value: "diarrhea",
    },
    { label: "Fever", value: "fever" },
    {
      label: "Heart Attack",
      value: "heartAttack",
    },
    {
      label: "Pregnancy",
      value: "pregnancy",
    },
    {
      label: "High Blood Pressure",
      value: "highBloodPressure",
    },
    {
      label: "Breathlessness",
      value: "breathlessness",
    },
    {
      label: "Diarrhea",
      value: "diarrhea",
    },
    { label: "Fever", value: "fever" },
    {
      label: "Heart Attack",
      value: "heartAttack",
    },
    {
      label: "Pregnancy",
      value: "pregnancy",
    },
    {
      label: "High Blood Pressure",
      value: "highBloodPressure",
    },
    {
      label: "Breathlessness",
      value: "breathlessness",
    },
    {
      label: "Diarrhea",
      value: "diarrhea",
    },
    { label: "Fever", value: "fever" },
    {
      label: "Heart Attack",
      value: "heartAttack",
    },
    {
      label: "Pregnancy",
      value: "pregnancy",
    },
    {
      label: "High Blood Pressure",
      value: "highBloodPressure",
    },
    {
      label: "Breathlessness",
      value: "breathlessness",
    },
    {
      label: "Diarrhea",
      value: "diarrhea",
    },
  ];

  const getHeightByScreenSize = (width) => {
    if (width >= 1536) return "280px"; // 2xl
    if (width >= 1280) return "240px"; // xl
    if (width >= 1024) return "140px"; // lg
    if (width >= 768) return "120px"; // md
    if (width >= 640) return "120px"; // sm
    return "120px"; // default height for smaller screens
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg
          className="dropdown-icon"
          width="43"
          height="47"
          viewBox="0 0 43 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6488 29.375C20.0393 29.375 18.5282 28.6778 17.3896 27.4088L9.62679 19.319C9.27361 18.9508 9.25429 18.33 9.58638 17.9344C9.91671 17.5408 10.4737 17.5193 10.8286 17.8894L18.6125 26.0028C20.266 27.8416 23.0527 27.8201 24.6657 26.0263L32.469 17.8913C32.8239 17.5232 33.3809 17.5428 33.7112 17.9364C34.0415 18.332 34.024 18.9528 33.6708 19.3209L25.8869 27.4343C24.7694 28.6798 23.2583 29.377 21.6488 29.377V29.375Z"
            fill="black"
          />
        </svg>
      </components.DropdownIndicator>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setMenuListHeight(getHeightByScreenSize(width));
    };

    handleResize(); // Set initial height
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // style for react-select
  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: menuListHeight,
    }),
    dropdownIndicator: (base) => ({ ...base, padding: 0 }),
  };

  return (
    <div className="bg-primary banner px-[24px] sm:px-0">
      <Container>
        <div className="relative overflow-hidden">
          <div className="sm:mx-5">
            {/* banner left */}
            <div className="mb-[70px] lg:mb-[70px] xl:mb-[130px] 2xl:mb-[156px] bg-white rounded-[40px] lg:rounded-[30px] xl:rounded-[40px] pt-[23px] lg:pt-[30px] xl:pt-[39px] 2xl:pt-[49px] pb-[23px] lg:pb-[25px] xl:pb-[40px] px-6 sm:px-7 lg:px-[25px] xl:px-[44px] 2xl:px-16 mt-[64px] lg:mt-[80px] xl:mt-[150px] 2xl:mt-[177px] w-full md:w-[50%] relative z-20">
              <h3 className="mb-[25px] lg:mb-[30px] xl:mb-[50px] 2xl:mb-[62px] font-poppins text-[20px] sm:text-[24px] lg:text-[30px] xl:text-[38px] 2xl:text-[48px] text-center md:text-left font-bold max-w-[226px] sm:max-w-[270px] lg:max-w-[320px] xl:max-w-[412px] 2xl:max-w-[490px] leading-[123%] block md:inline-block mx-auto">
                Find the Best Doctor Near You
              </h3>
              <form className="border border-[#808080] rounded-[25px] lg:rounded-[30px] xl:rounded-[40px]">
                <div className="border-b border-[#808080] relative pt-[10px] lg:pt-[10px] xl:pt-[20px] 2xl:pt-[48px] pr-[8px] sm:px-2 lg:px-[12px] xl:px-[32px] pb-[2px] lg:pb-[6px] xl:pb-[8px] 2xl:pb-[20px]">
                  <input
                    type="text"
                    placeholder="Enter Your City or Location"
                    className="input placeholder:font-poppins placeholder:text-xs sm:placeholder:text-sm lg:placeholder:text-lg xl:placeholder:text-2xl text-sm lg:text-lg xl:text-2xl flex-grow placeholder:text-[#808080] w-full rounded-[20px]"
                    required
                  />
                  <img
                    className="w-[19px] lg:w-[24px] h-[19px] md:h-[33px] absolute right-[16px] sm:right-[25px] lg:right-[28px] xl:right-[40px] 2xl:right-[55px] top-[40%] lg:top-[50%] xl:top-[52%] 2xl:top-[60%] lg:transform lg:-translate-y-[42%] cursor-pointer"
                    src={locationIcon}
                    alt="a icon of location"
                  />
                </div>
                <div className="border-b border-[#808080] flex justify-between sm:pt-[8px] lg:pt-[10px] xl:pt-[20px] 2xl:pt-[38px] pr-[16px] sm:pl-[8px] sm:pr-[25px] lg:pl-[12px] lg:pr-[28px] xl:pl-[32px] xl:pr-[40px] 2xl:pr-[55px] pb-[2px] lg:pb-[6px] xl:pb-[20px] 2xl:pb-[30px] gap-[5px] lg:gap-[10px] xl:gap-[24px] 2xl:gap-[100px]">
                  <div className="w-full relative">
                    <Select
                      className="w-full text-xs sm:text-sm font-poppins lg:text-lg xl:text-2xl text-[#808080] bg-white"
                      options={symptoms}
                      placeholder="Symptoms"
                      noOptionsMessage={() => "No symptom found"}
                      components={{ DropdownIndicator }}
                      styles={style}
                    />
                  </div>
                  <div className="w-full relative">
                    <Select
                      className="w-full text-xs sm:text-sm font-poppins lg:text-lg xl:text-2xl text-[#808080] bg-white"
                      options={symptoms}
                      placeholder="Diseases"
                      noOptionsMessage={() => "No disease found"}
                      components={{ DropdownIndicator }}
                      styles={style}
                    />
                  </div>
                </div>
                <div className="pt-[12px] lg:pt-[16px] xl:pt-[20px] px-4 xl:px-[40px] pb-[13px] lg:pb-[16px] xl:pb-[30px]">
                  <button className="text-white font-bold text-[10px] lg:text-sm xl:text-xl bg-[#FF0068] rounded-[12px] lg:rounded-[14px] xl:rounded-[20px] w-full py-2 xl:py-[14px] font-poppins">
                    Search
                  </button>
                </div>
              </form>
            </div>
            {/* banner right */}
            <div>
              <img
                className="hidden md:block absolute bottom-0 right-0 w-[456px] lg:w-[510px] xl:w-[780px] 2xl:w-auto"
                src={bannerImg}
                alt="banner image"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
