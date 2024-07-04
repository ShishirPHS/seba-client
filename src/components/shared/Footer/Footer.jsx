const Footer = () => {
  return (
    <div className="bg-[#013131]">
      <div className="w-[1589px] mx-auto pt-[120px] pb-[110px]">
        {/* footer top */}
        <div>
          <p className="text-white font-poppins text-4xl font-bold leading-[142%] max-w-[400px] text-center mx-auto">
            Find the Best Doctor Near You
          </p>
          {/* buttons div */}
          <div className="mt-[60px] flex items-center justify-center gap-6">
            <button className="text-white font-poppins text-sm font-semibold leading-[107%] uppercase py-[20px] px-[74px] border-white border-[2px] rounded-[5px]">
              sign up
            </button>
            <button className="text-[#023A3A] bg-white font-poppins font-semibold text-sm leading-[107%] rounded-[5px] uppercase py-[20px] px-[74px]">
              sign in
            </button>
          </div>
        </div>
        {/* footer middle */}
        <div></div>
        {/* footer bottom */}
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
