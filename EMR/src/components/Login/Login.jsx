import { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login,user} = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

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
    }
    setError(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      const success = await login(email, password);
      setLoading(false);

      if (success) {
        
        navigate("/home");
        alert(`Login successful! `);
      } else {
        setError({ credentials: "Invalid email or password" });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md border-2 border-blue-500">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        
        {error.credentials && <p className="text-red-500 mb-4">{error.credentials}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-describedby={error.email ? "email-error" : undefined}
            />
            {error.email && (
              <p id="email-error" className="text-red-500 text-xs mt-1">{error.email}</p>
            )}
          </div>
          
          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-describedby={error.password ? "password-error" : undefined}
            />
            {error.password && (
              <p id="password-error" className="text-red-500 text-xs mt-1">{error.password}</p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 rounded-md font-semibold ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
            disabled={loading}
          >
            {loading ? 'Logging In...' : 'Login'}
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
    </div>
  );
};

export default Login;