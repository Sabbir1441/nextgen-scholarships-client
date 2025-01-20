import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAdmin from '../../../Hooks/useAdmin';

const MyProfile = () => {

    const {user} = useContext(AuthContext);
    const[isAdmin] = useAdmin();

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-neutral-800">
                    Welcome, {user.displayName}!
                </h1>
                <p className="text-lg text-gray-700 mt-2">
                    Here is your profile information.
                </p>
            </div>

            <div className="mt-8 flex flex-col items-center bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                
                <img
                    src={user?.photoURL || "https://via.placeholder.com/150"}
                    alt=""
                    className="w-32 h-32 rounded-full shadow-md mb-6"
                />
                <div className="text-left w-full">
                    <p className="text-lg font-semibold text-gray-800">
                        Name: <span className="font-normal">{user?.displayName || "N/A"}</span>
                    </p>
                    <p className="text-lg font-semibold text-gray-800 mt-2">
                        Email: <span className="font-normal">{user?.email || "N/A"}</span>
                    </p>
                </div>

                
            </div>
        </div>
    );
};

export default MyProfile;