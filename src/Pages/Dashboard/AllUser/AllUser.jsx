import React, { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaTrashAlt, FaUserTag, FaUserAlt } from 'react-icons/fa';

const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const [role, setRole] = useState('');

    const handleRoleChange = (user, newRole) => {
        axiosSecure.patch(`/users/role/${user._id}`, { role: newRole })
            .then(res => {
                if (res.data.message) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} role updated to ${newRole}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Failed to update role",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };

    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    return (
        <div className="overflow-x-auto mx-auto">
            <div className='text-center mb-3 text-2xl font-bold'>
                All User : {users.length}
            </div>
            <table className="text-left">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="py-2 px-4">#</th>
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Role</th>
                        <th className="py-2 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id} className="border-b border-gray-200">
                            <td className="py-2 px-4">{index + 1}</td>
                            <td className="py-2 px-4">{user.name}</td>
                            <td className="py-2 px-4">{user.email}</td>
                            <td className="py-2 px-4">
                                {user.role === 'admin' ? (
                                    'Admin'
                                ) : user.role === 'moderator' ? (
                                    'Moderator'
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleRoleChange(user, 'admin')}
                                            className="btn btn-sm bg-blue-500 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                                            <FaUserTag /> Admin
                                        </button>
                                        <button
                                            onClick={() => handleRoleChange(user, 'moderator')}
                                            className="btn btn-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-700 flex items-center gap-2">
                                            <FaUserAlt /> Moderator
                                        </button>
                                    </div>
                                )}
                            </td>
                            <td className="py-2 px-4">
                                <button
                                    className="btn btn-sm bg-red-500 text-white rounded-lg hover:bg-red-700"
                                    onClick={() => handleDeleteUser(user)}
                                >
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;
