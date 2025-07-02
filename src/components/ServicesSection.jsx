import React, { useState } from 'react';
import financialPlanIcon from '../img/financialPlan.png';
import investmentAdviceIcon from '../img/invAdv.png';
import awsPorgram from '../img/awsPorgram.webp';
import insuranceP from '../img/insuranceP.png';
import TaxPlanning from '../img/taxPlaning.png';
import Retirement from '../img/retirement.webp';
import ChildrenEducationPlan from '../img/ChildrenEducationPlan.png';

const services = [
  {
    title: 'Financial Plan',
    icon: financialPlanIcon,
    description: 'Detailed financial planning for individuals and businesses.',
  },
  {
    title: 'Investment Advice',
    icon: investmentAdviceIcon,
    description: 'Professional advice to help grow your investments.',
  },
  {
    title: 'Investment Awareness Programs',
    icon: awsPorgram,
    description: 'Educational programs to increase your investment knowledge.',
  },
  {
    title: 'Insurance Planning',
    icon: insuranceP,
    description: 'Planning for your insurance needs and protection.',
  },
  {
    title: 'Tax Planning',
    icon: TaxPlanning,
    description: 'Strategies to optimize your tax liability.',
  },
  {
    title: 'Retirement Planning',
    icon: Retirement,
    description: 'Prepare for a secure and comfortable retirement.',
  },
  {
    title: 'Children Education Plan',
    icon: ChildrenEducationPlan,
    description: 'Plan ahead for your children’s education expenses.',
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
                <p>{selectedService.description}</p>
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
