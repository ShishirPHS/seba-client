import {
  Link,
  // NavLink
} from "react-router-dom";
import navLogo from "../../../assets/navbar/nav-logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* HEADER */}
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
        <nav
          className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 mx-auto"
          aria-label="Global"
        >
          <div className="md:col-span-3">
            {/* Logo */}
            <Link
              className="flex-none inline-block font-semibold focus:outline-none focus:opacity-80 w-[84px] lg:w-[148px]"
              to="/"
              aria-label="Preline"
            >
              <img src={navLogo} alt="logo of navbar" />
            </Link>
            {/* End Logo */}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
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
          </div>

          {/* Collapse */}
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
          >
            {/* Button Group */}
            <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
              <button
                type="button"
                className="inline-flex items-center gap-x-2 border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white text-white font-nunito text-xl font-bold bg-[#086060] rounded-[21px]  py-[18px] px-[40px]"
              >
                Login
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-x-2 border border-transparent hover:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-500 text-white font-nunito text-xl font-bold px-[40px] py-[18px] bg-[#3BA4A7] rounded-[21px]"
              >
                SignUp
              </button>
            </div>
            {/* End Button Group */}
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
              <div>
                <a
                  className="relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-white"
                  href="#"
                  aria-current="page"
                >
                  Work
                </a>
              </div>
              <div>
                <a
                  className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                  href="#"
                >
                  Services
                </a>
              </div>
              <div>
                <a
                  className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                  href="#"
                >
                  About
                </a>
              </div>
              <div>
                <a
                  className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                  href="#"
                >
                  Careers
                </a>
              </div>
              <div>
                <a
                  className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300"
                  href="#"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </header>
    </>
  );
};

export default Navbar;

{
  /* <header classNameName="flex flex-wrap sm:justify-start sm:flex-nowrap w-[1589px] mx-auto bg-white py-[22px]">
  <nav
    classNameName="w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between"
    aria-label="Global"
  >
    <Link
      to="/"
      classNameName="sm:order-1 flex-none text-xl font-semibold dark:text-white"
    >
      <img src={navLogo} alt="logo of navbar" />
    </Link>
    <div classNameName="sm:order-3 flex items-center gap-x-2">
      <button
        type="button"
        classNameName="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
        data-hs-collapse="#navbar-alignment"
        aria-controls="navbar-alignment"
        aria-label="Toggle navigation"
      >
        <svg
          classNameName="hs-collapse-open:hidden flex-shrink-0 size-4"
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
          classNameName="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
      </button>*/
}
{
  /* button div */
}
//       <div classNameName="flex items-center gap-[17px]">
//         <Link to="/login">
//           <p classNameName="text-white font-nunito text-xl font-bold bg-[#086060] rounded-[21px]  py-[18px] px-[40px]">
//             Login
//           </p>
//         </Link>
//         <Link to="/signUp">
//           <button classNameName="text-white font-nunito text-xl font-bold px-[40px] py-[18px] bg-[#3BA4A7] rounded-[21px]">
//             SignUp
//           </button>
//         </Link>
//       </div>
//     </div>
//     <div
//       id="navbar-alignment"
//       classNameName="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
//     >
//       <div classNameName="flex flex-col gap-[60px] mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
//         <NavLink to="/doctors" classNameName="" aria-current="page">
//           Doctors
//         </NavLink>
//         <NavLink to="/consultOnline" classNameName="">
//           Consult Online
//         </NavLink>
//         <NavLink to="/hospitals" classNameName="">
//           Hospitals
//         </NavLink>
//         <NavLink to="/labTests" classNameName="">
//           Lab Tests
//         </NavLink>
//         <NavLink to="/surgeries" classNameName="">
//           Surgeries
//         </NavLink>
//         <NavLink to="/healthBlogs" classNameName="">
//           Health Blogs
//         </NavLink>
//       </div>
//     </div>
//   </nav>
// </header>;
