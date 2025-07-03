import React from 'react';
import ProfilePage from '../pages/ProfilePage';

// Sample userData
const sampleUserData = {
  id: 2,
  name: "Rajaram",
  email: "rajarammagar2896@gmail.com",
  contactNo: "8624955714",
  scheduledAppointments: [
    {
      id: 1,
      userId: 2,
      employeeId: 3,
      purpose: "VCFO",
      status: "SCHEDULED",
      type: "appointment",
      scheduledAt: "2025-07-01T10:00:00"
    },
    {
      id: 2,
      userId: 2,
      employeeId: 3,
      purpose: 'VCFO',
      status: 'SCHEDULED',
      type: 'demo',
      scheduledAt: '2025-06-09T22:25:51.347116',
      createdAt: '2025-06-09T22:25:51.347116',
    }
  ],
  completedAppointments: [
    {
      id: 3,
      userId: 2,
      employeeId: 3,
      purpose: "VCFO Follow-up",
      status: "COMPLETED",
      type: "appointment",
      scheduledAt: "2025-06-01T14:00:00"
    },
    {
      id: 4,
      userId: 2,
      employeeId: 3,
      purpose: "Tax Filing",
      status: "COMPLETED",
      type: "demo",
      scheduledAt: "2025-05-15T11:30:00"
    }
  ]
};

const ProfileWrapper = () => <ProfilePage userData={sampleUserData} />;

export default ProfileWrapper;
