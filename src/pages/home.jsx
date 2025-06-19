import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServicesSection from '../components/ServicesSection';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

function Home() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  return (
    <section className="bg-dark text-white text-center py-5 mt-5">
      {(user && user.role!=="EMP") || (!user) ? (
        <div className="container" >
          {user && user.email && (
              <div className="   text-center fw-semibold fs-2 rounded-pill">
                 Welcome, {user.email}
              </div>
          )}
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
      ) : (<div style={{ minHeight: '180px' }} className="container">
        <p>emp dashboard</p>
      </div>)}
      
    </section>

  );
}

export default Home;