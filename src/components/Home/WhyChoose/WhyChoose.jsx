import mobileImg from "../../../assets/why-choose/mobileImage.png";

const WhyChoose = () => {
  return (
    <div className="container mx-auto mb-[142px]">
      {/* title */}
      <h3 className="text-[#232222] text-5xl font-semibold font-poppins leading-[123%] mt-[60px] mx-auto text-center">
        Why Choose Seba?
      </h3>
      {/* img div */}
      <div className="mb-[83px] mt-[60px] relative flex justify-center items-center">
        <img src={mobileImg} alt="" />
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
