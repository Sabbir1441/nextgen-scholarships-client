


import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import useScholarship from '../../../Hooks/useScholarship';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import Modal from './Modal/Modal';

const Managescholarships = ({ updateScholarship }) => {
    const [scholarships, refetch] = useScholarship();
    const axiosSecure = useAxiosSecure();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedScholarship, setSelectedScholarship] = useState(null);
    const [formData, setFormData] = useState({
        scholarshipName: '',
        applicationFees: '',
        deadline: '',
        subjectCategory: '',
        degree: '',
        tuitionFees: '',
    });

    const openModal = (scholarship) => {
        setSelectedScholarship(scholarship);
        setFormData({
            scholarshipName: scholarship.scholarshipName,
            applicationFees: scholarship.applicationFees,
            deadline: scholarship.deadline,
            subjectCategory: scholarship.subjectCategory,
            degree: scholarship.degree,
            tuitionFees: scholarship.tuitionFees,
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedScholarship(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async () => {
        if (selectedScholarship) {
            try {
                const response = await axiosSecure.patch(
                    `/scholarships/${selectedScholarship._id}`,
                    formData
                );
                if (response.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Scholarship updated successfully!',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    refetch();
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to update the scholarship!',
                });
            }
            closeModal();
        }
    };

    const handleDeleteScholarship = (scholarship) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/scholarships/${scholarship._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${scholarship.scholarshipName} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    };

    return (
        <div className="overflow-x-auto mx-auto max-w-full px-2 md:px-6">
            <div className='text-center mb-4 text-2xl font-bold'>
                All Scholarships: {scholarships.length}
            </div>
            <table className="min-w-full border-collapse border border-gray-200 text-left">
                <thead className="bg-gray-800 text-white text-sm md:text-base">
                    <tr>
                        <th className="py-3 px-2 md:px-4 border border-gray-600">#</th>
                        <th className="py-3 px-2 md:px-4 border border-gray-600">S.Name</th>
                        <th className="py-3 px-2 md:px-4 border border-gray-600 hidden sm:table-cell">U.Name</th>
                        <th className="py-3 px-2 md:px-4 border border-gray-600 hidden md:table-cell">S.Category</th>
                        <th className="py-3 px-2 md:px-4 border border-gray-600 hidden lg:table-cell">Degree</th>
                        <th className="py-3 px-2 md:px-4 border border-gray-600 hidden lg:table-cell">Fees</th>
                        <th className="py-3 px-2 md:px-4 border border-gray-600">Edit</th>
                        <th className="py-3 px-2 md:px-4 border border-gray-600">Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {scholarships.map((scholarship, index) => (
                        <tr key={scholarship._id} className="border-b border-gray-300 hover:bg-gray-50 transition-colors duration-200">
                            <td className="py-2 px-2 md:px-4 border border-gray-300">{index + 1}</td>
                            <td className="py-2 px-2 md:px-4 border border-gray-300">{scholarship.scholarshipName}</td>
                            <td className="py-2 px-2 md:px-4 border border-gray-300 hidden sm:table-cell">{scholarship.universityName}</td>
                            <td className="py-2 px-2 md:px-4 border border-gray-300 hidden md:table-cell">{scholarship.subjectCategory}</td>
                            <td className="py-2 px-2 md:px-4 border border-gray-300 hidden lg:table-cell">{scholarship.degree}</td>
                            <td className="py-2 px-2 md:px-4 border border-gray-300 hidden lg:table-cell">$ {scholarship.tuitionFees}</td>
                            <td className="py-2 px-2 md:px-4 border border-gray-300 text-center">
                                <button
                                    onClick={() => openModal(scholarship)}
                                    className="btn btn-ghost btn-md bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-md"
                                    title="Edit Scholarship"
                                >
                                    <FaEdit />
                                </button>
                            </td>
                            <td className="py-2 px-2 md:px-4 border border-gray-300 text-center">
                                <button
                                    className="btn btn-sm bg-red-500 text-white rounded-lg hover:bg-red-700 p-2"
                                    onClick={() => handleDeleteScholarship(scholarship)}
                                    title="Delete Scholarship"
                                >
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                closeModal={closeModal}
                title="Edit Scholarship"
                onSubmit={handleUpdate}
            >
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            name="scholarshipName"
                            value={formData.scholarshipName}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A92B9]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Application Fees</label>
                        <input
                            type="number"
                            name="applicationFees"
                            value={formData.applicationFees}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A92B9]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A92B9]"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Subject Category</label>
                        <input
                            type="text"
                            name="subjectCategory"
                            value={formData.subjectCategory}
                            readOnly
                            className="w-full border border-gray-300 rounded bg-gray-100 px-3 py-2 cursor-not-allowed"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Degree</label>
                        <input
                            type="text"
                            name="degree"
                            value={formData.degree}
                            readOnly
                            className="w-full border border-gray-300 rounded bg-gray-100 px-3 py-2 cursor-not-allowed"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Tuition Fees</label>
                        <input
                            type="number"
                            name="tuitionFees"
                            value={formData.tuitionFees}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A92B9]"
                        />
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Managescholarships;
