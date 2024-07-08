import SectionHeader from "../../SectionHeader/SectionHeader";
import "./Blogs.css";
import img1 from "../../../assets/blogs/img1.png";
// import img2 from "../../../assets/blogs/img2.png";
// import img3 from "../../../assets/blogs/img3.png";
// import img4 from "../../../assets/blogs/img4.png";
// import img5 from "../../../assets/blogs/img5.png";
// import img6 from "../../../assets/blogs/img6.png";

const Blogs = () => {
  return (
    <div className="bg-[#013131]">
      <div
        className="container mx-auto pt-[105px] pb-[62px] px-5"
        id="blogsWrapper"
      >
        <SectionHeader
          sectionName={"Blogs"}
          sectionHeader={"Health Blogs"}
          sectionSubHeader={"Find out how our users are spreading the world"}
        ></SectionHeader>
        {/* cards */}
        <div className="mt-[64px] md:mt-[120px] grid grid-cols-2 lg:grid-cols-3 gap-[25px] md:gap-[39px]">
          {/* single card 1 */}
          <div className="bg-[#747474a1] rounded-[20px] md:rounded-[40px] p-[10px] md:p-5 pr-[70px] flex space-x-[16px] md:space-x-[58px] items-center">
            <img
              className="rounded-[20px] md:rounded-[40px] w-[62px] md:w-auto h-[54px] md:h-auto"
              src={img1}
              alt=""
            />
            <p className="font-poppins text-white text-[12px] md:text-[32px] font-semibold leading-[123%] max-w-[140px]">
              Healthy Lifestyle
            </p>
          </div>
          {/* single card 2 */}
          <div className="bg-[#747474a1] rounded-[20px] md:rounded-[40px] p-[10px] md:p-5 pr-[70px] flex space-x-[16px] md:space-x-[58px] items-center">
            <img
              className="rounded-[20px] md:rounded-[40px] w-[62px] md:w-auto h-[54px] md:h-auto"
              src={img1}
              alt=""
            />
            <p className="font-poppins text-white text-[12px] md:text-[32px] font-semibold leading-[123%] max-w-[140px]">
              Healthy Lifestyle
            </p>
          </div>
          {/* single card 3 */}
          <div className="bg-[#747474a1] rounded-[20px] md:rounded-[40px] p-[10px] md:p-5 pr-[70px] flex space-x-[16px] md:space-x-[58px] items-center">
            <img
              className="rounded-[20px] md:rounded-[40px] w-[62px] md:w-auto h-[54px] md:h-auto"
              src={img1}
              alt=""
            />
            <p className="font-poppins text-white text-[12px] md:text-[32px] font-semibold leading-[123%] max-w-[140px]">
              Healthy Lifestyle
            </p>
          </div>
          {/* single card 4 */}
          <div className="bg-[#747474a1] rounded-[20px] md:rounded-[40px] p-[10px] md:p-5 pr-[70px] flex space-x-[16px] md:space-x-[58px] items-center">
            <img
              className="rounded-[20px] md:rounded-[40px] w-[62px] md:w-auto h-[54px] md:h-auto"
              src={img1}
              alt=""
            />
            <p className="font-poppins text-white text-[12px] md:text-[32px] font-semibold leading-[123%] max-w-[140px]">
              Healthy Lifestyle
            </p>
          </div>
          {/* single card 5 */}
          <div className="bg-[#747474a1] rounded-[20px] md:rounded-[40px] p-[10px] md:p-5 pr-[70px] flex space-x-[16px] md:space-x-[58px] items-center">
            <img
              className="rounded-[20px] md:rounded-[40px] w-[62px] md:w-auto h-[54px] md:h-auto"
              src={img1}
              alt=""
            />
            <p className="font-poppins text-white text-[12px] md:text-[32px] font-semibold leading-[123%] max-w-[140px]">
              Healthy Lifestyle
            </p>
          </div>
          {/* single card 6 */}
          <div className="bg-[#747474a1] rounded-[20px] md:rounded-[40px] p-[10px] md:p-5 pr-[70px] flex space-x-[16px] md:space-x-[58px] items-center">
            <img
              className="rounded-[20px] md:rounded-[40px] w-[62px] md:w-auto h-[54px] md:h-auto"
              src={img1}
              alt=""
            />
            <p className="font-poppins text-white text-[12px] md:text-[32px] font-semibold leading-[123%] max-w-[140px]">
              Healthy Lifestyle
            </p>
          </div>
        </div>
        {/* button div */}
        <div className="relative">
          <div
            style={{
              filter: "blur(50px)",
            }}
            className="h-[91px] md:h-[288px] w-full bg-gradient-to-b from-[#013131] to-[#013131b3] -mt-[33px] md:-mt-[124px] z-20 relative"
          ></div>
          <button className="text-white font-poppins text-[10px] md:text-[32px] font-semibold leading-[123%] bg-[#d9d9d900] rounded-[12px] md:rounded-[40px] px-[25px] md:px-[69px] py-[12px] md:py-[36px] border-white border-[2px] absolute bottom-0 left-[50%] transform -translate-x-[50%] z-30">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
