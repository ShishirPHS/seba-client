import useReview from "../../../hooks/useReview";
import SectionHeader from "../../SectionHeader/SectionHeader";
import SingleReviewCard from "./SingleReviewCard/SingleReviewCard";

const Reviews = () => {
  const [userReview] = useReview();

  const smallDeviceReviews = userReview.slice(0, 4);
  const largeDeviceReviews = userReview.slice(0, 6);

  return (
    <div className="container mx-auto">
      <div className="mx-5">
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
          {/* for small devices */}
          <div className="grid md:hidden grid-cols-2 md:grid-cols-3 gap-[11px] md:gap-6">
            {smallDeviceReviews.map((review) => (
              <SingleReviewCard
                key={review.id}
                review={review}
              ></SingleReviewCard>
            ))}
          </div>
          {/* for large devices */}
          <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-[11px] md:gap-6">
            {largeDeviceReviews.map((review) => (
              <SingleReviewCard
                key={review.id}
                review={review}
              ></SingleReviewCard>
            ))}
          </div>
          {/* button */}
          <div className="relative">
            <div
              style={{
                filter: "blur(50px)",
              }}
              className="w-full h-[73px] md:h-[193px] flex items-end bg-gradient-to-b from-[#ffffff6b] to-[#fff] -mt-[56px] md:-mt-[143px] z-20 relative"
            ></div>
            <button className="text-white font-poppins text-[10px] md:text-2xl leading-[123%] py-[12px] md:py-[26px] px-[30px] md:px-[69px] bg-[#086060] rounded-[10px] md:rounded-[23px] block mx-auto absolute left-[50%] transform -translate-x-[50%] bottom-0 z-30">
              Tap to see more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
