import React, { useState } from 'react';

export default function FreeDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data
    console.log('Form submitted:', formData);
    alert('Thank you for requesting a free demo!');
    // Clear form
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <section className="bg-dark text-white text-center py-5 mt-5">
      <div className="container" style={{ maxWidth: '500px' }}>
        <h2 className="mb-4">Request a Free Demo</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-start">
            <label htmlFor="service" className="form-label">Select a Service</label>
            <select
              className="form-select"
              id="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">-- Please select a service --</option>
              <option value="vcfo">VCFO</option>
              <option value="virtual-financial-planner">Virtual Financial Planner</option>
            </select>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="+1 234 567 890"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-light btn-lg w-100">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
