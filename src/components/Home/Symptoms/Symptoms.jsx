import fever from "../../../assets/icons/symptoms/thermometer.svg";
import heartAttack from "../../../assets/icons/symptoms/anatomical-heart.svg";
import pregnancy from "../../../assets/icons/symptoms/child-head.svg";
import highBloodPressure from "../../../assets/icons/symptoms/blood.svg";
import breathlessness from "../../../assets/icons/symptoms/lungs 1.svg";
import diarrhea from "../../../assets/icons/symptoms/viruses 1.svg";

const Symptoms = () => {
  return (
    <div className="container mx-auto mt-[38px] md:mt-[118px] mb-[60px] md:mb-[140px] px-5">
      {/* top */}
      <div className="flex justify-between mb-[35px] md:mb-[49px]">
        <p className="text-black font-poppins text-lg md:text-4xl font-medium leading-[123%]">
          Symptoms
        </p>
        <p className="text-black font-poppins text-lg md:text-4xl font-medium leading-[123%] cursor-pointer">
          View All
        </p>
      </div>
      {/* bottom */}
      <div className="flex justify-between">
        {/* symptom 1 */}
        <div className="flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[18px] md:rounded-[22px] px-[24px] md:px-[45px] py-[22px] md:py-[40px] mb-[22px] w-20 md:w-auto h-20 md:h-auto"
            src={fever}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-xs md:text-2xl font-medium leading-[123%]">
            Fever
          </p>
        </div>
        {/* symptom 2 */}
        <div className="flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[18px] md:rounded-[22px] px-[24px] md:px-[45px] py-[22px] md:py-[40px] mb-[22px] w-20 md:w-auto h-20 md:h-auto"
            src={heartAttack}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-xs md:text-2xl font-medium leading-[123%]">
            Heart attack
          </p>
        </div>
        {/* symptom 3 */}
        <div className="flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[18px] md:rounded-[22px] px-[24px] md:px-[45px] py-[22px] md:py-[40px] mb-[22px] w-20 md:w-auto h-20 md:h-auto"
            src={pregnancy}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-xs md:text-2xl font-medium leading-[123%]">
            Pregnancy
          </p>
        </div>
        {/* symptom 4 */}
        <div className="hidden md:flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[18px] md:rounded-[22px] px-[24px] md:px-[45px] py-[22px] md:py-[40px] mb-[22px] w-10 md:w-auto h-10 md:h-auto"
            src={highBloodPressure}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-xs md:text-2xl font-medium leading-[123%]">
            High blood pressure
          </p>
        </div>
        {/* symptom 5 */}
        <div className="hidden md:flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[18px] md:rounded-[22px] px-[24px] md:px-[45px] py-[22px] md:py-[40px] mb-[22px] w-10 md:w-auto h-10 md:h-auto"
            src={breathlessness}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-xs md:text-2xl font-medium leading-[123%]">
            Breathlessness
          </p>
        </div>
        {/* symptom 6 */}
        <div className="hidden md:flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[18px] md:rounded-[22px] px-[24px] md:px-[45px] py-[22px] md:py-[40px] mb-[22px] w-10 md:w-auto h-10 md:h-auto"
            src={diarrhea}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-xs md:text-2xl font-medium leading-[123%]">
            Diarrhea
          </p>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
