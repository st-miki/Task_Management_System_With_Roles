import React, { useState } from 'react';
import { Layout, Card, Row, Col, Statistic, Input, Select, DatePicker } from 'antd';
import { UserOutlined, CheckCircleOutlined, TeamOutlined, CheckSquareOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

const ManagerDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterByDate, setFilterByDate] = useState(null);

  // Example data, replace it with your actual task data
  const tasks = [
    { id:  1, assignedTo: 'Manager A', assignedDate: '2024-02-10', completed: true },
    { id:  2, assignedTo: 'Manager B', assignedDate: '2024-02-15', completed: false },
    // Add more task objects
  ];

  // Example teams, replace with your actual data
  const teams = [
    { id:  1, name: 'Team Alpha' },
    { id:  2, name: 'Team Beta' },
    // Add more team objects
  ];

  // Apply filters based on filter options
  const filteredTasks = tasks.filter(task => {
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

  // Calculate tasks accomplished
  const tasksAccomplished = searchedTasks.filter(task => task.completed).length;

  // Calculate the number of teams the manager is part of
  const numberOfTeams = teams.length;

  return (
    <div>
        <Row gutter={[16,  16]}>
          <Col span={24}>
            <Search
              placeholder="Search tasks by assigned to"
              allowClear
              onChange={e => setSearchQuery(e.target.value)}
              style={{ width: '100%', marginBottom:  16 }}
            />
          </Col>
          <Col span={8}>
            <RangePicker
              style={{ width: '100%' }}
              onChange={dates => setFilterByDate(dates)}
            />
          </Col>
        </Row>
        <Row gutter={[16,  16]}>
          <Col span={8}>
            <Card>
              <Statistic
                title="Assigned Tasks"
                value={searchedTasks.length}
                prefix={<UserOutlined />}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Teams Part Of"
                value={numberOfTeams}
                prefix={<TeamOutlined />}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Tasks Accomplished"
                value={tasksAccomplished}
                prefix={<CheckSquareOutlined />}
              />
            </Card>
          </Col>
        </Row>
        {/* Display other task components or sections */}
      </div>
  );
};

export default ManagerDashboard;
