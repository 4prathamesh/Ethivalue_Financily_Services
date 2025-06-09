import React from 'react';

const ServiceCard = ({ title, icon, link, alt }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="border p-4 h-100 text-center bg-light rounded shadow-sm">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
          <img src={icon} alt={alt || title} className="mb-3" style={{ height: '48px' }} />
          <h3 className="h5">{title}</h3>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
