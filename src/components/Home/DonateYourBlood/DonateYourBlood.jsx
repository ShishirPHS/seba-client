import { Link } from "react-router-dom";
import img1 from "../../../assets/donate-your-blood/img1.png";
import Container from "../../shared/Container/Container";

const DonateYourBlood = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center px-5">
          {/* left */}
          <div>
            <h2 className="text-[#303030] font-poppins text-[27px] md:text-[24px] lg:text-[36px] xl:text-[48px] text-center md:text-left font-semibold max-w-[298px] md:max-w-[240px] lg:max-w-[350px] xl:max-w-[490px] mb-[15px] lg:mb-[20px] xl:mb-[24px] mx-auto md:mx-0">
              Donate your Blood and Earn Stars
            </h2>
            <Link
              to="/"
              style={{
                boxShadow: "0px 4px 50px 0px rgba(255, 255, 255, 0.21)",
              }}
              className="font-poppins text-[32px] md:text-xs lg:text-sm xl:text-[24px] font-medium leading-[123%] text-white bg-[#CA0000] rounded-[22px] md:rounded-[12px] xl:rounded-[22px] py-[30px] md:py-[10px] lg:py-[14px] xl:py-[30px] px-[51px] md:px-[30px] lg:px-[35px] xl:px-[51px] mb-[52px] md:mb-[30px] lg:mb-[22px] xl:mb-[40px] mx-auto md:mx-0 hidden md:inline-block"
            >
              Donate Now
            </Link>
            <p className="text-[#7C7373] font-poppins text-center text-[15px] md:text-xs lg:text-sm xl:text-2xl leading-[123%] mt-[15px] md:mt-0 mb-[36px] md:mb-0">
              <Link to="/login">
                <span className="underline">Login</span>
              </Link>{" "}
              and View who is available for Donate Blood
            </p>
          </div>
          {/* right */}
          <div className="relative">
            <img
              className="rounded-[28px] md:rounded-[30px] lg:rounded-[40px] w-full md:w-[328px] lg:w-[450px] xl:w-[600px]"
              src={img1}
              alt=""
            />
            <Link className="hidden md:block text-white font-poppins text-center text-2xl md:text-[10px] lg:text-[12px] xl:text-xl leading-[123%] py-[25px] md:py-[12px] lg:py-[12px] xl:py-[20px] px-[92px] md:px-[35px] lg:px-[35px] xl:px-[66px] bg-[#808080] rounded-[40px] md:rounded-[18px] lg:rounded-[14px] xl:rounded-[30px] max-w-[427px] md:max-w-[187px] lg:max-w-[226px] xl:max-w-[354px] absolute top-[289px] md:top-[124px] lg:top-[188px] xl:top-[222px] -left-[168px] md:-left-[75px] lg:-left-[80px] xl:-left-[144px]">
              See who is available for Donate Blood
            </Link>
            {/* button div for small devices */}
            <div className="flex justify-center md:hidden gap-[6px] sm:gap-[20px] absolute bottom-5 left-[50%] transform -translate-x-[50%]">
              <button
                style={{
                  boxShadow: "0px 4px 50px 0px rgba(255, 255, 255, 0.21)",
                }}
                className="font-poppins text-[10px] sm:text-[17px] font-medium leading-[123%] text-white bg-[#1C1C1C] rounded-[14px] sm:rounded-[18px] py-[12px] sm:py-[18px] px-[34px] sm:px-[40px] flex-shrink-0"
              >
                Donate Now
              </button>
              <button
                style={{
                  boxShadow: "0px 4px 50px 0px rgba(255, 255, 255, 0.21)",
                }}
                className="font-poppins text-[10px] sm:text-[17px] font-medium leading-[123%] text-[#373535] bg-white rounded-[14px] sm:rounded-[18px] py-[12px] sm:py-[18px] px-[34px] sm:px-[40px] flex-shrink-0"
              >
                Find Donor
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DonateYourBlood;
