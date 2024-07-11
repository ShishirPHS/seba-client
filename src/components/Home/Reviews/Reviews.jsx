import img1 from "../../../assets/reviews/img1.svg";
import img2 from "../../../assets/reviews/img2.svg";
import img3 from "../../../assets/reviews/img3.svg";
import img4 from "../../../assets/reviews/img4.svg";
import img5 from "../../../assets/reviews/img5.svg";
import img6 from "../../../assets/reviews/img6.svg";
import SectionHeader from "../../SectionHeader/SectionHeader";

const Reviews = () => {
  return (
    <div className="w-[1589px] mx-auto">
      {/* texts */}
      <div className="mb-[55px] md:mb-[107px]">
        <SectionHeader
          sectionName={"Reviews"}
          sectionHeader={"Public Cheers for Us!"}
          sectionSubHeader={"Find out how our users are spreading the world"}
        ></SectionHeader>
      </div>
      {/* reviews */}
      <div className="relative">
        <div className="grid grid-cols-3 gap-[31px]">
          {/* left */}
          <div className="space-y-[51px]">
            {/* review 1 */}
            <div className="bg-[#EAECFF] pt-[31px] pb-[34px] pl-[27px] pr-[48px] rounded-[40px] relative">
              {/* profile */}
              <div className="flex items-center gap-[12px]">
                <img className="rounded-full" src={img1} alt="" />
                <div>
                  <h6 className="text-black font-poppins text-xl font-semibold leading-[123%]">
                    Rifat Hasan Rafi
                  </h6>
                  <p className="text-black font-poppins text-sm font-light leading-[123%]">
                    @username_here
                  </p>
                </div>
              </div>
              {/* comment */}
              <div className="mt-[18px]">
                <p className="text-[#514F6E] text-lg font-dmSans leading-[166%] max-w-[428px]">
                  {`We've moved all of our meetings to this new platform and its
              made them all better and efficient.`}
                </p>
              </div>
              <p className="font-dmSans text-black text-lg font-bold leading-[166%] absolute right-[33px] top-[21px]">
                5/5
              </p>
            </div>
            {/* review 4 */}
            <div className="bg-[#F2F9FF] pt-[31px] pb-[34px] pl-[27px] pr-[48px] rounded-[40px] relative">
              {/* profile */}
              <div className="flex items-center gap-[12px]">
                <img className="rounded-full" src={img4} alt="" />
                <div>
                  <h6 className="text-black font-poppins text-xl font-semibold leading-[123%]">
                    Mahin Rahman
                  </h6>
                  <p className="text-black font-poppins text-sm font-light leading-[123%]">
                    @username_here
                  </p>
                </div>
              </div>
              {/* comment */}
              <div className="mt-[18px]">
                <p className="text-[#514F6E] text-lg font-dmSans leading-[166%] max-w-[428px]">
                  {`We've moved all of our meetings to this new platform and its
              made them all better and efficient.`}
                </p>
              </div>
              <p className="font-dmSans text-black text-lg font-bold leading-[166%] absolute right-[33px] top-[21px]">
                5/5
              </p>
            </div>
          </div>
          {/* middle */}
          <div className="space-y-[51px]">
            {/* review 2 */}
            <div className="bg-[#E3FFE5] pt-[31px] pb-[90px] pl-[27px] pr-[48px] rounded-[40px] relative">
              {/* profile */}
              <div className="flex items-center gap-[12px]">
                <img className="rounded-full" src={img2} alt="" />
                <div>
                  <h6 className="text-black font-poppins text-xl font-semibold leading-[123%]">
                    Amir Hasan
                  </h6>
                  <p className="text-black font-poppins text-sm font-light leading-[123%]">
                    @username_here
                  </p>
                </div>
              </div>
              {/* comment */}
              <div className="mt-[18px]">
                <p className="text-[#514F6E] text-lg font-dmSans leading-[166%] max-w-[428px]">
                  {`We've moved all of our meetings to this new platform and it's made them all better and efficient.
                We've moved all of our meetings to this new platform and it's made them all better and efficient.`}
                </p>
              </div>
              <p className="font-dmSans text-black text-lg font-bold leading-[166%] absolute right-[33px] top-[21px]">
                5/5
              </p>
            </div>
            {/* review 5 */}
            <div className="bg-[#FFF1F2] pt-[31px] pb-[90px] pl-[27px] pr-[48px] rounded-[40px] relative">
              {/* profile */}
              <div className="flex items-center gap-[12px]">
                <img className="rounded-full" src={img5} alt="" />
                <div>
                  <h6 className="text-black font-poppins text-xl font-semibold leading-[123%]">
                    Asma Akter
                  </h6>
                  <p className="text-black font-poppins text-sm font-light leading-[123%]">
                    @username_here
                  </p>
                </div>
              </div>
              {/* comment */}
              <div className="mt-[18px]">
                <p className="text-[#514F6E] text-lg font-dmSans leading-[166%] max-w-[428px]">
                  {`We've moved all of our meetings to this new platform and it's made them all better and efficient. We've moved all of our meetings to this new platform and it's made them all better and efficient.`}
                </p>
              </div>
              <p className="font-dmSans text-black text-lg font-bold leading-[166%] absolute right-[33px] top-[21px]">
                5/5
              </p>
            </div>
          </div>
          {/* right */}
          <div className="space-y-[51px]">
            {/* review 3 */}
            <div className="bg-[#FFF5E4] pt-[31px] pb-[34px] pl-[27px] pr-[48px] rounded-[40px] relative">
              {/* profile */}
              <div className="flex items-center gap-[12px]">
                <img className="rounded-full" src={img3} alt="" />
                <div>
                  <h6 className="text-black font-poppins text-xl font-semibold leading-[123%]">
                    Usman Javed
                  </h6>
                  <p className="text-black font-poppins text-sm font-light leading-[123%]">
                    @username_here
                  </p>
                </div>
              </div>
              {/* comment */}
              <div className="mt-[18px]">
                <p className="text-[#514F6E] text-lg font-dmSans leading-[166%] max-w-[428px]">
                  {`We've moved all of our meetings to this new platform and its
              made them all better and efficient.`}
                </p>
              </div>
              <p className="font-dmSans text-black text-lg font-bold leading-[166%] absolute right-[33px] top-[21px]">
                5/5
              </p>
            </div>

            {/* review 6 */}
            <div className="bg-[#F6F6F6] pt-[31px] pb-[34px] pl-[27px] pr-[48px] rounded-[40px] relative">
              {/* profile */}
              <div className="flex items-center gap-[12px]">
                <img className="rounded-full" src={img6} alt="" />
                <div>
                  <h6 className="text-black font-poppins text-xl font-semibold leading-[123%]">
                    Fabliha Rahmam
                  </h6>
                  <p className="text-black font-poppins text-sm font-light leading-[123%]">
                    @username_here
                  </p>
                </div>
              </div>
              {/* comment */}
              <div className="mt-[18px]">
                <p className="text-[#514F6E] text-lg font-dmSans leading-[166%] max-w-[428px]">
                  {`We've moved all of our meetings to this new platform and its
              made them all better and efficient.`}
                </p>
              </div>
              <p className="font-dmSans text-black text-lg font-bold leading-[166%] absolute right-[33px] top-[21px]">
                5/5
              </p>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="relative">
          <div
            style={{
              filter: "blur(50px)",
            }}
            className="w-full h-[193px] flex items-end bg-gradient-to-b from-[#ffffff6b] to-[#fff] -mt-[143px] z-20 relative"
          ></div>
          <button className="text-white font-poppins text-2xl leading-[123%] py-[26px] px-[69px] bg-[#086060] rounded-[23px] block mx-auto absolute left-[50%] transform -translate-x-[50%] bottom-0 z-30">
            Tap to see more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
