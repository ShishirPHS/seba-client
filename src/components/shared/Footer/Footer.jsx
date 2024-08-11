import "./Footer.css";
import footerLogo from "../../../assets/footer/footerLogo.svg";
import moment from "moment";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#013131]">
      <div className="container mx-auto pt-[33px] lg:pt-[90px] xl:pt-[120px] pb-[10px] sm:pb-[30px] lg:pb-[50px] xl:pb-[60px] 2xl:pb-[90px] px-5">
        {/* footer top */}
        <div className="mb-[50px] lg:mb-[100px] xl:mb-[117px]">
          <p className="text-white font-poppins text-sm sm:text-base md:text-2xl lg:text-[34px] xl:text-4xl font-bold leading-[142%] max-w-[150px] sm:max-w-[170px] md:max-w-[270px] lg:max-w-[400px] text-center mx-auto">
            Find the Best Doctor Near You
          </p>
          {/* buttons div */}
          <div className="mt-[26px] md:mt-[60px] flex items-center justify-center gap-[6px] md:gap-6">
            <button className="text-white font-poppins text-[6px] md:text-sm font-semibold leading-[107%] uppercase py-[8px] md:py-[12px] lg:py-[20px] px-[20px] md:px-[44px] lg:px-[74px] border-white border-[2px] rounded-[5px] md:rounded-[5px]">
              sign up
            </button>
            <button className="text-[#023A3A] bg-white font-poppins font-semibold text-[6px] md:text-sm leading-[107%] rounded-[5px] md:rounded-[5px] uppercase py-[10px] md:py-[12px] lg:py-[20px] px-[20px] md:px-[44px] lg:px-[74px]">
              sign in
            </button>
          </div>
        </div>
        {/* footer middle */}
        <div
          className="grid grid-cols-2 sm:flex sm:items-start sm:justify-between gap-x-[24px] gap-y-[30px] mb-[10px] md:mb-[60px] 2xl:mb-[113px]"
          id="footerMiddle"
        >
          <div>
            <p className="uppercase text-[13px] md:text-[15px] font-bold font-sfPro text-white mb-[8px] md:mb-5">
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
            <p className="uppercase text-[13x] md:text-[15px] text-right sm:text-left font-bold font-sfPro text-white mb-[8px] md:mb-5">
              What We Do
            </p>
            <ul className="flex flex-col items-end sm:items-start">
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
            <p className="uppercase text-[13px] md:text-[15px] font-bold font-sfPro text-white mb-[8px] md:mb-5">
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
            <p className="uppercase text-[13px] md:text-[15px] text-right sm:text-left font-bold font-sfPro text-white mb-[8px] md:mb-5">
              TALK TO US
            </p>
            <ul className="flex flex-col items-end sm:items-start">
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
          <div className="w-full h-[1px] lg:h-[2px] bg-[#1A4646] mb-[10px] md:mb-[20px] xl:mb-[33px]"></div>
          <div className="flex items-center justify-between">
            <img
              className="w-[61px] lg:w-[147px] xl:w-[175px] 2xl:w-auto"
              src={footerLogo}
              alt=""
            />
            {/* copyright */}
            <p className="text-white font-poppins text-[7px] md:text-sm leading-[100%]">
              &#169; {moment().format("YYYY")} Seba. All Rights Reserved.
            </p>
            {/* social icons */}
            <div className="flex items-center gap-[17px] text-white">
              <div className="border-[1px] border-[#406565] p-1 md:p-[10px] lg:p-4 rounded-[6px] md:rounded-xl">
                <FaFacebookF className="text-[8px] md:text-base"></FaFacebookF>
              </div>
              <div className="border-[1px] border-[#406565] p-1 md:p-[10px] lg:p-4 rounded-[6px] md:rounded-xl">
                <FaLinkedinIn className="text-[8px] md:text-base"></FaLinkedinIn>
              </div>
              <div className="border-[1px] border-[#406565] p-1 md:p-[10px] lg:p-4 rounded-[6px] md:rounded-xl">
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
