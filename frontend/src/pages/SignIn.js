import React, { useState, useContext } from 'react'
import axios from 'axios'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

const SignIn = () => {
  const { url,setToken } = useContext(StoreContext)
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleEvent = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({ ...data, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${url}/api/user/login`, data)
      if (response.data.success) {
        toast.success(response.data.message)
        const token=response.data.token
        localStorage.setItem('token', token)
        setToken(token)
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || "Something went wrong!")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign in to your account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            onChange={handleEvent}
            name="email"
            type="email"
            placeholder="Your email"
            value={data.email}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <input
            onChange={handleEvent}
            name="password"
            type="password"
            placeholder="Your password"
            value={data.password}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-lg transition transform hover:scale-[1.02]"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-600 text-center">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate('/signup')}
            className="text-indigo-600 font-semibold hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  )
}

export default SignIn
