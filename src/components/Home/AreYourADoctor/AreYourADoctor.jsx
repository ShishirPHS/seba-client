import doctors from "../../../assets/are-you-a-doctor/doctors.png";

const AreYourADoctor = () => {
  return (
    <div className="px-5">
      <div className="bg-[#E3FFE5] container mx-auto rounded-[40px] pt-[21px] md:pt-[79px] pb-0 md:pb-[88px] pr-0 md:pr-[186px] flex flex-col md:flex-row items-center md:justify-end relative mb-[66px] md:mb-[160px]">
        <div>
          <h4 className="font-poppins text-[20px] md:text-4xl text-center md:text-left font-bold text-[#086060] mb-0 md:mb-[10px]">
            Are You A Doctor?
          </h4>
          <h5 className="text-[#086060] font-poppins text-[12px] md:text-2xl font-semibold text-center md:text-left max-w-[205px] md:max-w-none mx-auto">
            Get Connected with Us through the Connect App.
          </h5>
          <button className="text-white font-poppins text-[11px] md:text-2xl leading-[123%] bg-[#086060] rounded-[8px] md:rounded-[23px] mt-[10px] md:mt-[80px] py-[8px] md:py-[27px] px-[25px] md:px-[102px] block mx-auto md:mx-0 mb-[10px] md:mb-0">
            Read More
          </button>
        </div>
        <img
          className="block md:absolute bottom-0 left-[109px] w-[201px] md:w-auto"
          src={doctors}
          alt=""
        />
      </div>
    </div>
  );
};

export default AreYourADoctor;
