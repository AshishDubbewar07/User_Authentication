import React from 'react'
import './index.css'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import  ProtectedRoute  from './protectedRoute/ProtectedRoute'
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
            }/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        <ToastContainer/>
    </Router>
  )
}

export default App
