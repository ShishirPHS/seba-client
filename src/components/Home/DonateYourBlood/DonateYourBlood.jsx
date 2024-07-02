import img1 from "../../../assets/donate-your-blood/img1.png";

const DonateYourBlood = () => {
  return (
    <div className="w-[1589px] mx-auto flex justify-between items-center">
      {/* left */}
      <div>
        <h2 className="text-[#303030] font-poppins text-[64px] font-semibold max-w-[600px] mb-[30px]">
          Donate your Blood and Earn Stars
        </h2>
        <button
          style={{ boxShadow: "0px 4px 50px 0px rgba(255, 255, 255, 0.21)" }}
          className="font-poppins text-[32px] font-medium leading-[123%] text-white bg-[#CA0000] rounded-[22px] py-[30px] px-[51px] mb-[52px]"
        >
          Donate Now
        </button>
        <p className="text-[#7C7373] font-poppins text-2xl leading-[123%]">
          <span className="underline">Login</span> and View who is available for
          Donate Blood
        </p>
      </div>
      {/* right */}
      <div className="relative">
        <img className="rounded-[40px]" src={img1} alt="" />
        <p className="text-white font-poppins text-center text-2xl leading-[123%] py-[25px] px-[92px] bg-[#808080] rounded-[40px] max-w-[427px] absolute top-[289px] -left-[168px]">
          See who is available for Donate Blood
        </p>
      </div>
    </div>
  );
};

export default DonateYourBlood;
