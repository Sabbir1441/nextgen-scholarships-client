import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser, FaClipboardList, FaPlus, FaTasks, FaUsers, FaComments } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();


    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-72 bg-gray-800 text-white">
                <div className="py-4 text-center text-2xl font-bold bg-gray-900">
                    Dashboard
                </div>
                <ul className="menu p-4">

                    {!isAdmin && (
                        <>
                            <li>
                                <NavLink to="/dashboard/my-profile" className="flex items-center gap-2">
                                    <FaUser /> My Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/my-applications"
                                    className="flex items-center gap-2"
                                >
                                    <FaClipboardList /> My Applications
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/my-reviews"
                                    className="flex items-center gap-2"
                                >
                                    <FaComments /> My Reviews
                                </NavLink>
                            </li>
                        </>
                    )}
                    {isAdmin && (
                        <>
                            <li>
                                <NavLink
                                    to="/dashboard/admin-profile"
                                    className="flex items-center gap-2"
                                >
                                    <FaUser /> Admin Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/addScholarship"
                                    className="flex items-center gap-2"
                                >
                                    <FaPlus /> Add Scholarship
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/manage-scholarships"
                                    className="flex items-center gap-2"
                                >
                                    <FaTasks /> Manage Scholarships
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/manage-applications"
                                    className="flex items-center gap-2"
                                >
                                    <FaClipboardList /> Manage Applications
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/allusers"
                                    className="flex items-center gap-2"
                                >
                                    <FaUsers /> All Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/manage-reviews"
                                    className="flex items-center gap-2"
                                >
                                    <FaComments /> Manage Reviews
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;