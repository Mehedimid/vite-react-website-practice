import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import {app}  from "../firebasse"
import { useState } from "react";


const Register = () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth(app)
    const [user, setUser] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(res=>{
      console.log(res);
      console.log(res.user);
      console.log(res.user.email);
      setUser(res.user.email)
      e.target.reset()
    })
    .catch(err=>{
      console.log(err);
    })
  }

  const handleGogleLogin = () => {
    console.log("clicked");
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user.email;
    console.log(user);
  }).catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
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
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Sign Up
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className={inputClass}
            style={{ outlineColor: "#6fc1ff" }}
          />
        </div>

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

        {/* Google Login Button */}
        <div className="flex justify-center mb-4">
          <button
            type="button"
            className="w-full py-3 flex items-center justify-center bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out shadow-sm"
            onClick={handleGogleLogin}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxw0QfYHXe6eSHgXz_8hUc_ukgERNiMUl-XhF9wMfQeMAfjsH82UGi5Q&s"
              alt="Google Logo"
              className="w-5 h-5 mr-3"
            />
            <span className="text-gray-700 font-semibold">
              Sign in with Google
            </span>
          </button>
        </div>
      </form>
      {
        user && <h2>user email : {user}</h2>
      }
    </div>
  );
};

export default Register;
