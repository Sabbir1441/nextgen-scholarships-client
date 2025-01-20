import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useScholarship from '../../../Hooks/useScholarship';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Managescholarships = () => {

    const [ scholarships , refetch] = useScholarship();
    const axiosSecure = useAxiosSecure();
    return (
        <div className="overflow-x-auto mx-auto">
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
                                <Link to={`/dashboard/updateItem/${scholarship._id}`}>
                                    <button
                                        className="btn btn-ghost btn-md bg-gray-600">
                                        <FaEdit className="text-white 
                                        "></FaEdit>
                                    </button>
                                </Link>
                            </td>
                            <td className="py-2 px-4">
                                <button
                                    className="btn btn-sm bg-red-500 text-white rounded-lg hover:bg-red-700"
                                    // onClick={() => handleDeleteScholarship(user)}
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

export default Managescholarships;