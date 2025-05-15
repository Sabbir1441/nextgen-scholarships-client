

import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaBook, FaEdit, FaUser } from "react-icons/fa";
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const COLORS = ['#0A92B9', '#C18440', '#087a9c'];

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats');
      return res.data;
    }
  });

  const chartData = [
    { name: 'Scholarships', value: stats.scholarship || 0 },
    { name: 'Users', value: stats.users || 0 },
    { name: 'Applications', value: stats.applications || 0 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl mb-8 font-semibold">
        Welcome Back <span className="font-bold">{user.displayName}</span>
      </h2>

      <div className="stats shadow mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stat place-items-center bg-white rounded-lg p-6 shadow">
          <div className="stat-title text-xl mb-3 font-bold flex items-center gap-2 justify-center">
            <FaBook className="text-2xl text-[#0A92B9]" /> Scholarships
          </div>
          <div className="stat-value text-4xl font-extrabold">{stats.scholarship || 0}</div>
        </div>

        <div className="stat place-items-center bg-white rounded-lg p-6 shadow">
          <div className="stat-title text-xl mb-3 font-bold flex items-center gap-2 justify-center">
            <FaUser className="text-2xl text-[#C18440]" /> Users
          </div>
          <div className="stat-value text-4xl font-extrabold">{stats.users || 0}</div>
        </div>

        <div className="stat place-items-center bg-white rounded-lg p-6 shadow">
          <div className="stat-title text-xl mb-3 font-bold flex items-center gap-2 justify-center">
            <FaEdit className="text-2xl text-[#087a9c]" /> Applications
          </div>
          <div className="stat-value text-4xl font-extrabold">{stats.applications || 0}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-[#0A92B9]">
            Overview (Bar Chart)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#0A92B9" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-[#C18440]">
            Distribution (Pie Chart)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
