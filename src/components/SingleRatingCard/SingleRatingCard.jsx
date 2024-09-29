import Rating from "react-rating";

import emptyStar from "../../assets/icons/star/empty.svg";
import fullStar from "../../assets/icons/star/full.svg";

import PropTypes from "prop-types";

const SingleRatingCard = ({ doctor }) => {
  const {
    name,
    image,
    degree,
    yearsOfExperience,
    averageRating,
    fiveStarRatingCount,
  } = doctor;

  return (
    <div
      style={{ boxShadow: " 4px 4px 10px 0px rgba(0, 0, 0, 0.07)" }}
      className="flex items-center gap-[12px] lg:gap-[26px] xl:gap-[16px] rounded-[40px] bg-white p-[11px] md:p-[14px] mt-[20px] mb-[40px] mx-[2px]"
    >
      <div>
        <img
          className="rounded-[28px] lg:rounded-[40px] w-[96px] lg:w-[130px] xl:w-[120px]"
          src={image}
          alt=""
        />
      </div>
      <div>
        {/* text */}
        <div className="mb-[8px] xl:mb-[8px]">
          <h5 className="text-black font-poppins text-xs lg:text-base xl:text-base font-semibold">
            {name}
          </h5>
          <h6 className="text-black font-poppins text-[13px] lg:text-base xl:text-base font-light">
            {degree}
          </h6>
          <p className="text-[#7F7F7F] font-poppins text-[13px] lg:text-base xl:text-base">
            {`${yearsOfExperience} Years of Experience`}
          </p>
        </div>
        {/* rating */}
        <div className="flex items-center ratingDiv">
          <Rating
            initialRating={averageRating}
            readonly
            emptySymbol={
              <img
                src={emptyStar}
                className="icon w-[13px] lg:w-auto xl:w-[16px]"
              />
            }
            fullSymbol={
              <img
                src={fullStar}
                className="icon w-[13px] lg:w-auto xl:w-[16px]"
              />
            }
          />
          <p className="text-black font-poppins text-xs font-semibold ml-[12px]">
            5 ({fiveStarRatingCount})
          </p>
        </div>
      </div>
    </div>
  );
};

SingleRatingCard.propTypes = {
  doctor: PropTypes.object.isRequired,
};

export default SingleRatingCard;
