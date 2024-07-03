import img1 from "../../../assets/reviews/img1.svg";
import img2 from "../../../assets/reviews/img2.svg";
import img3 from "../../../assets/reviews/img3.svg";
import img4 from "../../../assets/reviews/img4.svg";
import img5 from "../../../assets/reviews/img5.svg";
import img6 from "../../../assets/reviews/img6.svg";

const Reviews = () => {
  return (
    <div className="w-[1589px] mx-auto">
      {/* texts */}
      <div className="mb-[107px]">
        <button className="py-[12px] mb-[22px] px-[47px] bg-[#FF0068] text-white font-poppins text-xl font-medium leading-[123%] mx-auto block rounded-[100px]">
          Reviews
        </button>
        <h3 className="text-black text-center font-poppins text-5xl font-semibold leading-[123%] mb-[17px]">
          Public Cheers for Us!
        </h3>
        <p className="text-center text-black font-poppins text-xl font-light leading-[123%]">
          Find out how our users are spreading the world
        </p>
      </div>
      {/* reviews */}
      <div className="flex gap-[31px] flex-wrap items-start">
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
  );
};

export default Reviews;
