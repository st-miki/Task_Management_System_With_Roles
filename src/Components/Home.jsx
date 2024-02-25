import React from 'react';
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'; // Import the CSS file

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <p className="title">Welcome to Your Task Manager</p>
        <Paragraph className="paragraph">
          Manage your tasks efficiently with our collaborative task management system.
        </Paragraph>
        <div className="buttonContainer">
          <Button type="primary" size="large" className="button">
            <Link to="/login" className="link">Log In</Link>
          </Button>
          <Button type="default" size="large" className="button">
            <Link to="/signup" className="link">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
