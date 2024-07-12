import PropTypes from "prop-types";

const SingleReviewCard = ({ review }) => {
  const { name, img, userName, comment, rating, bgColor } = review;

  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className="bg-[#E3FFE5] pt-[12px] md:pt-[31px] pb-[30px] md:pb-[90px] pl-[12px] md:pl-[27px] pr-[16px] md:pr-[48px] rounded-[16px] md:rounded-[40px] relative"
    >
      {/* profile */}
      <div className="flex items-center gap-[6px] md:gap-[12px]">
        <img className="rounded-full w-10 md:w-auto" src={img} alt="" />
        <div className="space-y-[3px] md:space-y-0">
          <h6 className="text-black font-poppins text-[8px] md:text-xl font-semibold leading-[123%]">
            {name}
          </h6>
          <p className="text-black font-poppins text-[5px] md:text-sm font-light leading-[123%]">
            {userName}
          </p>
        </div>
      </div>
      {/* comment */}
      <div className="mt-[8px] md:mt-[18px]">
        <p className="text-[#514F6E] text-[8px] md:text-lg font-dmSans leading-[166%] max-w-[158px] md:max-w-[432px]">
          {comment}
        </p>
      </div>
      <p className="font-dmSans text-black text-[5px] md:text-lg font-bold leading-[166%] absolute left-[14px] md:left-auto md:right-[33px] md:top-[21px] bottom-[10px] md:bottom-auto">
        {rating}
      </p>
    </div>
  );
};

SingleReviewCard.propTypes = {
  review: PropTypes.object.isRequired,
};

export default SingleReviewCard;
