import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setformData({ ...formData, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/users/register", formData);
      toast.success(response.data.message);
      Cookies.set('token', response.data.token)
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
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-700">
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
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-black">
        <h2 className="text-2xl font-bold text-center text-white">Register</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-black">Username</label>
            <input onChange={handleChange} value={formData.username} name='username' type="text" className="mt-1 w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF734E]" placeholder="Enter your username" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-black">Email</label>
            <input onChange={handleChange} value={formData.email} name='email' type="email" className="mt-1 w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF734E]" placeholder="Enter your email" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-black">Password</label>
            <input onChange={handleChange} value={formData.password} name='password' type="password" className="mt-1 w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF734E]" placeholder="Create a password (min 6 digits)" minLength="6" />
          </div>
          <button type="submit" className="w-full mt-6 p-3 bg-[#FF734E] text-white rounded-lg hover:bg-orange-600">Register</button>
        </form>
        <p className="mt-4 text-sm text-black text-center">Already have an account? <a href="/login" className="text-[#FF734E]">Login</a></p>
      </div>
    </div>
  )
}

export default Register