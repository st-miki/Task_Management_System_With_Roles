import React, { useState } from 'react';
import { Layout, Card, Row, Col, Statistic, Avatar, Input, Select, DatePicker } from 'antd';
import {
  UserOutlined,
  CheckCircleOutlined,
  ScheduleOutlined,
  SolutionOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterByAssignedBy, setFilterByAssignedBy] = useState(null);
  const [filterByAssignedTo, setFilterByAssignedTo] = useState(null);
  const [filterByDate, setFilterByDate] = useState(null);

  // Example data, replace it with your actual task data
  const tasks = [
    { id: 1, assignedBy: 'Manager A', assignedTo: 'John Doe', assignedDate: '2024-02-10', completed: true },
    { id: 2, assignedBy: 'Manager B', assignedTo: 'Jane Smith', assignedDate: '2024-02-15', completed: false },
    // Add more task objects
  ];

  // Apply filters based on filter options
  const filteredTasks = tasks.filter(task => {
    if (filterByAssignedBy && task.assignedBy !== filterByAssignedBy) return false;
    if (filterByAssignedTo && task.assignedTo !== filterByAssignedTo) return false;
    if (filterByDate) {
      const assignedDate = new Date(task.assignedDate);
      const [startDate, endDate] = filterByDate;
      if (assignedDate < startDate || assignedDate > endDate) return false;
    }
    return true;
  });

  // Apply search query
  const searchedTasks = filteredTasks.filter(task =>
    task.assignedTo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Content style={{ padding: '0 50px' }}>
      <Row gutter={[16, 16]} style={{marginBottom:'12px'}}>
        <Col span={24}>
          <Search
            placeholder="Search tasks by assigned to"
            allowClear
            onChange={e => setSearchQuery(e.target.value)}
            style={{ width: '100%', marginBottom: 16 }}
            size='large'
          />
        </Col>
        <Col span={8}>
          <Select
            placeholder="Filter by assigned by"
            allowClear
            style={{ width: '100%', border: '1px dotted #5B00A5', borderRadius:'10px' }}
            onChange={value => setFilterByAssignedBy(value)}
            size='large'
          >
            {/* Generate options dynamically */}
            {Array.from(new Set(tasks.map(task => task.assignedBy))).map((assignedBy, index) => (
              <Option key={index} value={assignedBy}>{assignedBy}</Option>
            ))}
          </Select>
        </Col>
        <Col span={8}>
          <Select
            placeholder="Filter by assigned to"
            allowClear
            style={{ width: '100%', border: '1px dotted #5B00A5', borderRadius:'10px' }}
            onChange={value => setFilterByAssignedTo(value)}
            size='large'
          >
            {/* Generate options dynamically */}
            {Array.from(new Set(tasks.map(task => task.assignedTo))).map((assignedTo, index) => (
              <Option key={index} value={assignedTo}>{assignedTo}</Option>
            ))}
          </Select>
        </Col>
        <Col span={8}>
          <RangePicker
            style={{ width: '100%', border: '1px dotted #5B00A5', borderRadius:'10px' }}
            onChange={dates => setFilterByDate(dates)}
            size='large'
          />
        </Col>
      </Row >
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Tasks"
              value={tasks.length}
              prefix={<SolutionOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Completed Tasks"
              value={tasks.filter(task => task.completed).length}
              prefix={<CheckCircleOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Tasks to be Completed"
              value={tasks.filter(task => !task.completed).length}
              prefix={<ScheduleOutlined />}
            />
          </Card>
        </Col>
      </Row>
      {/* Display other task components or sections */}
    </Content>
  );
};

export default AdminDashboard;
