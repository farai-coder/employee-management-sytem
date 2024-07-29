
import React from "react";
import {FaHome, FaCamera, FaCameraRetro, } from "react-icons/fa"
import { Link } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

function NavBar(){
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };
    return(
        <nav className="navbar navbar-expand-lg bg-secondary ">
          <div className="container-fluid">
            <h7>Employee management</h7>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={"/employees"}>Employees</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-30" to={"/leaves"}>Leaves</Link>
                </li>
                <li className="nav-item mg-3">
                  <Link className="nav-link" to={"/performances"}>Perfomance</Link>
                </li>
                <li className="nav-item mg-3">
                  <Link className="nav-link" to={"/notifications"}>Notifications</Link>
                </li>
                <li className="nav-item ml-3">
                  <Link className="nav-link" to={"/login"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign_up"} >Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-30" to={"/login"}><FaSignOutAlt onClick={userSignOut} />
                  </Link>
                </li>
              </ul>
              
            </div>
          </div>
      </nav>
    )
}
export default NavBar;