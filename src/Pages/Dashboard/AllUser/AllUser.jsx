import React from 'react';
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
    },
  });

  const handleRoleChange = (user, newRole) => {
    axiosSecure
      .patch(`/users/role/${user._id}`, { role: newRole })
      .then((res) => {
        if (res.data.message) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} role updated to ${newRole}`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Failed to update role',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'User has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto mx-auto max-w-full px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6 text-2xl font-bold">
        All Users: <span className="text-[#0A92B9]">{users.length}</span>
      </div>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-[#0A92B9] text-white">
          <tr>
            <th className="py-3 px-4 border border-[#0A92B9]">#</th>
            <th className="py-3 px-4 border border-[#0A92B9]">Name</th>
            <th className="py-3 px-4 border border-[#0A92B9]">Email</th>
            <th className="py-3 px-4 border border-[#0A92B9]">Role</th>
            <th className="py-3 px-4 border border-[#0A92B9]">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user._id}
              className={`border border-gray-200 hover:bg-blue-50 transition duration-200 ${
                index % 2 === 0 ? 'bg-white' : 'bg-blue-50'
              }`}
            >
              <td className="py-2 px-4 border border-gray-200 text-center">{index + 1}</td>
              <td className="py-2 px-4 border border-gray-200">{user.name}</td>
              <td className="py-2 px-4 border border-gray-200">{user.email}</td>
              <td className="py-2 px-4 border border-gray-200">
                {user.role === 'admin' ? (
                  <span className="inline-flex items-center gap-2 bg-blue-600 px-3 py-1 rounded-full text-white font-semibold">
                    <FaUserTag /> Admin
                  </span>
                ) : user.role === 'moderator' ? (
                  <span className="inline-flex items-center gap-2 bg-yellow-500 px-3 py-1 rounded-full text-white font-semibold">
                    <FaUserAlt /> Moderator
                  </span>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <button
                      onClick={() => handleRoleChange(user, 'admin')}
                      className="btn btn-sm bg-blue-500 text-white rounded-lg hover:bg-blue-700 flex items-center gap-1 px-3 py-1 text-xs sm:text-sm"
                    >
                      <FaUserTag /> Admin
                    </button>
                    <button
                      onClick={() => handleRoleChange(user, 'moderator')}
                      className="btn btn-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-700 flex items-center gap-1 px-3 py-1 text-xs sm:text-sm"
                    >
                      <FaUserAlt /> Moderator
                    </button>
                  </div>
                )}
              </td>
              <td className="py-2 px-4 border border-gray-200 text-center">
                <button
                  className="btn btn-sm bg-red-500 text-white rounded-lg hover:bg-red-700 p-2 flex items-center justify-center mx-auto"
                  onClick={() => handleDeleteUser(user)}
                  aria-label={`Delete ${user.name}`}
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
