import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PatientCard = () => {
    const { state: patientData } = useLocation(); // Access the form data passed through state
    const navigate = useNavigate();

    if (!patientData) {
        return <div>No data available. Please register first.</div>;
    }

    return (
        <div className="max-w-xl mx-auto p-5">
            <h1 className="text-3xl font-bold mb-6">Patient Card Review</h1>

            <div className="border p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
                <div className='flex items-center gap-5'>
                    {patientData.imagePreview && (
                        <div className="mt-6">
                            <img
                                src={patientData.imagePreview}
                                alt="Profile"
                                className="w-32 h-32 object-cover border border-gray-300 rounded-full"
                            />
                        </div>
                    )}
                    <div className='items-start justify-center'>
                        <p><strong>Name:</strong> {patientData.patientName}</p>
                        <p><strong>Gender:</strong> {patientData.gender}</p>
                        <p><strong>Phone No.:</strong> {patientData.phoneNo}</p>

                    </div>
                </div>
                <div className='mt-10'>
                    <p><strong>Marital Status:</strong> {patientData.maritalStatus}</p>
                    <p><strong>Date of Birth:</strong> {patientData.dob}</p>
                    <p><strong>Age:</strong> {patientData.age}</p>
                    <p><strong>Email:</strong> {patientData.email}</p>
                    <p><strong>Address:</strong> {patientData.address}</p>
                </div>
            </div>

            <div className="mt-6">
                <button
                    onClick={() => navigate('/pr')}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Edit
                </button>
            </div>
        </div>
    );
};

export default PatientCard;
