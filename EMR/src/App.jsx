
import './App.css'
import { PatientList } from './components/Appointments/PatientList/patientLists'
import { Footer } from './components/Footer/footer'
import { Home } from './components/HomePage/home'
import { MainNavbar } from './components/navbar'

function App() {

  return (
    <>
      <MainNavbar />
      {/* <Home /> */}
      <PatientList/>
      <Footer />
    </>
  )
}

export default App
