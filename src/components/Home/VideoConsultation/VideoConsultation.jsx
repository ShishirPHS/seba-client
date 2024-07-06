import labs from "../../../assets/icons/video-consultation/test-tube.png";
import hospitals from "../../../assets/icons/video-consultation/hospitals.png";
import surgeries from "../../../assets/icons/video-consultation/surgeries.png";
import blogs from "../../../assets/icons/video-consultation/blogs.png";
import doctors from "../../../assets/icons/video-consultation/doctors.png";
import helpLine from "../../../assets/icons/video-consultation/help-line.png";
import videoConsultation from "../../../assets/icons/video-consultation/video-consultation.png";

const VideoConsultation = () => {
  return (
    <div className="bg-[#3BA4A7] pt-[17px] pb-[20px] mb-[123px]">
      <div className="w-[1589px] mx-auto">
        <div className="flex justify-between gap-[34px] relative">
          <div className="bg-[#086060] pt-[5px] md:pt-[17px] pb-[7px] md:pb-[20px] px-[20px] md:px-[40px] rounded-[5px] md:rounded-[20px]">
            <img
              className="w-[12px] md:w-auto h-[12px] md:h-auto mx-auto"
              src={labs}
              alt="icon for test-tube"
            />
            <p className="text-white text-center font-poppins text-xl font-medium leading-[123%] mt-[13px]">
              Labs
            </p>
          </div>
          <div className="bg-[#086060] pt-[5px] md:pt-[17px] pb-[7px] md:pb-[20px] px-[20px] md:px-[40px] rounded-[5px] md:rounded-[20px]">
            <img
              className="w-[12px] md:w-auto h-[12px] md:h-auto mx-auto"
              src={hospitals}
              alt="icon for test-tube"
            />
            <p className="text-white text-center font-poppins text-xl font-medium leading-[123%] mt-[13px]">
              Hospitals
            </p>
          </div>
          <div className="bg-[#086060] pt-[5px] md:pt-[17px] pb-[7px] md:pb-[20px] px-[20px] md:px-[40px] rounded-[5px] md:rounded-[20px] mr-[460px]">
            <img
              className="w-[12px] md:w-auto h-[12px] md:h-auto mx-auto"
              src={surgeries}
              alt="icon for test-tube"
            />
            <p className="text-white text-center font-poppins text-xl font-medium leading-[123%] mt-[13px]">
              Surgeries
            </p>
          </div>
          <div className="bg-[#086060] pt-[5px] md:pt-[17px] pb-[7px] md:pb-[20px] px-[20px] md:px-[40px] rounded-[5px] md:rounded-[20px]">
            <img
              className="w-[12px] md:w-auto h-[12px] md:h-auto mx-auto"
              src={helpLine}
              alt="icon for test-tube"
            />
            <p className="text-white text-center font-poppins text-xl font-medium leading-[123%] mt-[13px]">
              Help Line
            </p>
          </div>
          <div className="bg-[#086060] pt-[5px] md:pt-[17px] pb-[7px] md:pb-[20px] px-[20px] md:px-[40px] rounded-[5px] md:rounded-[20px]">
            <img
              className="w-[12px] md:w-auto h-[12px] md:h-auto mx-auto"
              src={blogs}
              alt="icon for test-tube"
            />
            <p className="text-white text-center font-poppins text-xl font-medium leading-[123%] mt-[13px]">
              Blogs
            </p>
          </div>
          <div className="bg-[#086060] pt-[5px] md:pt-[17px] pb-[7px] md:pb-[20px] px-[20px] md:px-[40px] rounded-[5px] md:rounded-[20px]">
            <img
              className="w-[12px] md:w-auto h-[12px] md:h-auto mx-auto"
              src={doctors}
              alt="icon for test-tube"
            />
            <p className="text-white text-center font-poppins text-xl font-medium leading-[123%] mt-[13px]">
              Doctors
            </p>
          </div>
          <div
            style={{ boxShadow: "0px 4px 146.2px 1px rgba(0, 0, 0, 0.20)" }}
            className="bg-white pt-[34px] pb-[48px] px-[67px] rounded-[20px] absolute left-[50%] transform -translate-x-[50%] top-[50%] -translate-y-[50%]"
          >
            <img
              className="mx-auto"
              src={videoConsultation}
              alt="icon for test-tube"
            />
            <p className="text-black text-center font-poppins text-2xl font-bold leading-[123%] mt-[12px]">
              Video
            </p>
            <p className="text-black text-center font-poppins text-2xl font-medium leading-[123%]">
              Consultation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoConsultation;
