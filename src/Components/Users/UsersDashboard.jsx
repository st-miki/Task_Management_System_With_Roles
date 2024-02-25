import React, { useState, useEffect } from 'react';
import { Layout, Card, Row, Col, Statistic, Calendar } from 'antd';
import {
  CheckCircleOutlined,
  ScheduleOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const { Header, Content, Footer } = Layout;
const { RangePicker } = DatePicker;

const UsersDashboard = () => {
  const [tasks, setTasks] = useState([
    { id:  1, title: 'Task  1', deadline: '2024-02-10', completed: true },
    { id:  2, title: 'Task  2', deadline: '2024-02-15', completed: false },
    // Add more task objects
  ]);

  // Calculate progress and tasks left
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const tasksLeft = totalTasks - completedTasks;

  // Function to render calendar with deadlines
  const renderCalendar = () => {
    return (
      <div style={{
        width: '310px', // Set the width of the calendar
        marginTop: '10px ', // Center the calendar
        border: '1px solid rgba(204,  204,  204,  0.3)', 
        borderRadius:'10px'// Add a border with specified color and opacity
      }}>
        <Calendar
          fullscreen={false}
          value={null}
          onPanelChange={value => console.log(value)}
        />
      </div>
    );
  };
  

  return (
    <Content style={{ padding: '0  50px' }}>
      <Row gutter={[16,  16]}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Tasks Completed"
              value={completedTasks}
              prefix={<CheckCircleOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Tasks Left"
              value={tasksLeft}
              prefix={<ScheduleOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Tasks"
              value={totalTasks}
              prefix={<SolutionOutlined />}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16,  16]}>
        <Col span={24}>
          {renderCalendar()}
        </Col>
      </Row>
      {/* Display other task components or sections */}
    </Content>
  );
};

export default UsersDashboard;
