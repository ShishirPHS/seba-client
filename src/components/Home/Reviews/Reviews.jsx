import useReview from "../../../hooks/useReview";
import SectionHeader from "../../SectionHeader/SectionHeader";
import SingleReviewCard from "./SingleReviewCard/SingleReviewCard";
import "./Reviews.css";
import { useState } from "react";
import MasonryLayout from "./MasonryLayout/MasonryLayout";
import Container from "../../shared/Container/Container";

const Reviews = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [userReview] = useReview();

  const smallDeviceReviews = userReview.slice(0, 4);
  const largeDeviceReviews = userReview.slice(0, 6);

  return (
    <>
      <Container>
        <div className="mx-5 3xl:mx-[140px]">
          {/* texts */}
          <div className="mb-[55px] lg:mb-[80px] xl:mb-[90px] 2xl:mb-[107px]">
            <SectionHeader
              sectionName={"Reviews"}
              sectionHeader={"Public Cheers for Us!"}
              sectionSubHeader={
                "Find out how our users are spreading the world"
              }
            ></SectionHeader>
          </div>
          {/* reviews */}

          <div>
            {/* for small devices */}
            <div className="grid md:hidden sm:justify-center">
              <MasonryLayout>
                {isSeeMore
                  ? userReview.map((review, index) => (
                      <SingleReviewCard
                        key={review.id}
                        review={review}
                        index={index}
                      ></SingleReviewCard>
                    ))
                  : smallDeviceReviews.map((review, index) => (
                      <SingleReviewCard
                        key={review.id}
                        review={review}
                        index={index}
                      ></SingleReviewCard>
                    ))}
              </MasonryLayout>
            </div>
            {/* for medium and large devices */}
            <div className="hidden md:grid justify-center">
              <MasonryLayout>
                {isSeeMore
                  ? userReview.map((review, index) => (
                      <SingleReviewCard
                        key={review.id}
                        review={review}
                        index={index}
                      ></SingleReviewCard>
                    ))
                  : largeDeviceReviews.map((review, index) => (
                      <SingleReviewCard
                        key={review.id}
                        review={review}
                        index={index}
                      ></SingleReviewCard>
                    ))}
              </MasonryLayout>
            </div>
            {/* button */}
            <div className="relative">
              <div
                style={{
                  filter: "blur(50px)",
                }}
                className="w-full h-[73px] md:h-[120px] flex items-end bg-gradient-to-b from-[#ffffff6b] to-[#fff] -mt-[56px] md:-mt-[100px] z-20 relative"
              ></div>
              <button
                onClick={() => setIsSeeMore(!isSeeMore)}
                className="text-white font-poppins text-[10px] sm:text-xs lg:text-xl xl:text-[22px] 2xl:text-2xl leading-[123%] py-[12px] lg:py-5 xl:py-[23px] 2xl:py-[26px] px-[28px] sm:px-[32px] lg:px-[58px] xl:px-[62px] 2xl:px-[69px] bg-primary rounded-[10px] lg:rounded-[16px] xl:rounded-[20px] 2xl:rounded-[23px] block mx-auto absolute left-[50%] transform -translate-x-[50%] bottom-0 z-30"
              >
                {isSeeMore ? "Tap to see less" : "Tap to see more"}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Reviews;
