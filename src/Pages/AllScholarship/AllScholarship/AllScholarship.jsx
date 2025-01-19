import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllScholarship = () => {
    const [scholarships, setScholarships] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredScholarships, setFilteredScholarships] = useState([]);

    useEffect(() => {
        // Fetch scholarships data from the server
        const fetchScholarships = async () => {
            try {
                const response = await axios.get('http://localhost:5000/scholarships');
                setScholarships(response.data);
                setFilteredScholarships(response.data); // Initially showing all scholarships
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to fetch scholarships data!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        };

        fetchScholarships();
    }, []);

    // Handle search query change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter scholarships based on search query
    const filterScholarships = () => {
        const filtered = scholarships.filter(scholarship => {
            return (
                scholarship.scholarshipName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                scholarship.universityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                scholarship.degree.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
        setFilteredScholarships(filtered);
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Search Box and Button */}
            <div className="flex justify-between items-center mb-6">
                <input
                    type="text"
                    className="p-4 w-3/4 md:w-1/3 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300"
                    placeholder="Search by scholarship name, university, or degree"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button
                    onClick={filterScholarships}
                    className="ml-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                >
                    Search
                </button>
            </div>

            {/* Scholarships Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredScholarships.length === 0 ? (
                    <p className="col-span-full text-center text-xl text-gray-500">No scholarships found matching your search criteria.</p>
                ) : (
                    filteredScholarships.map((scholarship) => (
                        <div key={scholarship._id} className="bg-white border border-gray-300 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
                            <div className="relative mb-4">
                                <img
                                    src={scholarship.universityImage}
                                    alt={scholarship.universityName}
                                    className="w-full h-40 object-cover rounded-xl shadow-md transition duration-300 hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-xl text-sm font-semibold text-blue-600 shadow-md">
                                    {scholarship.scholarshipCategory}
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{scholarship.universityName}</h3>
                            <p className="text-gray-500 text-sm">{scholarship.universityCity}, {scholarship.universityCountry}</p>
                            <p className="text-gray-600 mt-2">Application Deadline: <span className="font-semibold">{new Date(scholarship.deadline).toLocaleDateString()}</span></p>
                            <p className="text-gray-600 mt-1">Subject: {scholarship.subjectCategory}</p>
                            <p className="text-gray-600 mt-1">Application Fees: ${scholarship.applicationFees} </p>
                            <div className="mt-6">
                                <Link
                                    to={`/scholarship-details/${scholarship._id}`}
                                    className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg text-center shadow-lg hover:bg-green-700 transition duration-300"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AllScholarship;
