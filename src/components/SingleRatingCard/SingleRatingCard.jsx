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
      style={{ boxShadow: " 4px 4px 19.3px 0px rgba(0, 0, 0, 0.07)" }}
      className="flex items-center gap-[34px] rounded-[40px] bg-white p-[14px] mt-[20px] mb-[40px] mx-[2px]"
    >
      <div>
        <img className="rounded-[40px]" src={image} alt="" />
      </div>
      <div>
        {/* text */}
        <div className="mb-5">
          <h5 className="text-black font-poppins text-xl font-semibold">
            {name}
          </h5>
          <h6 className="text-black font-poppins text-xl font-light">
            {degree}
          </h6>
          <p className="text-[#7F7F7F] font-poppins text-xl">
            {`${yearsOfExperience} Years of Experience`}
          </p>
        </div>
        {/* rating */}
        <div className="flex items-center">
          <Rating
            initialRating={averageRating}
            readonly
            emptySymbol={<img src={emptyStar} className="icon" />}
            fullSymbol={<img src={fullStar} className="icon" />}
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
