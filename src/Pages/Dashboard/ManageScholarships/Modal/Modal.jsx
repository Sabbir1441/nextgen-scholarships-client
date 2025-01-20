import React from 'react';

const Modal = ({ isOpen, closeModal, title, children, onSubmit }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-lg font-bold mb-4">{title}</h2>
                <div>{children}</div>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={closeModal}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSubmit}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
