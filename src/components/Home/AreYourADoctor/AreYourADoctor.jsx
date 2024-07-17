import doctors from "../../../assets/are-you-a-doctor/doctors.png";

const AreYourADoctor = () => {
  return (
    <div className="px-5">
      <div className="bg-[#E3FFE5] container mx-auto rounded-[40px] lg:rounded-[24px] xl:rounded-[40px] pt-[21px] lg:pt-10 xl:pt-[79px] pb-0 lg:pb-10 xl:pb-[88px] pr-0 lg:pr-[60px] xl:pr-[186px] flex flex-col md:flex-row items-center md:justify-end relative mb-[66px] md:mb-[160px]">
        <div>
          <h4 className="font-poppins text-[20px] lg:text-[28px] xl:text-4xl text-center md:text-left font-bold text-[#086060] mb-0 xl:mb-[10px]">
            Are You A Doctor?
          </h4>
          <h5 className="text-[#086060] font-poppins text-[12px] lg:text-base xl:text-2xl font-semibold text-center md:text-left max-w-[205px] md:max-w-none mx-auto">
            Get Connected with Us through the Connect App.
          </h5>
          <button className="text-white font-poppins text-[11px] lg:text-sm xl:text-2xl leading-[123%] bg-[#086060] rounded-[8px] lg:rounded-[14px] xl:rounded-[23px] mt-[10px] lg:mt-[38px] xl:mt-[80px] py-[8px] lg:py-4 xl:py-[27px] px-[25px] lg:px-12 xl:px-[102px] block mx-auto md:mx-0 mb-[10px] md:mb-0">
            Read More
          </button>
        </div>
        <img
          className="block md:absolute bottom-0 left-[109px] lg:left-[70px] xl:left-[109px] w-[201px] lg:w-[360px] xl:w-auto"
          src={doctors}
          alt=""
        />
      </div>
    </div>
  );
};

export default AreYourADoctor;
