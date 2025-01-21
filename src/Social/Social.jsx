import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const Social = () => {

    const {googleSignIn} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                navigate('/');
            })
        })
    }


    return (
        <div className="flex justify-center mt-4">
            <button onClick={handleGoogleSignIn} className="btn btn-outline border-neutral-300 text-neutral-600 hover:bg-neutral-800 hover:text-neutral-100 flex items-center gap-2">
                <span className="text-neutral-500 text-xl">
                    <FaGoogle />
                </span>
                Google
            </button>
        </div>
    );
};

export default Social;