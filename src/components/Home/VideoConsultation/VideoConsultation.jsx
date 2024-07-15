import labs from "../../../assets/icons/video-consultation/test-tube.png";
import hospitals from "../../../assets/icons/video-consultation/hospitals.png";
import surgeries from "../../../assets/icons/video-consultation/surgeries.png";
import blogs from "../../../assets/icons/video-consultation/blogs.png";
import doctors from "../../../assets/icons/video-consultation/doctors.png";
import helpLine from "../../../assets/icons/video-consultation/help-line.png";
import videoConsultation from "../../../assets/icons/video-consultation/video-consultation.png";

const VideoConsultation = () => {
  return (
    <div className="bg-[#3BA4A7] py-1 md:pt-[17px] md:pb-[20px] mb-[18px] md:mb-[123px]">
      <div className="container mx-auto">
        <div className="flex justify-between relative mx-5">
          <div className="bg-[#086060] pt-[5px] lg:pt-[10px] 2xl:pt-[17px] pb-[7px] lg:pb-3 2xl:pb-[20px] px-[8px] lg:px-5 2xl:px-[40px] rounded-[5px] lg:rounded-[12px] 2xl:rounded-[20px]">
            <img
              className="w-[12px] lg:w-[28px] 2xl:w-auto h-[12px] md:h-auto mx-auto"
              src={labs}
              alt="icon for test-tube"
            />
            <p className="text-white text-center font-poppins text-[5px] lg:text-sm 2xl:text-xl font-medium  mt-[3px] lg:mt-1 2xl:mt-[13px]">
              Labs
            </p>
          </div>
          <div className="bg-[#086060] pt-[5px] md:pt-[10px] pb-[7px] lg:pb-3 2xl:pb-[20px] px-[8px] lg:px-5 2xl:px-[40px] rounded-[5px] lg:rounded-[12px] 2xl:rounded-[20px]">
            <img
              className="w-[12px] lg:w-[28px] 2xl:w-auto h-[12px] md:h-auto mx-auto"
              src={hospitals}
              alt="icon for test-tube"
            />
            <p className="text-white text-center font-poppins text-[5px] lg:text-sm 2xl:text-xl font-medium leading-[123%] mt-[3px] lg:mt-1 2xl:mt-[13px]">
              Hospitals
            </p>
          </div>
          <div className="bg-[#086060] pt-[5px] md:pt-[10px] pb-[7px] lg:pb-3 2xl:pb-[20px] px-[8px] lg:px-5 2xl:px-[40px] rounded-[5px] lg:rounded-[12px] 2xl:rounded-[20px] mr-[115px] lg:mr-[326px] 2xl:mr-[460px]">
            <img
              className="w-[12px] lg:w-[28px] 2xl:w-auto h-[12px] md:h-auto mx-auto"
              src={surgeries}
              alt="icon for test-tube"
            />
            <p className="text-white text-center font-poppins text-[5px] lg:text-sm 2xl:text-xl font-medium leading-[123%] mt-[3px] lg:mt-1 2xl:mt-[13px]">
              Surgeries
            </p>
          </div>
          <div className="bg-[#086060] pt-[5px] md:pt-[10px] pb-[7px] lg:pb-3 2xl:pb-[20px] px-[8px] lg:px-5 2xl:px-[40px] rounded-[5px] lg:rounded-[12px] 2xl:rounded-[20px]">
            <img
              className="w-[12px] lg:w-[28px] 2xl:w-auto h-[12px] md:h-auto mx-auto"
              src={helpLine}
              alt="icon for test-tube"
            />
            <p className="text-white text-center font-poppins text-[5px] lg:text-sm 2xl:text-xl font-medium leading-[123%] mt-[3px] lg:mt-1 2xl:mt-[13px]">
              Help Line
            </p>
          </div>
          <div className="bg-[#086060] pt-[5px] md:pt-[10px] pb-[7px] lg:pb-3 2xl:pb-[20px] px-[8px] lg:px-5 2xl:px-[40px] rounded-[5px] lg:rounded-[12px] 2xl:rounded-[20px]">
            <img
              className="w-[12px] lg:w-[28px] 2xl:w-auto h-[12px] md:h-auto mx-auto"
              src={blogs}
              alt="icon for test-tube"
            />
            <p className="text-white text-center font-poppins text-[5px] lg:text-sm 2xl:text-xl font-medium leading-[123%] mt-[3px] lg:mt-1 2xl:mt-[13px]">
              Blogs
            </p>
          </div>
          <div className="bg-[#086060] pt-[5px] md:pt-[10px] pb-[7px] lg:pb-3 2xl:pb-[20px] px-[8px] lg:px-5 2xl:px-[40px] rounded-[5px] lg:rounded-[12px] 2xl:rounded-[20px]">
            <img
              className="w-[12px] lg:w-[28px] 2xl:w-auto h-[12px] md:h-auto mx-auto"
              src={doctors}
              alt="icon for test-tube"
            />
            <p className="text-white text-center font-poppins text-[5px] lg:text-sm 2xl:text-xl font-medium leading-[123%] mt-[3px] lg:mt-1 2xl:mt-[13px]">
              Doctors
            </p>
          </div>
          {/* card middle */}
          <div
            style={{ boxShadow: "0px 4px 146.2px 1px rgba(0, 0, 0, 0.20)" }}
            className="bg-white pt-[9px] lg:pt-[14px] 2xl:pt-[34px] pb-[12px] lg:pb-[16px] 2xl:pb-[48px] px-[11px] lg:px-[55px] 2xl:px-[67px] rounded-[15px] md:rounded-[20px] absolute left-[50%] transform -translate-x-[50%] top-[50%] -translate-y-[50%]"
          >
            <img
              className="mx-auto w-5 lg:w-[65px] 2xl:w-auto h-[21px] md:h-auto"
              src={videoConsultation}
              alt="icon for test-tube"
            />
            <p className="text-black text-center font-poppins text-[7px] lg:text-lg 2xl:text-2xl font-bold leading-[123%] mt-[2px] lg:mt-0 2xl:mt-[12px]">
              Video
            </p>
            <p className="text-black text-center font-poppins text-[7px] lg:text-lg 2xl:text-2xl font-medium leading-[123%]">
              Consultation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoConsultation;
