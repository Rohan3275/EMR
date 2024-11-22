import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

function BloodRequestForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <NavLink to="/Bd" className="flex justify-center items-center h-auto bg-gray-50 pt-20 mb-5 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl border border-gray-600"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          BloodBuddy
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700">Patients Name</label>
          <input
            {...register("patientName", { required: "Patient name is required" })}
            type="text"
            placeholder="Enter Patient Name"
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
          />
          {errors.patientName && (
            <p className="text-red-500 text-xs mt-1">{errors.patientName.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">When do you need the blood?</label>
          <input
            {...register("time", { required: "Time is required" })}
            type="datetime-local"
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
          />
          {errors.time && (
            <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">What blood group do you need?</label>
          <select
            {...register("bloodGroup", { required: "Blood group is required" })}
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
          >
            <option value="">Select Blood Group</option>
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

        <div className="mb-4">
          <label className="block text-gray-700">How many units are needed?</label>
          <input
            {...register("units", { required: "Units required is required" })}
            type="number"
            placeholder="Select Units Required"
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
          />
          {errors.units && (
            <p className="text-red-500 text-xs mt-1">{errors.units.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Where is it needed?</label>
          <input
            {...register("location", { required: "Location is required" })}
            type="text"
            placeholder="Select Location"
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
          />
          {errors.location && (
            <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-300"
        >
          Request Blood
        </button>
      </form>
    </NavLink>
  );
}

export default BloodRequestForm;
