import React, { useState } from 'react';

const ProfilePage = ({ userData }) => {
  if (!userData) return <p>Loading...</p>;

  const { name, email, contactNo, scheduledAppointments, completedAppointments } = userData;

  // Toggle state: true = show scheduled, false = show completed
  const [showScheduled, setShowScheduled] = useState(true);

  return (
    <div className="container mt-5 py-4 bg-light text-dark rounded">
      <h2 className="mb-4 text-center fw-bold text-primary">Client Profile</h2>
      <div className="row g-4">
        {/* Left Column – Client Info */}
        <div className="col-md-4">
          <div className="card shadow border-0">
            <div className="card-body">
              <h4 className="card-title fw-bold text-secondary mb-3">Personal Info</h4>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Contact No:</strong> {contactNo}</p>
            </div>
          </div>
        </div>

        {/* Right Column – Appointments */}
        <div className="col-md-8">
          <div className="card shadow border-0">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="card-title fw-bold text-secondary mb-0">
                  {showScheduled ? 'Scheduled Appointments' : 'Completed Appointments'}
                </h4>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => setShowScheduled(!showScheduled)}
                >
                  {showScheduled ? 'Show Completed' : 'Show Scheduled'}
                </button>
              </div>

              {showScheduled ? (
                scheduledAppointments.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="table-primary">
                        <tr>
                          <th>#</th>
                          <th>Type</th>
                          <th>Purpose</th>
                          <th>Status</th>
                          <th>Scheduled At</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scheduledAppointments.map((appt, index) => (
                          <tr key={appt.id}>
                            <td>{index + 1}</td>
                            <td className="text-capitalize">{appt.type}</td>
                            <td>{appt.purpose}</td>
                            <td>
                              <span className={`badge ${appt.status === 'SCHEDULED' ? 'bg-success' : 'bg-warning'}`}>
                                {appt.status}
                              </span>
                            </td>
                            <td>{new Date(appt.scheduledAt).toLocaleString()}</td>
                            <td>
                              <a
                                href="/profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-sm"
                              >
                                Join Call
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p>No scheduled appointments found.</p>
                )
              ) : (
                completedAppointments.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="table-primary">
                        <tr>
                          <th>#</th>
                          <th>Type</th>
                          <th>Purpose</th>
                          <th>Status</th>
                          <th>Completed At</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {completedAppointments.map((appt, index) => (
                          <tr key={appt.id}>
                            <td>{index + 1}</td>
                            <td className="text-capitalize">{appt.type}</td>
                            <td>{appt.purpose}</td>
                            <td>
                              <span className="badge bg-success">
                                {appt.status}
                              </span>
                            </td>
                            <td>{new Date(appt.scheduledAt).toLocaleString()}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-secondary btn-sm"
                                disabled
                              >
                                Completed
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                ) : (
                  <p>No completed appointments found.</p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
