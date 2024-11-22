import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold"></h1>
      <div className="flex gap-4">
        <button className="bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-gray-200">
          Notifications
        </button>
        <button className="bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-gray-200">
          Profile
        </button>
      </div>
    </header>
  );
};

export default Header;
