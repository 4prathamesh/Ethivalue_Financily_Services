import React, { useState } from 'react';

const whoWeServeData = [
    {
        title: "Professionals & Business Owners",
        icon: "bi-briefcase-fill",
        description:
            "We assist self-employed professionals, entrepreneurs, and business owners by managing their personal and business finances. While you focus on your core profession, we focus on building and growing your financial well-being through tailored wealth strategies.",
    },
    {
        title: "Salaried Individuals & Families",
        icon: "bi-people-fill",
        description:
            "We help salaried individuals and their families achieve financial freedom through structured investment planning, goal-based strategies, and risk management—ensuring a life free from financial stress.",
    },
    {
        title: "Early-Stage Startups",
        icon: "bi-lightbulb-fill",
        description:
            "We work with emerging startups to improve their financial structure, conduct comprehensive financial health assessments, and prepare for fundraising. Our network also enables meaningful connections with angel investors to support growth and scalability.",
    },
    {
        title: "Small & Mid-Sized Enterprises (SMEs)",
        icon: "bi-bar-chart-fill",
        description:
            "Our Virtual CFO services empower growing businesses with expert financial oversight. From cash flow forecasting to strategic advisory, we provide the insights and reporting needed for confident, data-driven decision-making.",
    },
];


function WhoWeServeSection() {
    const [selectedGroup, setSelectedGroup] = useState(null);

    const handleCloseModal = () => {
        setSelectedGroup(null);
    };

    return (
        <section className="bg-dark text-white py-5" id="whoWeserve">
            <div className="container text-center">
                <h2 className="fw-bold mb-5">
                    <i className="bi bi-people-fill me-2"></i>Who We Serve
                </h2>
                <div className="row justify-content-center">
                    {whoWeServeData.map((group, index) => (
                        <div
                            key={index}
                            className="col-md-6 col-lg-4 mb-4"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setSelectedGroup(group)}
                        >
                            <div className="who-we-serve-card text-center p-4 h-100">
                                <div className="icon mb-3">
                                    <i className={`bi ${group.icon} fs-1 text-primary`}></i>
                                </div>
                                <h5 className="fw-semibold">{group.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {selectedGroup && (
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
                                <h5 className="modal-title">{selectedGroup.title}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleCloseModal}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body text-start">
                                <p>{selectedGroup.description}</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={handleCloseModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default WhoWeServeSection;
