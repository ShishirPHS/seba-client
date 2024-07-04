import doctors from "../../../assets/are-you-a-doctor/doctors.png";

const AreYourADoctor = () => {
  return (
    <div className="bg-[#E3FFE5] w-[1589px] mx-auto rounded-[40px] pt-[79px] pb-[88px] pr-[186px] flex justify-end relative mb-[160px]">
      <div>
        <h4 className="font-poppins text-4xl font-bold text-[#086060] mb-[10px]">
          Are You A Doctor?
        </h4>
        <h5 className="text-[#086060] font-poppins text-2xl font-semibold ">
          Get Connected with Us through the Connect App.
        </h5>
        <button className="text-white font-poppins text-2xl leading-[123%] bg-[#086060] rounded-[23px] mt-[80px] py-[27px] px-[102px]">
          Read More
        </button>
      </div>
      <img className="absolute bottom-0 left-[109px]" src={doctors} alt="" />
    </div>
  );
};

export default AreYourADoctor;
