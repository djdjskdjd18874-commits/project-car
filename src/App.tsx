
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './componats/Nav'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Footer from './componats/Footer'

import Car from './pages/Car'

import product from './static/product'
import SignupPage from './pages/SignupPage'




 

function App() {
 
  return (
    <> 
     <Nav/>
     <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Car" element={<Car />} />
     
     <Route path="/SignupPage" element={<SignupPage />} />
     </Routes>
     <Footer/>
     
    </>
  )
}

export default App
