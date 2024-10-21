import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebasse'
import { Link } from 'react-router-dom'

const Login = () => {
  const [err, setErr] = useState("")
  
  const handleSubmit = e =>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value ;
    const password = form.password.value ;
    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user?.email);
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    setErr(errorMessage)
  });
  }

  const labelClass = "block text-gray-700 text-sm font-bold mb-2";
  const inputClass = "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundColor: "mintcream" }}
    >
      <form
        onSubmit={handleSubmit}  // Your registration submission function
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Sign In
        </h2>
  
        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className={inputClass}
            style={{ outlineColor: "#6fc1ff" }}
          />
        </div>
  
        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className={labelClass}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className={inputClass}
            style={{ outlineColor: "#6fc1ff" }}
          />
        </div>
  
        {/* Submit Button */}
        <div className="flex justify-center mb-4">
          <button
            type="submit"
            className="w-full py-3"
            style={{ backgroundColor: "#6fc1ff", color: "white" }}
          >
            Sign Up
          </button>
        </div>
  
        {/* Redirect to Login Page */}
        <div className="text-center">
          <p className="text-gray-700">
            Do not have an account?{" "}
            <Link to="/sign-up" className="text-blue-500 hover:underline">
              Log in here
            </Link>
          </p>
          {
err && <p className='text-red-500 font-semibold'>{err}</p>
          }
        </div>
      </form>
    </div>
  );
  
}

export default Login