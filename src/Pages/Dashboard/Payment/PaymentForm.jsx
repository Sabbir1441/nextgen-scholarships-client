import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PaymentForm = ({ amount, scholarships }) => {
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        if (amount > 0) {
            axiosSecure.post('/create-payment-intent', { price: amount })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                });
        }
    }, [axiosSecure, amount]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (card === null) return;

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            return;
        }

        setError('');

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                },
            },
        });

        if (confirmError) {
        } else {
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
                setShowApplicationForm(true); 
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Payment Successful! Fill out the form to complete your application.",
                    showConfirmButton: false,
                    timer: 1500,
                });
               
            }
        }
    };

    const handleApplicationSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const applicationData = {
            scholarshipId: scholarships._id,
            phoneNumber: form.phoneNumber.value,
            photo: form.photo.value,
            address: {
                village: form.village.value,
                district: form.district.value,
                country: form.country.value,
            },
            gender: form.gender.value,
            applyingDegree: form.applyingDegree.value,
            sscResult: form.sscResult.value,
            hscResult: form.hscResult.value,
            studyGap: form.studyGap.value || 'No gap',
            universityName: form.uname.value,
            scholarshipCategory: form.category.value,
            subjectCategory: form.sub.value,
            userName: user?.displayName || 'anonymous',
            userEmail: user?.email || 'anonymous',
            currentDate: new Date().toLocaleDateString(),
            transactionId,
        };

        axiosSecure.post('/applications', applicationData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Application submitted successfully!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/dashboard/my-applications')
                }
            });
    };

    return (
        <div className="flex justify-center items-center my-10">
            {!showApplicationForm ? (
                <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Secure Payment
                    </h2>
                    <p className="text-gray-600 text-center mb-8">
                        Complete your payment by entering your card details below.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-inner">
                            <CardElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            fontFamily: 'Arial, sans-serif',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                    },
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={!stripe || !clientSecret}
                            className="w-full py-3 px-6 bg-[#0A92B9] hover:bg-[#087a9c] text-white font-bold rounded-lg shadow-lg  disabled:bg-gray-400 transition-all"
                        >
                            Pay Securely
                        </button>
                        {transactionId && <p className="text-green-600">Your transaction ID: {transactionId}</p>}
                    </form>
                </div>
            ) : (
                <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-3xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Application Form
                    </h2>
                    <form onSubmit={handleApplicationSubmit} className="space-y-6">
                        <input type="text" name="phoneNumber" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                        <input type="text" name="village" placeholder="Village" className="input input-bordered w-full" required />
                        <input type="text" name="district" placeholder="District" className="input input-bordered w-full" required />
                        <input type="text" name="country" placeholder="Country" className="input input-bordered w-full" required />
                        <select name="gender" className="select select-bordered w-full" required>
                            <option value="" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <input type="text" name="applyingDegree" value={scholarships.degree} className="input input-bordered w-full" required />
                        <input type="text" name="sscResult" placeholder="SSC Result" className="input input-bordered w-full" required />
                        <input type="text" name="hscResult" placeholder="HSC Result" className="input input-bordered w-full" required />
                        <select name="studyGap" className="select select-bordered w-full">
                            <option value="No gap">No gap</option>
                            <option value="1 year">1 year</option>
                            <option value="2 years">2 years</option>
                            <option value="3+ years">3+ years</option>
                        </select>
                        <input type="text" name="uname" value={scholarships.universityName} className="input input-bordered w-full" readOnly />
                        <input type="text" name="category" value={scholarships.scholarshipCategory} className="input input-bordered w-full" readOnly />
                        <input type="text" name="sub" value={scholarships.subjectCategory} className="input input-bordered w-full" readOnly />
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-[#0A92B9] hover:bg-[#087a9c] text-white font-bold rounded-lg shadow-lg transition-all"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default PaymentForm;
