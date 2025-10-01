import React, { useState, useContext } from 'react'
import axios from 'axios'
import { StoreContext } from '../context/StoreContext'
import toast from 'react-hot-toast'
import { Link,useNavigate } from 'react-router-dom'

const SignUp = () => {
  const { url } = useContext(StoreContext)
  const navigate=useNavigate()
  const [data, setData] = useState({
    name: '',
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
      const response = await axios.post(`${url}/api/user/register`, data)
      if (response.data.success) {
        toast.success(response.data.message)
        setData({ name: '', email: '', password: '' })
        navigate('/signin')

      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 animate-pulse">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={handleEvent}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={data.name}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
          />
          <input
            onChange={handleEvent}
            type="email"
            name="email"
            placeholder="Email ex: abay@gmail.com"
            required
            value={data.email}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
          />
          <input
            onChange={handleEvent}
            type="password"
            name="password"
            placeholder="Your Password"
            required
            value={data.password}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
          />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" required className="w-4 h-4" />
            By checking this box, I agree to all terms and Privacy regulations.
          </label>
          <button
            type="submit"
            className="bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Submit
          </button>
        </form>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="text-red-500 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
