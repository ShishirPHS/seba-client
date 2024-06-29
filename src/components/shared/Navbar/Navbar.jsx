import { NavLink } from 'react-router-dom';
import navLogo from '../../../assets/navbar/nav-logo.svg'
import "./Navbar.css"

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to='/doctors'>Doctors</NavLink></li>
        <li><NavLink to='/consult'>Consult Online</NavLink></li>
        <li><NavLink to='/hospitals'>Hospitals</NavLink></li>
        <li><NavLink to='/labTests'>Lab Tests</NavLink></li>
        <li><NavLink to='/Surgeries'>Surgeries</NavLink></li>
        <li><NavLink to='/healthBlog'>Health  Blogs</NavLink></li>
    </>

    return (
        <div className="w-[1589px] mx-auto navbar flex justify-between">
            {/* nav left */}
            <div className=" ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                {/* navbar logo */}
                <div>
                    <img src={navLogo} alt="logo of navbar" />
                </div>
            </div>
            {/* nav middle */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            {/* nav right */}
            <div className="">
                <button className='loginBtn'>Login</button>
                <button className='singUpBtn'>SignUp</button>
            </div>
        </div>
    );
};

export default Navbar;