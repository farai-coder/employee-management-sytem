import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const signUp = (e) => {
    if (email.length === 0 && password.length === 0){
    setError("Please fill in all fields");
    return;
    }
    else if(password.length < 6){
    setError("Password must be at least 6 characters");
    }
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container sign-up-container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <form onSubmit={signUp}>
            <h1 className="text-center mb-4">Create Account</h1>
            <div className="form-group mb-3">
              <label for="email" className="form-control-label">Email address</label>
              <input 
                type="email"
                className="form-control shadow-lg"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="form-group mb-3">
              <label for="password" className="form-control-label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control shadow-lg"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"

              />
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input shadow-lg"
                  id="showPassword"
                  checked={showPassword}
                  onChange={handleShowPassword}
                />
                <label className="form-check-label" for="showPassword">Show Password</label>
              </div>
            </div>
            <Link to={`/login`} className="action-link">
              <button type="submit" className="w-100 btn btn-lg btn-secondary">Sign Up</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;