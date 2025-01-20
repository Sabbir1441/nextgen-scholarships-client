import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ScholarshipDetails = () => {
    const { id } = useParams();  // Using the scholarship ID from the URL
    const [scholarship, setScholarship] = useState(null);

    useEffect(() => {
        // Fetch scholarship data using the scholarship ID
        const fetchScholarship = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/scholarships/${id}`);
                setScholarship(response.data);
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to fetch scholarship details!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        };

        fetchScholarship();
    }, [id]);

    if (!scholarship) {
        return <p>Loading...</p>;  // Show loading text while data is being fetched
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Scholarship Details Card */}
            <div className="bg-white border border-gray-300 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
                <div className="flex items-center mb-6">
                    <img
                        src={scholarship.universityImage}
                        alt={scholarship.universityName}
                        className="w-24 h-24 object-cover rounded-full shadow-lg"
                    />
                    <div className="ml-6">
                        <h2 className="text-3xl font-semibold text-gray-800">{scholarship.universityName}</h2>
                        <p className="text-gray-600 text-xl">{scholarship.scholarshipCategory}</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-gray-600">
                        <strong>Location:</strong> {scholarship.universityCity}, {scholarship.universityCountry}
                    </p>
                    <p className="text-gray-600">
                        <strong>Application Deadline:</strong> {new Date(scholarship.deadline).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600">
                        <strong>Subject:</strong> {scholarship.subjectCategory}
                    </p>
                    <p className="text-gray-600">
                        <strong>Description:</strong> Discover opportunities and resources to advance your education and career. Join us and take the next step towards your future!
                    </p>
                    
                    <p className="text-gray-600">
                        <strong>Post Date:</strong> {new Date(scholarship.postDate).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600">
                        <strong>Service Charge:</strong> ${scholarship.serviceCharge} 
                    </p>
                    <p className="text-gray-600">
                        <strong>Application Fees:</strong> ${scholarship.applicationFees} 
                    </p>
                </div>

                {/* Apply Scholarship Button */}
                <div className="mt-8">
                    <Link
                        to={`/payment/${scholarship._id}`}
                        className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg text-center shadow-lg hover:bg-green-700 transition duration-300"
                    >
                        Apply Scholarship
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipDetails;
