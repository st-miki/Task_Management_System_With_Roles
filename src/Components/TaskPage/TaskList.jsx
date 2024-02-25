import React from 'react';
import AdminTaskList from '../Admin/AdminTaskList';
import ManagerTaskList from '../Manager/ManagerTaskList';
import UsersTaskList from '../Users/UsersTaskList';

const TaskList = ({ userRole }) => {
  switch (userRole) {
    case 'admin':
      return <AdminTaskList />;
    case 'manager':
      return <ManagerTaskList />;
    case 'user':
      return <UsersTaskList />;
    default:
      return <div>No task list available for this role.</div>;
  }
};

export default TaskList;
