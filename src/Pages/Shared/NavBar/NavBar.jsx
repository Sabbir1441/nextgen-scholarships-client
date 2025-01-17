import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/Logo.jpg';


const Navbar = () => {



    return (
        <div className=" navbar bg-[#0A92B9] text-neutral-content shadow-md sticky top-0 z-50">
            <div className="navbar-start">
                {/* Dropdown for smaller screens */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-lg w-52"
                    >
                        <li>
                            <NavLink>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                                All Scholarship
                            </NavLink>
                        </li>

                    </ul>
                </div>
                {/* Website Name/Logo */}
                <div className="flex items-center gap-4">
                    <div>
                        <img className="w-[50px] rounded-lg" src={logo} alt="" />
                    </div>
                    <div>
                        <Link to="/" className="text-2xl font-bold tracking-wide">
                            NextGen Scholarships
                        </Link>
                    </div>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                {/* Navigation Links */}
                <ul className="menu menu-horizontal space-x-4 font-medium">
                    <li>
                        <NavLink>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            All Scholarship
                        </NavLink>
                    </li>

                </ul>
            </div>



            <div className="navbar-end">
                <button className="btn btn-neutral">login</button>
            </div>
        </div>
    );
};

export default Navbar;