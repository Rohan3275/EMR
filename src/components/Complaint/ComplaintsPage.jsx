import React from "react";

function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-16">
      {/* Presenting Complaint Section */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Presenting Complaint</h1>

      {/* Search Bar and Button */}
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search complaints..."
          className="flex-grow p-2 border rounded-l-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          className="px-5 py-2 bg-blue-500 text-white font-medium text-sm rounded-md hover:bg-blue-600"
        >
          +
        </button>
      </div>

      {/* Text Area for Presenting Complaint */}
      <textarea
        rows="6"
        className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8"
        placeholder="Write presenting complaints here..."
      ></textarea>

      {/* Initial Complaint Section */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Initial Complaint</h2>

      {/* Text Area for Initial Complaint */}
      <textarea
        rows="6"
        className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write initial complaints here..."
      ></textarea>
    </div>
  );
}

export default ComplaintsPage;
