import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageApplications = () => {
    const axiosSecure = useAxiosSecure();
    const { data, refetch } = useQuery({
        queryKey: ['applications'],
        queryFn: async () => {
            const res = await axiosSecure.get('/applications');
            return res.data;
        }
    });

    const handleFeedback = async (applicationId, feedback) => {
        try {
            const response = await axiosSecure.patch(`/applications/${applicationId}/status`, { feedback });
            if (response.data.message === 'Application updated successfully') {
                Swal.fire("Feedback submitted successfully");
                refetch(); 
            }
        } catch (error) {
            Swal.fire("Error", "Failed to submit feedback", "error");
        }
    };

    const handleCancelApplication = async (applicationId) => {
        try {
            const response = await axiosSecure.patch(`/applications/${applicationId}/cancel`);
            if (response.data.message === 'Application canceled successfully') {
                Swal.fire("Application canceled successfully");
                refetch(); 
            }
        } catch (error) {
            Swal.fire("Error", "Failed to cancel application", "error");
        }
    };

    const handleShowDetails = (application) => {
        Swal.fire({
            title: 'Application Details',
            html: `
                <strong>University Name:</strong> ${application.universityName} <br>
                <strong>Degree:</strong> ${application.applyingDegree} <br>
                <strong>Scholarship Category:</strong> ${application.scholarshipCategory} <br>
                <strong>Subject Category:</strong> ${application.subjectCategory} <br>
                <strong>Status:</strong> ${application.status} <br>
            `
        });
    };

    return (
        <div>
            <h2 className="text-3xl text-center font-bold mb-4">Manage Applications</h2>
            <table className="table">
                <thead className="bg-gray-700 text-white">
                    <tr>
                        <th>User Name</th>
                        <th>University</th>
                        <th>Degree</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((application) => (
                        <tr key={application._id}>
                            <td>{application.userName}</td>
                            <td>{application.universityName}</td>
                            <td>{application.applyingDegree}</td>
                            <td>{application.status}</td>
                            <td>
                                <button onClick={() => handleShowDetails(application)} className="bg-green-500 px-1 rounded ml-1">Details</button>
                                <button onClick={() => handleFeedback(application._id, 'Feedback here')} className="bg-orange-400 px-1 rounded my-1 ml-1">Feedback</button>
                                <button onClick={() => handleCancelApplication(application._id)} className="bg-red-500 px-1 rounded ml-1">Cancel</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageApplications;
