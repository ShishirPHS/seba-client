import { Link } from "react-router-dom";
import doctors from "../../../assets/are-you-a-doctor/doctors.png";
import Container from "../../shared/Container/Container";

const AreYourADoctor = () => {
  return (
    <>
      <div className="px-5">
        <Container>
          <div className="bg-[#E3FFE5] rounded-[40px] md:rounded-[30px] lg:rounded-[24px] xl:rounded-[40px] pt-[21px] md:mt-[30px] lg:pt-10 xl:pt-[70px] pb-0 md:pb-10 xl:pb-[80px] pr-0 md:pr-[50px] lg:pr-[60px] xl:pr-[90px] flex flex-col md:flex-row items-center md:justify-end relative mb-[66px] lg:mb-[110px] xl:mb-[135px]">
            <div className="flex flex-col items-center justify-center md:items-start">
              <h2 className="font-poppins text-[20px] lg:text-[28px] xl:text-[30px] text-center md:text-left font-bold text-primary mb-0 xl:mb-[8px]">
                Are You A Doctor?
              </h2>
              <h3 className="text-primary font-poppins text-[12px] lg:text-base xl:text-xl font-semibold text-center md:text-left max-w-[205px] md:max-w-none mx-auto">
                Get Connected with Us through the Connect App.
              </h3>
              <Link className="text-white font-poppins text-[11px] lg:text-sm xl:text-lg leading-[123%] bg-primary rounded-[8px] lg:rounded-[14px] xl:rounded-[23px] mt-[10px] lg:mt-[38px] xl:mt-[56px] py-[8px] lg:py-4 xl:py-[22px] px-[25px] lg:px-12 xl:px-[85px] inline-block md:mx-0 mb-[10px] md:mb-0">
                Read More
              </Link>
            </div>
            <img
              className="block md:absolute bottom-0 left-[109px] md:left-[70px] lg:left-[70px] xl:left-[90px] w-[201px] md:w-[222px] lg:w-[360px] xl:w-[520px]"
              src={doctors}
              alt=""
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default AreYourADoctor;
