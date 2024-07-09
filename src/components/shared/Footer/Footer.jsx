import "./Footer.css";
import footerLogo from "../../../assets/footer/footerLogo.svg";
import moment from "moment";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#013131]">
      <div className="container mx-auto pt-[33px] md:pt-[120px] pb-[10px] md:pb-[110px] px-5">
        {/* footer top */}
        <div className="mb-[50px] md:mb-[117px]">
          <p className="text-white font-poppins text-sm md:text-4xl font-bold leading-[142%] max-w-[150px] md:max-w-[400px] text-center mx-auto">
            Find the Best Doctor Near You
          </p>
          {/* buttons div */}
          <div className="mt-[26px] md:mt-[60px] flex items-center justify-center gap-6">
            <button className="text-white font-poppins text-[6px] md:text-sm font-semibold leading-[107%] uppercase py-[8px] md:py-[20px] px-[10px] md:px-[74px] border-white border-[2px] rounded-[5px] md:rounded-[5px]">
              sign up
            </button>
            <button className="text-[#023A3A] bg-white font-poppins font-semibold text-[6px] md:text-sm leading-[107%] rounded-[5px] md:rounded-[5px] uppercase py-[8px] md:py-[20px] px-[10px] md:px-[74px]">
              sign in
            </button>
          </div>
        </div>
        {/* footer middle */}
        <div
          className="flex items-start flex-wrap justify-between gap-[30px] mb-[10px] md:mb-[113px]"
          id="footerMiddle"
        >
          <div>
            <p className="uppercase text-[15px] font-bold font-sfPro text-white mb-[15px] md:mb-5">
              navigation
            </p>
            <ul className="text-[15px]">
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
            <p className="uppercase text-[15px] font-bold font-sfPro text-white mb-[15px] md:mb-5">
              What We Do
            </p>
            <ul className="text-[15px]">
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
            <p className="uppercase text-[15px] font-bold font-sfPro text-white mb-[15px] md:mb-5">
              LEGAL
            </p>
            <ul className="text-[15px]">
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
            <p className="uppercase text-[15px] font-bold font-sfPro text-white mb-[15px] md:mb-5">
              TALK TO US
            </p>
            <ul className="text-[15px]">
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
        <div>
          <div className="w-full h-[2px] bg-[#1A4646] mb-[33px]"></div>
          <div className="flex items-center justify-between">
            <img className="w-[61px] md:w-auto" src={footerLogo} alt="" />
            {/* copyright */}
            <p className="text-white font-poppins text-[7px] md:text-sm leading-[100%]">
              &#169; {moment().format("YYYY")} Seba. All Rights Reserved.
            </p>
            {/* social icons */}
            <div className="flex items-center gap-[17px] text-white">
              <div className="border-[1px] border-[#406565] p-1 md:p-[16px] rounded-[18px]">
                <FaFacebookF className="text-[8px] md:text-base"></FaFacebookF>
              </div>
              <div className="border-[1px] border-[#406565] p-1 md:p-[16px] rounded-[18px]">
                <FaLinkedinIn className="text-[8px] md:text-base"></FaLinkedinIn>
              </div>
              <div className="border-[1px] border-[#406565] p-1 md:p-[16px] rounded-[18px]">
                <FaTwitter className="text-[8px] md:text-base"></FaTwitter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
