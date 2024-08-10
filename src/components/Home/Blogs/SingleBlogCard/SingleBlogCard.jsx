import PropTypes from "prop-types";

const SingleBlogCard = ({ blog }) => {
  const { image, blogName } = blog;

  return (
    <div className="bg-[#747474a1] rounded-[20px] sm:rounded-[30px] lg:rounded-[30px] xl:rounded-[40px] p-[10px] sm:p-[22px] lg:p-[25px] xl:p-5 pr-[70px] flex space-x-[16px] sm:space-x-[20px] lg:space-x-[100px] xl:space-x-[24px] 2xl:space-x-[58px] items-center">
      <img
        className="rounded-[20px] sm:rounded-[18px] xl:rounded-[40px] w-[62px] sm:w-[80px] lg:w-[150px] xl:w-[160px] 2xl:w-auto h-auto"
        src={image}
        alt=""
      />
      <p className="font-poppins text-white text-[12px] sm:text-[15px] lg:text-[22px] xl:text-[30px] 2xl:text-[32px] font-semibold leading-[123%] max-w-[50px] lg:max-w-[100px] xl:max-w-[140px]">
        {blogName}
      </p>
    </div>
  );
};

SingleBlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default SingleBlogCard;
