
import './App.css'
// <<<<<<< HEAD
import { useTable } from 'react-table';
// =======
import { Footer } from './components/Footer/footer'
import { Home } from './components/HomePage/home'
import { MainNavbar } from './components/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from '../src/components/Patient/PatientRegistration';
import { PatientListd } from './components/Patient/PatientList';
import { PatientList } from './components/Appointments/PatientList/patientLists';
// >>>>>>> d4609d48eeead48f0c4b27383e3698a9bb7d374c

function App() {

  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/pl' element={<PatientListd />} />
        <Route path='/pr' element={<Registration />} />
        <Route path='/p_list' element={<PatientList />} />
        {/* <Route path='/patient-card' element={<PatientCard/>}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
