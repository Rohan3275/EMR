import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const navigate = useNavigate();

  // Fetch categories from db.json
  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        setCategories(response.data);
        setFilteredCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  // Navigate to AddCategory page
  const handleAddCategory = () => {
    navigate("/add-category");
  };

  // Delete category by id
  const handleDeleteCategory = (id) => {
    axios
      .delete(`http://localhost:3000/categories/${id}`)
      .then(() => {
        const updatedCategories = categories.filter(
          (category) => category.id !== id
        );
        setCategories(updatedCategories);
        setFilteredCategories(updatedCategories);
      })
      .catch((error) => {
        console.error("There was an error deleting the category!", error);
      });
  };

  // Filter categories based on search input
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = categories.filter((category) =>
      category.category.toLowerCase().includes(searchTerm)
    );
    setFilteredCategories(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Pagination calculations
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredCategories.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto p-4 mt-24">
      <h2 className="text-2xl font-bold mb-4">Manage Categories</h2>

      {/* Add Category and Export Buttons */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handleAddCategory}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add Category
        </button>
        <div className="flex space-x-2">
          <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
            Copy
          </button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
            Excel
          </button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
            CSV
          </button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
            PDF
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border px-4 py-2 w-full rounded"
          onChange={handleSearch}
        />
      </div>

      {/* Table for displaying categories */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border">Sr.No</th>
              <th className="px-4 py-2 text-left border">Category Name</th>
              <th className="px-4 py-2 text-left border">Short Name</th>
              <th className="px-4 py-2 text-left border">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((category, index) => (
              <tr key={category.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 border">{startIndex + index + 1}</td>
                <td className="px-4 py-2 border">{category.category}</td>
                <td className="px-4 py-2 border">{category.shortName}</td>
                <td className="px-4 py-2 flex space-x-4 border">
                  <button className="text-blue-500 hover:text-blue-700">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(category.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p>
          Showing {startIndex + 1} to{" "}
          {Math.min(endIndex, filteredCategories.length)} of{" "}
          {filteredCategories.length} entries
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(filteredCategories.length / itemsPerPage))
              )
            }
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;
