import React, { useState } from 'react';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    alert('Your appointment has been booked!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: '',
    });
  };

  return (
    <section className="bg-dark text-white text-center py-5 mt-5">
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 className="mb-4">Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">Email Address</label>
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
          <div className="row">
            <div className="col-md-6 mb-3 text-start">
              <label htmlFor="date" className="form-label">Preferred Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3 text-start">
              <label htmlFor="time" className="form-label">Preferred Time</label>
              <input
                type="time"
                className="form-control"
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="message" className="form-label">Message (Optional)</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              placeholder="Any specific requests?"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-outline-light btn-lg w-100">
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
