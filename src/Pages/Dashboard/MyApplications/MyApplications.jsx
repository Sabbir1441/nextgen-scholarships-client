import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MyApplications = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    console.log("User email:", user.email);

    const { data: applications = [] } = useQuery({
        queryKey: ['applications', user.email],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/applications/${user.email}`);
                console.log(res.data);  
                return res.data;
            } catch (error) {
                console.error('Error fetching applications:', error);  
            }
        }
    });

    const handleEdit = (id) => {
        // Handle edit functionality
        Swal.fire({
            title: 'Edit Application',
            text: 'Edit functionality coming soon!',
            icon: 'info',
        });
    };

    const handleCancel = (id) => {
        // Handle cancel functionality
        Swal.fire({
            title: 'Cancel Application',
            text: 'Are you sure you want to cancel?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, cancel it!',
            cancelButtonText: 'No, keep it',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Cancelled!', 'Your application has been cancelled.', 'success');
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
                                onClick={() => Swal.fire('Details', 'Application details will be displayed here.', 'info')}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                            >
                                View Details
                            </button>

                            <button
                                onClick={() => handleEdit(application._id)}
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
        </div>
    );
};

export default MyApplications;
