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

          {/* Why We Start */}
          <div style={{ backgroundColor: '#222831', color: '#DFD0B8' }} className=" text-white rounded shadow p-4 mt-5 text-start">
            <h2 className="fw-bold text-center">Why We Start</h2>
            <p className="lead mt-3">
              We have observed that many enterprises struggle to survive, meet compliance requirements,
              or achieve significant business growth and expansion. Similarly, individuals and families
              often face challenges in managing financial planning and investments effectively.
            </p>
            <p className="lead">
              Hiring a Chief Financial Officer (CFO) for businesses or a financial planner for families
              can be difficult and costly. To address these challenges, we offer virtual CFO and virtual
              financial planning services at a minimal cost, providing expert and professional advice to
              support businesses and individuals in achieving their financial goals.
            </p>
          </div>

          <ServicesSection />
          <div>
            <h2 className="fw-bold">Why Choose EthiValue</h2>
            <p className="lead mt-3">
              We provide expert and professional services to transform struggling businesses into thriving enterprises. 
              Our team helps you achieve financial freedom and a debt-free life through tailored guidance and strategic solutions.
            </p>
          </div>
        </div>
      ) : (<div style={{ minHeight: '180px' }} className="container">
        <p>emp dashboard</p>
      </div>)}
      
    </section>

  );
}

export default Home;