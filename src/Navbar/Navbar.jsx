import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebasse";
import { signOut } from "firebase/auth";
import { AuthContext } from "../components/AuthProvider";

const Navbar = () => {
  const {user} = useContext(AuthContext)
  console.log(user?.email);
  const [err, setErr] = useState("");
  const [logOutSuccess, setLogOutSuccess] = useState("");

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/water-bottle">Water Bottle</Link>
      </li>
      <li>
        <Link to="/countries">Countries</Link>
      </li>
      <li>
        <Link to="/login">login</Link>
      </li>
      <li>
        <Link to="/sign-up">sign-up</Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    console.log("hit at handle log out");
    signOut(auth)
      .then(() => {
        setLogOutSuccess("Sign-out successful");
      })
      .catch((error) => {
        setErr(error.message);
      });
  };

  return (
    <div className="navbar bg-green-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>

            {/* === small device links === */}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      {/* === large device links === */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {
          user ? <button className="btn" onClick={handleLogOut}>
          Log Out
        </button> : <p>go to login</p>
        }
        {user ? 
          <p> {user?.email} </p> : <p></p>
        }
      </div>
    </div>
  );
};

export default Navbar;
