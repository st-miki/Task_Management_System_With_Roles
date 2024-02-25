// AuthContext.js
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    checkLoggedIn();
  }, []);

  const signup = async (userData) => {
    try {
      await axios.post('/api/signup', userData);
      // After successful signup, login the user
      await login(userData.email, userData.password);
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/login', { email, password });
      setCurrentUser(response.data.user);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('token');
  };

  const checkLoggedIn = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios.get('/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCurrentUser(response.data.user);
      } catch (error) {
        console.error('Error checking logged in user:', error);
        setCurrentUser(null);
        localStorage.removeItem('token');
      }
    }
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
