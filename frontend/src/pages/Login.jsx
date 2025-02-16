import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie'
import Navbar from '../components/Navbar';

const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setformData({ ...formData, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/login", formData);
      toast.success(response.data.message);
      Cookies.set('token',response.data.token)
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          toast.error(error.response.data.message);
        } else if (error.response.status === 400) {
          toast.error(error.response.data.message)
        } else {
          toast.error("An error occurred.");
        }
      }
    }
  };
  return (
    <div className='pt-10 min-h-screen bg-gradient-to-b from-purple-700 to-transparent'>
      <Navbar/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex items-center justify-center mt-20">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-black">
          <h2 className="text-2xl font-bold text-center text-white">Login</h2>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-black">Email</label>
              <input value={formData.email} onChange={handleChange} name='email' type="email" className="mt-1 w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF734E]" placeholder="Enter your email" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-black">Password</label>
              <input value={formData.password} onChange={handleChange} name='password' type="password" className="mt-1 w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF734E]" placeholder="Enter your password" />
            </div>
            <button type="submit" className="w-full mt-6 p-3 bg-[#FF734E] text-white rounded-lg hover:bg-orange-600">Login</button>
          </form>
          <p className="mt-4 text-sm text-black text-center">Don't have an account? <a href="/register" className="text-[#FF734E]">Sign up</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login