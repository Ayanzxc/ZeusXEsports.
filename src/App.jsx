import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Location from './pages/Location'
import NotFound from './pages/Notfound'
import GenericLayout from './layout/generic'
import Games from './pages/Games'
import Specs from './pages/Specs'
import Contact from './pages/Contact'
import LoginPage from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import ForgotPassword from './pages/ForgotPassword'
//import './App.css'

function App() {

  return (
    <>
    
      <Routes>
        
        <Route path="/" element={<LoginPage/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        

        <Route element={<GenericLayout/>}>
          
        <Route path="/login" element={<LoginPage />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Location" element={<Location/>} />
          <Route path="/Games" element={<Games/>} />
          <Route path="/Specs" element={<Specs/>} />
          <Route path="/Contact" element={<Contact/>} />

      
         
          
          
        </Route>
      </Routes>
    
    </>
  )
}

export default App
