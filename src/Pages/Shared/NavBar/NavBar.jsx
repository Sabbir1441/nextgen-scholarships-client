


import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/Logo.jpg';
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { });
    };

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const menuItems = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-slate-700 text-white rounded-md px-3 py-1"
                            : "hover:bg-slate-600 text-white rounded-md px-3 py-1"
                    }
                    onClick={() => setIsMenuOpen(false)}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/all-scholarship"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-slate-700 text-white rounded-md px-3 py-1"
                            : "hover:bg-slate-600 text-white rounded-md px-3 py-1"
                    }
                    onClick={() => setIsMenuOpen(false)}
                >
                    All Scholarship
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-slate-700 text-white rounded-md px-3 py-1"
                            : "hover:bg-slate-600 text-white rounded-md px-3 py-1"
                    }
                    onClick={() => setIsMenuOpen(false)}
                >
                    Dashboard
                </NavLink>
            </li>
        </>
    );

    return (
        <nav className="bg-[#0A92B9] text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg" />
                            <span className="ml-2 text-2xl font-bold hover:text-gray-200 hidden sm:block">
                                NextGen Scholarships
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex space-x-6 font-medium">{menuItems}</ul>

                    {/* User Section */}
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <>
                                {/* Logout button always visible on mobile */}
                                <button
                                    onClick={handleLogOut}
                                    className="bg-white text-[#0A92B9] px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
                                    title="Log Out"
                                >
                                    Log Out
                                </button>

                                {/* User info only on lg and above */}
                                <div className="hidden lg:flex items-center space-x-3">
                                    <span className="border px-3 py-1 rounded-lg truncate max-w-xs text-black">
                                        {user?.displayName}
                                    </span>
                                    <img
                                        src={user?.photoURL}
                                        alt={user?.displayName}
                                        className="w-8 h-8 rounded-full object-cover border border-gray-300"
                                        title={user?.displayName}
                                    />
                                </div>
                            </>
                        ) : (
                            <Link
                                to="/auth/login"
                                className="bg-white text-[#0A92B9] px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
                            >
                                Login
                            </Link>
                        )}

                        {/* Mobile menu button */}
                        <button
                            className="lg:hidden p-2 rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-[#0A92B9] border-t border-blue-800">
                    <ul className="flex flex-col space-y-2 p-4 font-medium">{menuItems}</ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
