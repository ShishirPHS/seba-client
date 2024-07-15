import img1 from "../../../assets/donate-your-blood/img1.png";

const DonateYourBlood = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
      {/* left */}
      <div>
        <h2 className="text-[#303030] font-poppins text-[27px] lg:text-[36px] xl:text-[64px] text-center md:text-left font-semibold max-w-[298px] lg:max-w-[350px] xl:max-w-[600px] mb-[15px] lg:mb-[20px] xl:mb-[30px] mx-auto md:mx-0">
          Donate your Blood and Earn Stars
        </h2>
        <button
          style={{ boxShadow: "0px 4px 50px 0px rgba(255, 255, 255, 0.21)" }}
          className="font-poppins text-[32px] lg:text-sm xl:text-[32px] font-medium leading-[123%] text-white bg-[#CA0000] rounded-[22px] lg:rounded-[12px] xl:rounded-[22px] py-[30px] lg:py-[14px] xl:py-[30px] px-[51px] lg:px-[35px] xl:px-[51px] mb-[52px] lg:mb-[22px] xl:mb-[52px] mx-auto md:mx-0 hidden md:block"
        >
          Donate Now
        </button>
        <p className="text-[#7C7373] font-poppins text-[15px] lg:text-sm xl:text-2xl leading-[123%] mt-[15px] md:mt-0 mb-[36px] md:mb-0">
          <span className="underline cursor-pointer">Login</span> and View who
          is available for Donate Blood
        </p>
      </div>
      {/* right */}
      <div className="relative">
        <img
          className="rounded-[28px] md:rounded-[40px] w-full lg:w-[450px] xl:w-auto"
          src={img1}
          alt=""
        />
        <p className="hidden md:block text-white font-poppins text-center text-2xl lg:text-[12px] xl:text-2xl leading-[123%] py-[25px] lg:py-[12px] xl:py-[25px] px-[92px] lg:px-[35px] xl:px-[92px] bg-[#808080] rounded-[40px] lg:rounded-[14px] xl:rounded-[40px] max-w-[427px] lg:max-w-[226px] xl:max-w-[427px] absolute top-[289px] lg:top-[188px] xl:top-[289px] -left-[168px] lg:-left-[80px] xl:-left-[168px]">
          See who is available for Donate Blood
        </p>
        {/* button div for small devices */}
        <div className="flex justify-center md:hidden gap-[6px] absolute bottom-5 left-[50%] transform -translate-x-[50%]">
          <button
            style={{ boxShadow: "0px 4px 50px 0px rgba(255, 255, 255, 0.21)" }}
            className="font-poppins text-[17px] font-medium leading-[123%] text-white bg-[#1C1C1C] rounded-[18px] py-[18px] px-[40px] flex-shrink-0"
          >
            Donate Now
          </button>
          <button
            style={{ boxShadow: "0px 4px 50px 0px rgba(255, 255, 255, 0.21)" }}
            className="font-poppins text-[17px] font-medium leading-[123%] text-[#373535] bg-white rounded-[18px] py-[18px] px-[40px] flex-shrink-0"
          >
            Find Donor
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateYourBlood;
