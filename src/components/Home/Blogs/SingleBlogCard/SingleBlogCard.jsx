import PropTypes from "prop-types";

const SingleBlogCard = ({ blog }) => {
  const { image, blogName } = blog;

  return (
    <div className="bg-[#747474a1] rounded-[20px] md:rounded-[40px] p-[10px] md:p-5 pr-[70px] flex space-x-[16px] md:space-x-[58px] items-center">
      <img
        className="rounded-[20px] md:rounded-[40px] w-[62px] md:w-auto h-[54px] md:h-auto"
        src={image}
        alt=""
      />
      <p className="font-poppins text-white text-[12px] md:text-[32px] font-semibold leading-[123%] max-w-[140px]">
        {blogName}
      </p>
    </div>
  );
};

SingleBlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default SingleBlogCard;
