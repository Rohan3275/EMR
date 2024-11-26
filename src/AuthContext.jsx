import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = async (email, password) => {
    try {
      const res = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
      if (res.data.length > 0) {
        const loggedInUser = res.data[0];
        setUser(loggedInUser);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login error: ", error);
      return false;
    }
  };

  const signUp = async (email, password, firstName, profileImage) => {
    try {
      // Check if email already exists
      const existingUserRes = await axios.get(`http://localhost:5000/users?email=${email}`);
      if (existingUserRes.data.length > 0) {
        throw new Error("Email already in use");
      }

      // Create new user
      const res = await axios.post("http://localhost:5000/users", { 
        email, 
        password, 
        firstName, 
        profileImage // Add profile image here
      });
      setUser(res.data);
    } catch (error) {
      console.error("Sign Up error: ", error);
      throw error; // Propagate the error for handling in the SignUp component
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
