import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined, DashboardOutlined, ScheduleOutlined } from '@ant-design/icons';
import { Outlet, Link } from 'react-router-dom';
import Dashboard from './Dashboard'; // Import Dashboard component
import TaskList from './TaskList'; // Import TaskList component

const { Header, Content, Footer, Sider } = Layout;

const TaskManager = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header" style={{ padding: 0 }}>
        <div className="logo" style={{ float: 'left', color: 'white', paddingLeft: '20px', marginTop: '-10px' }}>
          <h1>Logo</h1>
        </div>
        <div style={{ float: 'right', paddingRight: '20px' }}>
          <Avatar size="large" icon={<UserOutlined />} />
          <span style={{ color: 'white', paddingLeft: '10px' }}>Username</span>
        </div>
      </Header>
      <Layout>
        <Sider theme="dark">
          <div className="logo" />
          <Menu theme="dark" mode="vertical">
            <Menu.Item key="1" icon={<DashboardOutlined />} style={{ color: 'white' }}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ScheduleOutlined />} style={{ color: 'white' }}>
              <Link to="/tasks">Tasks</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ padding: '24px', minHeight: 280 }}>
            <Outlet /> {/* Render child routes */}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default TaskManager;
