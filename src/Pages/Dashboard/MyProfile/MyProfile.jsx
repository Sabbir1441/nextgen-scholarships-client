import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white shadow-lg rounded-2xl max-w-md w-full p-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Welcome, <span className="text-[#0A92B9]">{user?.displayName || "User"}</span>!
        </h1>
        <p className="text-gray-600 mb-8">
          Here is your profile information.
        </p>

        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt={`${user?.displayName || "User"} profile`}
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-md border-4 border-[#0A92B9] object-cover"
        />

        <div className="text-left space-y-4 max-w-sm mx-auto">
          <ProfileItem label="Name" value={user?.displayName || "N/A"} />
          <ProfileItem label="Email" value={user?.email || "N/A"} />
        </div>
      </div>
    </section>
  );
};

const ProfileItem = ({ label, value }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-800">{label}:</h3>
    <p className="text-gray-600">{value}</p>
  </div>
);

export default MyProfile;
