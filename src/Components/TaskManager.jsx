import React from 'react';
import { Layout, Avatar, Tabs } from 'antd';
import { UserOutlined, DashboardOutlined, ScheduleOutlined, TeamOutlined, BellOutlined, MessageOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import '../Styles/TaskManager.css'; // Import the external stylesheet

const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs; // Destructure TabPane from Tabs

const TaskManager = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to handle tab change and navigate to the corresponding route
  const handleTabChange = (key) => {
    switch (key) {
      case '1':
        navigate('/dashboard');
        break;
      case '2':
        navigate('/tasks');
        break;
      case '3':
        navigate('/teams');
        break;
      default:
        break;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }} theme='light'>
      <Header className="header" theme='light'>
        <div className="logo">
          <span className='brand-title'>Task Manager</span>
        </div>
        <div className="user-info">
          <div className='icon-wrapper' style={{ marginRight: '10px' }}>
            <BellOutlined style={{fontSize:'22px'}}/>
          </div>          
          <div className='icon-wrapper' style={{ marginRight: '10px' }}>
            <MessageOutlined style={{fontSize:'22px'}}/>
          </div>
          <Avatar size="large" icon={<UserOutlined />} />
          <span style={{marginLeft:'5px'}}>Ayalqebet Zenabu</span>
        </div>
      </Header>
      <Layout>
        <Sider className="sidebar" theme='light'>
          <Tabs defaultActiveKey="1" tabPosition="left" style={{ height: '100vh', color: 'purple' }} onChange={handleTabChange}>
            <TabPane tab={<><DashboardOutlined style={{marginLeft:'37px'}}/><span className='bento-box-menu' style={{marginLeft:'10px'}}>Dashboard</span></>} key="1" />
            <TabPane tab={<><ScheduleOutlined style={{marginLeft:'37px'}} /><span className='bento-box-menu' style={{marginLeft:'10px'}}>Tasks</span></>} key="2" />
            <TabPane tab={<><TeamOutlined  style={{marginLeft:'37px'}}/><span className='bento-box-menu' style={{marginLeft:'10px'}}>Teams</span></>} key="3" />
          </Tabs>
        </Sider>
        <Layout>
          <Content style={{ padding: '24px' }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default TaskManager;
