import { Input, Option, Select } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addDoctorAsynk } from "../doctorsSlice";
import { useNavigate } from "react-router-dom";
import { notify } from "../../ToastMessage/message";
import { ToastContainer } from "react-toastify";

export function AddDoctors() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Register doctors

    const [values, setValues] = useState({
        title: '',
        fname: '',
        mname: '',
        lname: '',
        contact: '',
        username: '',
        password: '',
        designation: '',
        specialist: '',
        email: '',
        contact: '',
        gender: '',
        profile: ''

    })
    // 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imagePreview, setImagePreview] = useState(null);
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

    // form Submit

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        dispatch(addDoctorAsynk(values))
        notify("Doctor added successfully ","success")
        navigate('/doctor')
       
    }
    // 
    return (<>
        <div className="mt-24 p-4 ps-20 pe-20">
            <div>
                <p className="text-3xl font-bold">Add Doctors</p>
                <form className="mt-7" onSubmit={onSubmit}>
                    <div className="grid grid-rows-1 grid-cols-2 gap-5">
                        <div>
                            <p className="text-sm">Title</p>
                            <Select label=""
                                name='title'
                                onChange={(value) => setValues({ ...values, title: value })}>
                                <Option value="Dr">Dr</Option>
                                <Option value="Md">Md</Option>

                            </Select>
                        </div>


                        <div className="">
                            <p className="text-sm">Frist Name</p>
                            <Input type="text" placeholder="Frist name"
                                name='fname'
                                onChange={e => setValues({ ...values, fname: e.target.value })}
                            />
                        </div>
                        <div className="">
                            <p className="text-sm">Middle Name</p>
                            <Input type="text" placeholder="Middle name"
                                name='mname'
                                onChange={e => setValues({ ...values, mname: e.target.value })}
                            />
                        </div>
                        <div className="">
                            <p className="text-sm"

                            >Last Name</p>
                            <Input type="text" placeholder="Last name" name='lname'
                                onChange={e => setValues({ ...values, lname: e.target.value })} />
                        </div>

                        <div className="">
                            <p className="text-sm">Username</p>
                            <Input type="text" placeholder="username"
                                name='username'
                                onChange={e => setValues({ ...values, username: e.target.value })}
                            />
                        </div>

                        <div className="">
                            <p className="text-sm">Password</p>
                            <Input type="password" placeholder="Password"
                                name='password'
                                onChange={e => setValues({ ...values, password: e.target.value })}
                            />
                        </div>
                        <div className="">
                            <p className="text-sm">Contact Number</p>
                            <Input type="number" placeholder="Last name"
                                name='contact'
                                onChange={e => setValues({ ...values, contact: e.target.value })}
                            />
                        </div>

                        <div>
                            <p className="text-sm">Gender</p>
                            <Select label=""
                                name='gender'
                                onChange={(value) => setValues({ ...values, gender: value })}
                            >
                                <Option value="Male">Male</Option>
                                <Option value="Female">Female</Option>

                            </Select>
                        </div>

                        <div>
                            <p className="text-sm">Designation</p>
                            <Select label=""
                                name='designation'
                                onChange={(value) => setValues({ ...values, designation: value })}
                            >
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>

                        <div>
                            <p className="text-sm">Specialist</p>
                            <Select label=""
                                name='specialist'
                                onChange={(value) => setValues({ ...values, specialist: value })}
                            >
                                <Option value="Cardiologist">Cardiologist</Option>
                                <Option value="Dermatology">Dermatology</Option>
                                <Option value="Nephrologist">Nephrologist</Option>
                                <Option value="Pathology">Pathology</Option>
                                <Option value="Pulmonologist">Pulmonologist</Option>
                                <Option value="Ophthalmologist">Ophthalmologist</Option>
                                <Option value="Psychiatrist">Psychiatrist</Option>
                                <Option value="Radiologist">Radiologist</Option>
                            </Select>
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
                    <div className="flex justify-center gap-5 mt-10">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
           
        </div>
    </>)
}