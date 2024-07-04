import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-[#013131]">
      <div className="w-[1589px] mx-auto pt-[120px] pb-[110px]">
        {/* footer top */}
        <div className="mb-[117px]">
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
        <div
          className="flex items-start justify-between mb-[113px]"
          id="footerMiddle"
        >
          <div>
            <p className="uppercase text-[15px] font-bold font-sfPro text-white mb-5">
              navigation
            </p>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us </a>
              </li>
              <li>
                <a href="">What We Do </a>
              </li>
              <li>
                <a href="">To The Power of 10</a>
              </li>
              <li>
                <a href="">Donate</a>
              </li>
            </ul>
          </div>
          {/* what we do */}
          <div>
            <p className="uppercase text-[15px] font-bold font-sfPro text-white mb-5">
              What We Do
            </p>
            <ul>
              <li>
                <a href="">Encouraging Testing</a>
              </li>
              <li>
                <a href="">Strengthening Advocacy </a>
              </li>
              <li>
                <a href="">Sharing Information </a>
              </li>
              <li>
                <a href="">Building Leadership</a>
              </li>
              <li>
                <a href="">Engaging With Global Fund</a>
              </li>
              <li>
                <a href="">Shining a Light</a>
              </li>
            </ul>
          </div>
          {/* legal */}
          <div>
            <p className="uppercase text-[15px] font-bold font-sfPro text-white mb-5">
              LEGAL
            </p>
            <ul>
              <li>
                <a href="">General Info</a>
              </li>
              <li>
                <a href="">Privacy Policy </a>
              </li>
              <li>
                <a href="">Terms of Service </a>
              </li>
            </ul>
          </div>
          {/* talk to us */}
          <div>
            <p className="uppercase text-[15px] font-bold font-sfPro text-white mb-5">
              TALK TO US
            </p>
            <ul>
              <li>
                <a href="">support@ercom.com</a>
              </li>
              <li>
                <a href="">+66 2399 1145 </a>
              </li>
              <li>
                <a href="">Contact Us </a>
              </li>
              <li>
                <a href="">To The Power of Facebook</a>
              </li>
              <li>
                <a href="">Linkedin</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        {/* footer bottom */}
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
