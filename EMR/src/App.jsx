
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import PrivateRoute from "./components/Login/PrivateRoute";
import { AuthProvider } from "./AuthContext";
import { MainNavbar } from "./components/navbar";
import { Footer } from './components/Footer/footer'
import { Home } from './components/HomePage/home';


import './App.css'
// <<<<<<< HEAD

// =======



import Registration from '../src/components/Patient/PatientRegistration';

import { PatientListd } from './components/Patient/PatientList';


import { PatientList } from './components/Appointments/PatientList/patientLists';



function App() {
  return (

    <AuthProvider>
      <Router>
        <MainNavbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/pl' element={<PatientListd />} />
          <Route path='/pr' element={<Registration />} />
          <Route path='/p_list' element={<PatientList />} />
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
  );

  // <BrowserRouter>
  //   <MainNavbar />
  //   <Routes>
  //     <Route path='/' element={<Home />}/>
  //     
  //    
  //     {/* <Route path='/patient-card' element={<PatientCard/>}/> */}
  //   </Routes>
  //   <Footer />
  // </BrowserRouter>

}

export default App;
