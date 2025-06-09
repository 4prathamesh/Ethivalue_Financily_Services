import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    preference: '',
    contact: '',
    email: '',
    address: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // TODO: Handle registration logic here
  };

  return (
    <section className="bg-dark text-white text-center py-5 mt-5">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 className="mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Industry Name / Sector</label>
            <input
              type="text"
              name="industry"
              className="form-control"
              value={formData.industry}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Preference</label>
            <select
              name="preference"
              className="form-select"
              value={formData.preference}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Preference --</option>
              <option value="VCFO">VCFO</option>
              <option value="Virtual Financial Planning">Virtual Financial Planning</option>
            </select>
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Contact Number</label>
            <input
              type="tel"
              name="contact"
              className="form-control"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Address</label>
            <textarea
              name="address"
              className="form-control"
              rows="2"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-flex justify-content-between mb-4">
            <a href="/login" className="text-light text-decoration-none">
              Already have an account? Login
            </a>
          </div>

          <button type="submit" className="btn btn-outline-light btn-lg w-100">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
