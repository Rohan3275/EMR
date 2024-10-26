<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import PrivateRoute from "./components/Login/PrivateRoute";
import { AuthProvider } from "./AuthContext";
import { MainNavbar } from "./components/navbar";
import {Footer} from './components/Footer/footer'
import { Home } from './components/HomePage/home';
=======

import './App.css'
// <<<<<<< HEAD
import { useTable } from 'react-table';
// =======
import { Footer } from './components/Footer/footer'
import { Home } from './components/HomePage/home'
import { MainNavbar } from './components/navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Registration from '../src/components/Patient/PatientRegistration';
<<<<<<< HEAD
import { PatientListd } from './components/Patient/PatientList';
import PatientCard from './components/Patient/PatientCard';
=======
// import PatientCard from '../../../React-new/PatientForm/Patient/PatientCard';
import {  PatientListd } from './components/Patient/PatientList';
>>>>>>> aaa65f03e3d645b2f28c2168771a4ab9ee0c3ff4
import { PatientList } from './components/Appointments/PatientList/patientLists';
// >>>>>>> d4609d48eeead48f0c4b27383e3698a9bb7d374c
>>>>>>> df7c12eba52bdf774db193b1e20e5549e7bcd394

function App() {
  return (
<<<<<<< HEAD
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
=======
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pl' element={<PatientListd/>}/>
        <Route path='/pr' element={<Registration/>}/>
        <Route path='/p_list' element={<PatientList/>}/>
        {/* <Route path='/patient-card' element={<PatientCard/>}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
>>>>>>> df7c12eba52bdf774db193b1e20e5549e7bcd394
}

export default App;
