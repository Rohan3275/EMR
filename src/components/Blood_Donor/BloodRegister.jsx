import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { addPatientAsynk } from "./BloodDonorListSlice";
import { Select, Option } from "@material-tailwind/react";
import { notify } from "../ToastMessage/message";
const BloodRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    blood_group: "",
    age: "",
    id_number: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pin_code: "",
    contact: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    dispatch(addPatientAsynk(values));
    notify("Patient added successfully ", "success");
    navigate("/b_list");
    // data.imagePreview = imagePreview; // Attach the image preview to the data
    // navigate('/patient-card', { state: data }); // Navigate to the review page with the form data

    // dispatch(addPatientAsynk(values))
  };

  return (
    <div className="max-w-5xl mx-auto md:pt-5 p-5 md:border border-gray-600 rounded-lg mt-20 my-5">
      <form onSubmit={onSubmit}>
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold mb-6">Blood Donor Registration</h1>
        </div>

        {/* donor Name */}
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div>
            <label className="block text-sm font-medium">First Name*</label>
            <input
              type="text"
              // {...register('patientName', { required: true, minLength: 1, maxLength: 255 })}
              name="fname"
              onChange={(e) => setValues({ ...values, fname: e.target.value })}
              className="mt-1 block  w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name*</label>
            <input
              type="text"
              // {...register('patientName', { required: true, minLength: 1, maxLength: 255 })}
              name="lname"
              onChange={(e) => setValues({ ...values, lname: e.target.value })}
              className="mt-1 block  w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          {/* {errors.patientName && <p className="text-red-600 text-sm">This field is required</p>} */}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-5">
          {/* Blood Group */}
          <div>
            <label className="block text-sm font-medium">Blood Group</label>
            <Select
              {...register("bloodGroup")}
              className="mt-1 block w-full rounded-md p-2"
              onChange={(value) => setValues({ ...values, donorSlice: value })}
            >
              <Option value="">Select</Option>
              <Option value="A+">A+</Option>
              <Option value="B+">B+</Option>
              <Option value="O+">O+</Option>
            </Select>
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium">Age</label>
            <input
              type="number"
              {...register("age")}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Years"
              name="age"
              onChange={(e) => setValues({ ...values, age: e.target.value })}
            />
          </div>
          {/* PhoneNo. */}
          <div className="col-span-2">
            <label className="block text-sm font-medium">Phone No.*</label>
            <input
              type="number"
              // {...register('phoneNo', { required: true })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              name="contact"
              onChange={(e) =>
                setValues({ ...values, contact: e.target.value })
              }
            />
          </div>

          {/* Email */}
          <div className="col-span-2">
            <label className="block text-sm font-medium">Email*</label>
            <input
              type="email"
              // {...register('email', { required: true })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              name="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            {/* {errors.email && <p className="text-red-600 text-sm">This field is required</p>} */}
          </div>

          <div>
            <label className="block text-sm font-medium">Address*</label>
            <input
              type="text"
              // {...register('address', { required: true })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              name="address"
              onChange={(e) =>
                setValues({ ...values, address: e.target.value })
              }
            />
          </div>

          {/* city */}
          <div>
            <label className="block text-sm font-medium">City*</label>
            <input
              type="text"
              // {...register('city', { required: true })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              name="city"
              onChange={(e) => setValues({ ...values, city: e.target.value })}
            />
          </div>

          {/* state */}
          <div>
            <label className="block text-sm font-medium">State</label>
            <input
              type="text"
              {...register("State")}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              name="state"
              onChange={(e) => setValues({ ...values, state: e.target.value })}
            />
          </div>
          {/* PinCode */}
          <div>
            <label className="block text-sm font-medium">Pin Code</label>
            <input
              type="number"
              {...register("pincode")}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              name="pin_code"
              onChange={(e) =>
                setValues({ ...values, pin_code: e.target.value })
              }
            />
          </div>
          
            <div>
              <label className="block text-gray-700">Last Donation Month</label>
              <input
                {...register("lastDonationMonth")}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                type="text"
                placeholder="Month"
              />
            </div>

            <div>
              <label className="block text-gray-700">Last Donation Year</label>
              <input
                {...register("lastDonationYear")}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                type="text"
                placeholder="Year"
              />
            
          </div>

          </div>
          <div className="flex items-center mt-4">
            <input
              {...register("terms", {
                required: "You must agree to the terms",
              })}
              type="checkbox"
              className="mr-2"
            />
            <label className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </label>
            {errors.terms && (
              <p className="text-red-500 text-xs mt-1">
                {errors.terms.message}
              </p>
            )}
          </div>

        {/* Submit Button */}
        <div className="flex justify-center gap-5 mt-10">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BloodRegister;
