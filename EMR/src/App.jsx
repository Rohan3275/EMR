import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import PrivateRoute from "./components/Login/PrivateRoute";
import { AuthProvider } from "./AuthContext";
import { MainNavbar } from "./components/navbar";
import {Footer} from './components/Footer/footer'
import { Home } from './components/HomePage/home';

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainNavbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home/>
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
