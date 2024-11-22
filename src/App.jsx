
import './App.css'
import { Footer } from './components/Footer/footer'
import { Home } from './components/HomePage/home'
import { MainNavbar } from './components/navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Registration from '../src/components/Patient/PatientRegistration';
import { PatientListd } from './components/Patient/PatientList';
import { PatientList } from './components/Appointments/PatientList/patientLists';
import DonorRegistration from './components/Patient/DonorRegistration';
import BloodRequestForm from './components/Patient/BloodForm';


function App() {

  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        
        <Route path='/' element={<Home />}/>
        <Route path='/pl' element={<PatientListd/>}/>
        <Route path='/pr' element={<Registration/>}/>
        <Route path='/p_list' element={<PatientList/>}/>
        <Route path='/Dr' element={<DonorRegistration/>} />
        <Route path='/Bd' element={<BloodRequestForm/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
