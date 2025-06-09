import React from 'react';
import ServiceCard from './ServiceCard';
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
    link: '',
  },
  {
    title: 'Investment Advice',
    icon: investmentAdviceIcon,
    link: '',
  },
  {
    title: 'Investment Awareness Programs',
    icon: awsPorgram,
    link: '',
  },
  {
    title: 'Insurance Planning',
    icon: insuranceP,
    link: '',
  },
  {
    title: 'Tax Planning',
    icon: TaxPlanning,
    link: '',
  },
  {
    title: 'Retirement Planning',
    icon: Retirement,
    link: '',
  },
  {
    title: 'Children Education Plan',
    icon: ChildrenEducationPlan,
    link: '',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-5 bg-dark">
      <div className="container text-center">
        <h2 className="mb-5">Our Services</h2>
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="service-box">
                <div className="service-icon">
                  <img src={service.icon} alt={service.title} style={{ maxWidth: '100%' }} />
                </div>
                <h5 className="service-title">{service.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default ServicesSection;
