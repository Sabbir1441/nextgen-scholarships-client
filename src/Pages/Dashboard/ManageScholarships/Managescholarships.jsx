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
                console.log(selectedScholarship._id);
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
                console.error('Error updating scholarship:', error);
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
    }


    return (
        <div className="overflow-x-auto mx-auto">
            <div className='text-center mb-3 text-2xl font-bold'>
                All Scholarships : {scholarships.length}
            </div>
            <table className="text-left">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="py-2 px-4">#</th>
                        <th className="py-2 px-4">S.Name</th>
                        <th className="py-2 px-4">U.Name</th>
                        <th className="py-2 px-4">S.Category</th>
                        <th className="py-2 px-4">Degree</th>
                        <th className="py-2 px-4">Fees</th>
                        <th className="py-2 px-4">Edit</th>
                        <th className="py-2 px-4">Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {scholarships.map((scholarship, index) => (
                        <tr key={scholarship._id} className="border-b border-gray-200">
                            <td className="py-2 px-4">{index + 1}</td>
                            <td className="py-2 px-4">{scholarship.scholarshipName}</td>
                            <td className="py-2 px-4">{scholarship.universityName}</td>
                            <td className="py-2 px-4">{scholarship.subjectCategory}</td>
                            <td className="py-2 px-4">{scholarship.degree}</td>
                            <td className="py-2 px-4"> $ {scholarship.tuitionFees}</td>
                            <td className="py-2 px-4">

                                <button onClick={() => openModal(scholarship)}
                                    className="btn btn-ghost btn-md bg-gray-600">

                                    <FaEdit className="text-white 
                                        "></FaEdit>
                                </button>

                            </td>
                            <td className="py-2 px-4">
                                <button
                                    className="btn btn-sm bg-red-500 text-white rounded-lg hover:bg-red-700"
                                    onClick={() => handleDeleteScholarship(scholarship)}
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
                        <label className="block text-sm font-bold mb-1">Name</label>
                        <input
                            type="text"
                            name="scholarshipName"
                            value={formData.scholarshipName}
                            onChange={handleInputChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-1">Application Fees</label>
                        <input
                            type="number"
                            name="applicationFees"
                            value={formData.applicationFees}
                            onChange={handleInputChange}
                            
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-1">Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleInputChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-1">Subject Category</label>
                        <input
                            type="text"
                            name="subjectCategory"
                            value={formData.subjectCategory}
                            readOnly
                            onChange={handleInputChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-1">Degree</label>
                        <input
                            type="text"
                            name="degree"
                            value={formData.degree}
                            readOnly
                            onChange={handleInputChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-1">Tuition Fees</label>
                        <input
                            type="number"
                            name="tuitionFees"
                            value={formData.tuitionFees}
                            onChange={handleInputChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                </form>
            </Modal>

        </div>
    );
};

export default Managescholarships;