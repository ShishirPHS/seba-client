import img1 from "../../../assets/video-consultation/img1.png";
import img2 from "../../../assets/video-consultation/consultation-2.png";
import img3 from "../../../assets/video-consultation/consultation-3.png";
import Container from "../../shared/Container/Container";

const FreeMedicalAdvice = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-[28px] md:gap-[24px] lg:gap-[24px] xl:gap-[60px] mx-5">
        {/* left */}
        <div className="flex flex-col pt-[47px] sm:pt-[36px] md:pt-[29px] lg:pt-[36px] xl:pt-[40px] md:px-[50px] lg:px-[75px] xl:px-[95px] bg-[#FF0068] rounded-[24px] xl:rounded-[34px] flex-shrink-0 relative overflow-hidden">
          <h2 className="text-[19px] sm:text-[23px] md:text-[19px] lg:text-[20px] xl:text-[30px] font-bold text-white font-poppins leading-[123%] inline-block mx-auto relative z-50">
            Video Consultation
          </h2>
          <h3 className="font-poppins text-[16px] sm:text-[19px] md:text-[15px] xl:text-[20px] font-normal leading-[123%] text-white inline-block mx-auto relative z-50 sm:mt-1 md:mt-0">
            Verified Doctors
          </h3>
          <div className="w-auto sm:w-[335px] md:w-[250px] lg:w-[341px] h-auto lg:h-[372px] -mt-[15px] md:mt-[33px] xl:mt-[20px] static md:absolute left-[50%] md:-translate-x-[50%] bottom-0 mx-auto">
            <img
              className="scale-[120%] lg:scale-[100%] xl:scale-[145%] lg:mt-[62px] xl:mt-[17px]"
              src={img1}
              alt=""
            />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-[23px] md:gap-[18px] lg:gap-[16px] xl:gap-[40px] w-full">
          {/* right top */}
          <div className="bg-secondary rounded-[24px] xl:rounded-[34px] pl-[22px] sm:pl-[27px] md:pl-[23px] lg:pl-[30px] xl:pl-[45px] pr-[76px] pt-[21px] sm:pt-[26px] md:pt-[22px] lg:pt-[20px] xl:pt-[40px] pb-[22px] sm:pb-[28px] md:pb-[24px] lg:pb-[30px] xl:pb-[42px] relative">
            <h3 className="text-white font-poppins text-[9px] sm:text-base md:text-[13px] lg:text-lg xl:text-[18px] font-bold leading-[123%] mb-[10px] sm:mb-[16px] md:mb-[13px] lg:mb-[21px] max-w-[162px] sm:max-w-[282px] md:max-w-[232px] lg:max-w-[325px] xl:max-w-[320px]">
              Get free medical advice by asking a doctor
            </h3>
            {/* btn div */}
            <div className="flex gap-[10px] sm:gap-[14px] lg:gap-[10px] xl:gap-[19px]">
              <button className="px-[15px] sm:px-[22px] lg:px-[30px] xl:px-[30px] py-[8px] sm:py-3 lg:py-[14px] xl:py-[15px] font-poppins text-[6px] sm:text-[10px] lg:text-[12px] xl:text-[12px] font-medium leading-[123%] bg-white rounded-[7px] sm:rounded-xl lg:rounded-[12px] xl:rounded-[14px]">
                View All Questions
              </button>
              <button className="rounded-[7px] sm:rounded-xl lg:rounded-[12px] xl:rounded-[14px] bg-primary text-[6px] sm:text-[10px] lg:text-[12px] xl:text-[12px] text-white px-[13px] sm:px-[20px] lg:px-[30px] xl:px-[30px] py-[8px] sm:py-3 lg:py-[14px] xl:py-[15px] font-poppins font-medium leading-[123%]">
                Ask a Question
              </button>
            </div>
            <img
              className="absolute bottom-0 right-[12px] sm:right-[32px] md:right-[21px] lg:right-[25px] xl:right-[76px] w-[84px] sm:w-[126px] md:w-[118px] lg:w-[147px] xl:w-[160px] h-auto"
              src={img2}
              alt=""
            />
          </div>
          {/* right bottom */}
          <div className="bg-[#1F1F1F] rounded-[24px] xl:rounded-[34px] pt-[23px] sm:pt-[26px] md:pt-[22px] lg:pt-[20px] xl:pt-[45px] pb-[23px] sm:pb-[28px] md:pb-[23px] lg:pb-[30px] xl:pb-[42px] pl-[22px] sm:pl-[27px] md:pl-[24px] lg:pl-[30px] xl:pl-[45px] relative">
            <h3 className="max-w-[100px] sm:max-w-[180px] md:max-w-[150px] lg:max-w-[240px] xl:max-w-[208px] text-white font-poppins text-[9px] sm:text-base md:text-[13px] lg:text-lg xl:text-[18px] font-bold leading-[123%]">
              Get 10% OFF ON YOUR FIRST CALL
            </h3>
            <button className="py-[8px] sm:py-[12px] lg:py-[14px] xl:py-[15px] px-[20px] sm:px-[24px] lg:px-[30px] xl:px-[30px] rounded-[7px] sm:rounded-xl lg:rounded-[12px] xl:rounded-[14px] bg-white mt-[10px] sm:mt-[16px] md:mt-[13px] lg:mt-[21px] xl:mt-[25px] font-poppins text-[6px] sm:text-[10px] lg:text-[12px] xl:text-[12px] font-medium leading-[123%] text-black shadow-custom-white-for-small md:shadow-custom-white-for-large">
              Find Doctor
            </button>
            <img
              className="absolute bottom-0 right-[20px] sm:right-[32px] md:right-[25px] lg:right-[25px] xl:right-[46px] w-[94px] sm:w-[130px] md:w-[122px] lg:w-[165px] xl:w-[178px] h-auto"
              src={img3}
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FreeMedicalAdvice;
