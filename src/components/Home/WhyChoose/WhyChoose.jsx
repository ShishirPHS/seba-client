import mobileImg from "../../../assets/why-choose/mobileImage.png";

const WhyChoose = () => {
  return (
    <div className="container mx-auto mb-[46px] lg:mb-[90px] xl:mb-[142px] mt-[56px] lg:mt-[90px] xl:mt-[114px] px-5">
      {/* title */}
      <h3 className="text-[#232222] text-[16px] lg:text-[34px] xl:text-5xl font-semibold font-poppins leading-[123%] mx-auto text-center">
        Why Choose Seba?
      </h3>
      {/* img div */}
      <div className="mb-[23px] lg:mb-[63px] xl:mb-[83px] mt-[23px] md:mt-[60px] relative">
        <img
          className="block mx-auto h-[255px] lg:h-[600px] xl:h-auto"
          src={mobileImg}
          alt=""
        />
        <p
          style={{
            boxShadow: "0px 22px 60px 0px rgba(0, 0, 0, 0.10)",
          }}
          className="absolute right-[62%] lg:right-[62.5%] xl:right-[57%] top-[22px] lg:top-[67px] xl:top-[57px] rounded-[17px] lg:rounded-[12px] xl:rounded-[17px] py-[10px] lg:py-[12px] xl:py-[25px] pl-[23px] lg:pl-[20px] xl:pl-[25px] pr-[24px] lg:pr-[40px] xl:pr-[54px] text-black text-[7px] lg:text-base xl:text-2xl font-medium font-poppins leading-[123%] bg-[#EAECFF]"
        >
          BMDC verified doctor
        </p>
        <p
          style={{
            boxShadow: "0px 22px 60px 0px rgba(0, 0, 0, 0.10)",
          }}
          className="absolute right-[61%] lg:right-[62.5%] xl:right-[56.5%] top-[117px] lg:top-[301px] xl:top-[297px] rounded-[17px] lg:rounded-[12px] xl:rounded-[17px] py-[10px] lg:py-[12px] xl:py-[25px] pl-[23px] lg:pl-[20px] xl:pl-[25px] pr-[24px] lg:pr-[40px] xl:pr-[54px] text-black text-[7px] lg:text-base xl:text-2xl font-medium font-poppins leading-[123%] bg-[#FFF1F2]"
        >
          No more Prescription lost
        </p>
        <p
          style={{
            boxShadow: "0px 22px 60px 0px rgba(0, 0, 0, 0.10)",
          }}
          className="absolute left-[59%] lg:left-[58.5%] xl:left-[54.5%] top-[44px] lg:top-[105px] xl:top-[113px] rounded-[17px] lg:rounded-[12px] xl:rounded-[17px] py-[10px] lg:py-[12px] xl:py-[25px] pl-[23px] lg:pl-[20px] xl:pl-[25px] pr-[24px] lg:pr-[40px] xl:pr-[54px] text-black text-[7px] lg:text-base xl:text-2xl font-medium font-poppins leading-[123%] bg-[#FFF5E4]"
        >
          Blood donor finding
        </p>
        <p
          style={{
            boxShadow: "0px 22px 60px 0px rgba(0, 0, 0, 0.10)",
          }}
          className="absolute left-[62.5%] lg:left-[62.5%] xl:left-[57%] top-[193px] lg:top-[457px] xl:top-[487px] rounded-[17px] lg:rounded-[12px] xl:rounded-[17px] py-[10px] lg:py-[12px] xl:py-[25px] pl-[23px] lg:pl-[20px] xl:pl-[25px] pr-[24px] lg:pr-[40px] xl:pr-[54px] text-black text-[7px] lg:text-base xl:text-2xl font-medium font-poppins leading-[123%] bg-[#E3FFE5]"
        >
          24/7 online doctor
        </p>
      </div>
      {/* bottom div */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* bottom left */}
        <div className="rounded-[17px] px-[43px] md:px-[30px] py-[20px] md:py-[18px] bg-[#086060] w-full md:w-auto">
          <p className="font-poppins text-base md:text-2xl font-medium leading-[123%] text-white text-center md:text-left max-w-[300px] md:max-w-none mx-auto">
            Country First Doctor Patients Relation Management System
          </p>
        </div>
        {/* bottom middle */}
        <div className="rounded-[17px] px-[72px] py-[20px] md:py-[18px] bg-[#F4F4F4] w-full md:w-auto">
          <p className="font-poppins text-base md:text-2xl font-medium leading-[123%] text-black text-center md:text-left max-w-[243px] md:max-w-none mx-auto">
            Online booking facility to save time during physical visit
          </p>
        </div>
        {/* bottom right */}
        <div className="rounded-[17px] px-[80px] md:px-[60px] py-[18px] md:py-[18px] bg-[#FF0068] w-full md:w-auto">
          <p className="font-poppins text-base md:text-2xl font-medium leading-[123%] text-white text-center md:text-left max-w-[220px] md:max-w-none mx-auto">
            Timely medicine taking reminder using mobile app
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
