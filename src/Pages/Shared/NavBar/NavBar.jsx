import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/Logo.jpg';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    return (
        <div className=" navbar bg-[#0A92B9] text-neutral-content shadow-md sticky top-0 z-50 ">
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
                            <NavLink
                            to='/'
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to='/all-scholarship'
                            >
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
                        <Link to="/" className="text-2xl hover:text-white font-bold tracking-wide">
                            NextGen Scholarships
                        </Link>
                    </div>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                {/* Navigation Links */}
                <ul className="menu menu-horizontal space-x-4 font-medium">
                    <li>
                        <NavLink
                        to='/'
                        className='bg-slate-500  text-white hover:bg-slate-600'
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/all-scholarship'
                        className='bg-slate-500  text-white hover:bg-slate-600'
                        >
                            All Scholarship
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/apply'
                        className='bg-slate-500  text-white hover:bg-slate-600'
                        >
                            Apply
                        </NavLink>
                    </li>

                </ul>
            </div>



            <div className="navbar-end">
            <div className="flex justify-center items-center gap-4">
                        {
                            user ? <>
                                <span>{user?.displayName}</span>
                                <img className="w-[30px] h-[30px] rounded-2xl" src={user?.photoURL} alt="" />
                                <button onClick={handleLogOut} className="btn btn-warning">Log Out</button>
                            </> : <>
                                <button className="btn btn-neutral font-bold"><Link to="/auth/login">Login</Link></button>
                            </>
                        }
                    </div>
            </div>
        </div>
    );
};

export default Navbar;