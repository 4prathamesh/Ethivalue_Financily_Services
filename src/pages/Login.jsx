import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';


export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login check
    if (email === 'test@2.com' && password === 'password') {
      login(email);
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <section className="bg-dark text-white text-center py-5 mt-5">
      <div className="container" style={{ maxWidth: '500px' }}>
        <h2 className="mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-between mb-4">
            <a href="/forgot-password" className="text-light text-decoration-none">
              Forgot Password?
            </a>
            <a href="/registration-form" className="text-light text-decoration-none">
              Register
            </a>
          </div>
          <button type="submit" className="btn btn-outline-light btn-lg w-100">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
