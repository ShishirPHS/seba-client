import SectionHeader from "../../SectionHeader/SectionHeader";
import "./Blogs.css";
import img1 from "../../../assets/blogs/img1.png";
import img2 from "../../../assets/blogs/img2.png";
import img3 from "../../../assets/blogs/img3.png";
import img4 from "../../../assets/blogs/img4.png";
import img5 from "../../../assets/blogs/img5.png";
import img6 from "../../../assets/blogs/img6.png";

const Blogs = () => {
  return (
    <div className="bg-[#013131]">
      <div
        className="w-[1589px] mx-auto pt-[105px] pb-[62px]"
        id="blogsWrapper"
      >
        <SectionHeader
          sectionName={"Blogs"}
          sectionHeader={"Health Blogs"}
          sectionSubHeader={"Find out how our users are spreading the world"}
        ></SectionHeader>
        {/* cards */}
        <div className="mt-[120px] flex gap-[39px] flex-wrap">
          {/* single card */}
          <div className="bg-[#747474a1] rounded-[40px] p-5 pr-[70px] flex space-x-[58px] items-center">
            <img className="rounded-[40px]" src={img1} alt="" />
            <p className="font-poppins text-white text-[32px] font-semibold leading-[123%] max-w-[140px]">
              Healthy Lifestyle
            </p>
          </div>
          {/* single card */}
          <div className="bg-[#747474a1] rounded-[40px] p-5 pr-[70px] flex space-x-[58px] items-center">
            <img className="rounded-[40px]" src={img2} alt="" />
            <p className="font-poppins text-white text-[32px] font-semibold leading-[123%] max-w-[140px]">
              Women Health
            </p>
          </div>
          {/* single card */}
          <div className="bg-[#747474a1] rounded-[40px] p-5 pr-[70px] flex space-x-[58px] items-center">
            <img className="rounded-[40px]" src={img3} alt="" />
            <p className="font-poppins text-white text-[32px] font-semibold leading-[123%] max-w-[140px]">
              Skin Care
            </p>
          </div>
          {/* single card */}
          <div className="bg-[#747474a1] rounded-[40px] p-5 pr-[70px] flex space-x-[58px] items-center">
            <img className="rounded-[40px]" src={img4} alt="" />
            <p className="font-poppins text-white text-[32px] font-semibold leading-[123%] max-w-[140px]">
              Fitness Exercise
            </p>
          </div>
          {/* single card */}
          <div className="bg-[#747474a1] rounded-[40px] p-5 pr-[70px] flex space-x-[58px] items-center">
            <img className="rounded-[40px]" src={img5} alt="" />
            <p className="font-poppins text-white text-[32px] font-semibold leading-[123%] max-w-[140px]">
              Health News{" "}
            </p>
          </div>
          {/* single card */}
          <div className="bg-[#747474a1] rounded-[40px] p-5 pr-[70px] flex space-x-[58px] items-center">
            <img className="rounded-[40px]" src={img6} alt="" />
            <p className="font-poppins text-white text-[32px] font-semibold leading-[123%] max-w-[140px]">
              Dental Health
            </p>
          </div>
        </div>
        {/* button div */}
        <div className="relative">
          <div
            style={{
              filter: "blur(50px)",
            }}
            className="h-[288px] w-full bg-gradient-to-b from-[#013131] to-[#013131b3] -mt-[124px] z-20 relative"
          ></div>
          <button className="text-white font-poppins text-[32px] font-semibold leading-[123%] bg-[#d9d9d900] rounded-[40px] px-[69px] py-[36px] border-white border-[2px] absolute bottom-0 left-[50%] transform -translate-x-[50%] z-30">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
