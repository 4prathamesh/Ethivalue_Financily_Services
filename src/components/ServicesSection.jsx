import React, { useState } from 'react';
import financialPlanIcon from '../img/financialPlan.png';
import investmentAdviceIcon from '../img/invAdv.png';
import awsPorgram from '../img/awsPorgram.webp';
import insuranceP from '../img/insuranceP.png';
import TaxPlanning from '../img/taxPlaning.png';
import Retirement from '../img/retirement.webp';

const services = [
  {
    title: 'Wealth Management & Financial Planning',
    icon: financialPlanIcon,
    description: `<strong>We assist in building and preserving wealth through:</strong>

    - Mutual fund investments (SIP, lump-sum, ELSS)
    - Goal-based financial planning (retirement, child education, etc.)
    - Portfolio monitoring, reviews, and rebalancing
    - Tax planning and insurance advisory`,
  },
  {
    title: 'Insurance Planning & Risk Management',
    icon: investmentAdviceIcon,
    description: `<strong>We provide comprehensive protection solutions with:</strong>

    - Life, health, and general insurance plans tailored to your needs
    - Personalized risk assessment and coverage analysis
    - Claims support and regular policy reviews`,
  },
  {
    title: 'Startup Advisory & Investor Networking',
    icon: awsPorgram,
    description: `<strong>We support startups in achieving investor readiness through:</strong>

    - Business model development and financial planning
    - Pitch deck creation and valuation guidance
    - Connections with angel investors and venture capitalists.`,
  },
  {
    title: 'Investor Connect & Engagement Events',
    icon: insuranceP,
    description: `<strong>We bridge the gap between businesses and investors by organizing:</strong>

    - Curated investor meets and startup pitch sessions
    - Showcases of financial and funding opportunities
    - Knowledge-sharing sessions on investment trends and strategies
    - Expert panels and sector-focused discussions`,
  },
  {
    title: 'Tax Planning & Compliance',
    icon: TaxPlanning,
    description: `<strong>We ensure tax efficiency and regulatory compliance through:</strong>

    - Strategic tax-saving plans (Sections 80C, 80D, etc.)
    - Income tax return filing and documentation support
    - GST, TDS, and other statutory advisory services`,
  },
  {
    title: 'Virtual CFO Services',
    icon: Retirement,
    description: `<strong>We deliver strategic financial leadership through:</strong>

    - Budgeting, cash flow forecasting, and financial reporting
    - MIS preparation and investor communication
    - Compliance with accounting and regulatory standards`,
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCloseModal = () => setSelectedService(null);

  return (
    <section className="py-5 bg-dark">
      <div className="container text-center">
        <h2 className="mb-5">Our Services</h2>
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 mb-4"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedService(service)}
            >
              <div className="service-box">
                <div className="service-icon">
                  <img
                    src={service.icon}
                    alt={service.title}
                    style={{ maxWidth: '100%' }}
                  />
                </div>
                <h5 className="service-title">{service.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          tabIndex="-1"
          onClick={handleCloseModal}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedService.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={selectedService.icon}
                  alt={selectedService.title}
                  className="mb-3"
                  style={{ maxWidth: '100px' }}
                />
                <div
                  style={{ whiteSpace: 'pre-line' }}
                  dangerouslySetInnerHTML={{ __html: selectedService.description }}
                ></div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
