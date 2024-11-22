import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

function RegisterDonor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <NavLink to="/Dr" className="flex justify-center items-center h-auto bg-gray-100 pt-24 mb-5 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 shadow-lg w-full max-w-2xl border border-gray-600 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white bg-gradient-to-r from-red-600 to-pink-500 p-4 rounded-t-lg">
          Register As Donor
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              {...register("firstName", { required: "First name is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              type="text"
              placeholder="First"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              type="text"
              placeholder="Last"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            {...register("phoneNumber", { required: "Phone number is required" })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="tel"
            placeholder="Number"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="email"
            placeholder="Mail Id"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Address</label>
          <textarea
            {...register("address", { required: "Address is required" })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Type Here"
          ></textarea>
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-gray-700">Age</label>
            <input
              {...register("age", { required: "Age is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              type="number"
              placeholder="Age"
            />
            {errors.age && (
              <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Blood Group</label>
            <select
              {...register("bloodGroup", { required: "Blood group is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            {errors.bloodGroup && (
              <p className="text-red-500 text-xs mt-1">{errors.bloodGroup.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-gray-700">District</label>
            <input
              {...register("district", { required: "District is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              type="text"
            />
            {errors.district && (
              <p className="text-red-500 text-xs mt-1">{errors.district.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">State</label>
            <input
              {...register("state", { required: "State is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              type="text"
            />
            {errors.state && (
              <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Pin Code</label>
          <input
            {...register("pinCode", { required: "Pin code is required" })}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="text"
            placeholder="Pin Code"
          />
          {errors.pinCode && (
            <p className="text-red-500 text-xs mt-1">{errors.pinCode.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
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
            {...register("terms", { required: "You must agree to the terms" })}
            type="checkbox"
            className="mr-2"
          />
          <label className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </label>
          {errors.terms && (
            <p className="text-red-500 text-xs mt-1">{errors.terms.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white font-bold py-2 px-4 mt-6 rounded hover:bg-gray-800 transition duration-300"
        >
          Submit
        </button>
      </form>
    </NavLink>
  );
}

export default RegisterDonor;
