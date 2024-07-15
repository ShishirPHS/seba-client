import PropTypes from "prop-types";

const SingleReviewCard = ({ review }) => {
  const { name, img, userName, comment, rating, bgColor } = review;

  const sentences = comment
    .split(".")
    .filter((sentence) => sentence.trim() !== "");

  const oneSentence = sentences[0] + ".";

  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className="bg-[#E3FFE5] pt-[12px] lg:pt-[20px] xl:pt-[31px] pb-[30px] lg:pb-[45px] xl:pb-[90px] pl-[12px] lg:pl-[20px] xl:pl-[27px] pr-[16px] xl:pr-[34px] rounded-[16px] lg:rounded-[25px] xl:rounded-[40px] relative"
    >
      {/* profile */}
      <div className="flex items-center gap-[6px] md:gap-[12px]">
        <img className="rounded-full w-10 lg:w-12 xl:w-auto" src={img} alt="" />
        <div className="space-y-[3px] md:space-y-0">
          <h6 className="text-black font-poppins text-[8px] lg:text-[15px] xl:text-xl font-semibold leading-[123%]">
            {name}
          </h6>
          <p className="text-black font-poppins text-[5px] lg:text-xs xl:text-sm font-light leading-[123%]">
            {userName}
          </p>
        </div>
      </div>
      {/* comment */}
      <div className="mt-[8px] lg:mt-3 xl:mt-[18px]">
        {/* for small device */}
        <p className="block md:hidden text-[#514F6E] text-[8px] md:text-lg font-dmSans leading-[166%] max-w-[158px] md:max-w-[432px]">
          {oneSentence}
        </p>
        {/* comment (greater than sm devices) */}
        <p className="hidden md:block text-[#514F6E] text-[8px] lg:text-[15px] xl:text-lg font-dmSans leading-[166%] max-w-[158px] md:max-w-[432px]">
          {comment}
        </p>
      </div>
      <p className="font-dmSans text-black text-[5px] lg:text-base xl:text-lg font-bold leading-[166%] absolute left-[14px] md:left-auto md:right-[33px] md:top-[21px] bottom-[10px] md:bottom-auto">
        {rating}
      </p>
    </div>
  );
};

SingleReviewCard.propTypes = {
  review: PropTypes.object.isRequired,
};

export default SingleReviewCard;
