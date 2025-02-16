import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login'
import Register from '../pages/Register'
import LandingPage from '../pages/LandingPage';

const AllRoutes = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/' element={<LandingPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AllRoutes