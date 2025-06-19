import React from 'react';

const ProfilePage = ({ userData }) => {
  if (!userData) return <p>Loading...</p>;

  const { name, email, contactNo, scheduledAppointments, completedAppointments } = userData;

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
          <h4 className="card-title fw-bold text-secondary mb-3">Scheduled Appointments</h4>

          {scheduledAppointments.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-primary">
                  <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Purpose</th>
                    <th>Status</th>
                    <th>Scheduled At</th>
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No scheduled appointments found.</p>
          )}

          {/* Optional: Completed Appointments */}
          {completedAppointments.length > 0 && (
            <>
              <h5 className="mt-4 text-secondary">Completed Appointments</h5>
              <ul className="list-group">
                {completedAppointments.map(appt => (
                  <li key={appt.id} className="list-group-item">
                    {appt.purpose} - {new Date(appt.scheduledAt).toLocaleString()}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default ProfilePage;
