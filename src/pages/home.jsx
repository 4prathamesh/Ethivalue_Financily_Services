import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServicesSection from '../components/ServicesSection';
function Home() {
    const navigate = useNavigate();
    return ( 
        <section className="bg-dark text-white text-center py-5 mt-5">
  <div className="container">
    <h1 className="display-4 fw-bold">
      To achieve financial growth, goal and freedom with us
    </h1>
    <p className="lead mt-3 mb-4">
      Join us and start your journey towards financial freedom today.
    </p>
    <div className="d-flex justify-content-center gap-3">
      <button className="btn btn-outline-light btn-lg" onClick={() => navigate('/free-demo')}>
        Free Demo
      </button>
      <button className="btn btn-outline-light btn-lg" onClick={() => navigate('/book-appointment')}>
        Book Appointment
      </button>
    </div>
    <ServicesSection />
  </div>
</section>

    );
}

export default Home;