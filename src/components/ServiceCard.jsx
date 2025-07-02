import React from 'react';

const ServiceCard = ({ title, icon, alt, onClick }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6"
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      >
        <div className="border p-4 h-100 text-center bg-light rounded shadow-sm">
          <div className="text-decoration-none text-dark">
            <img src={icon} alt={alt || title} className="mb-3" style={{ height: '48px' }} />
            <h3 className="h5">{title}</h3>
          </div>
        </div>
    </div>
  );
};

export default ServiceCard;
