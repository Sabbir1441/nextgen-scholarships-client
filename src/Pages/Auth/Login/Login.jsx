import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from 'sweetalert2'


const Login = () => {


    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'User Login Successful.',
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }



    return (
        <div className="flex items-center justify-center min-h-screen bg-[#97CBDC]">
            <div className="card bg-white w-full max-w-md shadow-2xl rounded-lg">
                <form onSubmit={handleLogin} className="card-body px-8 py-10">
                    <h2 className="text-2xl font-bold text-neutral-600 text-center mb-6">Login to Your Account</h2>

                    {/* Email Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-neutral-700">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-200 transition duration-300"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text text-neutral-700">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered border-neutral-300 focus:outline-none focus:ring focus:ring-neutral-200 transition duration-300"
                            required
                        />

                        <label className="label">
                            <Link to="/auth/forgetpass" className="label-text-alt text-neutral-500 hover:underline">Forgot password? </Link>
                        </label>
                    </div>

                    {/* Login Button */}
                    <div className="form-control mt-6">
                        <button
                            className="btn bg-neutral-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-neutral-700 transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                    <p className="text-center font-semibold">Dont have an account ? <Link to="/auth/register"><span className="text-red-500">Register</span></Link></p>

                    {/* Divider */}
                    <div className="divider text-neutral-500 mt-6">OR</div>

                    {/* Google Login */}
                    <div className="flex justify-center mt-4">
                        <button className="btn btn-outline border-neutral-300 text-neutral-600 hover:bg-neutral-800 hover:text-neutral-100 flex items-center gap-2">
                            <span className="text-neutral-500 text-xl">
                            </span>
                            Google
                        </button>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default Login;