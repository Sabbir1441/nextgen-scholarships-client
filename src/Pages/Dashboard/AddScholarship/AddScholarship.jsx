import React from "react";
import { useForm } from "react-hook-form";

const AddScholarship = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); 
        reset();
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold text-center mb-6">Add Scholarship</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Scholarship Name */}
                <div>
                    <label className="block text-gray-700">Scholarship Name</label>
                    <input
                        type="text"
                        {...register("scholarshipName", { required: "Scholarship Name is required" })}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter scholarship name"
                    />
                    {errors.scholarshipName && (
                        <p className="text-red-500 text-sm">{errors.scholarshipName.message}</p>
                    )}
                </div>

                {/* University Name */}
                <div>
                    <label className="block text-gray-700">University Name</label>
                    <input
                        type="text"
                        {...register("universityName", { required: "University Name is required" })}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter university name"
                    />
                    {errors.universityName && (
                        <p className="text-red-500 text-sm">{errors.universityName.message}</p>
                    )}
                </div>

                {/* University Logo/Image Link */}
                <div>
                    <label className="block text-gray-700">University Image/Logo Link</label>
                    <input
                        type="url"
                        {...register("universityImage", { required: "Image link is required" })}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter image link"
                    />
                    {errors.universityImage && (
                        <p className="text-red-500 text-sm">{errors.universityImage.message}</p>
                    )}
                </div>

                {/* University Location */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Country</label>
                        <input
                            type="text"
                            {...register("universityCountry", { required: "Country is required" })}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter country"
                        />
                        {errors.universityCountry && (
                            <p className="text-red-500 text-sm">{errors.universityCountry.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-700">City</label>
                        <input
                            type="text"
                            {...register("universityCity", { required: "City is required" })}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter city"
                        />
                        {errors.universityCity && (
                            <p className="text-red-500 text-sm">{errors.universityCity.message}</p>
                        )}
                    </div>
                </div>

                {/* University World Rank */}
                <div>
                    <label className="block text-gray-700">University World Rank</label>
                    <input
                        type="number"
                        {...register("worldRank", { required: "World Rank is required" })}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter world rank"
                    />
                    {errors.worldRank && (
                        <p className="text-red-500 text-sm">{errors.worldRank.message}</p>
                    )}
                </div>

                {/* Subject Category */}
                <div>
                    <label className="block text-gray-700">Subject Category</label>
                    <select
                        {...register("subjectCategory", { required: "Subject category is required" })}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Category</option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Doctor">Doctor</option>
                    </select>
                    {errors.subjectCategory && (
                        <p className="text-red-500 text-sm">{errors.subjectCategory.message}</p>
                    )}
                </div>

                {/* Scholarship Category */}
                <div>
                    <label className="block text-gray-700">Scholarship Category</label>
                    <select
                        {...register("scholarshipCategory", {
                            required: "Scholarship category is required",
                        })}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Category</option>
                        <option value="Full fund">Full fund</option>
                        <option value="Partial">Partial</option>
                        <option value="Self-fund">Self-fund</option>
                    </select>
                    {errors.scholarshipCategory && (
                        <p className="text-red-500 text-sm">{errors.scholarshipCategory.message}</p>
                    )}
                </div>

                {/* Degree */}
                <div>
                    <label className="block text-gray-700">Degree</label>
                    <select
                        {...register("degree", { required: "Degree is required" })}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Degree</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Bachelor">Bachelor</option>
                        <option value="Masters">Masters</option>
                    </select>
                    {errors.degree && (
                        <p className="text-red-500 text-sm">{errors.degree.message}</p>
                    )}
                </div>

                {/* Tuition Fees (Optional) */}
                <div>
                    <label className="block text-gray-700">Tuition Fees (Optional)</label>
                    <input
                        type="number"
                        {...register("tuitionFees")}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter tuition fees"
                    />
                </div>

                {/* Application Fees */}
                <div>
                    <label className="block text-gray-700">Application Fees</label>
                    <input
                        type="number"
                        {...register("applicationFees", { required: "Application Fees is required" })}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter application fees"
                    />
                    {errors.applicationFees && (
                        <p className="text-red-500 text-sm">{errors.applicationFees.message}</p>
                    )}
                </div>

                {/* Service Charge */}
                <div>
                    <label className="block text-gray-700">Service Charge</label>
                    <input
                        type="number"
                        {...register("serviceCharge", { required: "Service Charge is required" })}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter service charge"
                    />
                    {errors.serviceCharge && (
                        <p className="text-red-500 text-sm">{errors.serviceCharge.message}</p>
                    )}
                </div>

                {/* Application Deadline */}
                <div>
                    <label className="block text-gray-700">Application Deadline</label>
                    <input
                        type="date"
                        {...register("deadline", { required: "Application Deadline is required" })}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.deadline && (
                        <p className="text-red-500 text-sm">{errors.deadline.message}</p>
                    )}
                </div>

                {/* Scholarship Post Date */}
                <div>
                    <label className="block text-gray-700">Scholarship Post Date</label>
                    <input
                        type="date"
                        {...register("postDate", { required: "Scholarship Post Date is required" })}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.postDate && (
                        <p className="text-red-500 text-sm">{errors.postDate.message}</p>
                    )}
                </div>

                {/* Posted User Email */}
                <div>
                    <label className="block text-gray-700">Posted User Email</label>
                    <input
                        type="email"
                        {...register("userEmail", { required: "Email is required" })}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Enter email"
                    />
                    {errors.userEmail && (
                        <p className="text-red-500 text-sm">{errors.userEmail.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Add Scholarship
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddScholarship;
