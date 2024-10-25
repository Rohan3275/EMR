
import './App.css'
// <<<<<<< HEAD
import { useTable } from 'react-table';
// =======
import { Footer } from './components/Footer/footer'
import { Home } from './components/HomePage/home'
import { MainNavbar } from './components/navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Registration from '../../../React-new/PatientForm/Patient/PatientRegistration';
import PatientCard from '../../../React-new/PatientForm/Patient/PatientCard';
import { PatientList } from './components/Patient/PatientList';
// >>>>>>> d4609d48eeead48f0c4b27383e3698a9bb7d374c

function App() {

  return (
    <BrowserRouter>
      <MainNavbar />
      {/* <Home /> */}
      <PatientList/>
      <Footer />
    </BrowserRouter>
  )
}

export default App
