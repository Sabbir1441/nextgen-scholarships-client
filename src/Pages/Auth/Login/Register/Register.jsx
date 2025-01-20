import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Social from "../../../../Social/Social";



const Register = () => {

    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                         // create user entry in the database
                         const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                        .then(res => {
                            if ( res.data.insertedId) {
                                console.log('user added to the database')
                                reset();
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: 'Created user Successful.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');
                            }
                        })
                        
                        
                       
                    })
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-[#97CBDC]">
            <div className="card bg-white w-full max-w-md shadow-xl rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body px-8 py-10">
                    <h2 className="text-2xl font-bold text-neutral-600 text-center mb-6">
                        Create Your Account
                    </h2>

                    {/* Name Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-neutral-700">Name</span>
                        </label>
                        <input
                            {...register("name", { required: true })}
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-200 transition duration-300"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text text-neutral-700">Email</span>
                        </label>
                        <input
                            name="email"
                            {...register("email", { required: true })}
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-200 transition duration-300"
                            required
                        />
                    </div>

                    {/* Photo URL Field */}
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text text-neutral-700">Photo URL</span>
                        </label>
                        <input
                            name="photo"
                            {...register("photoURL", { required: true })}
                            type="url"
                            placeholder="Enter your photo URL"
                            className="input input-bordered border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-200 transition duration-300"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text text-neutral-700">Password</span>
                        </label>
                        <input
                            name="password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })}

                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-200 transition duration-300"
                            required
                        />
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must contain at least 6 and upto 20 characters, including an uppercase letter, a lowercase letter, and a number.</p>}


                    </div>

                    {/* Register Button */}
                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className="btn bg-neutral-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-neutral-700 transition duration-300"
                        >
                            Register
                        </button>
                    </div>

                    <p className="text-center font-semibold mt-4">
                        Already have an account?{" "}
                        <Link to="/auth/login">
                            <span className="text-red-500">Login</span>
                        </Link>
                    </p>

                    {/* Divider */}
                    <div className="divider text-neutral-500 mt-6">OR</div>

                    {/* Google Login */}
                    <Social></Social>

                </form>
            </div>
        </div>
    );
};

export default Register;