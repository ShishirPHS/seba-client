import mobileImg from "../../../assets/why-choose/mobileImage.png";

const WhyChoose = () => {
  return (
    <div className="container mx-auto mb-[142px]">
      {/* title */}
      <h3 className="text-[#232222] text-5xl font-semibold font-poppins leading-[123%] mt-[60px] mx-auto text-center">
        Why Choose Seba?
      </h3>
      {/* img div */}
      <div className="mb-[83px] mt-[60px] relative">
        <img className="block mx-auto" src={mobileImg} alt="" />
        <p
          style={{
            boxShadow: "0px 22px 60px 0px rgba(0, 0, 0, 0.10)",
          }}
          className="absolute right-[57%] top-[57px] rounded-[17px] py-[25px] pl-[25px] pr-[54px] text-black text-2xl font-medium font-poppins leading-[123%] bg-[#EAECFF]"
        >
          BMDC verified doctor
        </p>
        <p
          style={{
            boxShadow: "0px 22px 60px 0px rgba(0, 0, 0, 0.10)",
          }}
          className="absolute right-[56.5%] top-[297px] rounded-[17px] py-[25px] pl-[25px] pr-[54px] text-black text-2xl font-medium font-poppins leading-[123%] bg-[#FFF1F2]"
        >
          No more Prescription lost
        </p>
        <p
          style={{
            boxShadow: "0px 22px 60px 0px rgba(0, 0, 0, 0.10)",
          }}
          className="absolute left-[54.5%] top-[113px] rounded-[17px] py-[25px] pl-[25px] pr-[54px] text-black text-2xl font-medium font-poppins leading-[123%] bg-[#FFF5E4]"
        >
          Blood donor finding
        </p>
        <p
          style={{
            boxShadow: "0px 22px 60px 0px rgba(0, 0, 0, 0.10)",
          }}
          className="absolute left-[57%] top-[487px] rounded-[17px] py-[25px] pl-[25px] pr-[54px] text-black text-2xl font-medium font-poppins leading-[123%] bg-[#E3FFE5]"
        >
          24/7 online doctor
        </p>
      </div>
      {/* bottom div */}
      <div className="flex justify-between items-center gap-6">
        {/* bottom left */}
        <div>
          <p className="font-poppins text-2xl font-medium leading-[123%] text-white rounded-[17px] px-[30px] py-[18px] bg-[#086060]">
            Country First Doctor Patients Relation Management System
          </p>
        </div>
        {/* bottom middle */}
        <div>
          <p className="font-poppins text-2xl font-medium leading-[123%] text-black rounded-[17px] px-[72px] py-[18px] bg-[#F4F4F4]">
            Online booking facility to save time during physical visit
          </p>
        </div>
        {/* bottom right */}
        <div>
          <p className="font-poppins text-2xl font-medium leading-[123%] text-white rounded-[17px] px-[60px] py-[18px] bg-[#FF0068]">
            Timely medicine taking reminder using mobile app
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
