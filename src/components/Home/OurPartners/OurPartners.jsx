import img1 from "../../../assets/our-partners/img1.png";

const OurPartners = () => {
  return (
    <div className="container mx-auto mb-[23px] md:mb-[147px]">
      <h4 className="text-black font-poppins text-[13px] md:text-4xl font-semibold mb-1 md:mb-[52px]">
        Our Partners
      </h4>
      <img
        className="-ml-[10px] sm:-ml-[14px] md:-ml-[16px] lg:-ml-[20px] xl:-ml-[28px] 2xl:-ml-[34px] 3xl:-ml-[43px] w-full"
        src={img1}
        alt=""
      />
    </div>
  );
};

export default OurPartners;
