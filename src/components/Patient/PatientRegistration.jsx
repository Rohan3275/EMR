import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { addPatientAsynk } from './patientListSlice';
import { Select, Option } from '@material-tailwind/react';
import { notify } from "../ToastMessage/message";
const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        name: '',
        gender: '',
        status: '',
        nationality: '',
        blood_group: '',
        occupation: '',
        DOB: '',
        age: '',
        religion: '',
        id_number: '',
        email: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pin_code: '',
        contact: '',
        plan: '',
        insurance: '',
        PAN: '',
        I_DOB: '',
        policy_id: '',
        payment_method: '',
        card_number: '',
        payer_name: '',
        OPD_Limit: '',
        relation: '',
        p_limit: '',
        profile: '',
        reason: '',
        type: '',
        time: '',
        date: '',
        doctor: '',
        test:'',
        notes: '',
        appoitment:'No'

    })


    const onSubmit = (e) => {
        e.preventDefault();
        console.log(values)

        dispatch(addPatientAsynk(values))
        notify("Patient added successfully ","success")
        navigate('/pl')
        // data.imagePreview = imagePreview; // Attach the image preview to the data
        // navigate('/patient-card', { state: data }); // Navigate to the review page with the form data


        // dispatch(addPatientAsynk(values))


    };


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setValues({ ...values, profile: reader.result });
            };
            reader.readAsDataURL(file);
        }

    };

    const removeImage = () => {
        setImagePreview(null);
    };


    return (
        <div className="max-w-5xl mx-auto md:pt-5 p-5 md:border border-gray-600 rounded-lg mt-20 my-5">
            <form onSubmit={onSubmit} >
                <div className='flex items-center justify-center'>
                    <h1 className="text-3xl font-bold mb-6">Patient Registration</h1>
                </div>


                {/* Patient Name */}
                <div className="mt-10">
                    <label className="block text-sm font-medium">Patient Name*</label>
                    <input
                        type="text"
                        // {...register('patientName', { required: true, minLength: 1, maxLength: 255 })}
                        name='name'
                        onChange={e => setValues({ ...values, name: e.target.value })}
                        className="mt-1 block  w-full border border-gray-300 rounded-md p-2"
                    />
                    {/* {errors.patientName && <p className="text-red-600 text-sm">This field is required</p>} */}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-5">
                    {/* Gender */}
                    <div>
                        <label className="block text-sm font-medium">Gender*</label>
                        <Select
                            // {...register('gender', { required: true })}
                            // className="mt-1 block w-full border border-gray-300 rounded-md p-2" name='gender'
                            name='gender'
                            onChange={(value) => setValues({ ...values, gender: value })}
                        >
                            <Option value="">Select</Option>
                            <Option value="Male">Male</Option>
                            <Option value="Female">Female</Option>
                        </Select>
                        {errors.gender && <p className="text-red-600 text-sm">This field is required</p>}
                    </div>

                    {/* Marital Status */}
                    <div>
                        <label className="block text-sm font-medium">Marital Status</label>
                        <Select
                            {...register('maritalStatus')}
                            className="mt-1 block w-full rounded-md p-2"
                            onChange={(value) => setValues({ ...values, status: value })}

                        >
                            <Option value="Single">Single</Option>
                            <Option value="Married">Married</Option>
                            <Option value="Other">Other</Option>
                        </Select>
                    </div>

                    {/* Nationality */}
                    <div>
                        <label className="block text-sm font-medium">Nationality</label>
                        <Select
                            {...register('nationality')}
                            className="mt-1 block w-full rounded-md p-2"
                            onChange={(value) => setValues({ ...values, nationality: value })}
                        >
                            <Option value="">Select</Option>
                            <Option value="Indian">Indian</Option>
                            <Option value="Other">Other</Option>
                        </Select>
                    </div>

                    {/* Blood Group */}
                    <div>
                        <label className="block text-sm font-medium">Blood Group</label>
                        <Select
                            {...register('bloodGroup')}
                            className="mt-1 block w-full rounded-md p-2"
                            onChange={(value) => setValues({ ...values, blood_group: value })}
                        >
                            <Option value="">Select</Option>
                            <Option value="A+">A+</Option>
                            <Option value="B+">B+</Option>
                            <Option value="O+">O+</Option>
                        </Select>
                    </div>

                    {/* Occupation */}
                    <div>
                        <label className="block text-sm font-medium">Occupation</label>
                        <input
                            type="text"
                            // {...register('occupation')}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            name='occupation'
                            onChange={e => setValues({ ...values, occupation: e.target.value })}
                        />
                    </div>

                    {/* DOB */}
                    <div>
                        <label className="block text-sm font-medium">DOB</label>
                        <input
                            type="date"
                            // {...register('dob')}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            name='date'
                            onChange={e => setValues({ ...values, DOB: e.target.value })}
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
                            name='age'
                            onChange={e => setValues({ ...values, age: e.target.value })}
                        />
                    </div>

                    {/* Religion */}
                    <div>
                        <label className="block text-sm font-medium">Religion</label>
                        <input
                            type="text"
                            {...register('religion')}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            name='religion'
                            onChange={e => setValues({ ...values, religion: e.target.value })}

                        />
                    </div>

                    {/* Identity Number */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium">Identity Number</label>
                        <input
                            type="text"
                            {...register('identityNumber')}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            name='id_number'
                            onChange={e => setValues({ ...values, id_number: e.target.value })}
                        />
                    </div>

                    {/* Email */}
                    <div className="col-span-2">
                        <label className="block text-sm font-medium">Email*</label>
                        <input
                            type="email"
                            // {...register('email', { required: true })}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            name='email'
                            onChange={e => setValues({ ...values, email: e.target.value })}
                        />
                        {/* {errors.email && <p className="text-red-600 text-sm">This field is required</p>} */}
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
                                // {...register('address', { required: true })}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                name='address'
                                onChange={e => setValues({ ...values, address: e.target.value })}

                            />
                        </div>

                        {/* city */}
                        <div>
                            <label className="block text-sm font-medium">City*</label>
                            <input
                                type="text"
                                // {...register('city', { required: true })}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                name='city'
                                onChange={e => setValues({ ...values, city: e.target.value })}
                            />
                        </div>

                        {/* state */}
                        <div>
                            <label className="block text-sm font-medium">State</label>
                            <input
                                type="text"
                                {...register('State')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                name='state'
                                onChange={e => setValues({ ...values, state: e.target.value })}

                            />
                        </div>

                        {/* country */}
                        <div>
                            <label className="block text-sm font-medium">Country</label>
                            <input
                                type="text"
                                {...register('Country')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                name='country'
                                onChange={e => setValues({ ...values, country: e.target.value })}
                            />
                        </div>

                        {/* PinCode */}
                        <div>
                            <label className="block text-sm font-medium">Pin Code</label>
                            <input
                                type="number"
                                {...register('pincode')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                name='pin_code'
                                onChange={e => setValues({ ...values, pin_code: e.target.value })}
                            />
                        </div>

                        {/* PhoneNo. */}
                        <div>
                            <label className="block text-sm font-medium">Phone No.*</label>
                            <input
                                type="number"
                                // {...register('phoneNo', { required: true })}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                name='contact'
                                onChange={e => setValues({ ...values, contact: e.target.value })}
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
                                name='plan'
                                onChange={e => setValues({ ...values, plan: e.target.value })}
                            />
                        </div>

                        {/* insuredname */}
                        <div>
                            <label className="block text-sm font-medium">Insured's Name *</label>
                            <input
                                type="text"
                                // {...register('insuredName', { required: true })}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                name='insurance'
                                onChange={e => setValues({ ...values, insurance: e.target.value })}
                            />
                        </div>

                        {/* insuredPan */}
                        <div>
                            <label className="block text-sm font-medium">Insured's PAN</label>
                            <input
                                type="text"
                                {...register('insuredPan')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                name='PAN'
                                onChange={e => setValues({ ...values, PAN: e.target.value })}

                            />
                        </div>

                        {/* insuredDOB */}
                        <div>
                            <label className="block text-sm font-medium">Insured's DOB*</label>
                            <input
                                type="text"
                                // {...register('insuredDOB', { required: true })}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                name='I_DOB'
                                onChange={e => setValues({ ...values, I_DOB: e.target.value })}

                            />
                        </div>

                        {/* policyId */}
                        <div>
                            <label className="block text-sm font-medium">Policy No/ID </label>
                            <input
                                type="number"
                                {...register('policyId')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                name='policy_id'
                                onChange={e => setValues({ ...values, policy_id: e.target.value })}
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium">Address*</label>
                            <input
                                type="text"

                                // {...register('address', { required: true })}
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
                            <Select
                                // {...register('Paytype', { required: true })}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                name='payment_method'
                                onChange={(value) => setValues({ ...values, payment_method: value })}
                            >
                                <Option value="">Select</Option>
                                <Option value="Cash">Cash</Option>
                                <Option value="card">Card</Option>
                                <Option value="upi">UPI</Option>
                            </Select>
                            {errors.gender && <p className="text-red-600 text-sm">This field is required</p>}
                        </div>

                        {/* cardnumber */}
                        <div>
                            <label className="block text-sm font-medium">Card Number</label>
                            <input
                                type="number"
                                {...register('cardNumber', { minLength: 10 })}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                name='card_number'
                                onChange={e => setValues({ ...values, card_number: e.target.value })}

                            />
                        </div>

                        {/* payerName */}
                        <div>
                            <label className="block text-sm font-medium">Payer's Name</label>
                            <input
                                type="text"
                                {...register('payerName')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                name='payer_name'
                                onChange={e => setValues({ ...values, payer_name: e.target.value })}

                            />
                        </div>

                        {/* opdLimit */}
                        <div>
                            <label className="block text-sm font-medium">OPD Credit Limit</label>
                            <input
                                type="text"
                                {...register('opdLimit',)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                name='p_limit'
                                onChange={e => setValues({ ...values, p_limit: e.target.value })}

                            />
                        </div>

                        {/* payarRelation */}
                        <div>
                            <label className="block text-sm font-medium">Payer's Relation</label>
                            <input
                                type="number"
                                {...register('payarRelation')}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                name='relation'
                                onChange={e => setValues({ ...values, relation: e.target.value })}

                            />
                        </div>

                        {/* pharmacy */}
                        <div>
                            <label className="block text-sm font-medium">Pharmacy Limit</label>
                            <input
                                type="text"
                                {...register('pharmacy')}
                                name='p_limit'
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                onChange={e => setValues({ ...values, p_limit: e.target.value })}
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
                            name='profile'
                            // {...register('image', { required: true })}
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
