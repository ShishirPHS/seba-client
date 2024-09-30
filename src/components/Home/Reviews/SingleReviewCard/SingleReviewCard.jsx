import PropTypes from "prop-types";

const SingleReviewCard = ({ review, index }) => {
  const { name, img, userName, comment, rating, bgColor } = review;

  return (
    <div
      id={index + 1}
      style={{ backgroundColor: `${bgColor}` }}
      className="bg-[#E3FFE5] pt-[12px] sm:pt-[10px] md:pt-[12px] lg:pt-[20px] xl:pt-[26px] pb-[28px] sm:pb-[40px] lg:pb-[24px] xl:pb-[30px] pl-[10px] sm:pl-[12px] lg:pl-[20px] xl:pl-[24px] pr-[10px] sm:pr-[16px] xl:pr-[28px] rounded-[16px] lg:rounded-[25px] xl:rounded-[36px] relative mb-[10px] sm:mb-4 xl:mb-5 blogItem"
    >
      {/* profile */}
      <div className="flex items-center gap-[6px] sm:gap-3 md:gap-[12px]">
        <img
          className="rounded-full w-10 sm:w-[46px] lg:w-12 xl:w-auto"
          src={img}
          alt=""
        />
        <div className="space-y-[3px] md:space-y-0">
          <h5 className="text-black font-poppins text-[8px] sm:text-sm lg:text-[15px] xl:text-xl font-semibold leading-[123%]">
            {name}
          </h5>
          <h6 className="text-black font-poppins text-[5px] sm:text-[9px] lg:text-xs xl:text-sm font-light leading-[123%]">
            {userName}
          </h6>
        </div>
      </div>
      {/* comment */}
      <div className="mt-[8px] lg:mt-3 xl:mt-[18px]">
        {/* comment (greater than sm devices) */}
        <p className="block text-[#514F6E] text-[8px] sm:text-sm lg:text-[15px] xl:text-base font-dmSans leading-[166%] max-w-[158px] sm:max-w-[260px] md:max-w-[432px]">
          {comment}
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
