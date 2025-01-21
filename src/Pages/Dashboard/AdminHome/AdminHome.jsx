import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaBook, FaEdit, FaUser } from "react-icons/fa";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const AdminHome = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })



    return (
        <div>
            <div>
                <h2 className="text-3xl mb-5">Welcome Back <span className="font-bold">{user.displayName}</span></h2>
            </div>
            <div className="stats shadow ">
                <div className="stat place-items-center">
                    <div className="stat-title text-xl mb-2 font-bold">Scholarships</div>
                    <div className="stat-value"><span className="flex items-center gap-2"><FaBook className="text-md"></FaBook>{stats.scholarship}</span></div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-xl mb-2 font-bold">Users</div>
                    <div className="stat-value text-secondary"><span className="flex items-center gap-2"><FaUser className="text-md"></FaUser>{stats.users}</span></div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-xl mb-2 font-bold">Applications</div>
                    <div className="stat-value"><span className="flex items-center gap-2"><FaEdit className="text-md"></FaEdit>{stats.applications}</span></div>
                </div>
            </div>
            <LineChart width={300} height={100} data={stats}>
                <Line type="monotone" dataKey="" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </div>
    );
};

export default AdminHome;