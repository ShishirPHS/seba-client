import PropTypes from "prop-types";

const SingleReviewCard = ({ review, index }) => {
  const { name, img, userName, comment, rating, bgColor } = review;

  const sentences = comment
    .split(".")
    .filter((sentence) => sentence.trim() !== "");

  const oneSentence = sentences[0] + ".";

  const isSpecialIndex = (index + 1) % 3 === 2;

  const displayedComment = isSpecialIndex
    ? sentences.slice(0, 2).join(". ") + "."
    : sentences.slice(0, 1).join(". ") + ".";

  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className="bg-[#E3FFE5] pt-[12px] sm:pt-[10px] md:pt-[12px] lg:pt-[20px] xl:pt-[26px] 2xl:pt-[31px] pb-[28px] sm:pb-[38px] lg:pb-[45px] xl:pb-[60px] 2xl:pb-[90px] pl-[10px] sm:pl-[12px] lg:pl-[20px] xl:pl-[24px] 2xl:pl-[27px] pr-[10px] sm:pr-[16px] xl:pr-[28px] 2xl:pr-[34px] rounded-[16px] lg:rounded-[25px] xl:rounded-[36px] 2xl:rounded-[40px] relative"
    >
      {/* profile */}
      <div className="flex items-center gap-[6px] sm:gap-3 md:gap-[12px]">
        <img
          className="rounded-full w-10 sm:w-[46px] lg:w-12 xl:w-auto"
          src={img}
          alt=""
        />
        <div className="space-y-[3px] md:space-y-0">
          <h6 className="text-black font-poppins text-[8px] sm:text-sm lg:text-[15px] xl:text-xl font-semibold leading-[123%]">
            {name}
          </h6>
          <p className="text-black font-poppins text-[5px] sm:text-[9px] lg:text-xs xl:text-sm font-light leading-[123%]">
            {userName}
          </p>
        </div>
      </div>
      {/* comment */}
      <div className="mt-[8px] lg:mt-3 xl:mt-[18px]">
        {/* for small device */}
        <p className="block md:hidden text-[#514F6E] text-[8px] sm:text-sm font-dmSans leading-[166%] max-w-[158px] sm:max-w-[260px]">
          {oneSentence}
        </p>
        {/* comment (greater than sm devices) */}
        <p className="hidden md:block text-[#514F6E] text-[8px] lg:text-[15px] xl:text-base 2xl:text-lg font-dmSans leading-[166%] max-w-[158px] md:max-w-[432px]">
          {displayedComment}
        </p>
      </div>
      <p className="font-dmSans text-black text-[5px] sm:text-[9px] lg:text-base xl:text-lg font-bold leading-[166%] absolute left-[14px] lg:left-auto lg:right-[33px] lg:top-[21px] bottom-[10px] lg:bottom-auto">
        {rating}
      </p>
    </div>
  );
};

SingleReviewCard.propTypes = {
  review: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default SingleReviewCard;
