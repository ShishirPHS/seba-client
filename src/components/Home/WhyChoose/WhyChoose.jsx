import mobileImg from "../../../assets/why-choose/image 1.png";

const WhyChoose = () => {
  return (
    <div className="flex gap-[22px] mb-[262px]">
      {/* left side div */}
      <div className="bg-[#FF0068] rounded-br-[40px] pt-[107px] pr-[190px] w-[50%] relative">
        <p className="text-white text-right font-poppins text-5xl font-semibold leading-[123%]">
          Why Choose Seba?
        </p>
        <img
          className="absolute top-[220px] right-[244px]"
          src={mobileImg}
          alt=""
        />
      </div>
      {/* right side div */}
      <div className="w-[50%] bg-[#086060] rounded-bl-[40px] pt-[65px] pl-[67px] pb-[100px]">
        <p className="max-w-[674px] text-white font-poppins text-[32px] leading-[123%] mb-[87px]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor alt
          <br /> <br />
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the.
        </p>
        <button className="text-[#086060] font-poppins text-2xl leading-[123%] bg-white py-[27px] px-[102px] rounded-[23px]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default WhyChoose;
