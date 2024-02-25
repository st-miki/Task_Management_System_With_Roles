// Dashboard.js
import React from 'react';
import AdminDashboard from '../Admin/AdminDashboard';
import ManagerDashboard from '../Manager/ManagerDashboard';
import UsersDashboard from '../Users/UsersDashboard';

const Dashboard = ({ userRole }) => {
  switch (userRole) {
    case 'admin':
      return <AdminDashboard />;
    case 'manager':
      return <ManagerDashboard />;
    case 'user':
      return <UsersDashboard/>;
    default:
      return <div>No dashboard available for this role.</div>;
  }
};

export default Dashboard;
