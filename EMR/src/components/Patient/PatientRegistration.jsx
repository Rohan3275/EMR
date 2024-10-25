import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        data.imagePreview = imagePreview; // Attach the image preview to the data
        navigate('/patient-card', { state: data }); // Navigate to the review page with the form data
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setImagePreview(null);
    };


    return (
        <div className="max-w-5xl mx-auto md:pt-5 p-5">
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='flex items-center justify-center'>
                    <h1 className="text-3xl font-bold mb-6">Patient Registration</h1>
                </div>


                {/* Patient Name */}
                <div className="flex mt-10">
                    <label className="block text-sm font-medium">Patient Name*</label>
                    <input
                        type="text"
                        {...register('patientName', { required: true, minLength: 1, maxLength: 255 })}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                    {errors.patientName && <p className="text-red-600 text-sm">This field is required</p>}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-5">
                    {/* Gender */}
                    <div>
                        <label className="block text-sm font-medium">Gender*</label>
                        <select
                            {...register('gender', { required: true })}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {errors.gender && <p className="text-red-600 text-sm">This field is required</p>}
                    </div>

                    {/* Marital Status */}
                    <div>
                        <label className="block text-sm font-medium">Marital Status</label>
                        <select
                            {...register('maritalStatus')}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Nationality */}
                    <div>
                        <label className="block text-sm font-medium">Nationality</label>
                        <select
                            {...register('nationality')}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select</option>
                            <option value="Indian">Indian</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Blood Group */}
                    <div>
                        <label className="block text-sm font-medium">Blood Group</label>
                        <select
                            {...register('bloodGroup')}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select</option>
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="O+">O+</option>
                        </select>
                    </div>

                    {/* Occupation */}
                    <div>
                        <label className="block text-sm font-medium">Occupation</label>
                        <input
                            type="text"
                            {...register('occupation')}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>

                    {/* DOB */}
                    <div>
                        <label className="block text-sm font-medium">DOB</label>
                        <input
                            type="date"
                            {...register('dob')}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>

                    {/* Age */}
                    <div>
                        <label className="block text-sm font-medium">Age</label>
                        <input
                            type="number"
                            {...register('age')}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            placeholder="Years"
                        />
                    </div>

                    {/* Religion */}
                    <div>
                        <label className="block text-sm font-medium">Religion</label>
                        <input
                            type="text"
                            {...register('religion')}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            defaultValue="Hindu"
                        />
                    </div>

                    {/* Identity Number */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium">Identity Number</label>
                        <input
                            type="text"
                            {...register('identityNumber')}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>

                    {/* Email */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium">Email*</label>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                        {errors.email && <p className="text-red-600 text-sm">This field is required</p>}
                    </div>
                </div>
                <hr />

                {/* Details */}

                <div className='mt-10'>
                    <h1 className='text-xl font-bold border-b-2 border-black'>Communication Details</h1>
                    <div className="grid grid-cols-2 gap-4 mt-5">
                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium">Address*</label>
                            <input
                                type="text"
                                {...register('address',{required:true})}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* city */}
                        <div>
                            <label className="block text-sm font-medium">City*</label>
                            <input
                                type="text"
                                {...register('city',{required:true})}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* state */}
                        <div>
                            <label className="block text-sm font-medium">State</label>
                            <input
                                type="text"
                                {...register('State')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"

                            />
                        </div>

                        {/* country */}
                        <div>
                            <label className="block text-sm font-medium">Country</label>
                            <input
                                type="text"
                                {...register('Country')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* PinCode */}
                        <div>
                            <label className="block text-sm font-medium">Pin Code</label>
                            <input
                                type="number"
                                {...register('pincode')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* PhoneNo. */}
                        <div>
                            <label className="block text-sm font-medium">Phone No.*</label>
                            <input
                                type="number"
                                {...register('phoneNo',{required:true})}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>
                </div>

                {/* Insurance Info */}

                <div className='mt-10'>
                    <h1 className='text-xl font-bold border-b-2 border-black'>Insurance Information</h1>
                    <div className="grid grid-cols-2 gap-4 mt-5">
                        {/* plan Name */}
                        <div>
                            <label className="block text-sm font-medium">Plan Name</label>
                            <input
                                type="text"
                                {...register('planName')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* insuredname */}
                        <div>
                            <label className="block text-sm font-medium">Insured's Name *</label>
                            <input
                                type="text"
                                {...register('insuredName',{required:true})}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* insuredPan */}
                        <div>
                            <label className="block text-sm font-medium">Insured's PAN</label>
                            <input
                                type="text"
                                {...register('insuredPan')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"

                            />
                        </div>

                        {/* insuredDOB */}
                        <div>
                            <label className="block text-sm font-medium">Insured's DOB*</label>
                            <input
                                type="text"
                                {...register('insuredDOB',{required:true})}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* policyId */}
                        <div>
                            <label className="block text-sm font-medium">Policy No/ID </label>
                            <input
                                type="number"
                                {...register('policyId')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium">Address*</label>
                            <input
                                type="text"
                                {...register('address',{required:true})}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>
                </div>

                {/* Insurance Info */}

                <div className='mt-10'>
                    <h1 className='text-xl font-bold border-b-2 border-black'>Payer Information</h1>
                    <div className="grid grid-cols-2 gap-4 mt-5">
                        {/* pay Type */}
                        <div>
                            <label className="block text-sm font-medium">Payment Method*</label>
                            <select
                                {...register('Paytype', { required: true })}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            >
                                <option value="">Select</option>
                                <option value="Cash">Cash</option>
                                <option value="card">Card</option>
                                <option value="upi">UPI</option>
                            </select>
                            {errors.gender && <p className="text-red-600 text-sm">This field is required</p>}
                        </div>

                        {/* cardnumber */}
                        <div>
                            <label className="block text-sm font-medium">Card Number</label>
                            <input
                                type="number"
                                {...register('cardNumber', { minLength: 10 })}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* payerName */}
                        <div>
                            <label className="block text-sm font-medium">Payer's Name</label>
                            <input
                                type="text"
                                {...register('payerName')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"

                            />
                        </div>

                        {/* opdLimit */}
                        <div>
                            <label className="block text-sm font-medium">OPD Credit Limit</label>
                            <input
                                type="text"
                                {...register('opdLimit',)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* payarRelation */}
                        <div>
                            <label className="block text-sm font-medium">Payer's Relation</label>
                            <input
                                type="number"
                                {...register('payarRelation')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        {/* pharmacy */}
                        <div>
                            <label className="block text-sm font-medium">Pharmacy Limit</label>
                            <input
                                type="text"
                                {...register('pharmacy')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>
                </div>

                <div className="items-center justify-center mt-10 border border-gray-500 rounded-md p-3">
                    <label className="block text-base font-medium p-2">Upload Profile Picture*</label>
                    <div className='flex items-center justify-center gap-5 mt-10'>
                        <img src="./file.png" alt="" className='w-8' />
                        <h1 className='text-xl font-bold'>Browse files</h1>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <input
                            type="file"
                            accept="image/*"
                            {...register('image', { required: true })}
                            onChange={handleImageUpload}
                            className="mt-1 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                                    file:rounded-md file:border-0 file:text-sm file:font-semibold
                                    file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        {errors.image && <p className="text-red-600 text-sm">Image is required</p>}
                    </div>

                    {/* Image Preview */}
                    {imagePreview && (
                        <div className="mt-4">
                            <img
                                src={imagePreview}
                                alt="Selected Preview"
                                className="w-32 h-32 object-cover rounded-md border border-gray-300 mx-auto"
                            />
                            <div className='flex justify-center'>
                                <button
                                    type="button"
                                    onClick={removeImage}
                                    className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600 mt-2"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center gap-5 mt-10">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Registration;
