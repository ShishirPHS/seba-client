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
      className="flex items-center gap-[26px] xl:gap-[16px] 2xl:gap-[34px] rounded-[40px] bg-white p-[11px] md:p-[14px] mt-[20px] mb-[40px] mx-[2px]"
    >
      <div>
        <img
          className="rounded-[40px] md:rounded-[20px] w-[111px] lg:w-[130px] xl:w-[120px] 2xl:w-auto"
          src={image}
          alt=""
        />
      </div>
      <div>
        {/* text */}
        <div className="mb-[14px] xl:mb-[8px] 2xl:mb-[14px]">
          <h5 className="text-black font-poppins text-base lg:text-base xl:text-base 2xl:text-xl font-semibold">
            {name}
          </h5>
          <h6 className="text-black font-poppins text-[17px] lg:text-base xl:text-base 2xl:text-xl font-light">
            {degree}
          </h6>
          <p className="text-[#7F7F7F] font-poppins text-[15px] lg:text-base xl:text-base 2xl:text-xl">
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
                className="icon w-[15px] lg:w-auto xl:w-[16px] 2xl:w-auto"
              />
            }
            fullSymbol={
              <img
                src={fullStar}
                className="icon w-[15px] lg:w-auto xl:w-[16px] 2xl:w-auto"
              />
            }
          />
          <p className="text-black font-poppins text-sm font-semibold ml-[12px]">
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
