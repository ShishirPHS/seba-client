import PropTypes from "prop-types";

const SingleBlogCard = ({ blog }) => {
  const { image, blogName } = blog;

  return (
    <div className="bg-[#747474a1] rounded-[20px] sm:rounded-[30px] lg:rounded-[30px] xl:rounded-[40px] p-[10px] sm:p-[22px] lg:p-[25px] xl:p-5 pr-[70px] flex space-x-[16px] sm:space-x-[20px] lg:space-x-[100px] xl:space-x-[24px] items-center">
      <img
        className="rounded-[20px] sm:rounded-[18px] xl:rounded-[40px] w-[62px] sm:w-[80px] md:w-[92px] lg:w-[150px] xl:w-[160px] h-auto"
        src={image}
        alt=""
      />
      <h5 className="font-poppins text-white text-[12px] sm:text-[15px] md:text-[18px] lg:text-[22px] xl:text-[30px] font-semibold leading-[123%] max-w-[50px] lg:max-w-[100px] xl:max-w-[140px]">
        {blogName}
      </h5>
    </div>
  );
};

SingleBlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default SingleBlogCard;
