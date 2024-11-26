
import './App.css'

import { useTable } from 'react-table';

import { Footer } from './components/Footer/footer'
import { Home } from './components/HomePage/home'
import { MainNavbar } from './components/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from '../src/components/Patient/PatientRegistration';
import { PatientListd } from './components/Patient/PatientList';
import { PatientList } from './components/Appointments/PatientList/patientLists';
import { DoctorList } from "./components/Doctor/doctorList";
import { AddDoctors } from "./components/Doctor/Add doctors/addDoctors";
import { AuthProvider } from "./AuthContext";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import PrivateRoute from "./components/Login/PrivateRoute";
import { TestPatientList } from "./components/Doctor/Test/TestPatientList";
import { PatientTest } from './components/Doctor/Test/TestSubPages/patientTest';
import { LabList } from './components/Lab/LabList';
import { Blood_DonorList } from './components/Blood_Donor/BloodDonorList';
import BloodRegister from './components/Blood_Donor/BloodRegister';
import BloodRequestForm from './components/Blood_Donor/BloodForm';
import ManageCategories from './components/AddCategory/ManageCategories';
import AddCategory from './components/AddCategory/AddCategory';
function App() {

  return (
    <AuthProvider>
      <Router>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/pl' element={<PatientListd />} />
          <Route path='/pr' element={<Registration />} />
          <Route path='/p_list' element={<PatientList />} />
          <Route path='/d_list' element={<Blood_DonorList/>} />
          <Route path='/b_donor' element={<BloodRegister/>} />
          <Route path='/b_req' element={<BloodRequestForm/>} />
          <Route path='/lab' element={<LabList />} />
          <Route path='/categories' element={<ManageCategories />} />
          <Route path='/addcategory' element={<AddCategory />} />

          <Route path="/tpList" element={<TestPatientList/>} />
          <Route path="/tpList/ptest" element={<PatientTest />} />
          <Route path="/doctor" element={<DoctorList />} />        
          <Route path="/doctor/adddoctor" element={<AddDoctors />} />
         
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App;
