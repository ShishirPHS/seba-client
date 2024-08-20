import { Link, NavLink } from "react-router-dom";
import navLogo from "../../../assets/navbar/nav-logo.svg";
import "./Navbar.css";
import userDefault from "../../../assets/navbar/user-default.svg";

const Navbar = () => {
  return (
    <>
      {/* HEADER */}
      <header className="relative container mx-auto flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-[10px] lg:py-[20px] xl:py-6 2xl:py-7">
        <nav
          id="navbar"
          className="relative w-full flex justify-between flex-wrap basis-full items-center px-4 md:px-6 mx-auto"
          aria-label="Global"
        >
          <div className="lg:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4 threeLine"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_141_150)">
                  <path
                    d="M26 3.25002C26 3.84585 25.5125 4.33335 24.9167 4.33335H1.08333C0.4875 4.33335 0 3.84585 0 3.25002C0 2.65419 0.4875 2.16669 1.08333 2.16669H24.9167C25.5125 2.16669 26 2.65419 26 3.25002ZM7.58333 21.6667H1.08333C0.4875 21.6667 0 22.1542 0 22.75C0 23.3459 0.4875 23.8334 1.08333 23.8334H7.58333C8.17917 23.8334 8.66667 23.3459 8.66667 22.75C8.66667 22.1542 8.17917 21.6667 7.58333 21.6667ZM16.25 11.9167H1.08333C0.4875 11.9167 0 12.4042 0 13C0 13.5959 0.4875 14.0834 1.08333 14.0834H16.25C16.8458 14.0834 17.3333 13.5959 17.3333 13C17.3333 12.4042 16.8458 11.9167 16.25 11.9167Z"
                    fill="#086060"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_141_150">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4 text-[#086060]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          {/* Logo */}
          <div className="">
            <Link
              className="flex-none inline-block font-semibold focus:outline-none focus:opacity-80 w-[84px] lg:w-[100px] xl:w-[130px] 2xl:w-[148px]"
              to="/"
              aria-label="Preline"
            >
              <img src={navLogo} alt="logo of navbar" />
            </Link>
          </div>
          {/* End Logo */}

          {/* user default icon */}
          <div>
            <img className="lg:hidden" src={userDefault} alt="" />
          </div>

          {/* Collapse */}
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:flex justify-center lg:w-auto lg:basis-auto lg:order-2"
          >
            {/* menu items */}
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-y-[10px] lg:gap-y-0 gap-x-0 lg:gap-x-[32px] xl:gap-x-[35px] 2xl:gap-x-[60px] mt-5 lg:mt-0 font-nunito font-bold">
              <NavLink
                className="relative inline-block text-[#505050] text-lg lg:text-sm xl:text-lg 2xl:text-xl hover:text-secondary"
                to="/doctors"
                aria-current="page"
              >
                Doctors
              </NavLink>
              <NavLink
                className="inline-block text-[#505050] text-lg lg:text-sm xl:text-lg 2xl:text-xl hover:text-secondary"
                to="/consultOnline"
              >
                Consult Online
              </NavLink>
              <NavLink
                className="inline-block text-[#505050] text-lg lg:text-sm xl:text-lg 2xl:text-xl hover:text-secondary"
                to="/hospitals"
              >
                Hospitals
              </NavLink>
              <NavLink
                className="inline-block text-[#505050] text-lg lg:text-sm xl:text-lg 2xl:text-xl hover:text-secondary"
                to="/labTests"
              >
                Lab Tests
              </NavLink>
              <NavLink
                className="inline-block text-[#505050] text-lg lg:text-sm xl:text-lg 2xl:text-xl hover:text-secondary"
                to="/surgeries"
              >
                Surgeries
              </NavLink>
              <NavLink
                className="inline-block text-[#505050] text-lg lg:text-sm xl:text-lg 2xl:text-xl hover:text-secondary"
                to="/healthBlogs"
              >
                Health Blogs
              </NavLink>
            </div>

            {/* Button Group for small screens (login and signUp button)*/}
            <div className="flex items-center gap-x-6 ms-auto lg:hidden mt-[20px]">
              <button
                type="button"
                className="inline-flex items-center gap-x-2 border border-gray-200 disabled:opacity-50 disabled:pointer-events-none text-white font-nunito text-base font-bold bg-primary rounded-[14px] py-[8px] px-[35px]"
              >
                Login
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-x-2 border border-transparent transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none text-white font-nunito text-base font-bold px-[35px] py-[8px] bg-secondary rounded-[14px]"
              >
                SignUp
              </button>
            </div>
            {/* End Button Group */}
          </div>
          {/* End Collapse */}

          {/* Button Group for large screens (login and signUp button) */}
          <div className="hidden lg:flex items-center gap-x-[17px] lg:gap-x-[8px] xl:gap-x-[10px] 2xl:gap-x-[17px] ms-auto py-1 md:order-3">
            <button
              type="button"
              className="inline-flex items-center border border-gray-200 disabled:opacity-50 disabled:pointer-events-none text-white font-nunito text-xl lg:text-sm xl:text-xl font-bold bg-primary rounded-[21px] lg:rounded-[12px] xl:rounded-[18px] 2xl:rounded-[21px] py-[18px] lg:py-[10px] xl:py-[15px] 2xl:py-[18px] px-[40px] lg:px-[28px] xl:px-[40px]"
            >
              Login
            </button>
            <button
              type="button"
              className="inline-flex items-center border border-transparent transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none text-white font-nunito text-xl lg:text-sm xl:text-xl font-bold px-[40px] lg:px-[28px] xl:px-[40px] py-[18px] lg:py-[10px] xl:py-[15px] 2xl:py-[18px] bg-secondary rounded-[21px] lg:rounded-[12px] xl:rounded-[18px] 2xl:rounded-[21px]"
            >
              SignUp
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
