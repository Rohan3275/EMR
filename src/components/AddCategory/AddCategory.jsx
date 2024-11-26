import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [shortName, setShortName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new category to the server
    axios
      .post("http://localhost:3000/categories", { category, shortName })
      .then(() => {
        // Redirect to the manage categories page after adding
        navigate("/managecategories");
      })
      .catch((error) => {
        console.error("There was an error adding the category!", error);
      });
  };

  return (
    <div className="container mx-auto p-4 mt-24 mb-16">
      <h2 className="text-2xl font-bold mb-4">Add Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded-md shadow-md">
        {/* Inputs Container */}
        <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-md">
          {/* Category Field */}
          <div className="flex flex-col">
            <label htmlFor="category" className="font-semibold text-lg mb-2">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 border rounded-md"
              required
            />
          </div>
          {/* Short Name Field */}
          <div className="flex flex-col">
            <label htmlFor="shortName" className="font-semibold text-lg mb-2">Short Name</label>
            <input
              type="text"
              id="shortName"
              name="shortName"
              value={shortName}
              onChange={(e) => setShortName(e.target.value)}
              className="px-4 py-2 border rounded-md"
              required
            />
          </div>
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
