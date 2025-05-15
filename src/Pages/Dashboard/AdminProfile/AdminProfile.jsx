


import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAdmin from '../../../Hooks/useAdmin';
import { FaUserEdit, FaEnvelope, FaPhone, FaCalendarAlt, FaIdBadge } from 'react-icons/fa';

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();


  const phone = user?.phoneNumber || "+880 1234 567890";
  const joinDate = user?.metadata?.creationTime || new Date().toISOString();
  const userId = user?.uid || "N/A";

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 flex justify-center items-start">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-3xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome, <span className="text-[#0A92B9]">{user?.displayName || "User"}</span>!
          </h1>
          <button
            aria-label="Edit Profile"
            className="text-[#0A92B9] hover:text-[#087a9c] transition"
            onClick={() => alert('Edit profile clicked!')}
          >
            <FaUserEdit size={26} />
          </button>
        </div>

        {/* Profile Image */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt={`${user?.displayName || "User"} Profile`}
            className="w-36 h-36 rounded-full object-cover shadow-md border border-gray-200"
          />
          {/* Info */}
          <div className="flex-1 space-y-6">
            <InfoRow icon={<FaIdBadge className="text-[#0A92B9]" />} label="User ID" value={userId} />
            <InfoRow icon={<FaEnvelope className="text-[#0A92B9]" />} label="Email" value={user?.email || "N/A"} />
            <InfoRow icon={<FaPhone className="text-[#0A92B9]" />} label="Phone" value={phone} />
            <InfoRow
              icon={<FaCalendarAlt className="text-[#0A92B9]" />}
              label="Joined"
              value={new Date(joinDate).toLocaleDateString()}
            />

            {isAdmin && (
              <p className="mt-6 text-lg font-semibold uppercase tracking-wide text-[#0A92B9] bg-[#e0f2f9] inline-block px-4 py-1 rounded-full">
                Admin
              </p>
            )}
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed max-w-xl mx-auto text-center">
          Manage your profile settings and keep your information up to date for a better experience.
        </p>
      </div>
    </section>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="text-xl">{icon}</div>
    <div className="text-gray-700 font-medium">
      <span className="font-semibold">{label}:</span> {value}
    </div>
  </div>
);

export default AdminProfile;
