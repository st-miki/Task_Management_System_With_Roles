import React, { useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import './Styles/SignUp.css'; // Importing external stylesheet

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/tasks');
    } catch {
      // Handle registration error
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <Form onFinish={handleSubmit} className="signup-form">
        <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input ref={emailRef} placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password ref={passwordRef} placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="signup-btn">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div className="login-link">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

export default SignUp;
