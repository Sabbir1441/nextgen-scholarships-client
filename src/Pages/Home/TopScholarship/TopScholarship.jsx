import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopScholarship = () => {
    const [scholarships, setScholarships] = useState([]);

    useEffect(() => {
        fetch('https://nextgen-scholarships-server.vercel.app/top-scholarships')
            .then(response => response.json())
            .then(data => setScholarships(data))
    }, []);

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Top Scholarships</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {scholarships.map((scholarship) => (
                    <div key={scholarship._id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105">
                        <img className="w-full h-48 object-cover" src={scholarship.universityImage} alt={scholarship.universityName} />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">{scholarship.universityName}</h3>
                            <p className="text-sm text-gray-600 mb-2">{scholarship.scholarshipCategory}</p>
                            <p className="text-sm text-gray-500 mb-2">{scholarship.universityLocation}</p>
                            <p className="text-sm text-gray-500 mb-2">Deadline: {new Date(scholarship.applicationDeadline).toLocaleDateString()}</p>
                            <p className="text-sm text-gray-500 mb-2">Subject: {scholarship.subjectCategory}</p>
                            <p className="text-sm text-gray-500 mb-4">Fee: {scholarship.applicationFees} USD</p>
                            <Link to={`/scholarship-details/${scholarship._id}`} className="inline-block text-white bg-slate-500 px-4 py-2 rounded-md hover:bg-slate-600">Scholarship Details</Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <Link to="/all-scholarship" className="inline-block px-5 py-2 bg-[#0A92B9] hover:bg-[#087a9c] text-white rounded-lg text-center shadow-lg transition duration-300">See All Scholarships</Link>
            </div>
        </div>
    );
};

export default TopScholarship;
