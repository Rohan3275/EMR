import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import PrivateRoute from "./components/Login/PrivateRoute";
import { AuthProvider } from "./AuthContext";
import { MainNavbar } from "./components/navbar";
import { Footer } from "./components/Footer/footer";
import { Home } from "./components/HomePage/home";
import Registration from "./components/Patient/PatientRegistration";
import { PatientListd } from "./components/Patient/PatientList";
import { PatientList } from "./components/Appointments/PatientList/patientLists";
import { DoctorList } from "./components/Doctor/doctorList";
import { AddDoctors } from "./components/Doctor/Add doctors/addDoctors";
import ManageCategories from "./components/AddCategory/ManageCategories";
import AddCategory from "./components/AddCategory/AddCategory";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainNavbar />
        <div className="content-wrapper">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<ManageCategories />} />
        <Route path="/add-category" element={<AddCategory />} />

            {/* Protected Routes */}
            <Route
              path="/pl"
              element={
                <PrivateRoute>
                  <PatientListd />
                </PrivateRoute>
              }
            />
            <Route
              path="/pr"
              element={
                <PrivateRoute>
                  <Registration />
                </PrivateRoute>
              }
            />
            <Route
              path="/p_list"
              element={
                <PrivateRoute>
                  <PatientList />
                </PrivateRoute>
              }
            />
            <Route
              path="/doctor"
              element={
                <PrivateRoute>
                  <DoctorList />
                </PrivateRoute>
              }
            />
            <Route
              path="/doctor/adddoctor"
              element={
                <PrivateRoute>
                  <AddDoctors />
                </PrivateRoute>
              }
            />

            {/* Catch-all Route */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
