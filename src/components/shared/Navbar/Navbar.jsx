import { Link, NavLink } from "react-router-dom";
import navLogo from "../../../assets/navbar/nav-logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-[1589px] mx-auto bg-white py-[22px]">
      <nav
        className="w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
        aria-label="Global"
      >
        <Link
          to="/"
          className="sm:order-1 flex-none text-xl font-semibold dark:text-white"
        >
          <img src={navLogo} alt="logo of navbar" />
        </Link>
        <div className="sm:order-3 flex items-center gap-x-2">
          <button
            type="button"
            className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
            data-hs-collapse="#navbar-alignment"
            aria-controls="navbar-alignment"
            aria-label="Toggle navigation"
          >
            <svg
              className="hs-collapse-open:hidden flex-shrink-0 size-4"
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
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
          {/* button div */}
          <div className="flex items-center gap-[17px]">
            <Link to="/login">
              <p className="text-white font-nunito text-xl font-bold bg-[#086060] rounded-[21px]  py-[18px] px-[40px]">
                Login
              </p>
            </Link>
            <Link to="/signUp">
              <button className="text-white font-nunito text-xl font-bold px-[40px] py-[18px] bg-[#3BA4A7] rounded-[21px]">
                SignUp
              </button>
            </Link>
          </div>
        </div>
        <div
          id="navbar-alignment"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
        >
          <div className="flex flex-col gap-[60px] mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <NavLink to="/doctors" className="" aria-current="page">
              Doctors
            </NavLink>
            <NavLink to="/consultOnline" className="">
              Consult Online
            </NavLink>
            <NavLink to="/hospitals" className="">
              Hospitals
            </NavLink>
            <NavLink to="/labTests" className="">
              Lab Tests
            </NavLink>
            <NavLink to="/surgeries" className="">
              Surgeries
            </NavLink>
            <NavLink to="/healthBlogs" className="">
              Health Blogs
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

// const Navbar = () => {
// };

export default Navbar;
