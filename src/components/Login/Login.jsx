import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { notify } from "../ToastMessage/message";
import { ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons
import zxcvbn from "zxcvbn"; // Password strength checker

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle password visibility
  const [rememberMe, setRememberMe] = useState(false); // "Remember Me" checkbox
  const [isPasswordTyped, setIsPasswordTyped] = useState(false); // Track if password is being typed

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});

    // Validation
    const errors = {};
    if (!email || !validateEmail(email)) {
      errors.email = "Valid Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return; // Stop execution if there are validation errors
    }

    setLoading(true);
    try {
      const success = await login(email, password, rememberMe); // You can handle the rememberMe logic in your backend
      if (success) {
        notify("Login successful");
       
        navigate("/home");
         location.reload()
      } else {
        setError({ credentials: "Invalid email or password" });
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setError({ credentials: "Invalid email or password" });
      } else {
        setError({ credentials: "Something went wrong. Please try again." });
      }
    } finally {
      setLoading(false);
    }
  };

  // Auto-focus the email input on load
  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

  // Password strength feedback
  const passwordStrength = zxcvbn(password);
  const passwordStrengthLabel =
    passwordStrength.score === 0
      ? "Very Weak"
      : passwordStrength.score === 1
      ? "Weak"
      : passwordStrength.score === 2
      ? "Fair"
      : passwordStrength.score === 3
      ? "Good"
      : "Strong";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md border-2 border-blue-500">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>

        {error.credentials && (
          <p className="text-red-500 mb-4">{error.credentials}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-describedby={error.email ? "email-error" : undefined}
            />
            {error.email && (
              <p id="email-error" className="text-red-500 text-xs mt-1">
                {error.email}
              </p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <div className="relative w-full">
              <input
                id="password"
                type={passwordVisible ? "text" : "password"} // Toggle visibility between text and password
                value={password}
                placeholder="Enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setIsPasswordTyped(true); // Set password typing flag to true
                }}
                className="w-full border border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-describedby={error.password ? "password-error" : undefined}
              />
              {/* Eye Icon */}
              <span
                onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility on click
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />} {/* Conditional rendering */}
              </span>
            </div>
            {error.password && (
              <p id="password-error" className="text-red-500 text-xs mt-1">
                {error.password}
              </p>
            )}

            {/* Conditionally render password strength feedback only after the user starts typing */}
            {isPasswordTyped && (
              <p className="text-xs mt-1 text-gray-500">
                Strength: {passwordStrengthLabel}
              </p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            <label className="text-sm text-gray-700">Remember me</label>
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 rounded-md font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up here
            </Link>
          </p>
         
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
