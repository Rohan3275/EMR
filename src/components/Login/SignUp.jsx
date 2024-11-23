import React, { useState, useContext } from "react";
import { AuthContext } from "../../AuthContext";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    mobile: "",
    dob: "",
    disease: "",
    address: "",
    city: "",
    state: "",
    profileImage: null, // Added for profile image
    countryCode: "+91", // Default country code
    agreeToTerms: false,
  });

  // Error state
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation logic
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid Email is required";
    if (!formData.password || formData.password.length < 6) newErrors.password = "Password must be at least 6 characters long";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Valid 10-digit Mobile Number is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.disease) newErrors.disease = "Disease Name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions";

    // Profile Image validation
    if (formData.profileImage) {
      const file = formData.profileImage;
      if (file.size > 5000000) {
        newErrors.profileImage = "File size must be less than 5MB";
      } else if (!file.type.startsWith("image/")) {
        newErrors.profileImage = "Only image files are allowed";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        // Convert profile image to base64 if it exists
        let profileImageBase64 = null;
        if (formData.profileImage) {
          const reader = new FileReader();
          reader.onloadend = async () => {
            profileImageBase64 = reader.result;
            await signUp({
              email: formData.email,
              password: formData.password,
              firstName: formData.firstName,
              lastName: formData.lastName,
              gender: formData.gender,
              mobile: formData.mobile,
              dob: formData.dob,
              disease: formData.disease,
              address: formData.address,
              city: formData.city,
              state: formData.state,
              profileImage: profileImageBase64, // Send the image
            });
            setLoading(false);
            navigate("/home");
          };
          reader.readAsDataURL(formData.profileImage);
        } else {
          // Call signUp without image if not provided
          await signUp({
            email: formData.email,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
            gender: formData.gender,
            mobile: formData.mobile,
            dob: formData.dob,
            disease: formData.disease,
            address: formData.address,
            city: formData.city,
            state: formData.state,
          });
          setLoading(false);
          navigate("/home");
        }
      } catch (error) {
        setLoading(false);
        alert("Error in sign-up: " + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 mt-20">
      <div className="bg-white border border-blue-600 rounded-lg shadow-xl w-full max-w-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Sign Up Now</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <div className="flex">
              {/* Country Code Dropdown */}
              <select
                name="countryCode"
                value={formData.countryCode || "+91"} // default to +91 if countryCode is not set
                onChange={handleChange}
                className="w-16 border border-gray-300 rounded-l-md p-2 bg-gray-100"
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+86">+86 (China)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+33">+33 (France)</option>
              </select>

              {/* Mobile Number Input */}
              <input
                name="mobile"
                type="text"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-r-md p-2"
              />
            </div>
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
          </div>

          

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              name="city"
              type="text"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-700">State</label>
            <input
              name="state"
              type="text"
              placeholder="Enter your state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
          </div>

         


          {/* Terms and Conditions */}
          <div className="col-span-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2 text-sm">I agree to the Terms and Conditions</span>
            </label>
            {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}
          </div>

          {/* Submit Button */}
          <div className="col-span-2 text-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-md disabled:bg-gray-300"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>

        {/* Already have an account */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

