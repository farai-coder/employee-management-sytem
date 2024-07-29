import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container-fluid py-3" style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="row" style={{ width: '100%' }}>
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto" style={{ textAlign: 'center' }}>
          <div className="logo">
            <h1 style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 10 }}>Employee Management System</h1>
          </div>
          <h2 style={{ fontSize: 24, marginBottom: 10 }}>Welcome to Employee Management System</h2>
          <p style={{ fontSize: 18, marginBottom: 10 }}>Manage your employees' information, leaves, and notifications in one place.</p>
          <ul style={{ fontSize: 18, listStyle: 'none', padding: 0, marginBottom: 10 }}>
            <li>Employee profiles</li>
            <li>Leave management</li>
            <li>Notification system</li>
            <li>Employee performance tracking</li>
          </ul>
          <p style={{ fontSize: 18, marginBottom: 20, color: '#6495ed', fontWeight: 'bold' }}>Already have an account? <a href="login.html" style={{ textDecoration: 'none', color: '#007bff' }}>Log In</a> | New user? <a href="signup.html" style={{ textDecoration: 'none', color: '#007bff' }}>Sign Up</a></p>
          <div className="buttons">
          <Link to={`/login`} className="action-link">
            <button className="btn btn-primary btn-lg me-2" style={{ fontSize: 18, padding: '10px 20px', backgroundColor: '#007bff', borderColor: '#007bff', borderRadius: 10 }}>Log In
            </button>
          </Link>
          <Link to={`/sign_up`} className="action-link">
            <button className="btn btn-secondary btn-lg" style={{ fontSize: 18, padding: '10px 20px', backgroundColor: '#6495ed', borderColor: '#6495ed', borderRadius: 10 }}>Sign Up  
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;