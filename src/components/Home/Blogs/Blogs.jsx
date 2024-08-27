import { useState } from "react";
import useBlogsInfo from "../../../hooks/useBlogsInfo";
import SectionHeader from "../../SectionHeader/SectionHeader";
import "./Blogs.css";
import SingleBlogCard from "./SingleBlogCard/SingleBlogCard";
import Container from "../../shared/Container/Container";

const Blogs = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  const [blogsInfo] = useBlogsInfo();

  const smallDeviceBlogs = blogsInfo.slice(0, 4);
  const largeDeviceBlogs = blogsInfo.slice(0, 6);

  return (
    <>
      <div className="bg-primaryBg">
        <Container>
          <div className="pt-[105px] pb-[62px] px-5" id="blogsWrapper">
            <SectionHeader
              sectionName={"Blogs"}
              sectionHeader={"Health Blogs"}
              sectionSubHeader={
                "Find out how our users are spreading the world"
              }
            ></SectionHeader>
            <div className="mt-[64px] lg:mt-20 2xl:mt-[120px]">
              {/* for small devices */}
              <div className="grid grid-cols-2 md:hidden gap-[25px] sm:gap-[30px]">
                {isSeeMore
                  ? blogsInfo.map((blog) => (
                      <SingleBlogCard
                        key={blog.id}
                        blog={blog}
                      ></SingleBlogCard>
                    ))
                  : smallDeviceBlogs.map((blog) => (
                      <SingleBlogCard
                        key={blog.id}
                        blog={blog}
                      ></SingleBlogCard>
                    ))}
              </div>
              {/* for md and lg devices */}
              <div className="hidden md:grid xl:hidden grid-cols-2 gap-[25px] md:gap-[39px]">
                {isSeeMore
                  ? blogsInfo.map((blog) => (
                      <SingleBlogCard
                        key={blog.id}
                        blog={blog}
                      ></SingleBlogCard>
                    ))
                  : smallDeviceBlogs.map((blog) => (
                      <SingleBlogCard
                        key={blog.id}
                        blog={blog}
                      ></SingleBlogCard>
                    ))}
              </div>

              {/* for 2xl devices */}
              <div className="hidden xl:grid xl:grid-cols-3 gap-[25px]">
                {isSeeMore
                  ? blogsInfo.map((blog) => (
                      <SingleBlogCard
                        key={blog.id}
                        blog={blog}
                      ></SingleBlogCard>
                    ))
                  : largeDeviceBlogs.map((blog) => (
                      <SingleBlogCard
                        key={blog.id}
                        blog={blog}
                      ></SingleBlogCard>
                    ))}
              </div>
            </div>
            {/* button div */}
            <div className="relative">
              <div
                style={{
                  filter: "blur(50px)",
                }}
                className="h-[91px] lg:h-[198px] xl:h-[288px] w-full bg-gradient-to-b from-primaryBg to-[#013131b3] -mt-[33px] lg:-mt-[67px] xl:-mt-[124px] z-20 relative"
              ></div>
              <button
                onClick={() => setIsSeeMore(!isSeeMore)}
                className="text-white font-poppins text-[10px] sm:text-xs lg:text-xl xl:text-[28px] 2xl:text-[32px] font-semibold leading-[123%] bg-[#d9d9d900] rounded-[12px] lg:rounded-[20px] xl:rounded-[36px] 2xl:rounded-[40px] px-[25px] sm:px-[28px] lg:px-[50px] xl:px-[60px] 2xl:px-[69px] py-[12px] sm:py-[14px] lg:py-5 xl:py-[28px] 2xl:py-[36px] border-white border-[2px] absolute bottom-0 left-[50%] transform -translate-x-[50%] z-30"
              >
                {isSeeMore ? "See Less" : "See more"}
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Blogs;
