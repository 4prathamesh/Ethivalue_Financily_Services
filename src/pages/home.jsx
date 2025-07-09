import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ServicesSection from '../components/ServicesSection';
import { AuthContext } from '../context/AuthContext';
import WhoWeServeSection from '../components/WhoWeServeSection';
function Home() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  return (
    <section className="bg-dark text-white text-center py-5 mt-5">
      {(user && user.role !== "EMP") || !user ? (
        <div className="container">

          {/* Welcome Message */}
          {user?.email && (
            <div className="text-center fw-semibold fs-2 rounded-pill mb-4">
              Welcome, {user.email}
            </div>
          )}

          {/* Hero Section */}
          <h1 className="display-4 fw-bold">
            To achieve financial growth, goal and freedom with us
          </h1>
          <p className="lead mt-3 mb-4">
            Join us and start your journey towards financial freedom today.
          </p>

          <div className="d-flex justify-content-center gap-3 mb-5">
            <button
              className="btn btn-outline-light btn-lg"
              onClick={() => navigate('/free-demo')}
            >
              Free Demo
            </button>
            <button
              className="btn btn-outline-light btn-lg"
              onClick={() => navigate('/book-appointment')}
            >
              Book Appointment
            </button>
          </div>

          {/* Why We Start */}
          <div
            className="card border-0 rounded-4 shadow-sm p-4 mt-5 why-we-start-card"
            style={{ backgroundColor: "#2e2e2e", color: "#f5f5f5" }}
          >
            <h2 className="fw-bold text-center mb-3 position-relative section-title">
              <i className="bi bi-flag-fill text-danger me-2"></i>Why We Start
            </h2>

            <hr className="mb-4 opacity-50" />

            <p className="lead text-center">
              Many enterprises struggle to survive, comply with regulations, or achieve sustainable growth.
              Similarly, individuals and families often face challenges in managing financial planning and investments effectively.
            </p>

            <p className="lead text-center mt-4">
              Hiring a Chief Financial Officer (CFO) or a personal financial planner can be costly and inaccessible.
              At <strong className="text-warning">EthiValue</strong>, we bridge this gap by offering <strong>Virtual CFO</strong> and
              <strong> Virtual Financial Planning</strong> services at minimal cost—delivering expert, professional advice to help you meet
              your financial goals confidently.
            </p>
          </div>


          {/* Services Section */}
          <div id="services" className="mt-5">
            <ServicesSection />
          </div>

          {/* Why Choose EthiValue */}
          <div className="card border-0 rounded-4 shadow p-4 mt-5 why-ethivalue-card text-white" style={{ backgroundColor: "#2e2e2e" }}>
            <div className="row align-items-center g-4 flex-column flex-md-row px-3">

              <div className="col-md-5 text-center" style={{
                maxHeight: '280px',
                objectFit: 'contain',
                backgroundColor: 'transparent'
              }} >
                <img
                  src="/images/question-mark-transparent.png"
                  alt="Why Choose EthiValue"
                  style={{ maxHeight: '280px', objectFit: 'contain', backgroundColor: 'transparent' }}
                />

              </div>
              <div className="col-md-7">
                <h2 className="fw-bold text-center text-md-start mb-3 section-title">
                  <i className="bi bi-lightbulb-fill text-warning me-2"></i>Why Choose <span className="text-warning">EthiValue</span>
                </h2>
                <hr className="opacity-50 mb-3" />
                <p className="lead text-center text-md-start">
                  We provide expert and professional services to transform struggling businesses into thriving enterprises.
                  Our team helps you achieve <strong className="text-success">financial freedom</strong> and a <strong className="text-success">debt-free life</strong>
                  through tailored guidance, strategic planning, and actionable solutions designed to meet your unique needs.
                </p>
              </div>
            </div>
          </div>


          {/* Who We Serve */}
          <WhoWeServeSection />

          {/* Why Choose Us */}
          <div id="whyChooseUs"
            className="card border-0 rounded-4 shadow-sm p-4 mt-5 why-choose-us-card" 
            style={{ backgroundColor: "#2e2e2e", color: "#f5f5f5" , paddingTop: "120px",
    marginTop: "-100px", }}
          >
            <h2 className="fw-bold text-center mb-3 position-relative section-title">
              <i className="bi bi-stars me-2 text-warning"></i>Why Choose Us
            </h2>

            <hr className="mb-4 opacity-50" />

            <p className="lead text-center">
              At <strong className="text-warning">Ethix Wealth LLP</strong>, we believe that wealth creation isn’t just about chasing returns —
              it’s about aligning money with purpose. Our goal-based financial planning, disciplined risk management, and personalized investment
              strategies help individuals and families make smarter decisions across mutual funds, insurance, tax, and retirement.
              We focus on long-term financial well-being with transparent and client-first advisory.
            </p>

            <p className="lead text-center mt-4">
              For <strong>startups and growing businesses</strong>, we offer <strong>Virtual CFO</strong> support to bring clarity, structure,
              and investor readiness to your financials. From cash flow management and compliance to pitch decks and investor connects,
              we help you scale sustainably. Whether you're bootstrapped or venture-bound, we become your financial backbone —
              so you can focus on innovation and growth.
            </p>
          </div>


          {/* About Us */}
          <div className="card border-0 rounded-4 shadow-sm p-4 mt-5" id='about'
            style={{ backgroundColor: '#2e2e2e', color: '#f5f5f5' }}>
            <h2 className="fw-bold text-center border-bottom pb-2 mb-4">
              <i className="bi bi-info-circle-fill me-2"></i>About Us
            </h2>
            <p className="lead">
              We are a team of finance professionals committed to delivering <strong>360° financial solutions</strong> for individuals,
              families, startups, and small & mid-size growing businesses. Our focus is on personalized financial planning, investment strategies,
              and business support designed to help you achieve your financial goals.
            </p>
            <p className="lead mt-3">
              Our mission is to empower clients with personalized, data-driven financial strategies that support informed decisions and long-term success.
              Whether you're looking to build wealth, streamline your business finances, or secure your future, we provide expert guidance every step of the way.
            </p>
          </div>


        </div>
      ) : (
        <div style={{ minHeight: '180px' }} className="container">
          <p>emp dashboard</p>
        </div>
      )}
    </section>
  );
}

export default Home;
