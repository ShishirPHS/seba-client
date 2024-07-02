import img1 from "../../../assets/video-consultation/consultation-1.png";
import img2 from "../../../assets/video-consultation/consultation-2.png";
import img3 from "../../../assets/video-consultation/consultation-3.png";

const FreeMedicalAdvice = () => {
  return (
    <div className="w-[1589px] mx-auto">
      <div className="flex gap-[78px]">
        {/* left */}
        <div className="flex flex-col justify-center items-center pt-[72px] px-[118px] bg-[#FF0068] rounded-[40px] flex-shrink-0">
          <h3 className="text-4xl font-bold text-white font-poppins leading-[123%]">
            Video Consultation
          </h3>
          <p className="font-poppins text-2xl font-normal leading-[123%] text-white">
            Verified Doctors
          </p>
          <img className="mt-[33px]" src={img1} alt="" />
        </div>
        {/* right */}
        <div className="flex flex-col gap-[51px] w-full">
          {/* right top */}
          <div className="bg-[#3BA4A7] rounded-[40px] pl-[70px] pr-[76px] pt-[54px] pb-[58px] relative">
            <h3 className="text-white font-poppins text-2xl font-bold leading-[123%] mb-[21px] max-w-[418px]">
              Get free medical advice by asking a doctor
            </h3>
            {/* btn div */}
            <div className="flex gap-[19px]">
              <button className="px-[34px] py-[19px] font-poppins text-[15px] font-medium leading-[123%] bg-white rounded-[22px]">
                View All Questions
              </button>
              <button className="rounded-[22px] bg-[#086060] text-white px-[30px] py-[19px] font-poppins font-medium leading-[123%]">
                Ask a Question
              </button>
            </div>
            <img className="absolute bottom-0 right-[76px]" src={img2} alt="" />
          </div>
          {/* right bottom */}
          <div className="bg-[#1F1F1F] rounded-[40px] pt-[53px] pb-[50px] pl-[70px] relative">
            <h3 className="max-w-[259px] text-white font-poppins text-2xl font-bold leading-[123%]">
              Get 10% OFF ON YOUR FIRST CALL
            </h3>
            <button style={{boxShadow: "0px 4px 50px 0px rgba(255, 255, 255, 0.21)"}} className="py-[19px] px-[47px] rounded-[22px] bg-white mt-[30px] font-poppins text-[15px] font-medium leading-[123%] text-black">Find Doctor</button>
            <img className="absolute bottom-0 right-[46px]" src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeMedicalAdvice;
