import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PaymentForm from "./PaymentForm";

const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

    const { id } = useParams();  // Using the scholarship ID from the URL
    const [scholarship, setScholarship] = useState(null);

    useEffect(() => {
        // Fetch scholarship data using the scholarship ID
        const fetchScholarship = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/scholarships/${id}`);
                setScholarship(response.data);
            } catch (error) {

            }
        };

        fetchScholarship();
    }, [id]);

    if (!scholarship) {
        return <p>Loading...</p>;  // Show loading text while data is being fetched
    }


    return (
        <div>
            <div className="max-w-4xl mx-auto p-6">
                {/* Scholarship Details Card */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center  bg-white border border-gray-300 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
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
                            <strong>Application Deadline:</strong> {new Date(scholarship.deadline).toLocaleDateString()}
                        </p>
                        <p className="text-gray-600">
                            <strong className="text-2xl">Application Fees:</strong> <span className="text-3xl font-semibold text-red-600">${scholarship.applicationFees}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-10">
                <Elements stripe={stripePromise}>
                    <PaymentForm></PaymentForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;