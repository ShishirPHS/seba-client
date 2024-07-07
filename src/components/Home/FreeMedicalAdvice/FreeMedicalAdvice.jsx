import img1 from "../../../assets/video-consultation/img1.png";
import img2 from "../../../assets/video-consultation/consultation-2.png";
import img3 from "../../../assets/video-consultation/consultation-3.png";

const FreeMedicalAdvice = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col md:flex-row gap-[28px] md:gap-[78px]">
        {/* left */}
        <div className="flex flex-col pt-[47px] md:pt-[72px] px-[80px] md:px-[118px] bg-[#FF0068] rounded-[24px] md:rounded-[40px] flex-shrink-0 relative overflow-hidden">
          <h3 className="text-[19px] md:text-4xl font-bold text-white font-poppins leading-[123%] inline-block mx-auto">
            Video Consultation
          </h3>
          <p className="font-poppins text-[16px] md:text-2xl font-normal leading-[123%] text-white inline-block mx-auto mb-[410px] md:mb-0">
            Verified Doctors
          </p>
          <div className="w-[319px] md:w-[341px] h-[372px] md:h-[372px] mt-[21px] md:mt-[33px] absolute left-[50%] transform -translate-x-[50%] bottom-0">
            <img className="scale-[160%] md:scale-[145%]" src={img1} alt="" />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-[23px] md:gap-[51px] w-full">
          {/* right top */}
          <div className="bg-[#3BA4A7] rounded-[24px] md:rounded-[40px] pl-[32px] md:pl-[70px] pr-[76px] pt-[24px] md:pt-[54px] pb-[25px] md:pb-[58px] relative">
            <h3 className="text-white font-poppins text-[9px] md:text-2xl font-bold leading-[123%] mb-[10px] md:mb-[21px] max-w-[162px] md:max-w-[418px]">
              Get free medical advice by asking a doctor
            </h3>
            {/* btn div */}
            <div className="flex gap-[19px]">
              <button className="px-[15px] md:px-[34px] py-[8px] md:py-[19px] font-poppins text-[6px] md:text-[15px] font-medium leading-[123%] bg-white rounded-[7px] md:rounded-[22px]">
                View All Questions
              </button>
              <button className="rounded-[7px] md:rounded-[22px] bg-[#086060] text-[6px] md:text-[15px] text-white px-[13px] md:px-[30px] py-[8px] md:py-[19px] font-poppins font-medium leading-[123%]">
                Ask a Question
              </button>
            </div>
            <img
              className="absolute bottom-0 right-[32px] md:right-[76px] w-[91px] md:w-auto h-[110px] md:h-auto"
              src={img2}
              alt=""
            />
          </div>
          {/* right bottom */}
          <div className="bg-[#1F1F1F] rounded-[24px] md:rounded-[40px] pt-[23px] md:pt-[53px] pb-[23px] md:pb-[50px] pl-[32px] md:pl-[70px] relative">
            <h3 className="max-w-[100px] md:max-w-[259px] text-white font-poppins text-[9px] md:text-2xl font-bold leading-[123%]">
              Get 10% OFF ON YOUR FIRST CALL
            </h3>
            <button className="py-[8px] md:py-[19px] px-[20px] md:px-[47px] rounded-[7px] md:rounded-[22px] bg-white mt-[10px] md:mt-[30px] font-poppins text-[6px] md:text-[15px] font-medium leading-[123%] text-black shadow-custom-white-for-small md:shadow-custom-white-for-large">
              Find Doctor
            </button>
            <img
              className="absolute bottom-0 right-[20px] md:right-[46px] w-[94px] md:w-auto h-[93px] md:h-auto"
              src={img3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeMedicalAdvice;
