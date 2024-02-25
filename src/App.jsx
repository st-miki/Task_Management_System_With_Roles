import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute'; // Adjust the import path as necessary
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import TaskList from './Components/TaskPage/TaskList';
import Teams from './Components/TaskPage/Teams';
import TaskManager from './Components/TaskManager'; // Import the TaskManager component
import Dashboard from './Components/TaskPage/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* For testing purposes, bypass authentication for /dashboard */}
        <Route path="/" element={<TaskManager/>} >
        {/* <Route path="/TaskManager" element={<PrivateRoute />}>
          <Route index element={<TaskManager />} />
        </Route> */}
          <Route path="/tasks" element={<TaskList userRole="user"/>} />
          <Route path="/dashboard" element={<Dashboard userRole="admin"/>} />
          <Route path="/teams" element={<Teams userRole="user"/>} />
        </Route>
        
        {/* <Route path="/tasks" element={<PrivateRoute />}>
          <Route index element={<TaskList />} />
          <Route path=":id" element={<TaskDetails />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
