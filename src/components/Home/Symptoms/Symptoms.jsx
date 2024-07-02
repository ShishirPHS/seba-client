import fever from "../../../assets/icons/symptoms/thermometer.svg";
import heartAttack from "../../../assets/icons/symptoms/anatomical-heart.svg";
import pregnancy from "../../../assets/icons/symptoms/child-head.svg";
import highBloodPressure from "../../../assets/icons/symptoms/blood.svg";
import breathlessness from "../../../assets/icons/symptoms/lungs 1.svg";
import diarrhea from "../../../assets/icons/symptoms/viruses 1.svg";

const Symptoms = () => {
  return (
    <div className="w-[1589px] mx-auto mt-[118px] mb-[140px]">
      {/* top */}
      <div className="flex justify-between mb-[49px]">
        <p className="text-black font-poppins text-4xl font-medium leading-[123%]">
          Symptoms
        </p>
        <p className="text-black font-poppins text-4xl font-medium leading-[123%] cursor-pointer">
          View All
        </p>
      </div>
      {/* bottom */}
      <div className="flex justify-between">
        {/* symptom 1 */}
        <div className="flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[22px] px-[45px] py-[40px] mb-[22px]"
            src={heartAttack}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-2xl font-medium leading-[123%]">
            Fever
          </p>
        </div>
        {/* symptom 2 */}
        <div className="flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[22px] px-[45px] py-[40px] mb-[22px]"
            src={fever}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-2xl font-medium leading-[123%]">
            Fever
          </p>
        </div>
        {/* symptom 3 */}
        <div className="flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[22px] px-[45px] py-[40px] mb-[22px]"
            src={pregnancy}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-2xl font-medium leading-[123%]">
            Fever
          </p>
        </div>
        {/* symptom 4 */}
        <div className="flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[22px] px-[45px] py-[40px] mb-[22px]"
            src={highBloodPressure}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-2xl font-medium leading-[123%]">
            Fever
          </p>
        </div>
        {/* symptom 5 */}
        <div className="flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[22px] px-[45px] py-[40px] mb-[22px]"
            src={breathlessness}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-2xl font-medium leading-[123%]">
            Fever
          </p>
        </div>
        {/* symptom 6 */}
        <div className="flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[22px] px-[45px] py-[40px] mb-[22px]"
            src={diarrhea}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-2xl font-medium leading-[123%]">
            Fever
          </p>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
