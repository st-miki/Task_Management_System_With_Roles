// Teams.js
import React from 'react';
import AdminTeams from '../Admin/AdminTeams';
import ManagerTeams from '../Manager/ManagerTeams';
import UsersTeams from '../Users/UsersTeams';

const Teams = ({ userRole }) => {
  switch (userRole) {
    case 'admin':
      return <AdminTeams />;
    case 'manager':
      return <ManagerTeams />;
    case 'user':
      return <UsersTeams />;
    default:
      return <div>No teams available for this role.</div>;
  }
};

export default Teams;
