
import './App.css'
//import { useTable } from 'react-table';
import { Footer } from './components/Footer/footer'
import { Home } from './components/HomePage/home'
import { MainNavbar } from './components/navbar'

function App() {

  return (
    <>
      <MainNavbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
