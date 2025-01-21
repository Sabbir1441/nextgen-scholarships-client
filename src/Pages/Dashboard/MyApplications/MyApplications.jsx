import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MyApplications = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [editingApplication, setEditingApplication] = useState(null);


    const { data: applications = [], refetch } = useQuery({
        queryKey: ['applications', user.email],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/applications/${user.email}`);
                return res.data;
            } catch (error) {
            }
        }
    });

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const updatedData = {
            universityName: e.target.universityName.value,
            address: {
                village: e.target.village.value,
                district: e.target.district.value,
                country: e.target.country.value,
            }
        };

        try {
            const res = await axiosSecure.patch(`/applications/${editingApplication._id}`, updatedData);
            if (res.data.modifiedCount > 0) {
                Swal.fire("Success", "Application updated successfully!", "success");
                refetch();
                setEditingApplication(null); 
            }
        } catch (error) {
            Swal.fire("Error", "Failed to update application.", "error");
        }
    };

    const handleCancel = (id) => {
        Swal.fire({
            title: 'Cancel Application',
            text: 'Are you sure you want to cancel this application?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, cancel it!',
            cancelButtonText: 'No, keep it',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axiosSecure.delete(`/applications/${id}`);
                    if (response.status === 200) {
                        Swal.fire('Cancelled!', 'Your application has been cancelled.', 'success');
                        refetch(); 
                    } else {
                        Swal.fire('Failed!', 'Could not cancel the application.', 'error');
                    }
                } catch (error) {
                    Swal.fire('Error!', 'Something went wrong while cancelling.', 'error');
                }
            }
        });
    };

    return (
        <div className="my-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">My Applications : {applications.length}</h2>
            <div className="grid sm:grid-cols-1  lg:grid-cols-2 gap-6">
                {applications.map((application) => (
                    <div key={application._id} className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition-all">
                        <div className="mb-4">
                            <h3 className="text-2xl font-semibold">{application.universityName}</h3>
                            <p className="text-gray-600">{application.address.village}, {application.address.district}, {application.address.country}</p>
                        </div>

                        <div className="mb-4">
                            <span className="font-medium">Subject Category: </span><span>{application.subjectCategory}</span>
                        </div>

                        <div className="mb-4">
                            <span className="font-medium">Applied Degree: </span><span>{application.applyingDegree}</span>
                        </div>

                        <div className="mb-4">
                            <span className="font-medium">Application Status: </span>
                            <span className={`font-bold ${application.status === "Rejected" ? 'text-red-500' : 'text-green-500'}`}>
                                {application.status}
                            </span>
                        </div>

                        <div className="mb-6">
                            <span className="font-medium">Application Feedback: </span><span>{application.feedback || 'No feedback provided yet'}</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-2 w-full justify-center items-center">
                            <button
                                onClick={() => Swal.fire({
                                    title: 'Application Details',
                                    html: `
                                        <strong>University Name:</strong> ${application.universityName} <br>
                                        <strong>Degree:</strong> ${application.applyingDegree} <br>
                                        <strong>Scholarship Category:</strong> ${application.scholarshipCategory} <br>
                                        <strong>Subject Category:</strong> ${application.subjectCategory} <br>
                                        <strong>Status:</strong> ${application.status} <br>
                                    `
                                })}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                            >
                                View Details
                            </button>

                            <button
                                onClick={() => setEditingApplication(application)} // Open the edit form
                                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => handleCancel(application._id)}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() =>
                                    Swal.fire('Review', 'Add your review here.', 'info')}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
                            >
                                Add Review
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {editingApplication && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <form
                        onSubmit={handleEditSubmit}
                        className="bg-white p-6 rounded-lg shadow-lg w-96"
                    >
                        <h3 className="text-xl font-bold mb-4">Edit Application</h3>
                        <div className="mb-4">
                            <label className="block text-gray-700">University Name</label>
                            <input
                                type="text"
                                name="universityName"
                                defaultValue={editingApplication.universityName}
                                className="w-full border p-2 rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Village</label>
                            <input
                                type="text"
                                name="village"
                                defaultValue={editingApplication.address.village}
                                className="w-full border p-2 rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">District</label>
                            <input
                                type="text"
                                name="district"
                                defaultValue={editingApplication.address.district}
                                className="w-full border p-2 rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Country</label>
                            <input
                                type="text"
                                name="country"
                                defaultValue={editingApplication.address.country}
                                className="w-full border p-2 rounded-lg"
                                required
                            />
                        </div>
                        <div className="flex justify-end gap-4">
                            <button
                                type="button"
                                onClick={() => setEditingApplication(null)}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            )}


        </div>
    );
};

export default MyApplications;
