import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser, FaClipboardList, FaPlus, FaTasks, FaUsers, FaComments } from "react-icons/fa";

const Dashboard = () => {
    const role = "user"; // Change this to "moderator" or "user" for testing purposes

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-72 bg-gray-800 text-white">
                <div className="py-4 text-center text-2xl font-bold bg-gray-900">
                    Dashboard
                </div>
                <ul className="menu p-4">

                    {role === "user" && (
                        <>
                            <li>
                                <NavLink to="/dashboard/profile" className="flex items-center gap-2">
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
                    {role === "moderator" && (
                        <>
                            <li>
                                <NavLink to="/dashboard/moderator-profile" className="flex items-center gap-2">
                                    <FaUser /> Moderator Profile
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
                                    to="/dashboard/all-reviews"
                                    className="flex items-center gap-2"
                                >
                                    <FaComments /> All Reviews
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/all-applied-scholarships"
                                    className="flex items-center gap-2"
                                >
                                    <FaClipboardList /> All Applied Scholarships
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/add-scholarship"
                                    className="flex items-center gap-2"
                                >
                                    <FaPlus /> Add Scholarship
                                </NavLink>
                            </li>
                        </>
                    )}
                    {role === "admin" && (
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
                                    to="/dashboard/manage-users"
                                    className="flex items-center gap-2"
                                >
                                    <FaUsers /> Manage Users
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
