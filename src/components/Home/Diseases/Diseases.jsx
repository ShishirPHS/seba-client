import dengue from "../../../assets/icons/diseases/mosquito.svg";
import typhoid from "../../../assets/icons/diseases/fever.svg";
import piles from "../../../assets/icons/diseases/piles.svg";
import gastritis from "../../../assets/icons/diseases/gastritis.svg";
import hernia from "../../../assets/icons/diseases/lungs.svg";
import migraine from "../../../assets/icons/diseases/migraine.svg";

const Diseases = () => {
  return (
    <div className="w-[1589px] mx-auto mt-[118px] mb-[140px]">
      {/* top */}
      <div className="flex justify-between mb-[49px]">
        <p className="text-black font-poppins text-4xl font-medium leading-[123%]">
          Diseases
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
            src={dengue}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-2xl font-medium leading-[123%]">
            Dengue fever
          </p>
        </div>
        {/* symptom 2 */}
        <div className="flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[22px] px-[45px] py-[40px] mb-[22px]"
            src={typhoid}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-2xl font-medium leading-[123%]">
            Typhoid Fever
          </p>
        </div>
        {/* symptom 3 */}
        <div className="flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[22px] px-[45px] py-[40px] mb-[22px]"
            src={piles}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-2xl font-medium leading-[123%]">
            Piles
          </p>
        </div>
        {/* symptom 4 */}
        <div className="flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[22px] px-[45px] py-[40px] mb-[22px]"
            src={gastritis}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-2xl font-medium leading-[123%]">
            Gastritis
          </p>
        </div>
        {/* symptom 5 */}
        <div className="flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[22px] px-[45px] py-[40px] mb-[22px]"
            src={hernia}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-2xl font-medium leading-[123%]">
            Hernia
          </p>
        </div>
        {/* symptom 6 */}
        <div className="flex flex-col items-center">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="border border-[#086060] rounded-[22px] px-[45px] py-[40px] mb-[22px]"
            src={migraine}
            alt="an icon of thermometer"
          />
          <p className="text-black font-poppins text-2xl font-medium leading-[123%]">
            Migraine
          </p>
        </div>
      </div>
    </div>
  );
};

export default Diseases;
