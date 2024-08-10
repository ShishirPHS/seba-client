import img1 from "../../../assets/our-partners/img1.png";

const OurPartners = () => {
  return (
    <div className="container mx-auto mb-[30px] lg:mb-[120px] xl:mb-[115px] 2xl:mb-[147px] px-5">
      <h4 className="text-black font-poppins text-[13px] sm:text-base md:text-xl lg:text-[34px] xl:text-4xl font-semibold mb-2 lg:mb-[30px] xl:mb-[34px] 2xl:mb-[52px]">
        Our Partners
      </h4>
      <img
        className="-ml-[5px] sm:-ml-[14px] md:-ml-[16px] lg:-ml-[20px] xl:-ml-[28px] 2xl:-ml-[34px] 3xl:-ml-[43px] w-full"
        src={img1}
        alt=""
      />
    </div>
  );
};

export default OurPartners;
